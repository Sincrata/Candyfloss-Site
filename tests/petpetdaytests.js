import { petpetDays } from "/scripts/petpet-days.js";

const grid = document.getElementById("image-grid");


for(let i = 0; i < petpetDays.length; i++){
    const day = petpetDays[i];

    const container = document.createElement("div");
    container.classList = "image-container";

    container.appendChild(document.createTextNode(day.petpet));
    const img = document.createElement("img");
    img.onload = function() {
        container.appendChild(img);
        grid.appendChild(container);
    };
    img.src = `/images/pets/charts/${day.key}.png`;

}