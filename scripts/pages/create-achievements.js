export const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw3S46YYItCsz-DeaZN1uv9hAcoDG8RyVHyATRpYpJsWFM7H9shhrQfEdaDxxCWJF5Wskbx09JSdfH/pub?gid=0&single=true&output=csv";

export default function generateAchievementList(data) {
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
    const fotmcurrent = filterRows(data, "Current", "Current", "Type", "FOTM");

    const future = filterRows2(data, "Current", "Future", "Type", "FOTM");
    const fotmfuture = filterRows(data, "Current", "Future", "Type", "FOTM");

    const past = filterRows2(data, "Current", "Past", "Type", "FOTM");
    const fotmpast = filterRows(data, "Current", "Past", "Type", "FOTM");


    let current_text = "";

    for(let i = 0; i < current.length; i++){
        const event = current[i];
        current_text += `{

            "title": ${JSON.stringify(event[0])},
            "type": ${JSON.stringify(event[1])},
            "medium": ${JSON.stringify(event[2])},
            "banner": ${JSON.stringify(event[4])},
            "text": ${JSON.stringify(event[5])},
            "badge": ${JSON.stringify(event[7])},
            "start": ${JSON.stringify(event[8])},
            "end": ${JSON.stringify(event[9])},
            "link": ${JSON.stringify(event[11])},
            "position": ${JSON.stringify(event[12])},
            "blurb": ${JSON.stringify(event[13])}
        }`;

        if (i < current.length - 1) {
            current_text += ",";
        }
    }


    let current_fotm_text = "";

    for(let i = 0; i < fotmcurrent.length; i++){
        const event = fotmcurrent[i];
        current_fotm_text += `{

            "title": ${JSON.stringify(event[0])},
            "type": ${JSON.stringify(event[1])},
            "medium": ${JSON.stringify(event[2])},
            "banner": ${JSON.stringify(event[4])},
            "text": ${JSON.stringify(event[5])},
            "badge": ${JSON.stringify(event[7])},
            "start": ${JSON.stringify(event[8])},
            "end": ${JSON.stringify(event[9])},
            "link": ${JSON.stringify(event[11])},
            "position": ${JSON.stringify(event[12])},
            "blurb": ${JSON.stringify(event[13])}
        }`;

        if (i < fotmcurrent.length - 1) {
            current_fotm_text += ",";
        }
    }


    let future_text = "";

    for(let i = 0; i < future.length; i++){
        const event = future[i];
        future_text += `{

            "title": ${JSON.stringify(event[0])},
            "type": ${JSON.stringify(event[1])},
            "medium": ${JSON.stringify(event[2])},
            "banner": ${JSON.stringify(event[4])},
            "text": ${JSON.stringify(event[5])},
            "badge": ${JSON.stringify(event[7])},
            "start": ${JSON.stringify(event[8])},
            "end": ${JSON.stringify(event[9])},
            "link": ${JSON.stringify(event[11])},
            "position": ${JSON.stringify(event[12])},
            "blurb": ${JSON.stringify(event[13])}
        }`;

        if (i < future.length - 1) {
            future_text += ",";
        }
    }

    let future_fotm_text = "";

    for(let i = 0; i < fotmfuture.length; i++){
        const event = fotmfuture[i];
        future_fotm_text += `{

            "title": ${JSON.stringify(event[0])},
            "type": ${JSON.stringify(event[1])},
            "medium": ${JSON.stringify(event[2])},
            "banner": ${JSON.stringify(event[4])},
            "text": ${JSON.stringify(event[5])},
            "badge": ${JSON.stringify(event[7])},
            "start": ${JSON.stringify(event[8])},
            "end": ${JSON.stringify(event[9])},
            "link": ${JSON.stringify(event[11])},
            "position": ${JSON.stringify(event[12])},
            "blurb": ${JSON.stringify(event[13])}
        }`;

        if (i < fotmfuture.length - 1) {
            future_fotm_text += ",";
        }
    }


    let past_text = "";

    for(let i = 0; i < past.length; i++){
        const event = past[i];
        past_text += `{

            "title": ${JSON.stringify(event[0])},
            "type": ${JSON.stringify(event[1])},
            "medium": ${JSON.stringify(event[2])},
            "banner": ${JSON.stringify(event[4])},
            "text": ${JSON.stringify(event[5])},
            "badge": ${JSON.stringify(event[7])},
            "start": ${JSON.stringify(event[8])},
            "end": ${JSON.stringify(event[9])},
            "link": ${JSON.stringify(event[11])},
            "position": ${JSON.stringify(event[12])},
            "blurb": ${JSON.stringify(event[13])}
        }`;

        if (i < past.length - 1) {
            past_text += ",";
        }
    }

    let past_fotm_text = "";

    for(let i = 0; i < fotmpast.length; i++){
        const event = fotmpast[i];
        past_fotm_text += `{

            "title": ${JSON.stringify(event[0])},
            "type": ${JSON.stringify(event[1])},
            "medium": ${JSON.stringify(event[2])},
            "banner": ${JSON.stringify(event[4])},
            "text": ${JSON.stringify(event[5])},
            "badge": ${JSON.stringify(event[7])},
            "start": ${JSON.stringify(event[8])},
            "end": ${JSON.stringify(event[9])},
            "link": ${JSON.stringify(event[11])},
            "position": ${JSON.stringify(event[12])},
            "blurb": ${JSON.stringify(event[13])}
        }`;

        if (i < fotmpast.length - 1) {
            past_fotm_text += ",";
        }
    }

    return `
        {
            "achievements": {
                "current":[
                    ${current_text}
                ],
                "past": [
                    ${past_text}
                ],
                "future": [
                    ${future_text}
                ]
            },
            "fotm": {
                "current":[
                     ${current_fotm_text}
                ],
                "past": [
                    ${past_fotm_text}
                ],
                "future": [
                    ${future_fotm_text}
                ]
            }
        }
    `;
}