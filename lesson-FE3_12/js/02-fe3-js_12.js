console.log(
    '%c 2.Методи об\'єкта від конструктора Object: \n   Object.assign                          \n   Object.keys()                          \n   Object.values()                        \n   Object.entries()                       ',
    'color: white; background-color: #D33F49',
);

//! Методи об'єкта Object
//? ✳️ Всі об'єкти походять від конструктора Object.
//? У нього є кілька дуже корисних методів для роботи з об'єктами.

//! Додавання методу (методів) -> Object.assign
console.warn("Object.assign - додавання методу (методів):");
//? ✴️ Object.assign - додає один
//? або декілька методів до об'єкту.
const bookShelf = {
    books: ["The Last Kingdom"],
    //todo: Ці ТРИ методи будуть додані окремо як var.1 або var.2
    // getBooks() {
    //     return this.books;
    // },
    // addBook(bookName) {
    //     this.books.push(bookName);
    // },
    // removeBook(bookName) {
    //     const bookIndex = this.books.indexOf(bookName);
    //     this.books.splice(bookIndex, 1);
    // },
};
console.log("books_before:", bookShelf); 

//todo: 🛑 var.1
// //todo: Додавання до об'єкту метода "getBooks":
// bookShelf.getBooks = function() {
//     return this.books;
// };

// //todo: Додавання до об'єкту метода "addBook":
// bookShelf.addBook = function(bookName) {
//     this.books.push(bookName);
// };

// //todo: Додавання до об'єкту метода "removeBook":
// bookShelf.removeBook = function(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
// };
// console.log("🛑books_after-1:", bookShelf);


//todo: ✅ var.2 Додавання до об'єкту методів "getBooks", "addBook" і "removeBook":
Object.assign(bookShelf, {
    getBooks() {
        return this.books;
    },
    addBook(bookName) {
        this.books.push(bookName);
    },
    removeBook(bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1);
    },
});
console.log("✅books_after-2:", bookShelf);

console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log("books_add:", bookShelf.getBooks()); //! ['The Last Kingdom', 'The Mist', 'Dream Guardian']

bookShelf.removeBook("The Mist");
console.log("books_remove:", bookShelf.getBooks()); //! ['The Last Kingdom', 'Dream Guardian']
console.log("------------------------------------------------------------------------------------------------");


//! Масив з ключами об'єкта -> Object.keys()
console.warn("Object.keys() - масив з ключами об'єкта:");
//? ✴️ Метод Object.keys(obj) приймає об'єкт і повертає
//? масив ключів його власних властивостей.
//? Якщо об'єкт не має властивостей, метод поверне порожній масив.
let book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};
console.log("book:", book);
let keys = Object.keys(book);
console.log("Object.keys(book):", keys); //! ['title', 'author', 'genres', 'rating']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");



//? ✳️ Скомбінувавши результат Object.keys()
//? і цикл for...of, можна зручно перебрати
//? власні властивості об'єкта
//? не використовуючи архаїчний цикл for...in
//? з перевірками належності властивостей.
for (const key of keys) {
    //todo: var.1:
    // //! Ключ
    // console.log("key:", key);
    // //! Значення властивості з таким ключем
    // console.log("book[key]:", book[key]);
    // console.log("`  `  `  `  `  `  `  `  `  `");

    //todo: var.2:
    console.log(`${key}: ${book[key]}`);
};
console.log("------------------------------------------------------------------------------------------------");


//! Масив зі значеннями властивостей -> Object.values()
console.warn("Object.values() - масив зі значеннями властивостей:");
//? ✴️ Метод Object.values(obj) -
//? повертає масив значень його власних властивостей.
//? Якщо в об'єкті відсутні властивості,
//? метод Object.values(obj) поверне порожній масив.
book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
};
console.log("book:", book);

keys = Object.keys(book);
console.log("Object.keys(book):", keys); //! ['title', 'author', 'genres', 'rating']

let values = Object.values(book);
console.log("Object.values(book):", values); //! ['The Last Kingdom', 'Bernard Cornwell', 8.38]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");



//todo: Приклад використання Object.values()
console.warn("Приклад використання Object.values():");
//? ✳️ Потрібно порахувати загальну кількість продуктів
//? в об'єкті формату ім'я-продукту: кількість.
//? У такому випадку, буде доречним метод Object.values()
//? для того, щоб отримати масив усіх значень,
//? а потім перебрати його циклом for...of
//? для отримання загальної кількісті(суми) продуктів.
const goods = {
    apples: 6,
    grapes: 3,
    bread: 4,
    cheese: 7,
};
console.log("goods:", goods);

const goodsValues = Object.values(goods); 
console.log("Object.values(goods):", goodsValues); //! [6, 3, 4, 7]

let total = 0;
for (const value of goodsValues) {
    // let total = 0;
    total += value;
};
console.log("total:", total); //! 20
console.log("------------------------------------------------------------------------------------------------");


//! Масив масивів з ключами та значеннями їх властивостей -> Object.entries()
console.warn("Object.entries() - масив зі значеннями властивостей:");
//? ✴️ Метод Object.entries(obj) -
//? повертає масив записів, кожен елемент якого,
//? буде ще один масив з 2-х елементів:
//? імені властивості і значення цієї властивості з об'єкта obj.
book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
};
console.log("book:", book);

keys = Object.keys(book);
console.log("Object.keys(book):", keys); //! ['title', 'author', 'genres', 'rating']

values = Object.values(book);
console.log("Object.values(book):", values); //! ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
console.log("Object.entries(book):", entries); //! [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
console.log("------------------------------------------------------------------------------------------------");
