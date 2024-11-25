// console.log('7.Об'єкт Math'); //! var-0.Приклад неможливості використання одинарних лапок
// console.log("7.Об'єкт Math"); //? var-1. Конкатенація рядків (подвійні лапки)
// console.log(`7.Об'єкт Math`); //? var-1. Шаблонні рядки (template literals).

console.log(
    "%c 7.Об'єкт Math ",
    "color: white; background-color: #D33F49",
);

//? Клас Math є вбудованим класом JavaScript
//? Надає набір методів для виконання математичних операцій та роботи з числами

//! Math.floor(num): 
//? - повертає найближче ціле число, 
//? яке є МЕНЬШИМ або дорівнює вказаному числу num
console.log(
    "%c Math.floor(num): ",
    "color: yellow; background-color: #2274A5",
);
// console.log(Math.floor(1.3)); //! 1
// console.log(Math.floor(1.7)); //! 1


//! Math.ceil(num): 
//? - повертає найближче ціле число, 
//? яке є БІЛЬШИМ, або дорівнює зазначеному числу num
console.log(
    "%c Math.ceil(num): ",
    "color: yellow; background-color: #2274A5",
);
// console.log(Math.ceil(1.3)); //! 2
// console.log(Math.ceil(1.7)); //! 2


//! Math.round(num): 
//?  - повертає значення числа після 
//? округлення до найближчого цілого.
console.log(
    "%c Math.round(num): ",
    "color: yellow; background-color: #2274A5",
); 
// console.log(Math.round(1.3)); //! 1
// console.log(Math.round(1.7)); //! 2


//! Math.pow(number, power):
//? - зведення в ступінь
console.log(
    "%c Math.pow(number, power): ",
    "color: yellow; background-color: #2274A5",
);
const primeNumber = 2;
const power = 5;
console.log("primeNumber =", primeNumber);
console.log("power =", power);
console.log("--------------");
const result = Math.pow(primeNumber, power);
console.log("Math.pow(primeNumber, power) =", result);
console.log("primeNumber ** power =", primeNumber ** power);


//! Math.max(num1, num2, ...): 
//?  - повертає найбільше число з набору переданих чисел.
console.log(
    "%c Math.max(num1, num2, ...): ",
    "color: yellow; background-color: #2274A5",
);
// console.log(Math.max(20, 10, 50, 40)); // 50



//! Math.min(num1, num2, ...): 
//? - повертає найменше число з набору переданих чисел
console.log(
    "%c Math.min(num1, num2, ...): ",
    "color: yellow; background-color: #2274A5",
);
// console.log(Math.min(20, 10, 50, 40)); // 10


//! Math.random(): 
//? -повертає випадкове число
//?  в діапазоні від 0 (включно) до 1 (за винятком)
//? Приклад: випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294
console.log(
    "%c Math.random(): ",
    "color: yellow; background-color: #2274A5",
);
// console.log(Math.random()); 


//! Цікавий приклад!!!!!!!!!!
//! Math.random() * (max - min) + min
// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;







//! ПРАККТИКА
//todo [0]
// let numOne = Math.ceil(5.8);
// let numTwo = Math.ceil(2.2);
// let numThree = Math.ceil(-2.2);

// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);


//todo [1]
// let numOne = Math.round(5.8);
// let numTwo = Math.round(2.2);
// let numThree = Math.round(-2.2);

// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);


//todo [2]
// Задача №2. Отримати число 135.58 з рядка
let value = "135.58px";
// console.log(Number.parseFloat(value));

//todo [4]
// Задача №4.
// Знайти максимальнечисло з 10,58,39,-150,0
// console.log(Math.max(10,58,39,-150,0));

//todo [5]
// Задача №5.
// Округлити число 58.858 до числа 58

// console.log(Math.round(58.858));
// console.log(Math.ceil(58.858));
// console.log(58.858.toFixed(0));
// console.log(Math.floor(58.858)); //!!!!


//todo [11]
/* 1
 * Напиши скрипт який каже користувачу ввести число та ступінь,
 * потім зводить число до ступеню та виводить результат в консоль
 */

//  1. попросити ввести число і зберегти в змінну
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

//  2. попросити ввести ступінь та зберегти в змінну

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

//  3. Звести введені дані до ступеня та вивести
// const result = base ** power;

// console.log(result);


//todo [12]
// Напиши скрип,який генерує випадкове число від 10 до 80

// Math.random() * (max - min) + min

// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);


//todo [13]
// let numOne = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
// console.log(numOne);


// let numTwo = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
// console.log(numTwo);


// let numThree = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84
// console.log(numThree);

// складно
// Задача №1. Получить верное значение округления 1.01
// let mynumOne = Math.round(1.005 * 100) / 100;
// console.log(mynumOne); // Выведет 1 что не верно

// console.log(1.005 * 1000);
// console.log(Math.ceil(1.005 * 100) / 100);

// Решение с помощью Number.EPSILON

// let sourceNum = 1.005 + Number.EPSILON;
// console.log(Number.EPSILON);
// let numFour = Math.round(sourceNum * 100) / 100;
// console.log(numFour);

// console.log(sourceNum * 100);
// console.log(Math.round(sourceNum * 100));