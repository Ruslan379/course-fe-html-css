// console.log('2.Конкатенація рядків');
console.log(
    '%c 2.Конкатенація рядків ',
    'color: white; background-color: #D33F49',
);

//! Конкатенація рядків
//? Якщо застосувати оператор + до рядка та
//? будь-якого іншого типу даних, 
//? результатом буде новий рядок.
const myMessage = "Mango " + "is " + "happy";
console.log('("Mango " + "is " + "happy"):', myMessage); //! "Mango is happy"


//? Під час конкатенації можна використовувати значення змінних, 
//? щоб складати рядки з динамічними значеннями
const age = 24;
const newMessage = "Poly is " + age + " years old!";
console.log('("Poly is " + age + " years old!"):', newMessage); //! "Poly is 24 years old!"
console.log("-----------------------------------");


//? Під час конкатенації будь-який тип даних
//? буде приведено до рядка та поєднано з іншим рядком.
console.log("'Mango' + 55:", 'Mango' + 55); //! "Mango55"
console.log("'Mango' + true:", 'Mango' + true); //! "Mangotrue"
console.log("-----------------------------------");


//? Порядок операндів має значення.
//? Перетворення типів відбувається лише 
//? в момент операції додавання з рядком.
console.log("1 + '2':", 1 + '2'); //! "12"
console.log("1 + '2' + 4:", 1 + '2' + 4); //! "124"
console.log("1 + 2 + '4':", 1 + 2 + '4'); //! "34"


//todo Перетворення різних типів в рядки
//? Явне - Функція-конструктор String(value)
console.log(
    "%c Явне приведення до рядка - String(value) ",
    "color: yellow; background-color: #2274A5",
);
console.log("String(5):", String(5)); //! "5"
console.log("String('5'):", String('5')); //! "5"
console.log("String(true):", String(true)); //! "true"
console.log("String(undefined):", String(undefined)); //! "undefined"
console.log("String(null):", String(null)); //! "null"
console.log("String(NaN):", String(NaN)); //! "NaN"


//? Явне - метод .toString()
console.log(
    "%c Явне приведення до рядка - .toString() ",
    "color: yellow; background-color: #2274A5",
);
console.log("(5).toString():", (5).toString()); //! "5"
console.log("('5').toString():", ('5').toString()); //! "5"
console.log("(true).toString:", (true).toString()); //! "true"
// console.log("(undefined).toString:", (undefined).toString()); //! Cannot read properties of undefined (reading 'toString')
console.error(`(undefined).toString: Cannot read properties of undefined (reading 'toString')`);
// console.log("(null).toString:", (null).toString()); //! Cannot read properties of null (reading 'toString')
console.error(`(null).toString: Cannot read properties of null (reading 'toString')`)
console.log("(NaN).toString:", (NaN).toString()); //! "NaN"


//? Неявне - автоматично під час виконання операцій або обчислень
console.log(
    "%c Неявне приведення до рядка - конкатенація(+) ",
    "color: yellow; background-color: #2274A5",
);
console.log("'5' + 3:", '5' + 3); //! "53"
console.log("3 + '5':", 3 + '5'); //! "35"
console.log("'5' + true:", '5' + true); //! "5true"
console.log("'5' + undefined:", '5' + undefined); //! "5undefined"
console.log("5 + undefined:", 5 + undefined); //! NaN
console.log("'5' + null:", '5' + null); //! "5null"
console.log("5 + null:", 5 + null); //! 5
console.log("null + undefined:", null + undefined); //! NaN
console.log("undefined + undefined:", undefined + undefined); //! NaN
console.log("null + null:", null + null); //! 0
console.log("-----------------------------------");