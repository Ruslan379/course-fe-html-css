console.log(
    '%c 1.Створення об\'єкта.                \n   Доступ до властивостей.           \n   Доступ до вкладених властивостей. \n   Видалення властивостей.           \n   next',
    'color: white; background-color: #D33F49',
);

//! Визначення об'єкта
//? ✳️ При описі якоїсь сутності:
//? користувача, гостя, продукту,
//? необхідна структура дозволяє зберігати
//? всі характеристики докладно і в одному місці.
//? В більшості мов програмування
//? для цього є типи даних Object (об'єкт).
//? ✳️ З точки зору мови програмування, об'єкт
//? — це набір властивостей і методів.
//? ✳️ З точки зору розробника об'єкт
//? — це абстракція, що описує якісь дані
//? і функції для обробки цих даних.


//! Створення об'єкта
console.warn("Створення об'єкта:");
//? ✴️ Об'єкт — асоціативний масив, тип даних, який зберігає
//? властивості (properties) і методи (methods).
//todo: Приклад-1: створення масива:
const array = [2, 21, 34, 89, 144];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i}: ${element}`);
};
console.log("array:", array);
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Створення(оголошення) об'єкта через літерал
//? схоже на створення масиву [] -- літерал масива,
//? тільки використовуються фігурні дужки {} - літерал об'єкта,
//? а не квадратні дужки.
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

//? Замінемо "індекси"(властивості (properties)) на інші:
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

//? Замінемо послідовність "індексів"(властивостей (properties))
//? та їх знаачень на іншу:
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
//? ✳️ Об'єкти дозволяють описати і згрупувати
//? характеристики певної сутності
//? - користувача, книги, продукту в магазині,
//? чого завгодно.
//? Об'єкти ще називають словниками, тобто
//? вони містять терміни (імена властивості або ключі)
//? та їх визначення (значення).
//? ✴️ Об'єкт складається(створюється) за допомогою властивостей,
//? кожна з яких описується параметрами - КЛЮЧ: ЗНАЧЕННЯ.
//? КЛЮЧ ще називають ІМ'ЯМ властивості і це завжди рядок!
//? ЗНАЧЕННЯМ властивості можуть бути будь-які типи:
//? примітиви, булі, змінні, масиви, функції, об'єкти тощо. 
//? Властивості розділяються комою.
const genres2 = ["adventure2", "historical prose2"];

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    genres2: genres2,
    // genres2, //! короткі властивості
    isPublic: true,
    rating: 8.38
};
console.log("book:", book);
console.log("typeof book:", typeof book); //! object
console.log("----------------------------------------------------------------------------------------------------------");



//! Доступ до властивостей
console.warn("Доступ до властивостей (var.1):");
//todo: ✴️ ПЕРШИЙ спосіб отримати доступ до властивості об'єкта
//? - це синтаксис через квадратні дужки: об'єкт["ім'я(ключ)_властивості"].
//? Схоже на звернення до елемента масиву
//? з різницею у тому, що в дужках вказується не індекс елемента,
//? а ім'я властивості у вигляді рядка.
//? ✳️ Синтаксис «квадратних дужок» використовується значно рідше,
//? у разі, коли ім'я(ключ) властивості заздалегідь невідоме
//? або зберігається у змінній, наприклад,
//? як значення імені(ключа) яке зберігається у змінній <propKey>.
//? ✳️ На місці звернення буде повернуто значення властивості з таким ім'ям.
//? ✳️ Якщо об'єкт не містить властивості з таким ім'ям,
//? на місці звернення повернеться undefined.
const book1 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    genres2: genres2,
    // genres2, //! короткі властивості
    isPublic: true,
    rating: 8.38
};

const bookTitle1 = book1["title"];
console.log("bookTitle1:", bookTitle1); //! 'The Last Kingdom'

const bookGenres1 = book1["genres"];
console.log("bookGenres1:", bookGenres1); //! ['historical prose', 'adventurs']

const bookGenres21 = book1["genres2"];
console.log("bookGenres21:", bookGenres21); //! ['adventure2', 'historical prose2']

const bookPrice1 = book1["price"];
console.log("bookPrice1:", bookPrice1); //! undefined

const propKey = "author";
const bookAuthor1 = book1[propKey];
console.log("bookAuthor1:", bookAuthor1); //! 'Bernard Cornwell'
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Доступ до властивостей (var.2):");
//todo: ✴️ ДРУГИЙ спосіб отримати доступ до властивості об'єкта
//? - це синтаксис через крапку: об'єкт.ім'я(ключ)_властивості.
//? ✳️ Синтаксис «через крапку» використовується у більшості випадків
//? і доречний тоді, коли ми заздалегідь знаємо
//? ім'я(ключ) властивості, до якої хочемо отримати доступ.
//? ✳️ На місці звернення буде повернуто значення властивості з таким ім'ям.
//? ✳️ Якщо об'єкт не містить властивості з таким ім'ям, 
//? на місці звернення повернеться undefined.
const book2 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    genres2: genres2,
    // genres2, //! короткі властивості
    isPublic: true,
    rating: 8.38
};

const bookTitle2 = book2.title;
console.log("bookTitle2:", bookTitle2); //! 'The Last Kingdom'

const bookGenres2 = book2.genres;
console.log("bookGenres2:", bookGenres2); //! ['historical prose', 'adventurs']

const bookGenres22 = book2.genres2;
console.log("bookGenres22:", bookGenres22); //! ['adventure2', 'historical prose2']

const bookPrice2 = book2.price;
console.log("bookPrice2:", bookPrice2); //! undefined
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");


//! Звернення (доступ) до вкладених властивостей
console.warn("Звернення (доступ) до вкладених властивостей:");
//? ✴️ Для доступу до вкладених властивостей
//? використовується ланцюжок звернень «через крапку».
//? ✳️ Якщо значення властивості - це масив,
//? у нашому отанньомуприкладі це [genres2],
//? тоді book2.genres2 - звернення до цього масиву.
//? Далі можна отримати доступ до його елементів
//? через квадратні дужки та індекс.
const bookGenres2Item0 = book2.genres2[0];
console.log("bookGenres2Item0:", bookGenres2Item0); //! 'adventure2'

const bookGenresItem1 = book2.genres[1];
console.log("bookGenresItem1:", bookGenresItem1); //! 'adventure'
console.log("----------------------------------------------------------------------------------------------------------");


//! Видалення властивостей
console.warn("Видалення властивостей:");