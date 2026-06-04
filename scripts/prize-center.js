import { prizeList } from "/scripts/prize-center-list.js";

function buildPrizes(prizes) {
    const grid = document.createElement("div");
    grid.className = "prize-grid";

    for(let i = 0; i < prizes.length; i++){
        const prize = prizes[i];

        //create entry box
        const prizeBox = document.createElement("div");
        prizeBox.className = "prize inner-card";

        //create and add image
        const imageHolder = document.createElement("div");
        imageHolder.className = "image-holder";
        const image = document.createElement("img");
        image.src = prize.image;
        
        imageHolder.appendChild(image);
        prizeBox.appendChild(imageHolder);

        //create and add title
        const header = document.createElement("h2");
        header.textContent = `${prize.title}!`;

        prizeBox.appendChild(header);

        //create and add price
        const price = document.createElement("div");
        price.className = "price";
        const coin = document.createElement("img");
        coin.src = "/images/icons/coin.gif";
        price.appendChild(coin);
        price.appendChild(document.createTextNode(prize.cost));

        prizeBox.appendChild(price);

        //create and add blurb
        const blurb = document.createElement("p");
        blurb.innerHTML = prize.blurb;

        prizeBox.appendChild(blurb);

        //add prize box to grid
        grid.appendChild(prizeBox);
    }

    return grid;
}

document.getElementById("prizes").appendChild(buildPrizes(prizeList));