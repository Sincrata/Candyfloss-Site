import { currentAcheievements } from "/scripts/current-achievements.js";


const events = document.getElementById("current-events");

const fotm = currentAcheievements[0].fotm;
const achievements = currentAcheievements[0].achievements;

console.log(fotm);
console.log(achievements);
console.log(currentAcheievements);

function addEvent(object, fotm) {
    const row = document.createElement("div");
    row.classList = "event-row";

    const img = document.createElement("div");
    img.style.backgroundImage = `url('/images/banners/achievements/${object.banner}')`;
    img.style.backgroundPosition = object.position;
    img.classList = "event-img";

    row.appendChild(img);

    const box = document.createElement("div");
    box.classList = "eventbox";

    const badge = document.createElement("img");
    badge.classList = "event-badge";
    badge.src = `/images/badge/${object.badge}`;
    box.appendChild(badge);

    const h1 = document.createElement("h1");
    h1.classList = "e-title";
    h1.textContent = `${object.title}!`;
    box.appendChild(h1);

    const blurb = document.createElement("span");
    blurb.innerHTML = object.blurb;
    box.appendChild(blurb);
    
    box.appendChild(document.createElement("br"));
    box.appendChild(document.createElement("br"));

    const link = document.createElement("a");
    link.href = "achievements.html";
    link.classList = "event-link";
    link.textContent = `Enter the ${object.title}`;
    if (fotm == "yes") {
        link.textContent = `Create gift art for the Floss of the Month to earn coins!`;
        h1.textContent = `Floss of the Month`;
    }
    box.appendChild(link);

    box.appendChild(document.createElement("br"));

    row.appendChild(box);

    events.appendChild(row);

}

for (const [number, object] of Object.entries(achievements)) {
    addEvent(object, "no");
}

addEvent(fotm, "yes");