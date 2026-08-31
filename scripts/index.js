import { communityArt } from "/scripts/CommunityArt.js";
import { topFive } from "/scripts/monthly-content/top-5-floss.js";
import { petList } from "/scripts/monthly-content/loading-methods.js";
import { loadClanList } from "/scripts/monthly-content/loading-methods.js";
import { clanInfo } from "/scripts/monthly-content/loading-methods.js";
import { achievementList } from "/scripts/monthly-content/loading-methods.js";

//constants--------------------------------------------------------------------------
const now = new Date();
const options = { timeZone: "America/Chicago" };
var month = new Intl.DateTimeFormat("en-US", { ...options, month: "numeric" }).format(now);
var currentMonth = Number(new Intl.DateTimeFormat("en-US", { ...options, month: "numeric" }).format(now));
var currentDay = Number(new Intl.DateTimeFormat("en-US", { ...options, day: "numeric" }).format(now));
var currentYear = Number(new Intl.DateTimeFormat("en-US", { ...options, year: "numeric" }).format(now));
const even = currentYear % 2 == 0 ? "even" : "odd";
const even_opposite = currentYear % 2 == 0 ? "odd" : "even";
const todayCST = new Date(currentYear, currentMonth - 1, currentDay);


//achievements--------------------------------------------------------------------------
const events = document.getElementById("current-events");


var event_list; //variable to hold the achievement list

function toDate(str) {
    const [m, d, yRaw] = str.split("/");

    const month = Number(m);
    const day = Number(d);

    let year = Number(yRaw);

    // Convert 2‑digit years → 20xx
    if (yRaw.length === 2) {
        year = 2000 + year;
    }

    return new Date(year, month - 1, day);
}

function todayIsBetween(start, end) {
    return todayCST >= start && todayCST <= end;
}


//get the current FOTM, checks 'current' and 'future' and returns the one that today falls under
async function getFOTM() {
    if (!event_list) {
        event_list = await achievementList();
    }
    const current_fotm = [...event_list.fotm["current"], ...event_list.fotm["future"]];

    for (let i = 0; i < current_fotm.length; i++) {
        const floss = current_fotm[i];
        //check to see that it is a currently active fotm and add it if it is
        if (todayIsBetween(toDate(floss.start), toDate(floss.end))) {
            return floss;
        }
    }
}

//get the current achievements, checks 'current' and 'future' and returns the ones that today falls under
async function getAchievements() {
    var current = [];
    if (!event_list) {
        event_list = await achievementList();
    }
    const current_achievements = [...event_list.achievements["current"], ...event_list.achievements["future"]];

    for (let i = 0; i < current_achievements.length; i++) {
        const achievement = current_achievements[i];
        //check to see that it is a currently active prompt and add it if it is
        if (todayIsBetween(toDate(achievement.start), toDate(achievement.end))) {
            current.push(achievement);
        }
    }
    return current;
}

function addEvent(object, fotm) {
    const row = document.createElement("div");
    row.classList = "event-row";

    const img = document.createElement("div");
    img.style.backgroundImage = `url('/assets/banners/achievements/${object.banner}')`;
    img.style.backgroundPosition = object.position;
    img.classList = "event-img";

    row.appendChild(img);

    const box = document.createElement("div");
    box.classList = "eventbox";

    const badge = document.createElement("img");
    badge.classList = "event-badge";
    badge.src = `/assets/badge/${object.badge}`;
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
    link.href = "activities/achievements.html";
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


async function initializeEvents() {
    const achievements = await getAchievements();
    for (let i = 0; i < achievements.length; i++) {
        addEvent(achievements[i], "no");
    }
    const fotm = await getFOTM();
    addEvent(fotm, "yes");
}

initializeEvents();

//petpet-and-featured-clan--------------------------------------------------------------
async function initialize() {
    const clans = await loadClanList();
    const clan = clans[month][even];
    const clanCap = clan.charAt(0).toUpperCase() + clan.slice(1);
    const secondaryClan = clans[month][even_opposite];
    const petpets = await petList();
    const info = await clanInfo();

    //petpet--------------------------------------------------------------------------
    let pets = [...petpets[clan]["unevolved"], ...petpets[clan]["evolved"], ...petpets[secondaryClan]["unevolved"], ...petpets[secondaryClan]["evolved"]];
    let new_pet = false;
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        if (pet.year == currentYear) {
            const petpetBox = document.getElementById("petpet-box");
            const card = document.createElement("div");
            card.classList = "inner-card";
            card.appendChild(document.createTextNode(`Check out the newest Petpet from the clan of ${pet.clan.charAt(0).toUpperCase() + pet.clan.slice(1)}: the ${pet.name}!`));
            const link = document.createElement("a");
            link.classList = "shrink";
            link.href = `/info/petpets/${pet.clan}.html#${pet.key}`;

            const img = document.createElement("img");
            img.src = `/assets/pets/images/${pet.key}.png`;
            img.style.maxWidth = "80%";

            link.appendChild(img);
            card.appendChild(link);
            petpetBox.appendChild(card);

            new_pet = true;
        }
    }
    if (!new_pet) {
        const petpetBox = document.getElementById("petpet-box");
        petpetBox.style.display = "none";
    }

    //featured clan--------------------------------------------------------------------------
    const currentData = topFive[clan];
    const currentClanInfo = info[clan];

    const bannerPool = currentClanInfo.bannerPool;
    const randomIndex = Math.floor(Math.random() * bannerPool.length);
    const chosenImage = bannerPool[randomIndex];


    //clan box
    document.getElementById('rotating-clan').innerHTML = `
    	<div id="mobiletop5">
			<a href="${currentData.toplink1}"><div class="top5-all top5-1" style="background-image:url(${currentData.topimage1});"></div></a>
			<a href="${currentData.toplink2}"><div class="top5-all top5-2" style="background-image:url(${currentData.topimage2});"></div></a>
			<a href="${currentData.toplink3}"><div class="top5-all top5-3" style="background-image:url(${currentData.topimage3});"></div></a>
			<a href="${currentData.toplink4}"><div class="top5-all top5-4" style="background-image:url(${currentData.topimage4});"></div></a>
			<a href="${currentData.toplink5}"><div class="top5-all top5-5" style="background-image:url(${currentData.topimage5});"></div></a> 
		</div>					
		<div class="clanrow" id="clanofthemonth">
			<div class="top5">
				<h2 id="top5title" style="margin-top:2px;"> Top 5<br>Floss</h2>
				<a href="${currentData.toplink1}"><div class="top5-all top5-1" style="background-image:url(${currentData.topimage1});"></div></a>
				<a href="${currentData.toplink2}"><div class="top5-all top5-2" style="background-image:url(${currentData.topimage2});"></div></a>
				<a href="${currentData.toplink3}"><div class="top5-all top5-3" style="background-image:url(${currentData.topimage3});"></div></a>
				<a href="${currentData.toplink4}"><div class="top5-all top5-4" style="background-image:url(${currentData.topimage4});"></div></a>
				<a href="${currentData.toplink5}"><div class="top5-all top5-5" style="background-image:url(${currentData.topimage5});"></div></a> 
			</div>
			<div class="clanbox">
    			<a href="${currentClanInfo.page}"class="shrink">
    			<img class="clangem" src="/assets/gems/${clan}.png" style="display:block;height:15%;margin:auto;">
    			</a>
    
    			<h2 id="hide" style="margin:2px;">${clanCap}</h2>
    
    			<div class="inner-card">
    				<span>${currentClanInfo.text}</span>

					<br><br>
					<a class="event-link" href="${currentClanInfo.page}">Read more about the ${clanCap} Clan!</a>
    				<a class="event-link" href="shows.html" style="margin:5px;">Enter the ${clanCap} Clan Show Events!</a>
    				<span>and look out for ${clanCap} discounts across the site this month, like clothing, bases, and petpets found in this clan!</span>
    			</div> 
				<br><br>
    		</div>
    		<div class="clanimg" style="background-image: url('/assets/banners/${chosenImage.file}'); background-position: ${chosenImage.position};">
      		</div>
   		</div>`;
}
initialize();

//community-art---------------------------------------------------------
const uniqueArt = new Set();
while (uniqueArt.size < 4 && uniqueArt.size < communityArt.length) {
    const randomItem = communityArt[Math.floor(Math.random() * communityArt.length)];
    uniqueArt.add(randomItem);
}
const [communityArt1, communityArt2, communityArt3, communityArt4] = uniqueArt;

document.getElementById('com-art').innerHTML = `
   
  	<a href="gallery.html" class="shrink"> <img src="/assets/logos/art.png" style="width:60%;"></a>
	<div id="comart" class="small-card">
		<div class="row-art" >
			<div class ="image-col" >
				<a href="${communityArt1.artlink}"><img id="art1" src="${communityArt1.artlink}" style="max-height:200px;width:auto;" ></a><br>Art by <span id="artist1"><a id="artist1link" href="https://toyhou.se/${communityArt1.artist}">${communityArt1.artist}</a><br>${communityArt1.prompt}</span>
			</div>
			<div class ="image-col"  >
				<a href="${communityArt2.artlink}"><img id="art2" src="${communityArt2.artlink}" style="max-height:200px;width:auto;" ></a><br>Art by <span id="artist2"><a id="artist2link" href="https://toyhou.se/${communityArt2.artist}">${communityArt2.artist}</a><br>${communityArt2.prompt}</span>
		 	</div>
			<div class ="image-col" >
				<a href="${communityArt3.artlink}"><img id="art3" src="${communityArt3.artlink}" style="max-height:200px;width:auto;" ></a><br>Art by <span id="artist3"><a id="artist3link" href="https://toyhou.se/${communityArt3.artist}">${communityArt3.artist}</a><br>${communityArt3.prompt}</span>
			</div>
			<div class ="image-col" >
				<a href="${communityArt4.artlink}"><img id="art4" src="${communityArt4.artlink}" style="max-height:200px;width:auto;" ></a><br>Art by <span id="artist4"><a id="artist4link" href="https://toyhou.se/${communityArt4.artist}">${communityArt4.artist}</a><br>${communityArt4.prompt}</span>
 			</div>
	</div>`;
