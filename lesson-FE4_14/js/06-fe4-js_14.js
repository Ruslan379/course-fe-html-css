console.log(
    '%c 6.Приклад використання Promise.allSettled(promises)​. \n   "Зоряне небо" на промісах.                         ',
    'color: white; background-color: #D33F49',
);

//! "Зоряне небо" на промісах
console.warn("'Зоряне небо' на промісах:");
const sky = document.getElementById("sky");
const startBtn = document.getElementById("start");
const statusEl = document.getElementById("status");

const STAR_COUNT = 30;
let stars = [];

//todo: створюємо зірки у небі
function createStars() {
    sky.innerHTML = "";
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        sky.appendChild(star);
        stars.push(star);
    }
}

//todo: функція-проміс: запалює зірку на випадковий час
function starPromise(star) {
    return new Promise((resolve) => {
        const delay = 3000 + Math.random() * 4000; // 1-5 сек
        const colors = ["#fff", "#ffd700", "#ff69b4", "#87ceeb", "#00ffcc"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        //todo: включаємо свічення
        star.style.background = color;
        star.classList.add("glow");

        setTimeout(() => {
            //todo: зірка згасла
            star.classList.remove("glow");
            star.style.opacity = 0.2;
            resolve(`Зірка згасла через ${Math.round(delay / 1000)}с`);
        }, delay);
    });
}

startBtn.addEventListener("click", () => {
    console.log("🌟 Зірки засвітилися!");
    statusEl.textContent = "🌟 Зірки засвітилися!";
    createStars();

    const promises = stars.map(star => starPromise(star));

    Promise.allSettled(promises).then(results => {
        statusEl.textContent = "✨ Усі зірки згасли...";
        console.log("Итог:", results);
    });
});

//todo: створюємо зірки під час завантаження
createStars();
console.log("-------------------------------------------------------");
