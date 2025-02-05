console.log(
    '%c 3.Доступ до властивостей об\'єкта в методах через this. ',
    'color: white; background-color: #D33F49',
);

//! Доступ до властивостей об'єкта в методах через this
//? ✳️ Методи використовуються для роботи
//? з властивостями об'єкта, їх зміни.
//? ✴️ Для доступу до об'єкта в методі використовується
//? не ім'я змінної, наприклад bookShelf,
//? а ключове слово this - контекст.
//? ✴️ Значенням this буде об'єкт перед «крапкою»,
//? тобто об'єкт, який викликав цей метод,
//? у нашому випадку - це посилання на об'єкт bookShelf.
const bookShelfNew = {
    books: ["The Last Kingdom"],
    getBooks() {
        console.log("🛑 books:", bookShelfNew.books); //todo: 🛑 var.1
        
        console.log(this);
        console.log("✅ books:", this.books); //todo: ✅ var.2
    },
};

//todo: У this.books перед крапкою знаходиться об'єкт bookShelfNew,
//todo: тому, викликаючи метод, this буде зберігати посилання на нього.
bookShelfNew.getBooks(); //! {books: Array(1), getBooks: ƒ}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Схема доступу до властивостей об'єкта в методах через this: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_11/images/this-keyword.jpg");
console.warn("Схема доступу до властивостей об'єкта в методах через this: \n http://127.0.0.1:5500/lesson-FE3_11/images/this-keyword.jpg");
console.warn(`Схема доступу до властивостей об'єкта в методах через this: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_11/images/this-keyword.jpg"}`);
//? ✴️ Для того, щоб отримати доступ 
//? до властивостей об'єкта в методах, 
//? ми звертаємось до нього через this і далі,
//? стандартно - «через крапку» до властивостей:
const bookShelf = {
    books: ["The Last Kingdom"],
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
};

console.log("books_before:", bookShelf.getBooks()); //! ['The Last Kingdom']

bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log("books_add:", bookShelf.getBooks()); //! ['The Last Kingdom', 'The Mist', 'Dream Guardian']

bookShelf.removeBook("The Mist");
console.log("books_remove:", bookShelf.getBooks()); //! ['The Last Kingdom', 'Dream Guardian']
console.log("---------------------------------------------------------------------");


//! Приклад об'екта "Приготування кави"
console.warn("Приклад об'екта \"Приготування кави\":");

const makingCoffeeNew = {
    coffee: null,

    makesGroundCoffee(weight) {
        const groundCoffee = weight;
        console.log("1️⃣ Мелена кава є?", !!groundCoffee);
        return groundCoffee;
    },

    makesHotWater(volume) {
        const hotWater = volume;
        console.log("2️⃣ Окріп (гаряча вода) є?", !!hotWater);
        return hotWater;
    },

    getCoffee(weight, volume) {
        if (weight && volume) {
            this.coffee = this.makesGroundCoffee(weight) + " грам, " + this.makesHotWater(volume) + " мілілітрів";
            console.log("3️⃣ Кава готова?", !!this.coffee);
        } else console.log("❌ Не вистачає деяких інгредієнтів для приковування кави!");
    }
};

console.log("⭕️ coffee_before:", makingCoffeeNew.coffee); //! null
makingCoffeeNew.getCoffee(30, 250); 
console.log("☕️ coffee_after:", makingCoffeeNew.coffee); //! 30 грам 250 мілілітрів 
console.log("---------------------------------------------------------------------");
