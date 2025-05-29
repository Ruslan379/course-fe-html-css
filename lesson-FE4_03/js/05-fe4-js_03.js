console.log(
    '%c 5.Використання Intersection Observer.      \n   Приклад-2: Анімація елементів при появі. ',
    'color: white; background-color: #D33F49',
);

//! Приклад-2. Анімація елементів при появі 
console.warn("Приклад-2. Анімація елементів при появі:");
const sections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(
            entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target); //todo: Видаляє елемент зі списку відслідковуваних елементів
                    console.log(`Секція ${entry.target.textContent} з'явилась!`);
                }
            }
        );
    },
    {
        threshold: 0.2, //todo: Викликається, коли 20% об'єкта видно
    }
);

sections.forEach(section => observer.observe(section));
console.log("---------------------------------------------");
