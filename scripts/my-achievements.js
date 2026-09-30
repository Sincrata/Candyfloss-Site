async function main() {
    const params = new URLSearchParams(window.location.search);
    var username = params.get("username") ?? "";

    if (username == "") {
        const button = document.getElementById("onto-achievements");
        const inventory = document.getElementById("achievements");
        button.style.display = "block";
        inventory.style.display = "none";


        const achbtn = document.getElementById("achievement-button");
        username = document.getElementById("username");

        var userinput = username.value;

        username.addEventListener("keyup", () => {
            if (username.value.length > 0) {
                achbtn.disabled = false;
            } else {
                achbtn.disabled = true;
            }
            userinput = username.value;
        });

        achbtn.addEventListener("click", () => {
            const encoded = encodeURIComponent(userinput);
            window.location.href = `my-achievements.html?username=${encoded}`;
        });
    }

    document.querySelectorAll(".collapsible").forEach(header => {
        header.addEventListener("click", () => {
            header.classList.toggle("collapsed");
        });
    });



    function capitalizeFirstWord(str) {
        if (!str) return "";
        const [first, ...rest] = str.trim().split(/\s+/);
        return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase() +
            (rest.length ? " " + rest.join(" ") : "");
    }

    username = capitalizeFirstWord(username);


    const title = document.getElementById("title");
    title.innerHTML = `${username}'s Achievements`;


    async function fetchCSV(url) {
        const res = await fetch(url);
        const text = await res.text();
        return text;
    }

    function parseCSV(text) {
        return text
            .trim()
            .split(/\r?\n/)
            .map(line =>
                line
                    .split(",")
                    .map(cell => cell.replace(/^"|"$/g, "")) // strip surrounding quotes
            );
    }

    function filterRows(rows, colAName, colAValue, colBName, colBValue) {
        const header = rows[0];
        const data = rows.slice(1);

        const colAIndex = header.indexOf(colAName);
        const colBIndex = header.indexOf(colBName);

        if (colAIndex === -1 || colBIndex === -1) {
            console.error("Column name not found in header:", { header, colAName, colBName });
            return [];
        }

        const maxIndex = Math.max(colAIndex, colBIndex);

        return data.filter(row => {
            if (!row || row.length <= maxIndex) {
                // too short to safely read both columns → ignore
                return false;
            }

            const a = row[colAIndex];
            const b = row[colBIndex];

            if (a == null || b == null) {
                return false;
            }

            return a.toLowerCase() === colAValue.toLowerCase() &&
                b.toLowerCase() === colBValue.toLowerCase();
        });
    }


    function filterRows2(rows, colAName, colAValue, colBName, colBValue) {
        const header = rows[0];
        const data = rows.slice(1);

        const colAIndex = header.indexOf(colAName);
        const colBIndex = header.indexOf(colBName);

        if (colAIndex === -1 || colBIndex === -1) {
            console.error("Column name not found in header:", { header, colAName, colBName });
            return [];
        }

        const maxIndex = Math.max(colAIndex, colBIndex);

        return data.filter(row => {
            if (!row || row.length <= maxIndex) {
                // too short to safely read both columns → ignore
                return false;
            }

            const a = row[colAIndex];
            const b = row[colBIndex];

            if (a == null || b == null) {
                return false;
            }

            return a.toLowerCase() === colAValue.toLowerCase() &&
                b.toLowerCase() !== colBValue.toLowerCase();
        });
    }

    function filterRows3(rows, colAName, colAValue) {
        const header = rows[0];
        const data = rows.slice(1);

        const colAIndex = header.indexOf(colAName);
        if (colAIndex === -1) return [];

        return data.filter(row => {
            if (!row || row.length <= colAIndex) return false;
            const a = row[colAIndex];
            return a != null && a.toLowerCase() === colAValue.toLowerCase();
        });
    }

    async function loadFilteredCoinData() {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw3S46YYItCsz-DeaZN1uv9hAcoDG8RyVHyATRpYpJsWFM7H9shhrQfEdaDxxCWJF5Wskbx09JSdfH/pub?gid=913397617&single=true&output=csv";

        const csv = await fetchCSV(url);
        const rows = parseCSV(csv);

        const results = filterRows3(
            rows,
            "Username", username
        );

        console.log(results);
        return results;
    }



    const count = document.getElementById("coin-count");
    const coin = await loadFilteredCoinData();
    var coins = 0;
    console.log(coin.length);
    if (coin.length > 0) {
        coins = coin[0][12];
    }
    count.innerHTML = `${coins} Coins`;


    async function loadFilteredEntriesData() {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw3S46YYItCsz-DeaZN1uv9hAcoDG8RyVHyATRpYpJsWFM7H9shhrQfEdaDxxCWJF5Wskbx09JSdfH/pub?gid=256204382&single=true&output=csv";

        const csv = await fetchCSV(url);
        const rows = parseCSV(csv);

        const results = filterRows(
            rows,
            "User", username,
            "Approved", "Yes"
        );

        console.log(results);
        return results;
    }

    const entries = await loadFilteredEntriesData();

    var html = "";

    for (let i = 0; i < entries.length; i++) {
        var entry = entries[i];
        html += `
				<div class="badge"> 
					<img class="badge-image" src="/assets/badge/${entry[7]}">
					<h4 class="badge-title">${capitalizeFirstWord(entry[3])}</h4>
					<div class="badge-info">
						<p>${entry[5]}</p>
					</div>
				</div>
			`;
    }


    const badgegrid = document.getElementById("badge-grid");
    if (html == "") {
        html = `<div class="loading" style="width: 100%;"> <h4 class="badge-title">No Badges Earned</h4></div>`;
        badgegrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
    }

    var loading = document.getElementById("badge-loading");
    loading.style.display = "none";

    badgegrid.innerHTML = html;


    html = "";


    async function loadFilteredShowsData() {
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGvNulgHsb87Hyr3mYOkM-pthzMNwKiTSHD_mkJGsMr55iQTbzGbtuVflmudBmYhsUkmnMLAvgKUbv/pub?gid=0&single=true&output=csv";

        const csv = await fetchCSV(url);
        const rows = parseCSV(csv);

        const results = filterRows(
            rows,
            "Approved", "Approved",
            "Toyhouse Username", username
        );

        return results;
    }

    const shows = await loadFilteredShowsData();

    html = "";

    for (let i = 0; i < shows.length; i++) {
        var show = shows[i];
        const badge = show[2] == "Petpet Show" ? "petshow.png" : "fashionshow.png";
        html += `
				<div class="show"> 
					<img class="show-image" src="/assets/badge/${badge}">
					<h4 class="show-title">${capitalizeFirstWord(show[2])}</h4>
					<div class="show-info">
						<p>${show[5]}</p>
					</div>
				</div>
				`;
    }

    const showgrid = document.getElementById("show-grid");
    if (html == "") {
        html = `<div class="loading" style="width: 100%;"> <h4 class="show-title">No Shows Entered</h4></div>`;
        showgrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
    }

    var loading = document.getElementById("show-loading");
    loading.style.display = "none";

    showgrid.innerHTML = html;

}
main();