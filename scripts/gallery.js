		async function main() {
			const params = new URLSearchParams(window.location.search);
			var achievement = params.get("achievement") ?? "";

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

			async function loadFilteredEntryData() {
				const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw3S46YYItCsz-DeaZN1uv9hAcoDG8RyVHyATRpYpJsWFM7H9shhrQfEdaDxxCWJF5Wskbx09JSdfH/pub?gid=256204382&single=true&output=csv";

				const csv = await fetchCSV(url);
				const rows = parseCSV(csv);

				const results = filterRows(
					rows,
					"Approved", "yes",
					"Broken Link", ""
				);
				return results;
			}
			async function loadFilteredShowsData() {
				const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRGvNulgHsb87Hyr3mYOkM-pthzMNwKiTSHD_mkJGsMr55iQTbzGbtuVflmudBmYhsUkmnMLAvgKUbv/pub?gid=0&single=true&output=csv";

				const csv = await fetchCSV(url);
				const rows = parseCSV(csv);

				const results = filterRows(
					rows,
					"Approved", "Approved",
					"On Site", "yes"
				);

				return results;
			}

			const entries = await loadFilteredEntryData();

			function normalizeEntries(row) {
				//username, link, title, date, medium
				return [row[0], row[1], row[3], row[5], row[8]];
			}


			const shows = await loadFilteredShowsData();


			function normalizeShows(row) {
				//username, link, title, date, medium
				return [row[0], row[7], row[2], row[5], "Art"];
			}

			const normalizedEntries = entries.map(normalizeEntries);
			const normalizedShows = shows.map(normalizeShows);

			const all_art = [...normalizedEntries, ...normalizedShows];

			function parseMDYFlexible(str) {
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

			all_art.sort((a, b) => {
				const dateA = parseMDYFlexible(a[3]);
				const dateB = parseMDYFlexible(b[3]);
				return dateA - dateB;
			});




			//combine shows, entries


			var html = "";
			const entrygrid = document.getElementById("entry-grid");

			for (let i = all_art.length - 1; i >= 0; i--) {
				const entry = all_art[i];
				html += `<div class="entry"> 	
				`;
				if (entry[4] == "Art") {
					html += `<img class="entry-image" src="${entry[1]}">`;
				} else {
					html += `<a href="${entry[1]}"><img class="entry-image" src="https://f2.toyhou.se/file/f2-toyhou-se/images/120184233_7wE40pb13YsbG2i.png"></a>`;
				}
				html += `
				<h4 class="entry-title">${entry[2]}</h4>
				<div class="entry-info">
					<p>Artist: <a style="color: white;" href="https://toyhou.se/${entry[0].trim()}">${entry[0]}</a></p>
					<p>Date: ${entry[3]}</p>
				</div>	
				</div>
				`;
			}

			if (html == "") {
				html = `<div class="loading" style="width: 100%;"> <h4 class="entry-title">No Entries Yet</h4></div>`;
				entrygrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
			}

			var eloading = document.getElementById("entry-loading");
			eloading.style.display = "none";

			entrygrid.innerHTML = html;



		}
		main();