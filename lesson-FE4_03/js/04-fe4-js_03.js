console.log(
    '%c 4.Приклади використання Intersection Observer ',
    'color: white; background-color: #D33F49',
);

//! Приклад-1. Lazy-loading зображень 
console.warn("Приклад-1. Lazy-loading зображень:");
//? 📌 Як це працює:
//?    🔸 Всі <img> мають атрибут data-src, який містить шлях до зображення.
//?    🔸 Зображення спочатку не завантажуються, оскільки src не встановлено або є зображення-заглушка.
//?    🔸 Коли зображення вперше потрапляє в зону видимості, спрацьовує IntersectionObserver і скрипт підставляє src = data - src, завантажуючи картинку.
//? ✳️ Такий підхід економить ресурси та покращує продуктивність сайту.
// const images = document.querySelectorAll('img[data-src]');
const images = document.querySelectorAll('.image-observer');

const loadImage = (img) => {
    img.src = img.dataset.src;
};

const observer1 = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer1.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.9, //todo: викликається, коли 50% об'єкта видно
    }
);

images.forEach(img => observer1.observe(img));
console.log("-----------------------------------------------------------------");


//! Приклад-2.Анімація елементів при появі 
console.warn("Приклад-2.Анімація елементів при появі :");
const sections = document.querySelectorAll(".animate");

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer2.observe(section));
console.log("-----------------------------------------------------------------");