const CHRONICLE_APP_VERSION = "1.2.0";

function decoratePageHeader() {
    const backButton = document.getElementById("backButton");
    const pageTitle = backButton?.parentElement?.querySelector(":scope > h2");

    if (!backButton || !pageTitle || backButton.closest(".stickyPageHeader")) {
        return;
    }

    const stickyHeader = document.createElement("div");
    stickyHeader.className = "stickyPageHeader";

    backButton.parentElement.insertBefore(stickyHeader, backButton);
    stickyHeader.appendChild(backButton);
    stickyHeader.appendChild(pageTitle);
}

function getChronicleSaveData() {
    const saveData = {
        format: "chronicle-save",
        version: 1,
        exportedAt: new Date().toISOString(),
        storage: {}
    };

    const allowedPrefixes = [
        "watchTrackProgress",
        "watchTrackActiveProfile",
        "chronicleView-"
    ];

    for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);

        if (allowedPrefixes.some(function (prefix) {
            return key === prefix || key.startsWith(prefix);
        })) {
            saveData.storage[key] = localStorage.getItem(key);
        }
    }

    return saveData;
}

async function exportChronicleSave() {
    const saveData = getChronicleSaveData();
    const json = JSON.stringify(saveData, null, 2);
    const file = new File(
        [json],
        `chronicle-save-${new Date().toISOString().slice(0, 10)}.json`,
        { type: "application/json" }
    );

    const status = document.getElementById("saveSyncStatus");

    try {
        if (navigator.share && navigator.canShare?.({ files: [file] })) {
            await navigator.share({
                title: "Chronicle Save",
                text: "Chronicle progress backup",
                files: [file]
            });
        } else {
            const url = URL.createObjectURL(file);
            const link = document.createElement("a");
            link.href = url;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
        }

        if (status) {
            status.textContent = "Save exported successfully.";
        }
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error("Could not export Chronicle save.", error);

            if (status) {
                status.textContent = "Export failed. Please try again.";
            }
        }
    }
}

function importChronicleSave(file) {
    const reader = new FileReader();
    const status = document.getElementById("saveSyncStatus");

    reader.addEventListener("load", function () {
        try {
            const saveData = JSON.parse(reader.result);

            if (
                saveData?.format !== "chronicle-save" ||
                !saveData.storage ||
                typeof saveData.storage !== "object"
            ) {
                throw new Error("This is not a valid Chronicle save file.");
            }

            const approved = window.confirm(
                "Import this save? It will replace progress stored in this version of Chronicle."
            );

            if (!approved) {
                return;
            }

            for (const [key, value] of Object.entries(saveData.storage)) {
                if (
                    key.startsWith("watchTrackProgress") ||
                    key === "watchTrackActiveProfile" ||
                    key.startsWith("chronicleView-")
                ) {
                    localStorage.setItem(key, value);
                }
            }

            if (status) {
                status.textContent = "Save imported. Reloading Chronicle…";
            }

            window.setTimeout(function () {
                window.location.reload();
            }, 500);
        } catch (error) {
            console.error("Could not import Chronicle save.", error);

            if (status) {
                status.textContent = error.message || "Import failed.";
            }
        }
    });

    reader.readAsText(file);
}

function addSaveSyncPanel() {
    if (
        document.getElementById("saveSyncPanel") ||
        !document.getElementById("brettProfileButton")
    ) {
        return;
    }

    const app = document.getElementById("app");
    const panel = document.createElement("section");
    panel.id = "saveSyncPanel";
    panel.className = "saveSyncPanel";
    panel.innerHTML = `
        <h3>Save Sync</h3>
        <p>
            Move every profile's progress between the Home Screen app,
            Safari, and other devices without changing your collection data.
        </p>
        <div class="saveSyncActions">
            <button id="exportSaveButton" type="button">Export save</button>
            <button id="importSaveButton" type="button">Import save</button>
        </div>
        <div id="saveSyncStatus" class="saveSyncStatus" aria-live="polite"></div>
        <input id="importSaveInput" type="file" accept="application/json,.json" hidden>
    `;

    app.appendChild(panel);

    document
        .getElementById("exportSaveButton")
        .addEventListener("click", exportChronicleSave);

    document
        .getElementById("importSaveButton")
        .addEventListener("click", function () {
            document.getElementById("importSaveInput").click();
        });

    document
        .getElementById("importSaveInput")
        .addEventListener("change", function (event) {
            const file = event.target.files?.[0];

            if (file) {
                importChronicleSave(file);
            }

            event.target.value = "";
        });
}

function showUpdateBanner(remoteVersion) {
    if (document.getElementById("appUpdateBanner")) {
        return;
    }

    const banner = document.createElement("div");
    banner.id = "appUpdateBanner";
    banner.className = "appUpdateBanner";
    banner.innerHTML = `
        <span>Chronicle ${remoteVersion} is ready.</span>
        <button type="button">Update now</button>
    `;

    banner.querySelector("button").addEventListener("click", function () {
        const url = new URL(window.location.href);
        url.searchParams.set("appVersion", remoteVersion);
        url.searchParams.set("refresh", Date.now());
        window.location.replace(url.toString());
    });

    document.body.appendChild(banner);
}

async function checkForChronicleUpdate() {
    try {
        const response = await fetch(`version.json?check=${Date.now()}`, {
            cache: "no-store"
        });

        if (!response.ok) {
            return;
        }

        const remote = await response.json();

        if (remote.version && remote.version !== CHRONICLE_APP_VERSION) {
            showUpdateBanner(remote.version);
        }
    } catch (error) {
        console.debug("Chronicle update check skipped.", error);
    }
}

const appObserver = new MutationObserver(function () {
    decoratePageHeader();
    addSaveSyncPanel();
});

appObserver.observe(document.getElementById("app"), {
    childList: true,
    subtree: true
});

decoratePageHeader();
addSaveSyncPanel();
checkForChronicleUpdate();

window.addEventListener("focus", checkForChronicleUpdate);
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        checkForChronicleUpdate();
    }
});
