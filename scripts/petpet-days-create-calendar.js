
import { petpetDays } from "/scripts/petpet-days.js";

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const WEEKDAYS = ["Su", "M", "T", "W", "Th", "F", "S"];

function randomSide() {
  return Math.random() < 0.5 ? "left" : "right";
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
        empty.className = "date-cards";
        empty.innerHTML = "&nbsp;";
        grid.appendChild(empty);
    }

    // Actual days
    let dayList = document.createElement("div");
    dayList.classList = "small day-list";
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("div");
        cell.className = "date-cards";

        const event = eventsForMonth.find(e => Number(e.day) === day);


        if (event) {
            const direction = randomSide();
            // Add paw
            const paw = document.createElement("div");
            paw.className = `paw cal-paw ${direction} paw-${event.class}`;
            paw.dataset.petpet = event.petpet;
            cell.appendChild(paw);


            // Add day number
            cell.appendChild(document.createTextNode(String(day)));

            const petpetDay = document.createElement("div");
            const petpetDayText = document.createElement("p");
            petpetDay.className = `paw little ${direction} paw-${event.class}`;
            petpetDayText.className = `${event.class}`;
            petpetDayText.innerHTML = `${String(day)} ${event.petpet} <br>`;

            dayList.appendChild(petpetDay);
            dayList.appendChild(petpetDayText);

        } else {
            cell.textContent = String(day);
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
}

renderCalendar(new Date().getFullYear(), petpetDays);
