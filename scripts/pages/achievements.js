export const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw3S46YYItCsz-DeaZN1uv9hAcoDG8RyVHyATRpYpJsWFM7H9shhrQfEdaDxxCWJF5Wskbx09JSdfH/pub?gid=0&single=true&output=csv";

export default function generateAchievementPage(data) {

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



    // TODO: replace with your real HTML
    const current = filterRows2(data, "Current", "Current", "Type", "FOTM");
    const fotmrow = filterRows(data, "Current", "Current", "Type", "FOTM");
    const fotm = fotmrow[0];
    const past = filterRows2(data, "Current", "Past", "Type", "FOTM");

    let currentHtml = ``;
    for (let i = 0; i < current.length; i++) {
        const currentEvent = current[i];
        currentHtml += `				
                <div class="current-info">
					<div class="img-box"><img class="current-img" src="Banners/${currentEvent[4]}"></div>
					<div class="small-card">
						<h2>${currentEvent[0]}</h2>
						<span>${currentEvent[2]} ${currentEvent[1]}</span>
						<img class="current-badge" src="badge/${currentEvent[7]}">
						<p>
							${currentEvent[5]}
						</p>`;

        if (currentEvent[1] == "Chain") {
            currentHtml += `<a class="button" href="${currentEvent[11]}">Enter</a>
					`;
        } else {
            currentHtml += `<a class="button" href="https://docs.google.com/forms/d/e/1FAIpQLSdvHN9u2eAO7-OU0uCR7PIsvI-jgBELtclpMKEbAE8Z3iFCaw/viewform">Submit</a>
					`;
        }
        currentHtml += `
					</div>
					
				</div>`;
    }

    let pastHtml = "";

    for (let i = 0; i < past.length; i++) {
        const pastEvent = past[i];
        pastHtml +=
            `<div class="past-ach-container">
						<div class="past-ach-img"
							style="background-image:url(Banners/${pastEvent[4]});background-size:cover;background-position:50%;">
						</div>
						<div class="past-ach-entry">
							<h2>${pastEvent[0]}</h2>
							<p><i>${pastEvent[2]} ${pastEvent[1]}</i><br>
                                    ${pastEvent[5]}`;


        if (pastEvent[1] == "Chain") {
            pastHtml += `<br><br><a class="button"
									href="${pastEvent[11]}"
									style="min-width:20%;margin-top:0px;">Enter</a></p>`;
        } else {
            pastHtml += `<br><br><a class="button"
									href="https://docs.google.com/forms/d/e/1FAIpQLSdvHN9u2eAO7-OU0uCR7PIsvI-jgBELtclpMKEbAE8Z3iFCaw/viewform"
									style="min-width:20%;margin-top:0px;">Submit</a></p>`;
        }
        pastHtml += `
						</div>
						<div class="past-ach-badge"
							style="background-image:url(badge/${pastEvent[7]});background-size:contain;background-position:center;background-repeat:no-repeat;">
						</div>
					</div>
					<br></br>`;

    }

    //get two current acheivements
    //get current fotm
    //get any old ahcievements, excluding fotm

    return `
<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" href="GeneralCSS.css">
    <link rel="stylesheet" href="achievements.css">
	<link rel="preload" href="logos/logo.gif" as="image">
	<script src="components/header-component.js"></script>
	<script src="components/footer-component.js"></script>
	<script src="components/navbar-component.js"></script>
	<link rel="icon" href="icons/Planet.ico">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>CF Achievements</title>
    	<style>
@media (max-width: 800px) {
			.past-ach-container {
				margin: 0%;
				margin-top: 0%;
				margin-bottom: 0%;
			}

			.past-ach-box {
				padding: 15px;
				width: 100%;
			}

			.past-ach-entry {
				overflow: auto;
				max-height: 20vh;
			}

			.past-ach-container {
				margin: 0px;
				margin-top: 0px;
				grid-template-columns: 25% 50% 25%;
			}

			#three-columns {
				grid-template-columns: 1fr;
				max-width: 350px;
			}
		}

		@media (max-width: 700px) {
			.past-ach-container {
				margin: 0%;
				margin-top: 0%;
				margin-bottom: 0%;
			}

			.past-ach-box {
				padding: 15px;
				width: 100%;
			}

			.past-ach-entry {
				overflow: auto;
				max-height: 20vh;
			}

			.past-ach-container {
				margin: 0px;
				margin-top: 0px;
				grid-template-columns: 25% 50% 25%;
			}

			.card,
			#current-achievements {
				width: 90%;
			}

			#fotmbox img {
				max-width: 35px;
			}

			#fotm-badge {
				margin: 0px;
			}

			#current-achievements {
				grid-template-columns: 1fr;
			}
		}

		@media (max-width: 1000px) {
			.past-ach-container {
				margin: 0%;
				margin-top: 0%;
				margin-bottom: 0%;
			}

			.past-ach-box {
				padding: 15px;
				width: 100%;
			}

			.past-ach-entry {
				overflow: auto;
				max-height: 20vh;
			}

			.past-ach-container {
				margin: 0px;
				margin-top: 0px;
				grid-template-columns: 25% 50% 25%;
			}

			.card,
			#current-achievements,
			#fotm {
				width: 90%;
			}

			#current-achievements {
				grid-template-columns: repeat(2, 1fr);
			}
		}

		@media (max-width: 500px) {
			#current-achievements {
				grid-template-columns: 1fr;
			}

			.past-ach-container {
				margin: 0%;
				margin-top: 0%;
				margin-bottom: 0%;
			}

			.past-ach-box {
				padding: 15px;
				width: 100%;
			}

			.past-ach-entry {
				overflow: auto;
				max-height: 20vh;
			}

			.past-ach-container {
				margin: 0px;
				margin-top: 0px;
				grid-template-columns: 25% 50% 25%;
			}
		}

		@media (max-width: 300px) {
			#current-achievements {
				grid-template-columns: 1fr;
			}

			.past-ach-container {
				margin: 0%;
				margin-top: 0%;
				margin-bottom: 0%;
			}

			.past-ach-box {
				padding: 15px;
				width: 100%;
			}

			.past-ach-entry {
				overflow: auto;
				max-height: 20vh;
			}

			.past-ach-container {
				margin: 0px;
				margin-top: 0px;
				grid-template-columns: 25% 50% 25%;
			}
		}
    	</style>
</head>
<body>
	<header loading="eager">
		<main-header></main-header>
	</header>
	<main>
		<nav-bar></nav-bar>
		<center>
			<img id="achievement-logo" src="logos/achievements.png" style="max-width:100%;">
			<div class="card" id="achievement-info">
				<p>
 <h1>Rules!</h1>
 These rules are universal for all achievement entries.<br>
By submitting entry, you are agreeing to these terms.<br><br>
The use of AI in your entry in ANY way, theft in general, or other misconduct will disqualify you and revoke your right to entry into achievements in the future.
<br><br>
To qualify your entry must-<br>

- prominently feature one or more approved Candyfloss<br>
- follow the theme/requirements for the specific achievement<br>
- abide by the Candyfloss TOS<br>
- be completely made by you, aside from credited assets. You cannot collaborate on your entry.<br>
- be made specifically for this achievement.<br>
- accurately portray Candyfloss anatomy and cannon lore to the best of your abilities.<br>
				<br><br>
				<div id="three-columns" "style="display: block;">
					<div>
						<h2>Art Entries</h2>
						<span> 
						
- must be completed past the line art stage<br>
- provide credits to all assets used, bases are okay as long as its obviously credited!<br>
-comic panels are ok but not needed<br>
- By submitting for an Achievement you consent to your art and or stories to be displayed on the homepage, your achievement page or the CF official discord with proper credit.<br>
 						</span>
					</div>
					<div>
						<h2>Chains</h2>
						<span> 
							Chain games are taking place on toyhou.se threads! More specific rules and guides for the chain can be found there!<br>
							<br>
						</span>
					</div>
					<div>
						<h2>Stories</h2>
						<span> 
						- be between 1000 and 5000 words<br>
						- be written in English <br>
						-be posted to a google doc or in a toyhou.se literature post<br>
</span>
					</div>
				</div>
			</div>
			<div id="current-achievements">
                ${currentHtml}
			</div>

 			<div id="fotm">
				<div id="fotm-container">
					<a href="${fotm[11]}"><img id="fotm-img"
							src="Banners/${fotm[4]}"></a>
				</div>
				<div id="fotmbox">
					<div id="fotm-info">
						<h2>Floss of the Month</h2>
						<span>
							${fotm[5]}
						</span>
						<a class="button"
							href="https://docs.google.com/forms/d/e/1FAIpQLSdvHN9u2eAO7-OU0uCR7PIsvI-jgBELtclpMKEbAE8Z3iFCaw/viewform">Submit</a>
					</div>
					<div id="fotm-badge">
						<img src="badge/${fotm[7]}">
					</div>
				</div>

			</div>
			<H1> All Achievements!</h1>
			<p>
				Check out all the achievements you can complete! You can see which achievements you have already
				completed by checking your <a href="https://thecandyflossspecies.com/UserAchievements.html"
					style="color:#ae97da;">personal Achievements List!<a><br>You can earn 1 coin for completing an
						achievement for the first time!</p>
			<div id="prev-achievements">
				<div class="past-ach-box">
					
                    ${pastHtml}

				</div>

			</div>
			</div>
		</center>
	</main>
	<footer>
		<main-footer></main-footer>
	</footer>
	<script>
		document.getElementById("nav-toggle").addEventListener("click", () => {
			document.getElementById("nav-wrapper").classList.toggle("open");
		});

		document.querySelectorAll(".dropdown > a").forEach(link => {
			link.addEventListener("click", (e) => {
				if (window.innerWidth > 700) return;

				e.preventDefault();
				const dropdown = link.nextElementSibling;
				dropdown.classList.toggle("open");
			});
		});
	</script>
</body>

</html>
`;
}