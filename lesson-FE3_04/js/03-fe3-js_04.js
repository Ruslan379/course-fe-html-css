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
let cost1 = 0;
const subscription1 = "pro";

if (subscription1 === "pro") {
    cost1 = 100;
}

console.log("cost1:", cost1); //! 100

//? Якщо умова приводиться до false,
//? код у фігурних дужках буде пропущений.
let cost2 = 0;
const subscription2 = "free";

if (subscription2 === "pro") {
    cost2 = 100;
}

console.log("cost2:", cost2); //! 0
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
let condition2 = true;
// let condition2 = false;
if (condition2) {
    // тіло if
    console.log("тіло if");
} else {
    // тіло else
    console.log("тіло else");
}
console.log("_____________________________");

//? ПРИКЛАДИ:
// console.log("a =", a, ";", "typeof a =", typeof a);
console.log("-----------------------------");


//! 3-3.Інструкція: «else...if»
console.log(
    "%c 3-3.Інструкція: «else...if» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/03_instructions-else...if.jpg");
//?
// console.log("a =", a, ";", "typeof a =", typeof a);
console.log("-----------------------------");
