console.log(
    '%c 4.Використання Intersection Observer.          \n   Приклад-1: Lazy-loading зображень та тексту. ',
    'color: white; background-color: #D33F49',
);

//! Приклад-1. Lazy-loading зображень та тексту 
console.warn("Приклад-1. Lazy-loading зображень та тексту:");
//? 📌 Як це працює:
//?    🔸 Всі <img> мають атрибут data-src, який містить шлях до зображення.
//?    🔸 Зображення спочатку не завантажуються, оскільки src не встановлено або є зображення-заглушка.
//?    🔸 Коли зображення вперше потрапляє в зону видимості, спрацьовує IntersectionObserver
//?     і скрипт підставляє src = data-src, завантажуючи картинку.
//? ✳️ Такий підхід економить ресурси та покращує продуктивність сайту.
//todo: Відстежування зображеннь
// const images = document.querySelectorAll('img[data-src]');
const images = document.querySelectorAll('.image-observer');

const loadImage = (img) => {
    img.src = img.dataset.src;
};

const observerImg = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observerImg.unobserve(entry.target); //todo: Видаляє елемент зі списку відслідковуваних елементів
                console.log(`Елемент ${entry.target.alt} видно!`);
            }
        });
    },
    {
        threshold: 0.9, //todo: Викликається, коли 90% об'єкта видно
    }
);

images.forEach(img => observerImg.observe(img));
console.log("-----------------------------------------------------------------");


//todo: Відстежування текстів
const texts = document.querySelectorAll('.text-observer');

const observerTxt = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("ТЕКСТ видно!");
                entry.target.style.color = "red";
                // entry.target.style.background = "lightgreen";
            } else {
                console.log("ТЕКСТ пішов із зони видимості...");
                entry.target.style.color = "lightgrey";
            }
        }
        );
    },
    {
        threshold: 0.6, //todo: Викликається, коли 60% об'єкта видно
    }
);

texts.forEach(text => observerTxt.observe(text));
console.log("-----------------------------------------------------------------");
