console.log(
    '%c 1.Деструкткризація об\'єктів. ',
    'color: white; background-color: #D33F49',
);

//! Деструкткризація об'єктів
console.warn("Деструкткризація об'єктів:");
//? ✴️ Під час розробки програм дані приходять,
//? як правило, у вигляді масивів і об'єктів,
//? значення яких необхідно записати у локальні змінні.
//? Для того, щоб робити це максимально просто,
//? в сучасному стандарті існує
//? синтаксис деструктуризованого присвоювання.

//? ✳️ Складні дані завжди представлені об'єктом.
//? Багаторазові звернення до властивостей об'єкта
//? візуально забруднюють код, 
//? якщо потрібно отримати значення окремих змінних:
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log("book:", book);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const accessType1 = book.isPublic ? "публічному" : "закритому";
const message1 = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType1} доступі.`;
console.log("message1:", message1);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✳️ Якщо потрібно окремо отримати змінні 
//? з такими ж назвами як власивості об'єкта 
//? та їх значеннями, то можна просто створити їх:
// const title = "The Last Kingdom";
// const author = "Bernard Cornwell";
// const genres = ["historical prose", "adventure"];
// const isPublic = true;
// const rating = 8.38;

// console.log("title:", title);
// console.log("author:", author);
// console.log("genres:", genres);
// console.log("isPublic:", isPublic);
// console.log("rating:", rating);
// console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// const accessType2 = isPublic ? "публічному" : "закритому";
// const message2 = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType2} доступі.`;
// console.log("message2:", message2);
// console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✳️ Для отримання змінних з такими ж назвами
//? як власивості об'єкта та їх значеннями,
//? використаємо синтаксис деструктуризованого присвоювання:
const { title, author, genres, isPublic, rating, coverImage } = book;

console.log("title:", title);
console.log("author:", author);
console.log("genres:", genres);
console.log("isPublic:", isPublic);
console.log("rating:", rating);
console.log("coverImage:", coverImage); //! undefined
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const accessType2 = isPublic ? "публічному" : "закритому";
const message2 = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType2} доступі.`;
console.log("message2:", message2);
console.log("-----------------------------------------------------------------------------------------------------------------");




console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");