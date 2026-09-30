export async function petList() {
    try {
        const res = await fetch('/scripts/monthly-content/petpets.json');
        return await res.json();
    } catch (error) {
        throw new Error("Unable to load pets.");
    }
}

export async function loadClanList() {
    try {
        const res = await fetch('/scripts/monthly-content/clans.json');
        return await res.json();
    } catch (error) {
        throw new Error("Unable to load clans.");
    }
}

export async function clanInfo() {
    try {
        const res = await fetch('/scripts/monthly-content/clanInfo.json');
        return await res.json();
    } catch (error) {
        throw new Error("Unable to load pets.");
    }
}

export async function achievementList() {
    try {
        const res = await fetch('/scripts/monthly-content/achievements.json');
        return await res.json();
    } catch (error) {
        throw new Error("Unable to load achievements.");
    }
}