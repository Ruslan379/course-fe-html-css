console.log(
    '%c 1.Створення об\'єкта.                \n   Доступ до властивостей.           \n   Доступ до вкладених властивостей. \n   Видалення властивостей.           \n   Зміна значення властивості.       \n   Створення властивостей.           \n   Обчислювані властивості.          \n   Короткі властивості.              ',
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
//? - це синтаксис через квадратні дужки: object["key"]
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
console.log('book1["title"]:', bookTitle1); //! 'The Last Kingdom'

const bookGenres1 = book1["genres"];
console.log('book1["genres"]:', bookGenres1); //! ['historical prose', 'adventurs']

const bookGenres21 = book1["genres2"];
console.log('book1["genres2"]:', bookGenres21); //! ['adventure2', 'historical prose2']

const bookPrice1 = book1["price"];
console.log('book1["price"]:', bookPrice1); //! undefined

//* ✅
const propKey = "author";
const bookAuthor1 = book1[propKey];
console.log("bookAuthor1:", bookAuthor1); //! 'Bernard Cornwell'
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Доступ до властивостей (var.2):");
//todo: ✴️ ДРУГИЙ спосіб отримати доступ до властивості об'єкта
//? - це синтаксис через крапку: object.key
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
console.log("book2.title:", bookTitle2); //! 'The Last Kingdom'

const bookGenres2 = book2.genres;
console.log("book2.genres:", bookGenres2); //! ['historical prose', 'adventurs']

const bookGenres22 = book2.genres2;
console.log("book2.genres2:", bookGenres22); //! ['adventure2', 'historical prose2']

const bookPrice2 = book2.price;
console.log("book2.price:", bookPrice2); //! undefined

//! ❌
const propKey2 = "author";
const bookAuthor2 = book2.propKey2;
console.log("book2.propKey2:", bookAuthor2); //! undefined
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
console.log("book2.genres2[0]:", bookGenres2Item0); //! 'adventure2'

const bookGenresItem1 = book2.genres[1];
console.log("book2.genres[1]:", bookGenresItem1); //! 'adventure'
console.log("----------------------------------------------------------------------------------------------------------");


//! Видалення властивостей
console.warn("Видалення властивостей:");
//? ✴️ Видалити властивість об'єкта можна за допомогою оператора delete.
//? ✳️ Видалення властивостей — операція вкрай рідкісна,
//? найчастіше властивості тільки змінюються або додаються.
const book3 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    genres2: genres2,
    // genres2, //! короткі властивості
    isPublic: true,
    rating: 8.38
};

delete book3.genres2
console.log("book3:", book3); 
console.log("----------------------------------------------------------------------------------------------------------");


//! Зміна значення властивості
console.warn("Зміна значення властивостій:");
//? ✴️ Після створення об'єкта, значення його властивостей можна змінити.
//? ✳️ Для цього необхідно звернутися до них за ім'ям, 
//? наприклад, «через крапку», і присвоїти нове значення.
const book4 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    genres2: genres2,
    // genres2, //! короткі властивості
    isPublic: true,
    rating: 8.38
};

book4.rating = 9;
book4.isPublic = false;
book4.genres.push("drama");
console.log("book4:", book4);
console.log("----------------------------------------------------------------------------------------------------------");


//! Створення (додавання ) властивостей
console.warn("Створення (додавання ) властивостей:");
//? ✴️ Операція додавання нової властивості
//? після створення об'єкта нічим не відрізняється
//? від зміни значення вже існуючої властивості.
//? ✳️ Якщо під час запису значення за ім'ям,
//? така властивість в об'єкті відсутня,
//? вона буде створена.

const book5 = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    genres2: genres2,
    // genres2, //! короткі властивості
    isPublic: true,
    rating: 8.38
};

book5.pageCount = 836;
book5.originalLanguage = "en";
book5.translations = ["ua", "ru"];
console.log("book5:", book5);
console.log("----------------------------------------------------------------------------------------------------------");


//! Обчислювані властивості
console.warn("Обчислювані властивості:");
//? ✴️ Бувають ситуації, коли під час оголошення об'єкта
//? необхідно додати властивість з ім'ям,
//? яке ми заздалегідь не знаємо,
//? тому що воно зберігається у якості значення змінної
//? або у якості результату виконання функції.
//? ✳️ Раніше для цього необхідно було спочатку створити об'єкт,
//? а потім додавати властивості через квадратні дужки,
//? що не зовсім зручно.
const keyName1 = "name1";

const user1 = {
    age1: 60,
};

user1[keyName1] = "Juliette Binoche";
console.log("user1[keyName1]:", user1[keyName1]); //! 'Juliette Binoche'
console.log("user1.keyName1:", user1.keyName1); //! undefined
console.log("user1.name1:", user1.name1); //! 'Juliette Binoche'

console.log("user1:", user1); //! {age1: 60, name1: 'Juliette Binoche'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ Синтаксис обчислювальних властивостей (computed properties)
//? допомагає уникнути зайвого коду і, в деяких випадках, спростити його.
//? Значенням обчислювальної властивості може бути будь-який валідний вираз.
const keyName2 = "name2";

const user2 = {
    age2: 60,
    //todo: Ім'я цієї властивості(ключ) буде взяте зі значення змінної keyName2
    [keyName2]: "Russell Crowe",
};

console.log("user2.name2:", user2.name2); //! 'Russell Crowe'
console.log("user2:", user2); //! {age2: 60, name2: 'Russell Crowe'}
console.log("----------------------------------------------------------------------------------------------------------");


//! Короткі властивості
console.warn("Короткі властивості:");
//? ✴️ Іноді, під час створення об'єкта значення властивості
//? необхідно взяти зі змінної або параметра функції
//? з таким самим ім'ям, що і у властивості.
//? ✳️ Синтаксис у наступному прикладі занадто громіздкий,
//? тому що доводиться дублювати ім'я властивості та ім'я змінної,
//? в якій зберігається потрібне значення.
const name3 = "Anthony Hopkins";
const age3 = 87;

const user3 = {
    name3: name3,
    age3: age3,
};

console.log("user3.name3:", user3.name3); //! 'Anthony Hopkins'
console.log("user3.age3:", user3.age3); //! 87
console.log("user3:", user3); //! {name3: 'Anthony Hopkins', age3: 87}
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ Синтаксис коротких властивостей (shorthand properties)
//? вирішує цю проблему, дозволяючи використовувати
//? ім'я змінної у якості імені властивості,
//? а її значення - у якості значення властивості.
const name4 = "Uma Thurman";
const age4 = 54;

const user4 = {
    name4,
    age4,
};

console.log("user4.name4:", user4.name4); //! 'Uma Thurman'
console.log("user4.age4:", user4.age4); //! 54
console.log("user4:", user4); //! {name4: 'Uma Thurman', age4: 54}
console.log("----------------------------------------------------------------------------------------------------------");
