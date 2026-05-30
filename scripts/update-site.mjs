import fs from "fs";
import fetch from "node-fetch";
import Papa from "papaparse";
import generateAchievements from "./pages/achievements.js";
import generateCommunityArt from "./pages/CommunityArtMaker.js";
import { csvUrl as achievementUrl } from "./pages/achievements.js";
import { csvUrl as communityArtUrl } from "./pages/CommunityArtMaker.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");


const pages = [
    { file: "achievements.html", generator: generateAchievements, url: achievementUrl },
    { file: "scripts/CommunityArt.js", generator: generateCommunityArt, url: communityArtUrl }
];


async function fetchCSV(url) {
    const res = await fetch(url);
    const text = await res.text();
    return text;
}

function parseCSV(text) {
    const result = Papa.parse(text, {
        header: false,   // or true if you want objects instead of arrays
        skipEmptyLines: true,
    });
    return result.data;
}

function writeFile(name, html) {
    const outputPath = path.join(repoRoot, name);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
}

async function main() {

    // For now: just update one page
for (const page of pages) {
    const csv = await fetchCSV(page.url);
    const data = parseCSV(csv);
    const html = await page.generator(data);
    writeFile(page.file, html);
}


}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
