const header = document.querySelector(".header");
const cursorGlow = document.querySelector(".cursor-glow");


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
// CURSOR GLOW
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

const elements = document.querySelectorAll(
    ".about-hero-content, " +
    ".intro-photo, " +
    ".intro-text, " +
    ".number-card, " +
    ".timeline-item, " +
    ".philosophy-text, " +
    ".principle-card, " +
    ".tech-cloud span, " +
    ".personal-card"
);


elements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach((element) => {
    observer.observe(element);
});


// =========================
// MOBILE MENU
// =========================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");


if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

    });

}


// =========================
// NAVIGATION
// =========================

document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


// =========================
// TECH HOVER
// =========================

document.querySelectorAll(".tech-cloud span").forEach((tech) => {

    tech.addEventListener("mouseenter", () => {

        tech.style.transform = "translateY(-4px) scale(1.03)";

    });


    tech.addEventListener("mouseleave", () => {

        tech.style.transform = "";

    });

});
