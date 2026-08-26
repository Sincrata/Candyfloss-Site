
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
const current_month_central = new Intl.DateTimeFormat("en-US", { ...options, month: "numeric" }).format(now);
const current_day_central   = new Intl.DateTimeFormat("en-US", { ...options, day: "numeric" }).format(now);

function checkToday(events){
    const eventsThisMonth = events.filter(e => Number(e.month) == current_month_central);
    const eventsToday = eventsThisMonth.filter(e => Number(e.day) == current_day_central);
    console.log(eventsToday)
    return eventsToday;
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
            petpetDayText.innerHTML = `${String(day)} ${event.petpet} <br>`;

            dayList.appendChild(petpetDay);
            dayList.appendChild(petpetDayText);

        } else {
            cell.appendChild(dateNum);
        }

        grid.appendChild(cell);
    }

    monthDiv.appendChild(grid);
    monthDiv.appendChild(document.createElement("br"));
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
    
    if(today.length == 0){
        const paragraph = document.createElement("p");
        paragraph.innerText = "There is no petpet day today. Check out the calendar below to see upcoming ones!";
        current_petpet_div.appendChild(paragraph);
    }else{
        const todays_petpet = today[0];

        current_petpet_div.innerHTML = `
            <h1>It's ${todays_petpet.petpet} Day!</h1>
            <div class="row">
                <div class="picture">
                    <img src="/assets/pets/images/${todays_petpet.key}.png">
                </div>
                <div class="button-holder">
                    <a class="button" href="${todays_petpet.url}">Learn More</a>
                    <a class="button" href="/assets/pets/bases/${todays_petpet.key}.psd" download>Grab Base</a>
                    <a class="button" href="#" style="display: none">Submit</a>
                </div>
            </div>
        `;
    }
    
}

renderCalendar(new Date().getFullYear(), petpetDays);
