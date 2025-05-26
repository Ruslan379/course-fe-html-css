console.log(
    '%c 4.Приклади використання Intersection Observer ',
    'color: white; background-color: #D33F49',
);

//! Приклад-1. Lazy-loading зображень 
console.warn("Приклад-1. Lazy-loading зображень:");
const images = document.querySelectorAll('img[data-src]');

const loadImage = (img) => {
    img.src = img.dataset.src;
};

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer1.unobserve(entry.target);
        }
    });
});

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