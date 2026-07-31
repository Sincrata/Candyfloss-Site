import { currentAcheievements } from "/scripts/current-achievements.js";
import { communityArt } from "/scripts/CommunityArt.js";
import { topFive } from "/scripts/monthly-content/top-5-floss.js";
import { petList } from "/scripts/monthly-content/loading-methods.js";
import { loadClanList } from "/scripts/monthly-content/loading-methods.js";
import { clanInfo } from "/scripts/monthly-content/loading-methods.js";

//achievements--------------------------------------------------------------------------
const events = document.getElementById("current-events");

const fotm = currentAcheievements[0].fotm;
const achievements = currentAcheievements[0].achievements;

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


//constants--------------------------------------------------------------------------
const currentMonth = new Date().getMonth(); //0-11
const currentYear = new Date().getFullYear();
const even = currentYear % 2 == 0 ? "even" : "odd";
const even_opposite = currentYear % 2 == 0 ? "odd" : "even";
const month = String(currentMonth + 1); //convert to 1-12, string


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
            link.href = `petpets/${pet.clan}.html#${pet.key}`;

            const img = document.createElement("img");
            img.src = `petpets/pets/images/${pet.key}.png`;
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
    			<img class="clangem" src="images/gems/${clan}.png" style="display:block;height:15%;margin:auto;">
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
    		<div class="clanimg" style="background-image: url('images/banners/${chosenImage.file}'); background-position: ${chosenImage.position};">
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
   
  	<a href="gallery.html" class="shrink"> <img src="images/logos/art.png" style="width:60%;"></a>
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
