export const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0exCOdni2TTA43W-_V9LKJCEk5dGTS5vVOHlBGqY0T9f_3xoZNGtotrKCIqI7c6TPsghx-s3gLgqt/pub?gid=1730331366&single=true&output=csv";

export default function generatePetpetDays(data) {
    const dates = data.slice(1);

    let html = "[";
    for (let i = 0; i < dates.length; i++) {
        const date = dates[i];

        html += `{
		    month: "${date[0]}",
		    day: "${date[1]}",
		    petpet: "${date[2]}",
		    class: "${date[3]}",
            upcoming: "${date[4]}"
	    }`;

        if (i < dates.length - 1) {
            html += ",";
        }

    }
    html += "]";

    return `export const petpetDays = ${html};`;
}