
import { petpetDays } from "/scripts/petpet-days.js";

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const WEEKDAYS = ["Su", "M", "T", "W", "Th", "F", "S"];

function randomSide() {
    return Math.random() < 0.5 ? "left" : "right";
}

const now = new Date();
const options = { timeZone: "America/Chicago" };
const current_year_central = new Intl.DateTimeFormat("en-US", { ...options, year: "numeric" }).format(now);
const current_month_central = new Intl.DateTimeFormat("en-US", { ...options, month: "numeric" }).format(now);
var current_day_central = new Intl.DateTimeFormat("en-US", { ...options, day: "numeric" }).format(now);

export function checkToday(events) {
    const eventsThisMonth = events.filter(e => Number(e.month) == current_month_central);
    const eventsToday = eventsThisMonth.filter(e => Number(e.day) == current_day_central);
    return eventsToday;
}

export function nextPetpet(events) {
    let date = new Date(Number(current_year_central), Number(current_month_central) - 1, Number(current_day_central) + 1);
    console.log(date);
    while (true) {
        const m = date.getMonth() + 1;
        const d = date.getDate();

        const pet = events.find(e => Number(e.month) == m && Number(e.day) == d);

        if (pet) return pet;

        date.setDate(date.getDate() + 1);
    }
}

function buildMonthElement(year, monthNumber, eventsForMonth) {
    const monthDiv = document.createElement("div");
    monthDiv.className = "month";

    const monthName = MONTH_NAMES[monthNumber - 1];

    // Month title
    const titleP = document.createElement("p");
    titleP.className = "small berry";
    titleP.id = monthName.toLowerCase();
    titleP.textContent = monthName;
    monthDiv.appendChild(titleP);
    monthDiv.appendChild(document.createElement("br"));

    // Date grid
    const grid = document.createElement("div");
    grid.className = "date-grid";

    // Weekday headers
    WEEKDAYS.forEach(label => {
        const cell = document.createElement("div");
        cell.className = "date-cards";
        cell.textContent = label;
        grid.appendChild(cell);
    });

    // First day + days in month
    const firstDay = new Date(year, monthNumber - 1, 1).getDay();
    const daysInMonth = new Date(year, monthNumber, 0).getDate();

    // Empty cells before day 1
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        empty.className = "date-card";
        empty.innerHTML = "&nbsp;";
        grid.appendChild(empty);
    }

    // Actual days
    let dayList = document.createElement("div");
    dayList.classList = "small day-list";
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("div");
        cell.className = "date-card";

        const event = eventsForMonth.find(e => Number(e.day) === day);

        const dateNum = document.createElement("span");
        dateNum.appendChild(document.createTextNode(String(day)));
        dateNum.classList = "date-number";
        if (event) {
            const direction = randomSide();
            // Add paw
            const paw = document.createElement("div");
            paw.className = `paw cal-paw ${direction} paw-${event.class}`;
            paw.dataset.petpet = event.petpet;
            cell.appendChild(paw);


            // Add day number

            cell.appendChild(dateNum);

            const petpetDay = document.createElement("div");
            const petpetDayText = document.createElement("p");
            petpetDay.className = `paw little ${direction} paw-${event.class}`;
            petpetDayText.className = `${event.class} date-number`;
            petpetDayText.innerHTML = `<span class="white">${String(day)}</span> <a href="${event.url}">${event.petpet}</a> <br>`;

            dayList.appendChild(petpetDay);
            dayList.appendChild(petpetDayText);

        } else {
            cell.appendChild(dateNum);
        }

        grid.appendChild(cell);
    }

    monthDiv.appendChild(grid);
    monthDiv.appendChild(dayList)
    return monthDiv;
}


function renderCalendar(year, events) {
    const calGrid = document.querySelector("#calendar");
    if (!calGrid) return;

    for (let m = 1; m <= 12; m++) {
        const eventsForMonth = events.filter(e => Number(e.month) === m);
        const monthEl = buildMonthElement(year, m, eventsForMonth);
        calGrid.appendChild(monthEl);
    }
    const current_petpet_div = document.getElementById("current-petday");
    const today = checkToday(events);

    if (today.length == 0) {
        const paragraph = document.createElement("p");
        paragraph.classList = "no-petpet-day";
        paragraph.innerHTML = "There is no petpet day today. Check out the <a href='#calendar'>calendar</a> below to see upcoming ones!";
        current_petpet_div.appendChild(paragraph);
    } else {
        const todays_petpet = today[0];

        current_petpet_div.innerHTML = `
            <h1>It's ${todays_petpet.petpet} Day!</h1>
            <div id="petpet-day-info">
                <span>
                    Happy ${todays_petpet.petpet} Day! 
                    For the next 24 hours, you can receive a free ${todays_petpet.petpet} pet by submitting a ${todays_petpet.petpet} design 
                    and art of your floss with their new petpet in our 
                    <a href="https://toyhou.se/~world/53663.the-candyfloss/page/88594.candyfloss-discord">Discord Server</a>! 
                </span>
            </div>
            <div class="row" id="day-row">
                <div class="picture">
                    <a class="shrink" href="${todays_petpet.url}"><img src="/assets/pets/images/${todays_petpet.key}.png"></a>
                </div>
                <div class="button-holder">
                    <a class="button" href="${todays_petpet.url}">Learn More</a>
                    <a class="button" href="/assets/pets/bases/${todays_petpet.key}.psd" download>Grab Base</a>
                    <a class="button" href="/assets/pets/charts/${todays_petpet.key}.png" >Chart</a>
                    <a class="button" href="#" style="display: none">Submit</a>
                </div>
            </div>
        `;

        const base_ad = document.getElementById("base-ad");
        base_ad.innerHTML = `We recommend using our editable psd ${todays_petpet.petpet} <a href="/assets/pets/bases/${todays_petpet.key}.psd" download>base</a>.`;


    }
    const upcoming = document.getElementById("upcoming");

    const next_pet = nextPetpet(events);

    upcoming.innerHTML = `
            <h2>Upcoming</h2>
            <div class="picture">
                    <a class="shrink" href="${next_pet.url}"><img src="/assets/pets/images/${next_pet.key}.png"></a>
            </div>
            <h3>${next_pet.petpet}</h3>
            <span> Check out the next petpet day coming up on ${next_pet.month}/${next_pet.day}

            <div class="button-holder">
                <a class="button" href="${next_pet.url}">Learn More</a>
                <a class="button" href="/assets/pets/bases/${next_pet.key}.psd" download>Grab Base</a>
                <a class="button" href="/assets/pets/charts/${next_pet.key}.png" >Chart</a>
            </div>
        `;

}

renderCalendar(new Date().getFullYear(), petpetDays);
