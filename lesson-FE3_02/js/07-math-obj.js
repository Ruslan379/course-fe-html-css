// console.log('7.Об'єкт Math'); //! var-0.Приклад неможливості використання одинарних лапок
// console.log("7.Об'єкт Math"); //? var-1. Множинні аргументи з використанням подвійних лапок
// console.log(`7.Об'єкт Math`); //? var-2. Шаблонні рядки (template literals).
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
console.log("Math.floor(1.2):", Math.floor(1.2)); //! 1
console.log("Math.floor(1.5):", Math.floor(1.5)); //! 1
console.log("Math.floor(1.9):", Math.floor(1.9)); //! 1


//! Math.ceil(num): 
//? - повертає найближче ціле число, 
//? яке є БІЛЬШИМ, або дорівнює зазначеному числу num
console.log(
    "%c Math.ceil(num): ",
    "color: yellow; background-color: #2274A5",
);
console.log("Math.ceil(1.2):", Math.ceil(1.2)); //! 2
console.log("Math.ceil(1.5):", Math.ceil(1.5)); //! 2
console.log("Math.ceil(1.9):", Math.ceil(1.9)); //! 2


//! Math.round(num): 
//?  - повертає значення числа після 
//? округлення до найближчого цілого.
console.log(
    "%c Math.round(num): ",
    "color: yellow; background-color: #2274A5",
); 
console.log("Math.round(1.2):", Math.round(1.2)); //! 1
console.log("Math.round(1.5):", Math.round(1.5)); //! 2
console.log("Math.round(1.9):", Math.round(1.9)); //! 2


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
const result = Math.pow(primeNumber, power);
console.log("Math.pow(primeNumber, power) =", result);
console.log("primeNumber ** power =", primeNumber ** power);


//! Math.max(num1, num2, ...): 
//?  - повертає НАЙБІЛШЕ число з набору переданих чисел.
console.log(
    "%c Math.max(num1, num2, ...): ",
    "color: yellow; background-color: #2274A5",
);
console.log("Math.max(20, 10, 50, 40):", Math.max(20, 10, 50, 40)); //! 50


//! Math.min(num1, num2, ...): 
//? - повертає НАЙМЕНЬШЕ число з набору переданих чисел
console.log(
    "%c Math.min(num1, num2, ...): ",
    "color: yellow; background-color: #2274A5",
);
console.log("Math.min(20, 10, 50, 40):", Math.min(20, 10, 50, 40)); //! 10


//! Math.random(): 
//? -повертає випадкове число
//?  в діапазоні від 0 (включно) до 1 (за винятком)
//todo Приклад: Генерація випадкового числа між 0 і 1:
console.log(
    "%c Math.random(): ",
    "color: yellow; background-color: #2274A5",
);
console.warn("Math.random():", Math.random()); //! випадкове число від 0 до 1


//! Цікавий приклад - випадкова зміна кольору фона!
//todo Math.random() * (max - min) + min
console.log(
    "%c ПРИКЛАД: випадкова зміна кольору фона ",
    "color: yellow; background-color: #2274A5",
);
const arrayColors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const min = 0;
const max = arrayColors.length - 1;
console.log("min =", min, ",", "max =", max);

const mathRandomNumber = Math.random() * (max - min) + min;
console.log("mathRandomNumber:", mathRandomNumber);
const index = Math.round(mathRandomNumber);
// const index = Math.round(Math.random() * (max - min) + min);
console.log("index:", index);

const color = arrayColors[index];
console.log("background-сolor:", color);
// document.body.style.backgroundColor = color; //! увімкнути для демонстрації прикладу







//! ПРАКТИКА
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