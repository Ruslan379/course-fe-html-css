console.log(
    '%c 1.Створення та видалення елементів ',
    'color: white; background-color: #D33F49',
);

//! Створення та видалення елементів
//? ✳️ DOM API дозволяє не тільки вибирати
//? або змінювати вже існуючі, але й видаляти,
//? а також створювати нові елементи,
//? після чого додавати їх в документ.


//! Створення елементів
console.warn("Створення елементів:");
//? ✴️ Створює елемент з ім'ям tagName 
//? і повертає посилання на нього 
//? як результат свого виконання. 
//? tagName - це рядок, 
//? що вказує тип елемента, який створюється. 
//? Елемент створюється в пам'яті, в DOM його ще немає.
console.log(
    `%c
    document.createElement(tagName);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo:
const heading = document.createElement("h1");
console.log("heading:", heading); //! <h1></h1>

heading.textContent = "This is a heading";
console.log("heading:", heading); //! <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/17/320/240";
image.alt = "Nature";
console.log("image:", image); //! <img src="https://picsum.photos/id/17/320/240" alt="Nature" />
console.log("---------------------------------------------------------------------------------------------");


//! Додавання елементів
console.warn("Додавання елементів:");
//? ✴️
//? ✳️

console.log("---------------------------------------------------------------------------------------------");


//! Видалення елементів
console.warn("Видалення елементів:");
//? ✴️
//? ✳️

console.log("---------------------------------------------------------------------------------------------");