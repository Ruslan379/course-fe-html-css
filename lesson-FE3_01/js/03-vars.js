console.warn('3.Виведення даних в консоль розробника.\n    Оголошення змінних');

//! Виведення даних в консоль розробника(DevTools)
console.log(10);
console.log(50);
console.log("50");
console.log("50");
console.log("Hello");
console.log("JavaScript is awesome!");
console.log(true);
console.log(null);
console.log(undefined);
console.log("-----------------------");


//! Оголошення змінної
//? Змінні  — це контейнери(коробки, бокси) для зберігання даних

//! Імена змінних
//? Використовуэться camelCase - нотація для ідентифікаторів - яка э стандартом!
//? Перше слово пишеться малими літерами, а кожне наступне починається з великої.
//* Наприклад: user, greetUser, getUserData, isActive, activeGuestCount, totalWorkerSalary.


//! Інструкція оголошення змінної з ключовим словом const
//? Оголошення змінної починається з ключового слова - const
//? потім ідентифікатор (унікальне імя) - age
//? потім оператор присвоєння - =
//? потім значення - 20
const age = 20;
console.log(age); //! 20
console.log("age:", age); //! age: 20

const companyName = "Mango";
console.log(companyName); //! "Mango"
console.log("companyName:", companyName); //! username: 20

//todo Якщо змінна оголошена як const,
//todo перевизначити її значення НЕМОЖЛИВО!!!

//! ❌ Неправильно, буде помилка
// companyName = "Poly"; //! TypeError: Assignment to constant variable.
console.log("-----------------------");

//! var.1 - Інструкція оголошення змінної з ключовим словом let
//todo Для того, щоб оголосити змінну, якій у подальшому
//todo можна буде присвоїти НОВЕ ЗНАЧЕННЯ,
//todo використовується ключове слово let.
//? Оголошення змінної починається з ключового слова - let
//? потім ідентифікатор (унікальне імя) - сurrentMonth
//? потім оператор присвоєння - =
//? потім значення - "January"
let сurrentMonth = "January";
console.log('сurrentMonth:', сurrentMonth); //! "January"

//? Ключове слово let
//* Якщо змінна оголошена як let,
//* перевизначити її значення МОЖЛИВО!!!
сurrentMonth = "February";
console.log('сurrentMonth:', сurrentMonth); //! "February"


//todo Створення змінної без ключового слова let або const 
//todo у режимі ”strict mode” призведе до помилки
// currentYear = 2024;

//! Ключове слово let (Невизначена змінна (undefined))
// let clientname;
//?  — це змінна, яка була оголошена ключовим словом let, 
//? але не ініціалізована значенням. 
//? За замовчуванням їй присвоюється початкове значення undefined.
// console.log('clientname:', clientname); //! undefined

//? Ініціалізація clientname
// clientname = "Mango";
// console.log('clientname:', clientname); // "Mango"

// age = 15; // Uncaught TypeError: Assignment to constant variable.
// console.log('age:', age); // ReferenceError: age is not defined


//! Розробник звертається до змінної до її оголошення
//! Неможливо отримати доступ до змінної до її ініціалізаці
//! ❌ Неправильно, буде помилка:
// console.log('age:', age); //! ReferenceError: age is not defined

//? Оголошення змінної age
// let age = 20;

//* Правильно, звертаємося після оголошення
// age = 25;
// console.log("age:", age); // 25


//! Імена КОНСТАНТ 
//? Константа, що зберігає значення кольору
const COLOR_TEAL = "#009688";

//? Константа, що зберігає повідомлення про результат логіну
const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо!";


//! Практика
//? 1
// Використовуючи два console.log() напиши код, який виведе в консоль
// інструментів розробника два значення: рядок "" та число
// console.log("Jacob Mercer")
// console.log(26)

//? 2
// За допомогою ключового слова const оголоси дві змінні: 
// productName - для зберігання назви товару, 
// pricePerItem - для зберігання ціни за одиницю товару.

//? 3
// Ім'я товару змінили на "my cup" і збільшили його ціну на 50 кредитів. 
// Перевизнач значення змінних pricePerItem і productName після їх оголошення.

let productName = "cup";
let pricePerItem = 200;

// Change code below this line
productName = "";
pricePerItem = "";

//? 4 чи є тут помилка?

// const username = "Mango";
// username = "Poly";


//? 5 чи є тут помилка?

// console.log(username);
// const username = "Mango";




