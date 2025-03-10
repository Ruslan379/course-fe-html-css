console.log(
    '%c 2.Методи об\'єкта ',
    'color: white; background-color: #D33F49',
);

//! Методи об'єкта
//? ✴️ Об'єкти можуть зберігати не тільки дані,
//? але і функції для роботи з цими даними - методи.
//? Якщо значення властивості - це функція,
//? така властивість називається методом об'єкта.
//? ✳️ Такі об'єкти можна назвати «моделями».
//? Вони пов'язують дані і методи для роботи з цими даними. 
//todo: ✅ Логічно і синтаксично згруповані сутності в об'єкті:
const bookShelf = {
    books: ["The Last Kingdom", "Dream Guardian"],
    // //todo: Це метод-1 об'єкта (⛔️ var.1 - ES5):
    // getBooks: function() {
    //     console.log("⛔️ Цей метод буде повертати всі книги - властивість books");
    // },
    //todo: Це метод-1 об'єкта (✅ var.2 - ES6):
    getBooks() {
        console.log("✅ Цей метод буде повертати всі книги - властивість books");
        console.log("✅ books:", bookShelf.books);
    },
    //todo: Це метод-2 об'єкта:
    addBook(bookName) {
        console.log(`✅ Цей метод буде додавати ${bookName} у властивість(масив) books`);
    },
};

//todo: ✅ Виклики методів об'єкта:
bookShelf.getBooks(); //! 'Цей метод буде повертати всі книги - властивість books'
bookShelf.addBook("НОВА КНИГА"); //! 'Цей метод буде додавати НОВА КНИГА у властивість(масив) books'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? 🚫⁉️ Наприклад, можна було оголосити
//? змінну <books> і дві функції getBooks() і addBook(bookName),
//? але тоді це були б три незалежні сутності
//? без явного синтаксичного, і зі слабким логічним зв'язком.
//todo:  ❌ Слабкопозв'язані, незалежні сутності:
const books2 = ["The Last Kingdom-2", "Dream Guardian-2"];

function getBooks() {
    console.log("🚫 Цей метод буде повертати всі книги - властивість books2");
    console.log("🚫 books2:", books2);
};

function addBook(bookName) {
    console.log(`🚫 Цей метод буде додавати ${bookName} у властивість(масив) books2`);
};

//todo: 🚫 Виклики незалежних методів:
getBooks(); //! 'Цей метод буде повертати всі книги - властивість books'
addBook("НОВА КНИГА-2"); //! 'Цей метод буде додавати НОВА КНИГА у властивість(масив) books2'
console.log("---------------------------------------------------------------------");
