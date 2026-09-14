const projectButtons = document.querySelectorAll(".project-type");
const complexityButtons = document.querySelectorAll(".complexity");
const deadlineButtons = document.querySelectorAll(".deadline");

const featuresGrid = document.querySelector("#featuresGrid");

const pagesBlock = document.querySelector("#pagesBlock");
const pagesCount = document.querySelector("#pagesCount");

const decreasePages = document.querySelector("#decreasePages");
const increasePages = document.querySelector("#increasePages");

const estimateProject = document.querySelector("#estimateProject");
const estimatePrice = document.querySelector("#estimatePrice");
const estimateTime = document.querySelector("#estimateTime");

const summaryComplexity = document.querySelector("#summaryComplexity");
const summaryPages = document.querySelector("#summaryPages");
const summaryFeatures = document.querySelector("#summaryFeatures");

const orderForm = document.querySelector("#orderForm");

const successModal = document.querySelector("#successModal");
const closeSuccess = document.querySelector("#closeSuccess");
const successButton = document.querySelector("#successButton");


const state = {
    project: "landing",
    complexity: "basic",
    pages: 1,
    deadline: "normal",
    features: []
};


/* =========================
   PROJECT DATA
========================= */

const projects = {

    landing: {
        name: "Лендинг",
        basePrice: 30000,
        baseDays: 3,
        hasPages: true,

        features: [
            {
                name: "Адаптивная версия",
                price: 0,
                days: 0
            },
            {
                name: "Анимации",
                price: 10000,
                days: 1
            },
            {
                name: "Форма заявки",
                price: 5000,
                days: 1
            },
            {
                name: "Интеграция API",
                price: 15000,
                days: 2
            },
            {
                name: "Админ-панель",
                price: 30000,
                days: 4
            },
            {
                name: "SEO-настройка",
                price: 10000,
                days: 1
            }
        ]
    },


    store: {
        name: "Интернет-магазин",
        basePrice: 80000,
        baseDays: 10,
        hasPages: true,

        features: [
            {
                name: "Каталог товаров",
                price: 15000,
                days: 2
            },
            {
                name: "Корзина",
                price: 15000,
                days: 2
            },
            {
                name: "Онлайн-оплата",
                price: 25000,
                days: 3
            },
            {
                name: "Личный кабинет",
                price: 30000,
                days: 4
            },
            {
                name: "Админ-панель",
                price: 40000,
                days: 5
            },
            {
                name: "Фильтры товаров",
                price: 15000,
                days: 2
            }
        ]
    },


    app: {
        name: "Веб-приложение",
        basePrice: 100000,
        baseDays: 14,
        hasPages: true,

        features: [
            {
                name: "Авторизация",
                price: 25000,
                days: 3
            },
            {
                name: "База данных",
                price: 25000,
                days: 3
            },
            {
                name: "REST API",
                price: 20000,
                days: 2
            },
            {
                name: "Личный кабинет",
                price: 30000,
                days: 4
            },
            {
                name: "Админ-панель",
                price: 40000,
                days: 5
            },
            {
                name: "AI-интеграция",
                price: 35000,
                days: 4
            }
        ]
    },


    telegram: {
        name: "Telegram-бот",
        basePrice: 20000,
        baseDays: 3,
        hasPages: false,

        features: [
            {
                name: "База данных",
                price: 15000,
                days: 2
            },
            {
                name: "Админ-панель",
                price: 25000,
                days: 3
            },
            {
                name: "Интеграция API",
                price: 20000,
                days: 3
            },
            {
                name: "AI",
                price: 30000,
                days: 4
            },
            {
                name: "Платежи",
                price: 25000,
                days: 3
            },
            {
                name: "Рассылки",
                price: 10000,
                days: 1
            }
        ]
    },


    social: {
        name: "Социальная сеть",
        basePrice: 180000,
        baseDays: 21,
        hasPages: true,

        features: [
            {
                name: "Регистрация",
                price: 25000,
                days: 3
            },
            {
                name: "Профили пользователей",
                price: 30000,
                days: 4
            },
            {
                name: "Публикации",
                price: 40000,
                days: 5
            },
            {
                name: "Комментарии",
                price: 20000,
                days: 2
            },
            {
                name: "Чат",
                price: 50000,
                days: 6
            },
            {
                name: "Уведомления",
                price: 20000,
                days: 3
            }
        ]
    },


    other: {
        name: "Другая идея",
        basePrice: 30000,
        baseDays: 5,
        hasPages: false,

        features: [
            {
                name: "Авторизация",
                price: 20000,
                days: 2
            },
            {
                name: "База данных",
                price: 20000,
                days: 3
            },
            {
                name: "API",
                price: 20000,
                days: 2
            },
            {
                name: "AI",
                price: 30000,
                days: 4
            }
        ]
    }

};


/* =========================
   COMPLEXITY
========================= */

const complexityData = {

    basic: {
        name: "Базовая",
        multiplier: 1
    },

    medium: {
        name: "Средняя",
        multiplier: 1.35
    },

    advanced: {
        name: "Продвинутая",
        multiplier: 1.75
    },

    complex: {
        name: "Сложная",
        multiplier: 2.2
    }

};


/* =========================
   PROJECT SELECT
========================= */

projectButtons.forEach((button) => {

    button.addEventListener("click", () => {

        projectButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        state.project = button.dataset.project;

        state.features = [];

        renderFeatures();
        updatePagesVisibility();
        calculateEstimate();

    });

});


/* =========================
   COMPLEXITY SELECT
========================= */

complexityButtons.forEach((button) => {

    button.addEventListener("click", () => {

        complexityButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        state.complexity = button.dataset.level;

        calculateEstimate();

    });

});


/* =========================
   DEADLINE SELECT
========================= */

deadlineButtons.forEach((button) => {

    button.addEventListener("click", () => {

        deadlineButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        state.deadline = button.dataset.deadline;

        calculateEstimate();

    });

});


/* =========================
   PAGES
========================= */

increasePages.addEventListener("click", () => {

    if (state.pages >= 20) return;

    state.pages++;

    pagesCount.textContent = state.pages;

    calculateEstimate();

});


decreasePages.addEventListener("click", () => {

    if (state.pages <= 1) return;

    state.pages--;

    pagesCount.textContent = state.pages;

    calculateEstimate();

});


/* =========================
   FEATURES
========================= */

function renderFeatures() {

    const project = projects[state.project];

    featuresGrid.innerHTML = "";

    project.features.forEach((feature, index) => {

        const label = document.createElement("label");

        label.className = "feature";

        label.innerHTML = `
            <input
                type="checkbox"
                value="${index}"
            >

            <span class="feature-check">
                ✓
            </span>

            <span class="feature-text">

                <strong>
                    ${feature.name}
                </strong>

                <small>
                    +${feature.price.toLocaleString("ru-RU")} ₸
                </small>

            </span>
        `;

        const checkbox = label.querySelector("input");

        checkbox.addEventListener("change", () => {

            const featureIndex = Number(checkbox.value);

            if (checkbox.checked) {

                state.features.push(featureIndex);

            } else {

                state.features =
                    state.features.filter(
                        (item) =>
                            item !== featureIndex
                    );

            }

            calculateEstimate();

        });

        featuresGrid.appendChild(label);

    });

}


/* =========================
   PAGES VISIBILITY
========================= */

function updatePagesVisibility() {

    const project = projects[state.project];

    if (project.hasPages) {

        pagesBlock.style.display = "block";

    } else {

        pagesBlock.style.display = "none";

    }

}


/* =========================
   CALCULATE
========================= */

function calculateEstimate() {

    const project = projects[state.project];

    const complexity =
        complexityData[state.complexity];


    let price = project.basePrice;

    let days = project.baseDays;


    /* PAGES */

    if (project.hasPages) {

        const extraPages =
            Math.max(0, state.pages - 1);

        price += extraPages * 10000;

        days += extraPages * 1;

    }


    /* FEATURES */

    state.features.forEach((index) => {

        const feature =
            project.features[index];

        if (!feature) return;

        price += feature.price;

        days += feature.days;

    });


    /* COMPLEXITY */

    price =
        price *
        complexity.multiplier;

    days =
        days *
        complexity.multiplier;


    /* DEADLINE */

    if (state.deadline === "flexible") {

        price *= 0.95;

        days *= 1.2;

    }


    if (state.deadline === "urgent") {

        price *= 1.3;

        days *= 0.75;

    }


    price =
        Math.round(price / 5000) * 5000;

    days =
        Math.max(
            1,
            Math.round(days)
        );


    const minDays =
        Math.max(
            1,
            days - Math.ceil(days * 0.2)
        );

    const maxDays =
        days + Math.ceil(days * 0.2);


    /* UPDATE UI */

    estimateProject.textContent =
        project.name;


    estimatePrice.textContent =
        `от ${price.toLocaleString("ru-RU")} ₸`;


    estimateTime.textContent =
        `${minDays}–${maxDays} дней`;


    summaryComplexity.textContent =
        complexity.name;


    summaryPages.textContent =
        project.hasPages
            ? state.pages
            : "—";


    summaryFeatures.textContent =
        state.features.length;

}


/* =========================
   FORM
========================= */

orderForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData =
        new FormData(orderForm);


    const project =
        projects[state.project];


    const orderData = {

        project:
            project.name,

        complexity:
            complexityData[
                state.complexity
            ].name,

        pages:
            project.hasPages
                ? state.pages
                : null,

        features:
            state.features.map((index) =>
                project.features[index].name
            ),

        deadline:
            state.deadline,

        estimatePrice:
            estimatePrice.textContent,

        estimateTime:
            estimateTime.textContent,

        name:
            formData.get("name"),

        contact:
            formData.get("contact"),

        email:
            formData.get("email"),

        description:
            formData.get("description")

    };


    console.log(
        "Новая заявка:",
        orderData
    );


    successModal.classList.add("show");

});


/* =========================
   SUCCESS MODAL
========================= */

function closeModal() {

    successModal.classList.remove("show");

}


closeSuccess.addEventListener(
    "click",
    closeModal
);


successButton.addEventListener(
    "click",
    closeModal
);


successModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === successModal
        ) {
            closeModal();
        }

    }
);


/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-button");

const nav =
    document.querySelector(".nav");


if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "mobile-open"
            );

        }
    );

}


/* =========================
   HEADER
========================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================
   INIT
========================= */

renderFeatures();

updatePagesVisibility();

calculateEstimate();
