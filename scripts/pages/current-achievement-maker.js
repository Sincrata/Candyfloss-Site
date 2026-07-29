export const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw3S46YYItCsz-DeaZN1uv9hAcoDG8RyVHyATRpYpJsWFM7H9shhrQfEdaDxxCWJF5Wskbx09JSdfH/pub?gid=0&single=true&output=csv";

export default function generateCurrentAchievements(data) {
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

    const current = filterRows2(data, "Current", "Current", "Type", "FOTM");
    const fotmrow = filterRows(data, "Current", "Current", "Type", "FOTM");
    const fotm = fotmrow[0];

    let current_text = "";

    for(let i = 0; i < current.length; i++){
        const event = current[i];
        current_text += `"${i}": {
		    title: ${JSON.stringify(event[0])},
		    blurb: ${JSON.stringify(event[13])},
		    badge: ${JSON.stringify(event[7])},
		    banner: ${JSON.stringify(event[4])},
            position: ${JSON.stringify(event[12])}
	    }`;

        if (i < current.length - 1) {
            current_text += ",";
        }
    }

    return `export const currentAcheievements = 
    [
        {
            "achievements": {${current_text}},
            "fotm": {
                title: ${JSON.stringify(fotm[0])},
		        blurb: ${JSON.stringify(fotm[13])},
		        badge: ${JSON.stringify(fotm[7])},
		        banner: ${JSON.stringify(fotm[4])},
                position: ${JSON.stringify(fotm[12])}
            }
        }
    ];`;
}