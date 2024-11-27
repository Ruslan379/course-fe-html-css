// console.log('3.Оператори рівності та нерівності');
console.log(
    '%c 3.Оператори рівності та нерівності ',
    'color: white; background-color: #D33F49',
);

//! Оператори 
//! строгої(суворої) та 
//! нестрогої(несуворої)
//! рівності і нерівності
let a;
let b;
a == b   //? нестрога (несувора) рівність
a === b  //? строга (сувора) рівність
a != b   //? нестрога (несувора) нерівність
a !== b  //? строга (сувора) нерівність

a = 100;
b = "100";
console.log("a =", a, ";", "typeof a =", typeof a);
console.log("b =", b, ";", "typeof b =", typeof b);
console.log("-----------------------------");

console.log("a == b:", a == b); //! true
console.log("a === b:", a === b); //! false
console.log("a != b:", a != b); //! false
console.log("a !== b:", a !== b); //! true


//? Оператори нестрогої (несуворої) рівності:
console.log("ПРИКЛАДИ:");
console.log("5 == 5:", 5 == 5); //! true 
console.log("5 == 3:", 5 == 3); //! false 
console.log("5 != 3:", 5 != 3); //! true
console.log("5 != 5:", 5 != 5); //! false 
//todo -  Погано, бо виконується неявне перетворення рядків
//todo    і булевого значення до ЧИСЛА:
console.log("------- неявне перетворення до ЧИСЛА -------");
console.log('5 == 5:', 5 == 5); //! true
console.log('5 == "5":', 5 == "5"); //! true 
console.log('5 != "5":', 5 != "5"); //! false 
//* Boolean
console.log("1 == true:", 1 == true); //! true
console.log('"1" == true:', "1" == true); //! true
console.log("[1] == true:", [1] == true); //! true
console.log("1 != true:", 1 != true); //! false


//? Оператори строгої (суворої) рівності:
//todo -  Добре, перетворення типів не виконується:
console.log("---- перетворення до ЧИСЛА не виконується ----");
console.log("5 === 5:", 5 === 5); //! true 
console.log('5 === "5":', 5 === "5"); //! false 
console.log('5 !== "5":', 5 !== "5"); //! true
console.log('5 !== "5":', 5 !== "5"); //! true
//* Boolean
console.log("1 === true:", 1 === true); //! false
console.log("1 != true:", 1 !== true); //! true 






//! ПРАКТИКА
//todo [0]
// let resultOne = "25" - 5;
// console.log(resultOne);
// console.log(typeof resultOne);

// let resultTwo = 10 * "80";
// console.log(resultTwo);
// console.log(typeof resultTwo);

//? Пріорітет операторів

//? Різний пріорітет
// let resultOne = 2 - 1 * 5;
// console.log(resultOne);

//? Скобки
// let resultTwo = (2 - 1) * 5;
// console.log(resultTwo);

//? Однаковий пріорітет
// let resultThree = 2 - 1 + 5;
// console.log(resultThree);


//todo [1]
//? Доповни код, присвоївши змінній totalPrice вираз для підрахунку 
//? загальної суми замовлення. Змінна pricePerItem зберігає ціну за одиницю товару,
//?  а orderedQuantity - кількість одиниць товару в замовленні.

//? const pricePerItem = 3500;
//? const orderedQuantity = 4;

//? const totalPrice = pricePerItem * orderedQuantity;


//todo [2]
//? Заміни у виразах стандартні математичні оператори на комбіновані оператори

// let a = 5;
// let b = 10;
let c = 15;
let d = 20;

//? Change code below this line
// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


//todo [3]
//? Оголоси змінну isAdult та задай їй результат перевірки значення змінної age.
//?  Використай оператори порівняння та доповни код так, щоб 
//?  значенням isAdult було true, якщо вік користувача більше або дорівнює 18 
//?  та false, якщо менше 18.
// const age = 16;
// const isAdult = age >= 18;


//todo [4]
//? Оголоси змінну isValid і задай їй значенням результат перевірки
//?  рівності паролей в змінних correctPassword і userPassword.
//? Якщо паролі співпадають (сувора рівність), значення isValid має бути true
//? Якщо паролі не співпадають, значення isValid має бути false

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";
const isValid = correctPassword === userPassword;

// let a = 1 + 2;
// let b = 2;

// let result = 8 - (a = b + 3);
// console.log("Результат в скобках: " + a);
// console.log("Общий результат: " + result);
