/* Chronicle collection filters
 * Loaded after script.js so it can extend the existing collection screen
 * without changing progress storage or entry data.
 */

const NON_MCU_MARVEL_ENTRY_IDS = new Set([
    "prydeOfTheXMen",
    "xMenAnimatedSeries",
    "xMenEvolution",
    "wolverineAndTheXMen",
    "xMen97",
    "xMen2000",
    "xMen2",
    "xMenLastStand",
    "wolverineOrigins",
    "xMenFirstClass",
    "theWolverine",
    "xMenDaysOfFuturePast",
    "deadpool1",
    "xMenApocalypse",
    "logan",
    "deadpool2",
    "onceUponADeadpool",
    "xMenDarkPhoenix",
    "newMutants",
    "legion",
    "theGifted"
]);

const STAR_WARS_CHRONOLOGY = new Map([
    ["acolyte-season-1", 100],
    ["phantomMenace", 200],
    ["attackOfTheClones", 300],
    ["cloneWarsMovie", 400],
    ["cloneWarsShow-season-1", 410],
    ["cloneWarsShow-season-2", 420],
    ["cloneWarsShow-season-3", 430],
    ["cloneWarsShow-season-4", 440],
    ["cloneWarsShow-season-5", 450],
    ["cloneWarsShow-season-6", 460],
    ["cloneWarsShow-season-7", 470],
    ["talesOfTheJedi-season-1", 480],
    ["revengeOfTheSith", 500],
    ["talesOfTheEmpire-season-1", 510],
    ["talesOfTheUnderworld-season-1", 520],
    ["badBatch-season-1", 600],
    ["badBatch-season-2", 610],
    ["badBatch-season-3", 620],
    ["maulShadowLord-season-1", 630],
    ["solo", 700],
    ["obiWanKenobi-season-1", 800],
    ["andor-season-1", 900],
    ["andor-season-2", 910],
    ["rebels-season-1", 1000],
    ["rebels-season-2", 1010],
    ["rebels-season-3", 1020],
    ["rebels-season-4", 1030],
    ["rogueOne", 1100],
    ["aNewHope", 1200],
    ["empireStrikesBack", 1300],
    ["returnOfTheJedi", 1400],
    ["mandalorian-season-1", 1500],
    ["mandalorian-season-2", 1510],
    ["bookOfBobaFett-season-1", 1520],
    ["mandalorian-season-3", 1530],
    ["ahsoka-season-1", 1540],
    ["skeletonCrew-season-1", 1550],
    ["mandalorianAndGrogu", 1560],
    ["resistance-season-1", 1600],
    ["forceAwakens", 1610],
    ["lastJedi", 1620],
    ["resistance-season-2", 1630],
    ["riseOfSkywalker", 1640]
]);

function getCollectionViewStorageKey(collection) {
    return `chronicleView-${activeProfile}-${collection.id}`;
}

function getCollectionViewSettings(collection) {
    const defaults = {
        hideCompleted: false,
        marvelScope: "all",
        starWarsOrder: "release"
    };

    try {
        const saved = JSON.parse(
            localStorage.getItem(getCollectionViewStorageKey(collection))
        );

        return saved
            ? { ...defaults, ...saved }
            : defaults;
    } catch (error) {
        console.warn("Could not read collection view settings.", error);
        return defaults;
    }
}

function saveCollectionViewSettings(collection, settings) {
    localStorage.setItem(
        getCollectionViewStorageKey(collection),
        JSON.stringify(settings)
    );
}

function getChronologyRank(displayEntry) {
    return STAR_WARS_CHRONOLOGY.get(displayEntry.id)
        ?? Number.MAX_SAFE_INTEGER;
}

function getVisibleCollectionEntries(collection, settings) {
    let entries = getDisplayEntries(collection);

    if (collection.id === "marvel" && settings.marvelScope === "mcu") {
        entries = entries.filter(function (displayEntry) {
            return !NON_MCU_MARVEL_ENTRY_IDS.has(
                displayEntry.parentEntry.id
            );
        });
    }

    if (collection.id === "starWars" && settings.starWarsOrder === "chronological") {
        entries = [...entries].sort(function (a, b) {
            const rankDifference =
                getChronologyRank(a) - getChronologyRank(b);

            if (rankDifference !== 0) {
                return rankDifference;
            }

            return String(a.releaseDate).localeCompare(
                String(b.releaseDate)
            );
        });
    }

    if (settings.hideCompleted) {
        entries = entries.filter(function (displayEntry) {
            return displayEntry.status !== Status.COMPLETED;
        });
    }

    return entries;
}

function getCollectionFilterControls(collection, settings) {
    const controls = [];

    controls.push(`
        <label class="filterToggle">
            <input
                id="hideCompletedToggle"
                type="checkbox"
                ${settings.hideCompleted ? "checked" : ""}
            >
            <span>Hide completed</span>
        </label>
    `);

    if (collection.id === "marvel") {
        controls.push(`
            <div class="filterGroup">
                <span class="filterLabel">Universe</span>
                <div class="filterSegmented" role="group" aria-label="Marvel universe filter">
                    <button
                        type="button"
                        class="filterChoice ${settings.marvelScope === "all" ? "active" : ""}"
                        data-marvel-scope="all"
                    >
                        All Marvel
                    </button>
                    <button
                        type="button"
                        class="filterChoice ${settings.marvelScope === "mcu" ? "active" : ""}"
                        data-marvel-scope="mcu"
                    >
                        MCU only
                    </button>
                </div>
            </div>
        `);
    }

    if (collection.id === "starWars") {
        controls.push(`
            <div class="filterGroup">
                <span class="filterLabel">Order</span>
                <div class="filterSegmented" role="group" aria-label="Star Wars viewing order">
                    <button
                        type="button"
                        class="filterChoice ${settings.starWarsOrder === "release" ? "active" : ""}"
                        data-star-wars-order="release"
                    >
                        Release
                    </button>
                    <button
                        type="button"
                        class="filterChoice ${settings.starWarsOrder === "chronological" ? "active" : ""}"
                        data-star-wars-order="chronological"
                    >
                        Chronological
                    </button>
                </div>
            </div>
        `);
    }

    return `
        <section class="collectionFilters" aria-label="Collection filters">
            ${controls.join("")}
        </section>
    `;
}

function attachCollectionFilterEvents(collection, category, settings) {
    const hideCompletedToggle =
        document.getElementById("hideCompletedToggle");

    hideCompletedToggle.addEventListener("change", function () {
        settings.hideCompleted = hideCompletedToggle.checked;
        saveCollectionViewSettings(collection, settings);
        showCollectionScreen(collection, category);
    });

    document
        .querySelectorAll("[data-marvel-scope]")
        .forEach(function (button) {
            button.addEventListener("click", function () {
                settings.marvelScope = button.dataset.marvelScope;
                saveCollectionViewSettings(collection, settings);
                showCollectionScreen(collection, category);
            });
        });

    document
        .querySelectorAll("[data-star-wars-order]")
        .forEach(function (button) {
            button.addEventListener("click", function () {
                settings.starWarsOrder = button.dataset.starWarsOrder;
                saveCollectionViewSettings(collection, settings);
                showCollectionScreen(collection, category);
            });
        });
}

// Replace the original collection renderer with a filter-aware version.
showCollectionScreen = function (collection, category) {
    const progress = getCollectionProgress(collection);
    const settings = getCollectionViewSettings(collection);
    const visibleEntries = getVisibleCollectionEntries(collection, settings);

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

        ${getCollectionFilterControls(collection, settings)}

        <div class="filterResultCount">
            Showing ${visibleEntries.length} of ${progress.totalEntries}
        </div>

        <div id="entryList" class="collections"></div>
    `);

    const entryList = document.getElementById("entryList");

    if (visibleEntries.length === 0) {
        entryList.innerHTML = `
            <p class="emptyMessage">
                No entries match the current filters.
            </p>
        `;
    }

    for (const displayEntry of visibleEntries) {
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

    attachCollectionFilterEvents(collection, category, settings);

    document
        .getElementById("backButton")
        .addEventListener("click", function () {
            showCategoryScreen(category);
        });
};
