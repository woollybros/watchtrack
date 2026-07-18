const CHRONICLE_THEMES = {
    chronicle: {
        label: "Chronicle",
        stylesheet: "style.css?v=1.3.1",
        usePolish: true,
        themeColor: "#0d0f14"
    },
    chaos: {
        label: "Chaos Arcade",
        stylesheet: "style2.css?v=1.3.1",
        usePolish: false,
        themeColor: "#fff7cf"
    },
    astral: {
        label: "Astral Archive",
        stylesheet: "style3.css?v=1.3.1",
        usePolish: false,
        themeColor: "#070812"
    }
};

const THEME_STORAGE_KEY = "chronicleTheme";

function getSavedChronicleTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return CHRONICLE_THEMES[savedTheme] ? savedTheme : "chronicle";
}

function applyChronicleTheme(themeName, save = true) {
    const resolvedName = CHRONICLE_THEMES[themeName] ? themeName : "chronicle";
    const theme = CHRONICLE_THEMES[resolvedName];
    const themeStylesheet = document.getElementById("themeStylesheet");
    const polishStylesheet = document.getElementById("polishStylesheet");
    const themeColor = document.querySelector('meta[name="theme-color"]');

    if (!themeStylesheet || !polishStylesheet) {
        console.error("Chronicle theme stylesheets were not found.");
        return;
    }

    themeStylesheet.href = theme.stylesheet;
    polishStylesheet.disabled = !theme.usePolish;
    document.documentElement.dataset.theme = resolvedName;

    if (themeColor) {
        themeColor.content = theme.themeColor;
    }

    document.querySelectorAll("[data-theme-choice]").forEach(function (button) {
        const isActive = button.dataset.themeChoice === resolvedName;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    const currentThemeLabel = document.getElementById("currentThemeLabel");
    if (currentThemeLabel) {
        currentThemeLabel.textContent = theme.label;
    }

    if (save) {
        localStorage.setItem(THEME_STORAGE_KEY, resolvedName);
    }
}

function buildThemeSwitcher() {
    if (document.getElementById("themeSwitcher")) {
        return;
    }

    const switcher = document.createElement("aside");
    switcher.id = "themeSwitcher";
    switcher.className = "themeSwitcher";
    switcher.setAttribute("aria-label", "Choose Chronicle theme");

    switcher.innerHTML = `
        <button type="button" class="themeSwitcherToggle" aria-expanded="false" aria-controls="themeSwitcherPanel">
            <span class="themeSwitcherIcon" aria-hidden="true">🎨</span>
            <span>Theme</span>
        </button>

        <div id="themeSwitcherPanel" class="themeSwitcherPanel" hidden>
            <div class="themeSwitcherHeading">Choose your Chronicle</div>
            <div class="themeSwitcherCurrent">Current: <strong id="currentThemeLabel"></strong></div>

            ${Object.entries(CHRONICLE_THEMES).map(function ([key, theme]) {
                const description = key === "chronicle"
                    ? "Refined and cinematic"
                    : key === "chaos"
                        ? "Comic-book mayhem"
                        : "Cosmic glass and starlight";

                return `
                    <button type="button" class="themeChoiceButton" data-theme-choice="${key}" aria-pressed="false">
                        <span class="themePreview themePreview-${key}" aria-hidden="true"></span>
                        <span>
                            <strong>${theme.label}</strong>
                            <small>${description}</small>
                        </span>
                    </button>
                `;
            }).join("")}
        </div>
    `;

    document.body.appendChild(switcher);

    const toggle = switcher.querySelector(".themeSwitcherToggle");
    const panel = switcher.querySelector(".themeSwitcherPanel");

    toggle.addEventListener("click", function (event) {
        event.stopPropagation();
        const shouldOpen = panel.hidden;
        panel.hidden = !shouldOpen;
        toggle.setAttribute("aria-expanded", String(shouldOpen));
    });

    switcher.querySelectorAll("[data-theme-choice]").forEach(function (button) {
        button.addEventListener("click", function () {
            applyChronicleTheme(button.dataset.themeChoice);
            panel.hidden = true;
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", function (event) {
        if (!switcher.contains(event.target)) {
            panel.hidden = true;
            toggle.setAttribute("aria-expanded", "false");
        }
    });

    applyChronicleTheme(getSavedChronicleTheme(), false);
}

function initializeChronicleThemes() {
    applyChronicleTheme(getSavedChronicleTheme(), false);
    buildThemeSwitcher();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeChronicleThemes, { once: true });
} else {
    initializeChronicleThemes();
}