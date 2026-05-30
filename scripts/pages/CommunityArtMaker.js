export const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw3S46YYItCsz-DeaZN1uv9hAcoDG8RyVHyATRpYpJsWFM7H9shhrQfEdaDxxCWJF5Wskbx09JSdfH/pub?gid=256204382&single=true&output=csv";

export default function generateCommunityArt(data) {

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
                b.toLowerCase() === colBValue.toLowerCase() &&
                row[8].toLowerCase() === "art";
        });
    }

    const entries = filterRows(data, "Approved", "Yes", "Broken Link", "");

    let html = "[";
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];

        html += `{
		    artlink: "${entry[1]}",
		    prompt: "${entry[3]}",
		    position:"center",
		    artist: "${entry[0]}"
	    }`;

        if (i < entries.length - 1) {
            html += ",";
        }

    }
    html += "]";

    return `export const communityArt = ${html};`;

}