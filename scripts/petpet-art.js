export function insertArt(pool, id) {
    const artSet = new Set();

    while (artSet.size < 3 && artSet.size < pool.length) {
        const randomItem = pool[Math.floor(Math.random() * pool.length)];
        artSet.add(randomItem);
    }

    const selectedArt = Array.from(artSet);
    const art1 = selectedArt[0];
    const art2 = selectedArt[1];
    const art3 = selectedArt[2];


    document.getElementById(id).innerHTML = `
        <div class="art-grid">
            <div class="art-card"><a href="/assets/pets/pdart/${art1.file}"><img src="/assets/pets/pdart/${art1.file}" title="Art by ${art1.artist}"></a></div>
            <div class="art-card"><a href="/assets/pets/pdart/${art2.file}"><img src="/assets/pets/pdart/${art2.file}" title="Art by ${art2.artist}"></a></div>
            <div class="art-card"><a href="/assets/pets/pdart/${art3.file}"><img src="/assets/pets/pdart/${art3.file}" title="Art by ${art3.artist}"></a></div>
        </div>
    `;
}