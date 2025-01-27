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

//todo: Приклад створення масива:
const array = [2, 21, 34, 89, 144];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i}: ${element}`);
};
console.log(". . . . . . . . . . . . . . . . . . . . . .");

//? Для оголошення об'єкта використовуються
//? фігурні дужки {} - літерал об'єкта.
//todo: Приклад створення об'єкта:
let object = { 0: 2, 1: 21, 2: 34, 3: 89, 4: 144 };

// for (const element of object) {
//     console.log(element); //! ❌ TypeError: object is not iterable
// };

for (const element in object) {
    console.log(`${element}: ${object[element]}`); //! ✅
};

object = {
    0: 2,
    1: 21,
    2: 34,
    3: 89,
    4: 144
};

console.log("object:", object);
console.log("typeof object:", typeof object); //! object
console.log(". . . . . . . . . . . . . . . . . . . . . .");

const object2 = {
    перший: 2,
    другий: 21,
    третій: 34,
    четвертий: 89,
    "п'ятий": 144,
    // перший: 6765,
};

console.log("object2:", object2);
console.log(". . . . . . . . . . . . . . . . . . . . . .");


//? Під час створення об'єкта можна додати властивості,
//? кожна з яких описується параметрами -  КЛЮЧ: ЗНАЧЕННЯ. 
//? КЛЮЧ ще називають ІМ'ЯМ властивості і це завжди рядок! 
//? ЗНАЧЕННЯМ властивості можуть бути будь-які типи: 
//? примітиви, масиви, об'єкти, булі, функції тощо. 
//? Властивості розділяються комою.
const bookObject = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log("bookObject:", bookObject);
console.log("typeof bookObject:", typeof bookObject); //! object
console.log("typeof null:", typeof null); //! object
console.log("---------------------------------------------------------------------------");




//? Приклади:
//todo: isInfant() — «чи це немовля?»
