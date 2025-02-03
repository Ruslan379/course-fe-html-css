console.log(
    '%c2.Методи об\'єкта Object: \n   Object.assign         \n   Object.keys()         \n   Object.values()       \n   Object.entries()      ',
    'color: white; background-color: #D33F49',
);

//! Методи об'єкта Object
//? ✳️ Всі об'єкти походять від конструктора Object.
//? У нього є кілька дуже корисних методів для роботи з об'єктами.

//! Object.assign
//? ✴️ Object.assign - додає один
//? або декілька методів до об'єкту.
const bookShelf = {
    books: ["The Last Kingdom"],
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


//todo: ✴️ var.1
//todo: Додавання до об'єкту метода "getBooks":
bookShelf.getBooks = function (money) {
    return this.books;
};

//todo: Додавання до об'єкту метода "addBook":
bookShelf.addBook = function (bookName) {
    this.books.push(bookName)
};

//todo: Додавання до об'єкту метода "removeBook":
bookShelf.removeBook = function (bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
};
console.log("books_after:", bookShelf); 


//todo: ✳️ var.2

bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log("books_add:", bookShelf.getBooks()); //! ['The Last Kingdom', 'The Mist', 'Dream Guardian']

bookShelf.removeBook("The Mist");
console.log("books_remove:", bookShelf.getBooks()); //! ['The Last Kingdom', 'Dream Guardian']


console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.log("-------------------------------------------------------------------");
