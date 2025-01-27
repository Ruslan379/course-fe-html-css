console.log(
    '%c 1.Створення об\'єкта.      \n   Доступ до властивостей. \n   Видалення властивостей. ',
    'color: white; background-color: #D33F49',
);

//! Визначення об'єкта
//? Об'єкти дозволяють описати і згрупувати
//? характеристики певної сутності
//? - користувача, книги, продукту в магазині,
//? чого завгодно.
//? Об'єкти ще називають словниками, тобто
//? вони містять терміни (імена властивості або ключі)
//? та їх визначення (значення).


//! Створення об'єкта
console.warn("Створення об'єкта:");
//todo: Приклад-1: створення масива:
const array = [2, 21, 34, 89, 144];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i}: ${element}`);
};
console.log("array:", array);
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");

//? Для оголошення(створення) об'єкта
//? використовуються фігурні дужки {} - літерал об'єкта.
//todo: Приклад-2: створення об'єкта:
let object = {0: 2, 1: 21, 2: 34, 3: 89, 4: 144};

// for (const element of object) {
//     console.log(element); //! ❌ TypeError: object is not iterable
// };

for (const element in object) {
    console.log(`${element}: ${object[element]}`); //! ✅
};

//? Змінемо запис об'єкта не змінюючи його властивостей:
object = {
    0: 2,
    1: 21,
    2: 34,
    3: 89,
    4: 144
};

console.log("object:", object);
console.log("typeof object:", typeof object); //! object
console.log("typeof null:", typeof null); //! object
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");

//? Замінемо "індекси" на інші:
const object2 = {
    перший: 2,
    другий: 21,
    третій: 34,
    четвертий: 89,
    "п'ятий": 144,
    // перший: 6765, //! ❓❓❓
};

console.log("object2:", object2);
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");

//? Замінемо послідовність "індексів" на іншу:

const object3 = {
    "п'ятий": 144,
    четвертий: 89,
    перший: 2,
    третій: 34,
    другий: 21
};

console.log("object3:", object3);
//! Послідовність запису властивостей може бути будь якою!
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");


//todo: Приклад-3: створення об'єкта:
//? Об'єкт складається(створюється) за допомогою властивостей,
//? кожна з яких описується параметрами - КЛЮЧ: ЗНАЧЕННЯ.
//? КЛЮЧ ще називають ІМ'ЯМ властивості і це завжди рядок!
//? ЗНАЧЕННЯМ властивості можуть бути будь-які типи:
//? примітиви, булі, змінні, масиви, функції, об'єкти тощо. 
//? Властивості розділяються комою.
const genres2 = ["adventure2", "historical prose2"];

const bookObject = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    genres2: genres2,
    // genres2, //! короткі властивості
    isPublic: true,
    rating: 8.38
};
console.log("bookObject:", bookObject);
console.log("typeof bookObject:", typeof bookObject); //! object
console.log("----------------------------------------------------------------------------------------------------------");



//! Доступ до властивостей
console.warn("Доступ до властивостей:");
