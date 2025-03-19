console.log(
    '%c 3.Властивість innerHTML ',
    'color: white; background-color: #D33F49',
);

//! 3.Властивість innerHTML
//? ✴️ Ще один спосіб створити DOM-елементи
//? і помістити їх в дерево
//? - це використовувати рядки з тегами
//? і дозволити браузеру зробити всю важку роботу.
//? У такого підходу є свої плюси і мінуси.


//! Читання
console.warn("Читання:");
//? ✴️ Властивість innerHTML зберігає вміст елемента, 
//? включно з тегами, у вигляді рядка. 
//? Значення, що повертається, - це завжди валідний HTML-код.
const article31 = document.querySelector(".article31");
console.log("article.innerHTML:", article31.innerHTML);

const title31 = document.querySelector(".article31 .title31");
console.log("title31.innerHTML:", title31.innerHTML);
console.log("title31:", title31);


const text31 = document.querySelector(".article31 .text31");
console.log("text.innerHTML:", text31.innerHTML);

const link31 = document.querySelector(".article31 .link31");
console.log("link.innerHTML:", link31.innerHTML);
console.log("-----------------------------------------------------------------------------------------");


//! Зміна/видалення
console.warn("Зміна/видалення:");
//? ✴️ Властивість innerHTML доступна
//? і для читання, і для запису.
//? Якщо записати в неї рядок з HTML-тегами,
//? то браузер під час парсингу рядка
//? перетворить їх у валідні елементи і додасть в DOM-дерево.
console.log(
    `%c
    title32.innerHTML = '<span class="accent">Replacement</span>';
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const title32 = document.querySelector(".article32 .title32");
title32.innerHTML = '<span class="accent">Replacement</span>';


//? ✴️ Якщо у властивість innerHTML записати порожній рядок,
//? то вміст елемента буде очищено.
//? Це простий і швидкий спосіб видалення всього вмісту.
console.log(
    `%c
    link32.innerHTML = "";
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const link32 = document.querySelector(".article32 .link32");
link32.innerHTML = "";
console.log("-----------------------------------------------------------------------------------------");


//! Шаблонізація
console.warn("Шаблонізація:");
//? ✴️ За такого підходу,
//? на відміну від document.createElement(),
//? ми не отримуємо посилання на створений DOM-елемент.
//? Це перший крок на шляху до шаблонізації
//? - створення великої кількості однотипної розмітки
//? з різними даними за наперед визначеним шаблоном.
//? Наприклад, як у списку товарів інтернет магазину тощо.
//? ✳️ Однотипна (шаблонна) розмітка
//? створюється із масиву даних.
//? Прийом полягає у перебиранні цього масиву
//? і складанні одного рядка з HTML-тегами,
//? який потім записуємо в innerHTML елемента.
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const technologies = ["C#", "C++", ".NET", "PHP", "Python", "Java", "SQL", "Django", "C", "iOS"];
const list33 = document.querySelector(".list33");

const markup = technologies
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join("");

//todo: У консолі бачимо один рядок з HTML-тегами:
console.log("markup:", markup);

//todo: Додаємо всю розмітку за одну операцію.
list33.innerHTML = markup;
console.log("-----------------------------------------------------------------------------------------");


//! Додавання
console.warn("Додавання:");
//? ✴️ Зміна elem.innerHTML повністю видалить
//? і повторно створить всі нащадки елемента elem.
//? Якщо елемент спочатку не був порожній,
//? то виникнуть додаткові витрати на серіалізацію
//? вже існуючої розмітки, а це погано.
console.log(
    `%c
    article34.innerHTML += htmlString;
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const article34 = document.querySelector(".article34");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
<a class="link" href="#">Read more...</a>`;

//todo: Додаємо розмітку до вже існуючої за одну операцію.
// article34.innerHTML = htmlString; //todo: видаляє всі елементи та додає htmlString
article34.innerHTML += htmlString; //todo: додає htmlString до вже існуючих елементів
// article34.innerHTML = article34.innerHTML + htmlString;

//? ✴️ Використовуйте властивість elem.innerHTML 
//? для додавання тільки тоді, 
//? коли елемент elem - порожній, 
//? або якщо потрібно повністю замінити його вміст.
console.log("-----------------------------------------------------------------------------------------");
