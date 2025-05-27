console.log(
    '%c 5.Використання Intersection Observer.      \n   Приклад-2: Анімація елементів при появі. ',
    'color: white; background-color: #D33F49',
);

//! Приклад-2. Анімація елементів при появі 
console.warn("Приклад-2. Анімація елементів при появі:");
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