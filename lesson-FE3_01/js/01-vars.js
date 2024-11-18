console.log('Оголошення змінних');

/*
    !- Виведення даних
 * - console.log()
 * - Змінні
 * - const та let
 * - Унiкальнiсть iдентифiкатора
 * - іменування змінних
 */
//виведення даних в консоль розробника..............
// console.log("JavaScript is awesome!");
// console.log(10);
// console.log(50);
// console.log("Hello");

//! Оголошення змінної......................................
// Оголошення змінної починається з ключового слова -> (const)
// потім ідентифікатор (унікальне імя) -> (age)
// потім оператор присвоєння -> (=)
// потім значення -> (20)

//? Інструкція оголошення змінної з ключовим словом const

const age = 20;
// console.log(age); // 20
// console.log("age:", age);

const username = "Mango";
// console.log(username); // "Mango"
// console.log("username:", age);

//! Ключове слово let
//? Для оголошення змінної, 
//? якій згодом можна задати нове значення - let
// let myName;
let myName = "Mango";
// console.log('myName:', myName); // "Mango"

// myName = "Poly";
// console.log('myName:', myName); // "Poly"

//! Ключове слово const
//todo Якщо змінна оголошена як const, 
//todo перевизначити її значення неможливо!!! 

const companyName = "Mango";
// console.log('companyName:', username); // "Mango"

//! ❌ Неправильно, буде помилка
// username = "Poly"; //! TypeError: Assignment to constant variable.

// Створення змінної без ключового слова let або const 
// у режимі ”strict mode” призведе до помилки................


// //! Ключове слово let (2-й варіант)
let clientname;
//? змінна let ініціалізується зі спеціальним значенням undefined
// console.log('clientname:', clientname); //! undefined

//? Ініціалізація clientname
// clientname = "Mango";
// console.log('clientname:', clientname); // "Mango"

age = 15; // Uncaught TypeError: Assignment to constant variable.
// console.log('age:', age); // ReferenceError: age is not defined


// розробник звертається до змінної до її оголошення...........
// Неможливо отримати доступ до змінної до її ініціалізаці
// ❌ Неправильно, буде помилка
// console.log('age:', age); // ReferenceError: age is not defined

// Оголошення змінної age
// let age = 20;

// ✅ Правильно, звертаємося після оголошення
// age = 25;
// console.log(age); // 25



// practice

// 1
// Використовуючи два console.log() напиши код, який виведе в консоль
//  інструментів розробника два значення: рядок "" та число
// console.log("Jacob Mercer")
// console.log(26)

// 2
// За допомогою ключового слова const оголоси дві змінні: 
// productName - для зберігання назви товару, 
// pricePerItem - для зберігання ціни за одиницю товару.

// 3
// Ім'я товару змінили на "my cup" і збільшили його ціну на 50 кредитів. 
// Перевизнач значення змінних pricePerItem і productName після їх оголошення.

let productName = "cup";
let pricePerItem = 200;

// Change code below this line
productName = "";
pricePerItem = "";

// 4 чи є тут помилка?

// const username = "Mango";
// username = "Poly";


// 5 чи є тут помилка?

// console.log(username);
// const username = "Mango";




