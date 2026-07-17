window.addEventListener("load", () => {

    const loading = document.getElementById("loading");
    const hero = document.getElementById("hero");

    setTimeout(() => {
        loading.style.display = "none";
        hero.style.display = "flex";
    }, 1800);

});

const openBtn = document.getElementById("openBtn");

const sections = document.querySelectorAll(
    ".message, .letter, .gallery, .ending"
);

openBtn.addEventListener("click", () => {

    sections.forEach((section, index) => {

        setTimeout(() => {
            section.classList.remove("hidden");
            section.scrollIntoView({
                behavior: "smooth"
            });
        }, index * 700);

    });

    openBtn.style.display = "none";

});
