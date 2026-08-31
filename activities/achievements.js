import { achievementList } from "/scripts/monthly-content/loading-methods.js";

const past_box = document.getElementById("past-ach-box");
const current_box = document.getElementById("current-achievements");
const fotm_box = document.getElementById("fotm");

const now = new Date();
const options = { timeZone: "America/Chicago" };
const currentMonth = Number(new Intl.DateTimeFormat("en-US", { ...options, month: "numeric" }).format(now));
const currentDay = Number(new Intl.DateTimeFormat("en-US", { ...options, day: "numeric" }).format(now));
const currentYear = Number(new Intl.DateTimeFormat("en-US", { ...options, year: "numeric" }).format(now));

const todayCST = new Date(currentYear, currentMonth - 1, currentDay);

function toDate(str) {
    const [m, d, y] = str.split("/").map(Number);
    return new Date(y, m - 1, d);
}

function todayIsBetween(start, end) {
    return todayCST >= start && todayCST <= end;
}



function addCurrentAchievement(achievement) {
    const container = document.createElement("div");
    container.classList = "current-info";

    if (achievement.type == "Chain") {
        container.innerHTML = `
            <div class="img-box">
                <img class="current-img" src="/assets/banners/achievements/${achievement.banner}">
            </div>
            <div class="small-card">
                <h2>${achievement.title}</h2>
                <span>${achievement.medium} ${achievement.type}</span>
                <img class="current-badge" src="/assets/badge/${achievement.badge}" style="max-width:${achievement.position};">
                <p>
                    ${achievement.text}
                </p>
                <a class="button" href="${achievement.link}">Enter</a>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="img-box">
                <img class="current-img" src="/assets/banners/achievements/${achievement.banner}">
            </div>
            <div class="small-card">
                <h2>L${achievement.title}</h2>
                <span>${achievement.medium} ${achievement.type}</span>
                <img class="current-badge" src="/assets/badge/${achievement.badge}" style="max-width:${achievement.position};">
                <p>
                    ${achievement.text}
                </p>
                <a class="button"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdvHN9u2eAO7-OU0uCR7PIsvI-jgBELtclpMKEbAE8Z3iFCaw/viewform">
                    Submit
                </a>
            </div>
        `;
    }
    current_box.appendChild(container);
}

function addFOTM(fotm) {
    const container = document.createElement("fotm-container");
    container.id = "fotm-container";

    container.innerHTML = `
        <a href="${fotm.link}">
            <img id="fotm-img" src="/assets/banners/achievements/${fotm.banner}" style="object-position: ${fotm.position};">
        </a>
    `;

    fotm_box.appendChild(container);

    const box = document.createElement("fotm-container");
    box.id = "fotmbox";

    box.innerHTML = `
        <div id="fotm-info">
            <h2>Floss of the Month</h2>
            <span>
                ${fotm.text}        
            </span>
            <a class="button"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdvHN9u2eAO7-OU0uCR7PIsvI-jgBELtclpMKEbAE8Z3iFCaw/viewform">
                Submit
            </a>
        </div>
        <div id="fotm-badge">
            <img src="/assets/badge/${fotm.badge}">
        </div>
    `;

    fotm_box.appendChild(box);
}

function addPastAchievement(achievement) {
    const container = document.createElement("div");
    container.classList = "past-ach-container";

    if (achievement.type == "Chain") {
        container.innerHTML = `
        <div class="past-ach-img"
            style="background-image:url(/assets/banners/achievements/${achievement.banner});
             background-position:${achievement.position};">
        </div>
        <div class="past-ach-entry">
            <h2>${achievement.title}</h2>
            <p>
                <i>${achievement.medium} ${achievement.type}</i>
                <br>
                ${achievement.text}
                <br><br>
                <a class="button" href="${achievement.link}">Enter</a>
            </p>
        </div>
        <div class="past-ach-badge" style="background-image:url(/assets/badge/${achievement.badge});">
        </div>
        `;
    } else {
        container.innerHTML = `
        <div class="past-ach-img"
            style="background-image:url(/assets/banners/achievements/${achievement.banner});
             background-position:${achievement.position};">
        </div>
        <div class="past-ach-entry">
            <h2>${achievement.title}</h2>
            <p>
                <i>${achievement.medium} ${achievement.type}</i>
                <br>
                ${achievement.text}
                <br><br>
                <a class="button"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdvHN9u2eAO7-OU0uCR7PIsvI-jgBELtclpMKEbAE8Z3iFCaw/viewform">
                    Submit
                </a>
            </p>
        </div>
        <div class="past-ach-badge" style="background-image:url(/assets/badge/${achievement.badge});">
        </div>
        `;
    }

    past_box.appendChild(container);
    past_box.appendChild(document.createElement("br"));
    past_box.appendChild(document.createElement("br"));
}

async function initialize() {
    const results = await achievementList();
    const achievements = results["achievements"];
    const fotm = results["fotm"];

    const past_achievements = [...achievements["past"], ...achievements["current"]];
    const current_achievements = [...achievements["current"], ...achievements["future"]];
    const current_fotm = [...fotm["current"], ...fotm["future"]];

    for (let i = 0; i < current_achievements.length; i++) {
        const achievement = current_achievements[i];
        //check to see that it is a currently active prompt and add it if it is
        if (todayIsBetween(toDate(achievement.start), toDate(achievement.end))) {
            addCurrentAchievement(achievement);
        }
    }

    for (let i = 0; i < current_fotm.length; i++) {
        const floss = current_fotm[i];
        //check to see that it is a currently active fotm and add it if it is
        if (todayIsBetween(toDate(floss.start), toDate(floss.end))) {
            addFOTM(floss);
            break;
        }
    }

    for (let i = 0; i < past_achievements.length; i++) {
        const achievement = past_achievements[i];
        //check to see that it is not a currently active prompt and add it if not
        if (!todayIsBetween(toDate(achievement.start), toDate(achievement.end))) {
            addPastAchievement(achievement);
        }
    }
}

initialize();