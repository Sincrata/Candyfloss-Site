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