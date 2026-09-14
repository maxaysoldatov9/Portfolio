const header = document.querySelector(".header");
const cursorGlow = document.querySelector(".cursor-glow");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");


/* =========================
   HEADER
========================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   CURSOR GLOW
========================= */

if (window.innerWidth > 700) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .about-card, .skill-card, .project-card, .process-item, .contact-container"
);


revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================
   MOBILE MENU
========================= */

menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


/* =========================
   PROJECT HOVER
========================= */

document.querySelectorAll(".project-card").forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 700) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -3;

        const rotateY =
            ((x / rect.width) - 0.5) * 3;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   ACTIVE NAV
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});