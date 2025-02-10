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


//? ✴️ Для отримання змінних з такими ж назвами
//? як власивості об'єкта та їх значеннями,
//? використаємо синтаксис ❗️деструктуризованого присвоювання❗️. 
//? ✳️ Деструктуризація завжди знаходиться у лівій частині операції присвоєння. 
//? Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта. 
//? Якщо ім'я змінної та ім'я властивості збігаються, відбувається присвоювання, 
//? в іншому випадку, їй буде присвоєно undefined. 
//? Порядок оголошення змінних у фігурних дужках - неважливий.
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
console.log("----------------------------------------------------------------------------------------------------------------------");


//! Значення за замовчуванням
console.warn("Значення за замовчуванням:");
//? ✳️ Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
const book1 = {
    title1: "The Last Kingdom",
    author1: "Bernard Cornwell",
    genres1: ["historical prose", "adventure"],
    isPublic1: true,
    rating1: 8.38,
};
console.log("book1:", book1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title1,
    author1,
    genres1,
    isPublic1,
    rating1,
    coverImage1 = "https://via.placeholder.com/640/480",
} = book1;

console.log("title1:", title1);
console.log("author1:", author1);
console.log("genres1:", genres1);
console.log("isPublic1:", isPublic1);
console.log("rating1:", rating1);
console.log("coverImage1:", coverImage1); //! "https://via.placeholder.com/640/480"
console.log("----------------------------------------------------------------------------------------------------------------------");


//! Зміна імені змінної
console.warn("Зміна імені змінної:");
//? ✴️ Під час деструктуризації можна змінити ім'я змінної, 
//? в яку розпаковується значення властивості. 
//? Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, 
//? після чого ставимо двокрапку і пишемо ім'я змінної, 
//? в яку необхідно помістити значення цієї властивості.
const firstBook = {
    title: "The Last Kingdom",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};
console.log("firstBook:", firstBook);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title: firstTitle,
    coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log("firstTitle:", firstTitle); //! The Last Kingdom
console.log("firstCoverImage:", firstCoverImage);  //! https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const secondBook = {
    title: "Сон смішної людини",
};
console.log("secondBook:", secondBook);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title: secondTitle,
    coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log("secondTitle:", secondTitle);  //! Сон смішної людини
console.log("secondCoverImage:", secondCoverImage); //! https://via.placeholder.com/640/480
console.log("----------------------------------------------------------------------------------------------------------------------");


//! Деструктуризація в циклах
console.warn("Деструктуризація в циклах:");
//? ✴️ Перебираючи масив об'єктів циклом for...of,
//? утворюються багаторазові звернення до властивостей об'єкта.
console.warn("Приклад-1:");
const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "На березі спокійних вод",
        author: "Роберт Шеклі",
        rating: 8.51,
    },
];

for (const book of books) {
    console.log("book.title:", book.title);
    console.log("book.author:", book.author);
    console.log("book.rating:", book.rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-2:");
//? ✴️ Для того, щоб скоротити кількість повторень, 
//? можна деструктуризувати властивості об'єкта 
//? у локальні змінні в тілі циклу.
for (const book of books) {
    const { title, author, rating } = book;

    console.log("title:", title);
    console.log("author:", author);
    console.log("rating:", rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-3:");
//? ✴️ Якщо в об'єкті небагато властивостей,
//? можна виконати деструктуризацію
//? безпосередньо у місці оголошення змінної book.
for (const { title, author, rating } of books) {
    console.log("title:", title);
    console.log("author:", author);
    console.log("rating:", rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log("----------------------------------------------------------------------------------------------------------------------");


//! Глибока деструктуризація
console.warn("Глибока деструктуризація:");
//? ✴️ Для деструктуризації властивостей
//? вкладених об'єктів використовуються
//? ті самі принципи, що й в трьох попередніх вправах.
const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};
console.log("user:", user);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    name,
    tag,
    stats,
    stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log("name:", name); //! Jacques Gluke
console.log("tag:", tag); //! jgluke
console.log("stats:", stats); //! {followers: 5603, views: 4827, likes: 1308}  або Uncaught ReferenceError: stats is not defined
console.log("followers:", followers); //! 5603
console.log("userViews:", userViews); //! 4827
console.log("userLikes:", userLikes); //! 1308
console.log("----------------------------------------------------------------------------------------------------------------------");
