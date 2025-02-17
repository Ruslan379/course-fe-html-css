console.log(
    '%c 1.Імперативний і Декларативний код. ',
    'color: white; background-color: #D33F49',
);

//! Імперативний код
//? ✴️ Описує процес обчислення у вигляді
//? заданої послідовності інструкцій,
//? що змінюють стан програми.
//? Опис того, як щось виконується.
//? ✳️ Імперативний стиль програмування - це такий стиль,
//? що надає машині набір детальних інструкцій для виконання задачі.
//? Наприклад, цикл for, який надає точні вказівки
//? для ітерації по індексам масиву.
//? ✳️ Можна провести аналогію з рецептом приготування страви. 
//? Рецепт - це набір покрокових інструкцій 
//? для отримання бажаного результату.
console.warn(`Приклад «Імперативного коду»: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_14/images/imperative-programming-example.jpg"}`);

//todo: Приклади Імперативного коду
console.warn("Приклад-1. Імперативний код:");
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};
console.log("book:", book);

//todo: Приклад-1. Імперативний код:
console.log(
    `%c
                                                             
        const title = "The Last Kingdom";                    
        const author = "Bernard Cornwell";                   
        const genres = ["historical prose", "adventure"];    
        const isPublic = true;                               
        const rating = 8.38;                                 
                                                             `,
    'color: #ffff60; background-color: #ff7272',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-2. Імперативний код:");
//todo: Приклад-2. Імперативний код:
//? Напиши скрипт підрахунку вартості гравіювання прикрас.
//? Для цього створи функцію
//? calculateEngravingPrice(message, pricePerWord)
//? приймаючу рядок (в рядку будуть тільки слова і прогалини)
//? і ціну гравіювання одного слова,
//? і повертає ціну гравіювання всіх слів в рядку.
console.log(
    `%c
                                                                      
        function calculateEngravingPrice(message, pricePerWord) {     
                                                                      
            let words = 0;                                            
            let inWord = false;                                       
                                                                      
            for (const character of message.trim()) {                 
                if (character !== ' ' && !inWord) {                   
                    words++;                                          
                    inWord = true;                                    
                } else if (character === ' ') {                       
                    inWord = false;                                   
                };                                                    
            };                                                        
                                                                      
            return words * pricePerWord;                              
        };                                                            
                                                                      `,
    'color: #ffff60; background-color: #00c1cf',
);

function calculateEngravingPrice(message, pricePerWord) {

    let words = 0;
    let inWord = false;

    for (const character of message) {
        if (character !== ' ' && !inWord) {
            words++;
            inWord = true;
        } else if (character === ' ') {
            inWord = false;
        };
    };

    return words * pricePerWord;
};


console.log("Price:", calculateEngravingPrice("Той, хто задоволений самим собою – багач", 10)); //! 70
console.log("-----------------------------------------------------------------------------------------------------------");


//! Декларативний код
//? ✴️ Описує те, що ми хочемо отримати у підсумку,
//? а не спосіб це зробити.
//? Порядок виконання і спосіб досягнення - неважливі.
//? ✳️ Коли ми пишемо HTML-код, то декларативно,
//? за допомогою тегів та атрибутів, описуємо те,
//? що хочемо отримати у підсумку.
//? Браузер читає цей код і сам виконує всі необхідні операції
//? для створення HTML-елементів і розміщення їх на сторінці.
//? ✳️ Можна провести аналогію з меню ресторану.
//? Це декларативний набір страв, які можна замовити,
//? подробиці приготування і подачі яких приховані.
console.warn(`Приклад «Декларативного коду»: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_14/images/declarative-programming-example.jpg"}`);

//todo: Приклади Декларативного коду
console.warn("Приклад-1. Декларативний код:");
console.log(
    `%c
                                                                            
    const { title, author, genres, isPublic, rating, coverImage } = book;   
                                                                            `,
    'color: #21ff21; background-color: #ff7272',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-2. Декларативний код:");
//todo: Приклад-2. Декларативний код:
console.log(
    `%c
                                                                      
        function calculateEngravingPrice(message, pricePerWord) {     
            return message.split(" ").length * pricePerWord;          
        };                                                            
                                                                      `,
    'color: #9bff9b; background-color: #00c1cf',
);

function calculateEngravingPrice2(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
};
console.log("Price:", calculateEngravingPrice2("Той, хто задоволений самим собою – багач", 10)); //! 70
console.log("-----------------------------------------------------------------------------------------------------------");
