export const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw3S46YYItCsz-DeaZN1uv9hAcoDG8RyVHyATRpYpJsWFM7H9shhrQfEdaDxxCWJF5Wskbx09JSdfH/pub?gid=963645647&single=true&output=csv";

export default function generatePrizeList(data) {
    const prizes = data.slice(1);
    let html = "[";

    for (let i = 0; i < prizes.length; i++) {
        const prize = prizes[i];
        if(prize[4] !== "Yes"){
            continue;
        }

        html += `{
		    title: ${JSON.stringify(prize[0])},
		    image: ${JSON.stringify(prize[1])},
		    blurb: ${JSON.stringify(prize[2])},
		    cost: ${JSON.stringify(prize[3])}
	    }`;

        if (i < prizes.length - 1) {
            html += ",";
        }
    }
    html += "]";

    return `export const prizeList = ${html};`;
}