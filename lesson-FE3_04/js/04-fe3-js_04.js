console.log(
    '%c 4.Тернарний оператор ',
    'color: white; background-color: #D33F49',
);

//! 4.Тернарний оператор

//? Тернарний оператор використовується у якості
//? синтаксично коротшої заміни інструкції if...else,
//? коли одній і тій самій змінній необхідно присвоїти
//? різні значення за умовою.
//todo:  (умова) ? <вираз_якщо_умова_правдива(true)> : <вираз_якщо_умова_хибна(false)>

//? ПРИКЛАД-1 (if...else):
console.log(
    "%c ПРИКЛАД-1 (if...else): ",
    "color: yellow; background-color: #2274A5",
);
let type1;
const age1 = 20;

if (age1 >= 18) {
    type1 = "adult";
} else {
    type1 = "child";
}

console.log('type1:', type1);  //! "adult"
console.log("---------------------------------");


//? ПРИКЛАД-2 (тернарний оператор):
console.log(
    "%c ПРИКЛАД-2 (тернарний оператор): ",
    "color: yellow; background-color: #2274A5",
);
const age2 = 20;
const type2 = age2 >= 18 ? "adult" : "child";
console.log('type2:', type2);  //! "adult"
console.log("---------------------------------");


//? ПРИКЛАД-3. Пошук більшого числа (if...else):
console.log(
    "%c ПРИКЛАД-3 (if...else):  ",
    "color: yellow; background-color: #2274A5",
);
const num13 = 5;
const num23 = 10;
let biggerNumber3;

if (num13 > num23) {
    biggerNumber3 = num13;
} else {
    biggerNumber3 = num23;
}

console.log('biggerNumber3:', biggerNumber3); //! 10
console.log("---------------------------------");


//? ПРИКЛАД-4. Пошук більшого числа (тернарний оператор):
console.log(
    "%c ПРИКЛАД-4 (тернарний оператор): ",
    "color: yellow; background-color: #2274A5",
);
const num14 = 5;
// const num14 = 20;
const num24 = 10;
const biggerNumber4 = num14 > num24 ? num14 : num24;

console.log('biggerNumber4:', biggerNumber4); //! 10
console.log("---------------------------------");
