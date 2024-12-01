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
console.log("myMessage:", myMessage); //! Mango is happy


//? Під час конкатенації можна використовувати значення змінних, 
//? щоб складати рядки з динамічними значеннями
const age = 24;
const newMessage = "Poly is " + age + " years old!";
console.log("newMessage:", newMessage); //! Poly is 24 years old!
console.log("-----------------------------------");


//? Під час конкатенації будь-який тип даних
//? буде приведено до рядка та поєднано з іншим рядком.
console.log("'Mango' + 55:", 'Mango' + 55); //! Mango55
console.log("'Mango' + true:", 'Mango' + true); //! Mangotrue
console.log("-----------------------------------");


//? Порядок операндів має значення.
//? Перетворення типів відбувається лише в момент операції додавання з рядком.
console.log("1 + '2':", 1 + '2'); //! 12
console.log("1 + '2' + 4:", 1 + '2' + 4); //! 124
console.log("1 + 2 + '4':", 1 + 2 + '4'); //! 34
console.log("-----------------------------------");


//todo Перетворення різних типів в рядки 
//? Явне
console.log("String(5):", String(5)); //! "5"
console.log("String('5'):", String('5')); //! "5"
console.log("String(true):", String(true)); //! "true"
console.log("String(undefined):", String(undefined)); //! "undefined"
console.log("String(null):", String(null)); //! "null"
console.log("String(NaN):", String(NaN)); //! "NaN"
console.log("-----------------------------------");

//? Неявне - автоматично під час виконання операцій або обчислень
console.log("5" + 3); //?"53"
console.log("5" + true);
console.log("5" + undefined); 
console.log("-----------------------------------");