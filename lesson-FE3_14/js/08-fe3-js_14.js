console.log(
    '%c 8.Методи every() і some(). ',
    'color: white; background-color: #D33F49',
);

//! Метод every()
console.warn("Синтаксис методу every():");
//? ✴️ Перевіряє, чи проходять ВСІ елементи масиву
//? тест колбек-функції.
//? Повертає true або false.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає true, якщо ВСІ елементи масиву задовольняють умову.
//? 🔸 Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
//? 🔸 Перебирання масиву припиняється, якщо колбек повертає false.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.every((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода every():");
//? ✳️ Приклад-1:
//todo: УСІ елементи більші або дорівнюють нулю? - ТАК
console.log("УСІ елементи [1, 2, 3, 4, 5] більші або дорівнюють нулю? -", [1, 2, 3, 4, 5].every(value => value >= 0)); //! true


//todo:  УСІ елементи більші або дорівнюють нулю? - НІ
console.log("УСІ елементи [1, 2, 3, -10, 4, 5] більші або дорівнюють нулю? -", [1, 2, 3, -10, 4, 5].every(value => value >= 0)); //! false
console.log("-----------------------------------------------------------------------------------------");


//! Метод some()
console.warn("Синтаксис методу some():");
//? ✴️ Перевіряє, чи проходить хоча б ОДИН елемент масиву
//?  тест колбек-функції.
//? Повертає true або false.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає true, якщо хоча б ОДИН елемент масиву задовольняє умову.
//? 🔸 Повертає false, якщо жоден елемент масиву не задовольняє умову.
//? 🔸 Перебирання масиву припиняється, якщо колбек повертає false.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.some((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода some():");
//? ✳️ Приклад-2:
//todo:  Чи є хоча б один елемент, що більший або дорівнює нулю? - ТАК
console.log("Чи є хоча б один елемент з [1, 2, 3, 4, 5], що більший або дорівнює нулю? -", [1, 2, 3, 4, 5].some(value => value >= 0)); //! true

//todo:  Чи є хоча б один елемент, що більший або дорівнює нулю? - ТАК
console.log("Чи є хоча б один елемент з [-7, -20, 3, -10, -14], що більший або дорівнює нулю? -", [-7, -20, 3, -10, -14].some(value => value >= 0)); //! true

//todo:  Чи є хоча б один елемент, що менший нуля? - НІ
console.log("Чи є хоча б один елемент з [1, 2, 3, 4, 5], що менший нуля? -", [1, 2, 3, 4, 5].some(value => value < 0)); //! false

//todo:  Чи є хоча б один елемент, що менший нуля? - ТАК
console.log("Чи є хоча б один елемент з [1, 2, 3, -10, 4, 5], що менший нуля? -", [1, 2, 3, -10, 4, 5].some(value => value < 0)); //! true
console.log("-----------------------------------------------------------------------------------------");


//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✴️ Під час роботи з масивом об'єктів перевіряється
//? значення певної їх властивості.
//? ✳️ Наприклад, у нас є масив об'єктів фруктів,
//? необхідно дізнатися, чи є ВСІ фрукти в наявності
//? та чи є в наявності хоча б ЯКІСЬ фрукти,
//? тобто більше 0 штук.
const fruits = [
    { name: "apples", amount: 100 },
    { name: "bananas", amount: 0 },
    { name: "grapes", amount: 50 },
];
console.log("fruits:", fruits);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo:  every поверне true тільки, якщо усіх фруктів буде більше 0 штук:
const allAvailable = fruits.every(fruit => fruit.amount > 0); 
console.log("allAvailable:", allAvailable); //! false

//todo:  some поверне true, якщо хоча б одного фрукту буде більше 0 штук:
const anyAvailable = fruits.some(fruits => fruits.amount > 0); 
console.log("anyAvailable:", anyAvailable); //! true
console.log("-----------------------------------------------------------------------------------------");
