console.log(
    '%c 1.Перебирання об\'єкта. \n   Цикл for...in​.       ',
    'color: white; background-color: #D33F49',
);

//! Перебирання об'єкта
//? ✳️ На відміну від масиву або рядка,
//? об'єкт - це неітерабельна сутність,
//? тобто його не можна перебрати циклами
//? for або for...of.

//! Цикл for...in
//? ✴️ Для перебирання об'єктів використовується 
//? спеціальний цикл for...in, 
//? який перебирає КЛЮЧІ об'єкта object.
const object = {
    0: 2,
    1: 21,
    2: 34,
    3: 89,
    4: 144
};
console.log("object:", object);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// for (const key of object) {
//     console.log(key); //! ❌ TypeError: object is not iterable
// };

for (const key in object) {
    console.log(`${key}: ${object[key]}`); //! ✅
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✳️ Змінна key доступна тільки в тілі циклу.
//? На кожній ітерації в неї буде записано
//? значення ключа (ім'я) властивості.
//? Для того, щоб отримати значення властивості
//? з таким ключем (ім'ям),
//? використовується синтаксис квадратних дужок.
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};
console.log("book:", book);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

for (const key in book) {
    //todo: var.1:
    //! Ключ
    console.log("key:", key);
    //! Значення властивості з таким ключем
    // console.log("this:", this); //! undefined
    console.log("book[key]:", book[key]);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");
    
    //todo: var.2:
    // console.log(`${key}: ${book[key]}`);
};
console.log("--------------------------------------------------------------------------------------------------");


