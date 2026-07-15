
let activeProfile = localStorage.getItem("watchTrackActiveProfile") || profiles.BRETT;

let collectionScrollPosition = 0;

const app = document.getElementById("app");

function getInProgressEntries() {
    const results = [];

    for (const collection of collections) {
        if (!isCollectionVisible(collection)) {
            continue;
        }
        const displayEntries = getDisplayEntries(collection);

        for (const displayEntry of displayEntries) {
            if (displayEntry.status === Status.IN_PROGRESS) {
                results.push({
                    collection: collection,
                    displayEntry: displayEntry
                });
            }
        }
    }

    return results;
}

function getSuggestedCollections() {
    const categories = ["watch", "read", "play"];
    const suggestions = [];

    for (const category of categories) {
        const bestMatch = collections
            .filter(function (collection) {
                return (
                    collection.category === category &&
                    isCollectionVisible(collection)
                );
            })
            .map(function (collection) {
                return {
                    collection: collection,
                    progress: getCollectionProgress(collection)
                };
            })
            .filter(function (item) {
                return (
                    item.progress.totalEntries > 0 &&
                    item.progress.percentage < 100
                );
            })
            .sort(function (a, b) {
                const progressDifference =
                    b.progress.percentage -
                    a.progress.percentage;

                if (progressDifference !== 0) {
                    return progressDifference;
                }

                return a.collection.title.localeCompare(
                    b.collection.title
                );
            })[0];

        if (bestMatch) {
            suggestions.push(bestMatch);
        }
    }

    return suggestions;
}

function showHomeScreen() {
    const inProgressEntries = getInProgressEntries();
    const suggestedCollections = getSuggestedCollections();

    setAppContent(`

        <div class="profileSwitcher">
            <button
                id="brettProfileButton"
                class="profileButton ${
                    activeProfile === profiles.BRETT
                        ? "active"
                        : ""
                }"
            >
                Brett
            </button>

            <button
                id="rileyProfileButton"
                class="profileButton ${
                    activeProfile === profiles.RILEY
                        ? "active"
                        : ""
                }"
            >
                Riley
            </button>

            <button
                id="colbieProfileButton"
                class="profileButton ${
                    activeProfile === profiles.COLBIE
                        ? "active"
                        : ""
                }"
            >
                Colbie
            </button>
        </div>

        <h2>Choose a Category</h2>

        <div class="categoryButtons">
            <button id="watchButton" class="categoryButton">
                <span class="categoryIcon watchIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                    </svg>
                </span>

                <span class="categoryLabel">Watch</span>

                <span class="categoryArrow" aria-hidden="true">›</span>
            </button>

            <button id="readButton" class="categoryButton">
                <span class="categoryIcon readIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path>
                        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5z"></path>
                    </svg>
                </span>

                <span class="categoryLabel">Read</span>

                <span class="categoryArrow" aria-hidden="true">›</span>
            </button>

            <button id="playButton" class="categoryButton">
                <span class="categoryIcon playIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M8.5 8h7a4.5 4.5 0 0 1 4.3 3.2l1.2 4A2.7 2.7 0 0 1 16.4 18l-1.7-2h-5.4l-1.7 2A2.7 2.7 0 0 1 3 15.2l1.2-4A4.5 4.5 0 0 1 8.5 8z"></path>
                        <path d="M7 11v4M5 13h4"></path>
                        <circle cx="16.5" cy="12" r="1"></circle>
                        <circle cx="18.5" cy="14" r="1"></circle>
                    </svg>
                </span>

                <span class="categoryLabel">Play</span>

                <span class="categoryArrow" aria-hidden="true">›</span>
            </button>
        </div>

        <h2>Closest to Completion</h2>

        <div id="suggestedList" class="collections"></div>
        
        <h2>Continue</h2>

        <div id="continueList" class="collections"></div>       
    `);

    document
        .getElementById("brettProfileButton")
        .addEventListener("click", function () {
            switchProfile(profiles.BRETT);
        });

    document
        .getElementById("rileyProfileButton")
        .addEventListener("click", function () {
            switchProfile(profiles.RILEY);
        });
    
    document
    .getElementById("colbieProfileButton")
    .addEventListener("click", function () {
        switchProfile(profiles.COLBIE);
    });

    const continueList =
        document.getElementById("continueList");

    if (inProgressEntries.length === 0) {
        continueList.innerHTML = `
            <p class="emptyMessage">
                Nothing currently in progress.
            </p>
        `;
    } else {
        for (const item of inProgressEntries) {
            const button = document.createElement("button");
            const displayEntry = item.displayEntry;
            const collection = item.collection;

            button.classList.add(
                "entryButton",
                "inProgress"
            );

            button.innerHTML = `
                <div class="continueCardHeader">
                    <div>
                        <strong>${displayEntry.title}</strong>

                        <div class="continueMeta">
                            <span class="typeBadge ${getTypeClass(displayEntry.type)}">
                                ${getTypeLabel(displayEntry.type)}
                            </span>

                            <span class="continueCollection">
                                ${collection.title}
                            </span>
                        </div>
                    </div>

                    <span class="continueArrow" aria-hidden="true">›</span>
                </div>
            `;

            button.addEventListener("click", function () {
                collectionScrollPosition = 0;

                showEntryScreen(
                    displayEntry.parentEntry,
                    collection,
                    collection.category,
                    displayEntry.season
                );
            });

            continueList.appendChild(button);
        }
    }

    const suggestedList =
        document.getElementById("suggestedList");

    for (const item of suggestedCollections) {
        const collection = item.collection;
        const progress = item.progress;

        const button = document.createElement("button");

        button.classList.add("collectionButton");

        button.innerHTML = `
            <div class="collectionButtonHeader">
                <div class="collectionTitleWithIcon">
                    ${getCategoryIcon(collection.category)}
                    <span>${collection.title}</span>
                </div>

                <span>${progress.percentage}%</span>
            </div>

            <div class="progress">
                <div
                    class="progressFill"
                    style="width: ${progress.percentage}%"
                ></div>
            </div>

            <div class="collectionProgressText">
                ${progress.completedEntries}
                /
                ${progress.totalEntries}
                completed
            </div>
        `;

        button.addEventListener("click", function () {
            collectionScrollPosition = 0;

            showCollectionScreen(
                collection,
                collection.category
            );
        });

        suggestedList.appendChild(button);
    }

    document
        .getElementById("watchButton")
        .addEventListener("click", function () {
            showCategoryScreen("watch");
        });

    document
        .getElementById("readButton")
        .addEventListener("click", function () {
            showCategoryScreen("read");
        });

    document
        .getElementById("playButton")
        .addEventListener("click", function () {
            showCategoryScreen("play");
        });
}


function showCategoryScreen(category) {
    const categoryTitle =
        category.charAt(0).toUpperCase() + category.slice(1);

    setAppContent(`
        <button id="backButton">← Back</button>

        <h2>${categoryTitle}</h2>

        <div id="collectionList" class="collections"></div>
    `);

    const collectionList = document.getElementById("collectionList");

    const matchingCollections = collections
        .filter(function (collection) {
            return (
                collection.category === category &&
                isCollectionVisible(collection)
            );
        })

        .sort(function (a, b) {

            const progressA = getCollectionProgress(a);
            const progressB = getCollectionProgress(b);

            const completeA = progressA.percentage === 100;
            const completeB = progressB.percentage === 100;

            // Completed collections always go to the bottom.
            if (completeA && !completeB) return 1;
            if (!completeA && completeB) return -1;

            // Otherwise sort highest completion first.
            const diff = progressB.percentage - progressA.percentage;

            if (diff !== 0) {
                return diff;
            }

            // Same percentage? Sort alphabetically.
            return a.title.localeCompare(b.title);
        });

    for (const collection of matchingCollections) {
        const collectionButton = document.createElement("button");
        collectionButton.classList.add("collectionButton");

        const progress = getCollectionProgress(collection);

        collectionButton.innerHTML = `
            <div class="collectionButtonHeader">
                <span>${collection.title}</span>
                <span>${progress.percentage}%</span>
            </div>

            <div class="progress">
                <div
                    class="progressFill"
                    style="width: ${progress.percentage}%"
                ></div>
            </div>

            <div class="collectionProgressText">
                ${progress.completedEntries} / ${progress.totalEntries} completed
            </div>
        `;        collectionButton.id = collection.id + "Button";

        collectionButton.addEventListener("click", function () {
            collectionScrollPosition = 0;
            showCollectionScreen(collection, category);
        });

        collectionList.appendChild(collectionButton);
    }

    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function () {
        showHomeScreen();
    });
}


function getCollectionProgress(collection) {
    const displayEntries = getDisplayEntries(collection);
    const totalEntries = displayEntries.length;

    const completedEntries = displayEntries.filter(function (displayEntry) {
        return displayEntry.status === Status.COMPLETED;
    }).length;

    const percentage =
        totalEntries === 0
            ? 0
            : Math.round((completedEntries / totalEntries) * 100);

    return {
        completedEntries,
        totalEntries,
        percentage
    };
}

function getDisplayEntries(collection) {
    const displayEntries = [];

    for (const entry of collection.entries) {
        if (entry.type === EntryType.SHOW && entry.seasons) {
            for (const season of entry.seasons) {
                const seasonNumber =
                    season.season ?? season.seasonNumber;

                displayEntries.push({
                    id: `${entry.id}-season-${seasonNumber}`,
                    title: `${entry.title} — Season ${seasonNumber}`,
                    type: EntryType.SHOW,
                    releaseDate: season.releaseDate,
                    status: season.status ?? Status.NOT_STARTED,
                    parentEntry: entry,
                    season: season
                });
            }
        } else {
            displayEntries.push({
                ...entry,
                parentEntry: entry,
                season: null
            });
        }
    }

    return displayEntries.sort(function (a, b) {
        return String(a.releaseDate).localeCompare(
            String(b.releaseDate)
        );
    });
}

function showCollectionScreen(collection, category) {
    const progress = getCollectionProgress(collection);
    
    setAppContent(`
        <button id="backButton">← Back</button>

        <h2>${collection.title}</h2>

        <div class="progressSummary">
            <span>
                ${progress.completedEntries} / ${progress.totalEntries} completed
            </span>

            <span>
                ${progress.percentage}%
            </span>
        </div>

        <div class="progress">
            <div
                class="progressFill"
                style="width: ${progress.percentage}%"
            ></div>
        </div>

        <div id="entryList" class="collections"></div>
    `);

    const entryList = document.getElementById("entryList");

    const displayEntries = getDisplayEntries(collection);

    for (const displayEntry of displayEntries) {
        const entryButton = document.createElement("button");

        entryButton.textContent = displayEntry.title;

        entryButton.classList.add("entryButton");

        switch (displayEntry.status) {
            case Status.NOT_STARTED:
                entryButton.classList.add("notStarted");
                break;

            case Status.IN_PROGRESS:
                entryButton.classList.add("inProgress");
                break;

            case Status.COMPLETED:
                entryButton.classList.add("completed");
                break;

            case Status.SKIPPED:
                entryButton.classList.add("skipped");
                break;
        }

        entryButton.addEventListener("click", function () {
            collectionScrollPosition = window.scrollY;

            showEntryScreen(
                displayEntry.parentEntry,
                collection,
                category,
                displayEntry.season
            );
        });

        entryList.appendChild(entryButton);
    }

    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function () {
        showCategoryScreen(category);
    });
}

function showEntryScreen(entry, collection, category, season = null) {
    const statusTarget = season || entry;

    const currentStatus =
        statusTarget.status ?? Status.NOT_STARTED;

    const seasonNumber = season
        ? season.season ?? season.seasonNumber
        : null;

    const displayTitle = season
        ? `${entry.title} — Season ${seasonNumber}`
        : entry.title;

    const releaseDate = season
        ? season.releaseDate
        : entry.releaseDate;

    const releaseYear = releaseDate
        ? String(releaseDate).slice(0, 4)
        : "Unknown";

    const episodeCount = season
        ? season.episodeCount
        : entry.episodeCount;

    const episodesWatched =
        statusTarget.episodesWatched ?? 0;

    setAppContent(`
        <button id="backButton">← Back</button>

        <div class="entryDetails">
            <p class="entryType">${entry.type}</p>

            <h2>${displayTitle}</h2>

            <div class="entryMeta">
                <span>${releaseYear}</span>

                ${entry.platform
                    ? `<span>${entry.platform}</span>`
                    : ""
                }

                ${episodeCount !== undefined
                    ? `<span>${episodeCount} episodes</span>`
                    : ""
                }
            </div>
            
            ${
                episodeCount !== undefined
                    ? `
                        <div class="episodeTracker">
                            <h3>Episodes Watched</h3>

                            <div class="episodeControls">
                                <button id="decreaseEpisodes">−</button>

                                <span>
                                    ${episodesWatched} / ${episodeCount}
                                </span>

                                <button id="increaseEpisodes">+</button>
                            </div>
                        </div>
                    `
                    : ""
            }

            <h3>Status</h3>

            <div class="statusOptions">
                <button
                    class="statusButton ${
                        currentStatus === Status.NOT_STARTED
                            ? "selected"
                            : ""
                    }"
                    data-status="${Status.NOT_STARTED}"
                >
                    Not Started
                </button>

                <button
                    class="statusButton ${
                        currentStatus === Status.IN_PROGRESS
                            ? "selected"
                            : ""
                    }"
                    data-status="${Status.IN_PROGRESS}"
                >
                    In Progress
                </button>

                <button
                    class="statusButton ${
                        currentStatus === Status.COMPLETED
                            ? "selected"
                            : ""
                    }"
                    data-status="${Status.COMPLETED}"
                >
                    Completed
                </button>

                <button
                    class="statusButton ${
                        currentStatus === Status.SKIPPED
                            ? "selected"
                            : ""
                    }"
                    data-status="${Status.SKIPPED}"
                >
                    Skipped
                </button>
            </div>
        </div>
    `);

    const statusButtons =
        document.querySelectorAll(".statusButton");

    for (const statusButton of statusButtons) {
        statusButton.addEventListener("click", function () {
            statusTarget.status =
                statusButton.dataset.status;
            
                updateEpisodeProgress(
                    statusTarget,
                    episodeCount
                );

            saveProgress();

            showEntryScreen(
                entry,
                collection,
                category,
                season
            );
        });
    }

    if (episodeCount !== undefined) {
        const decreaseButton =
            document.getElementById("decreaseEpisodes");

        const increaseButton =
            document.getElementById("increaseEpisodes");

        decreaseButton.addEventListener("click", function () {
            statusTarget.episodesWatched = Math.max(
                0,
                (statusTarget.episodesWatched ?? 0) - 1
            );

            updateEpisodeStatus(
                statusTarget,
                episodeCount
            );

            saveProgress();

            showEntryScreen(
                entry,
                collection,
                category,
                season
            );
        });

        increaseButton.addEventListener("click", function () {
            statusTarget.episodesWatched = Math.min(
                episodeCount,
                (statusTarget.episodesWatched ?? 0) + 1
            );

            updateEpisodeStatus(
                statusTarget,
                episodeCount
            );

            saveProgress();

            showEntryScreen(
                entry,
                collection,
                category,
                season
            );
        });
    }

    const backButton =
        document.getElementById("backButton");

    backButton.addEventListener("click", function () {
        showCollectionScreen(collection, category);

        requestAnimationFrame(function () {
            window.scrollTo(
                0,
                collectionScrollPosition
            );
        });
    });
}

function setAppContent(html) {
    app.innerHTML = html;
}

function updateEpisodeStatus(target, episodeCount) {
    const watched = target.episodesWatched ?? 0;

    if (watched <= 0) {
        target.episodesWatched = 0;
        target.status = Status.NOT_STARTED;
    } else if (watched >= episodeCount) {
        target.episodesWatched = episodeCount;
        target.status = Status.COMPLETED;
    } else {
        target.status = Status.IN_PROGRESS;
    }
}
function updateEpisodeProgress(target, episodeCount) {

    if (episodeCount === undefined) {
        return;
    }

    switch (target.status) {

        case Status.NOT_STARTED:
            target.episodesWatched = 0;
            break;

        case Status.COMPLETED:
            target.episodesWatched = episodeCount;
            break;
    }
}

function getTypeClass(type) {
    switch (type) {
        case EntryType.MOVIE:
            return "movie";

        case EntryType.SHOW:
            return "tv";

        case EntryType.BOOK:
            return "book";

        case EntryType.GAME:
            return "game";

        case EntryType.SHORT:
            return "short";

        default:
            return "";
    }
}

function getTypeLabel(type) {
    switch (type) {
        case EntryType.MOVIE:
            return "Movie";

        case EntryType.SHOW:
            return "TV";

        case EntryType.BOOK:
            return "Book";

        case EntryType.GAME:
            return "Game";

        case EntryType.SHORT:
            return "Short";
    }
}

function getCategoryIcon(category) {
    switch (category) {
        case "watch":
            return `
                <span class="smallCategoryIcon watchIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"></path>
                    </svg>
                </span>
            `;

        case "read":
            return `
                <span class="smallCategoryIcon readIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path>
                        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5z"></path>
                    </svg>
                </span>
            `;

        case "play":
            return `
                <span class="smallCategoryIcon playIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M8.5 8h7a4.5 4.5 0 0 1 4.3 3.2l1.2 4A2.7 2.7 0 0 1 16.4 18l-1.7-2h-5.4l-1.7 2A2.7 2.7 0 0 1 3 15.2l1.2-4A4.5 4.5 0 0 1 8.5 8z"></path>
                        <path d="M7 11v4M5 13h4"></path>
                        <circle cx="16.5" cy="12" r="1"></circle>
                        <circle cx="18.5" cy="14" r="1"></circle>
                    </svg>
                </span>
            `;

        default:
            return "";
    }
}

function getProgressStorageKey() {
    return `watchTrackProgress-${activeProfile}`;
}

function switchProfile(profile) {
    if (profile === activeProfile) {
        return;
    }

    activeProfile = profile;

    localStorage.setItem(
        "watchTrackActiveProfile",
        activeProfile
    );

    collections = structuredClone(defaultCollections);

    loadProgress();

    collectionScrollPosition = 0;

    showHomeScreen();
}

function isCollectionVisible(collection) {
    if (!collection.profiles) {
        return true;
    }

    return collection.profiles.includes(activeProfile);
}

function saveProgress() {
    const progressData = {};

    for (const collection of collections) {
        progressData[collection.id] = {};

        for (const entry of collection.entries) {
            progressData[collection.id][entry.id] = {
                status: entry.status,
                episodesWatched: entry.episodesWatched
            };

            if (entry.seasons) {
                progressData[collection.id][entry.id].seasons =
                    entry.seasons.map(function (season) {
                        return {
                            season:
                                season.season ?? season.seasonNumber,
                            status:
                                season.status ?? Status.NOT_STARTED,
                            episodesWatched:
                                season.episodesWatched
                        };
                    });
            }
        }
    }

    localStorage.setItem(
        getProgressStorageKey(),
        JSON.stringify(progressData)
    );
}

function loadProgress() {
    const savedData = localStorage.getItem(getProgressStorageKey());

    if (!savedData) {
        return;
    }

    const progressData = JSON.parse(savedData);

    for (const collection of collections) {
        const savedCollection = progressData[collection.id];

        if (!savedCollection) {
            continue;
        }

        for (const entry of collection.entries) {
            const savedEntry = savedCollection[entry.id];

            if (!savedEntry) {
                continue;
            }

            if (savedEntry.status !== undefined) {
                entry.status = savedEntry.status;
            }

            if (savedEntry.episodesWatched !== undefined) {
                entry.episodesWatched = savedEntry.episodesWatched;
            }

            if (entry.seasons && savedEntry.seasons) {
                for (const season of entry.seasons) {
                    const seasonNumber =
                        season.season ?? season.seasonNumber;

                    const savedSeason =
                        savedEntry.seasons.find(function (item) {
                            return item.season === seasonNumber;
                        });

                    if (!savedSeason) {
                        continue;
                    }

                    if (savedSeason.episodesWatched !== undefined) {
                        season.episodesWatched =
                            savedSeason.episodesWatched;
                    }

                    if (savedSeason.status !== undefined) {
                        season.status = savedSeason.status;
                    }
                }
            }
        }
    }
}

const oldProgress =
    localStorage.getItem("watchTrackProgress");

const brettProgress =
    localStorage.getItem("watchTrackProgress-brett");

if (oldProgress && !brettProgress) {
    localStorage.setItem(
        "watchTrackProgress-brett",
        oldProgress
    );
}

loadProgress();
showHomeScreen();

if ("serviceWorker" in navigator) {
    window.addEventListener("load", async function () {
        const registrations =
            await navigator.serviceWorker.getRegistrations();

        for (const registration of registrations) {
            await registration.unregister();
        }

        const cacheNames = await caches.keys();

        await Promise.all(
            cacheNames.map(function (cacheName) {
                return caches.delete(cacheName);
            })
        );

        console.log(
            "Old service worker and app caches removed."
        );
    });
}
