console.log(
    '%c 3.Оператори розгалуження.         \n   Інструкції:                     \n   «if», «if...else», «else...if». ',
    'color: white; background-color: #D33F49',
);


//! Оператори розгалуження.
//? Логічні оператори не можуть самостійно
//? управляти потоком виконання програми.
//? Для цього використовуються розгалуження.
//? Всі вони влаштовані за одним принципом —
//? вхідні дані приводяться до булю(true або false) і,
//? в залежності від результату цього значення(умова(condition)),
//? потік програми направляється в ту чи іншу гілку.


//! 3-1.Інструкція: «if»
console.log(
    "%c 3-1.Інструкція: «if» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/01_instructions-if.jpg");
//? Вхідні дані, які приводяться до булевого типу називаються умовою(condition).
//? Умову поміщають за оператором if у круглих дужках.
//? Якщо умова приводиться до true, то виконується код в фігурних дужках(гілка).
//? Якщо умова приводиться до false, код у фігурних дужках буде пропущений.
let condition1 = true;
// let condition1 = false;
if (condition1) {
    // тіло if
    console.log("тіло if");
};
console.log("_____________________________");

//? ПРИКЛАДИ:
//? Якщо умова приводиться до true,
//? то виконується код у фігурних дужках тіла if.
let cost11 = 0;
const subscription11 = "pro";

if (subscription11 === "pro") {
    cost11 = 100;
}

console.log("cost11:", cost11); //! 100

//? Якщо умова приводиться до false,
//? код у фігурних дужках буде пропущений.
let cost12 = 0;
const subscription12 = "free";

if (subscription12 === "pro") {
    cost12 = 100;
}

console.log("cost12:", cost12); //! 0
console.log("-----------------------------");


//! 3-2.Інструкція: «if...else»
console.log(
    "%c 3-2.Інструкція: «if...else» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/02_instructions-if...else.jpg");
//? Розширює синтаксис if таким чином,
//? що якщо умова приводиться до false, виконається код у
//? фігурних дужках після оператора else.
// let condition2 = true;
let condition2 = false;
if (condition2) {
    // тіло if
    console.log("тіло if");
} else {
    // тіло else
    console.log("тіло else");
}
console.log("_____________________________");

//? ПРИКЛАДИ:
//? Якщо умова приводиться до true,
//? тіло блока else ігнорується.
let cost21;
const subscription21 = "pro";

if (subscription21 === "pro") {
    cost21 = 100;
} else {
    cost21 = 0;
}

console.log("cost21:", cost21); //! 100

//? Якщо умова приводиться до false,
//? тіло блока if ігнорується.
let cost22;
const subscription22 = "free";

if (subscription22 === "pro") {
    cost22 = 100;
} else {
    cost22 = 0;
}

console.log("cost22:", cost22); //! 0
console.log("-----------------------------");


//! 3-3.Інструкція: «else...if»
console.log(
    "%c 3-3.Інструкція: «else...if» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/03_instructions-else...if.jpg");
//? Конструкція if...else може перевірити і зреагувати
//? на виконання або невиконання лише однієї умови.
//? Блок else...if дозволяє додати після else
//? ще один оператор if з умовою.
//? В кінці ланцюжка може бути класичний блок else,
//? який виконається лише у тому випадку,
//? якщо жодна умова не приведеться до true.
// let condition31 = true;
let condition31 = false;

// let condition32 = true;
let condition32 = false;

// let condition33 = true;
let condition33 = false;

if (condition31) {
    // тіло if-1
    console.log("тіло if-1");
} else if (condition32) {
    // тіло else if-2
    console.log("тіло else if-2");
} else if (condition33) {
    // тіло else if-3
    console.log("тіло else if-3");
}
console.log("_____________________________");

//? ПРИКЛАД:
//? При першому true перевірки припиняться і виконається 
//? лише один сценарій, який відповідає цьому true.
//? Тому, такий запис варто читати як: 
//? шукаю перший збіг умови, ігнорую все інше.
let cost3;
// const subscription = "free";
// const subscription = "pro";
const subscription3 = "premium";
// const subscription3 = "personal";

if (subscription3 === "free") {
    cost3 = 0;
} else if (subscription3 === "pro") {
    cost3 = 100;
} else if (subscription3 === "premium") {
    cost3 = 500;
} else {
    console.log("Invalid subscription type");
}

console.log("cost3:", cost3); //! 500
