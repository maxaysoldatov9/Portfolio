const header = document.querySelector(".header");
const cursorGlow = document.querySelector(".cursor-glow");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");


// =========================
// HEADER
// =========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// =========================
// CURSOR
// =========================

if (window.innerWidth > 700) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

}


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".skills-hero-content, " +
    ".stack-item, " +
    ".direction-card, " +
    ".tools-group, " +
    ".capability, " +
    ".learning-card"
);


revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            const bars = entry.target.querySelectorAll(
                ".level-bar span"
            );

            bars.forEach((bar) => {
                setTimeout(() => {
                    bar.classList.add("animate");
                }, 150);
            });

            revealObserver.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// =========================
// MOBILE MENU
// =========================

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

    });

}


document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


// =========================
// SKILL CARDS
// =========================

document.querySelectorAll(".stack-item").forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 700) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -1.5;

        const rotateY =
            ((x / rect.width) - 0.5) * 1.5;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateX(5px)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
