console.log(
    '%c 1.Події. Методи addEventListener() і removeEventListener()​. ',
    'color: white; background-color: #D33F49',
);

//! Події
//? ✴️ Подія - це сигнал від браузера про те,
//? що на веб-сторінці щось відбулося.
//? Події використовуються для реакції
//? на дії користувача і виконання коду,
//? пов'язаного з певною подією.
//? Існує багато видів подій:
//? 🔸 миші,
//? 🔸 клавіатури,
//? 🔸 елементів форм,
//? 🔸 завантаження зображень,
//? 🔸 буфера обміну,
//? 🔸 зміни стадії CSS анімації або переходу,
//? 🔸 зміни розмірів вікна та багато інших.

//? ✳️ Одна дія може викликати декілька подій.
//? Наприклад, клік викликає спочатку mousedown,
//? а потім mouseup і click.
//? У тих випадках, коли одна дія генерує декілька подій,
//? їхній порядок фіксований.
//? Тобто обробники викликаються
//? у порядку mousedown → mouseup → click.

//! Метод addEventListener()​
console.warn("Метод addEventListener()​:");
//? ✴️ Для того, щоб елемент реагував на дії користувача,
//? до нього необхідно додати слухача (обробника) події.
//? Тобто функцію, яка буде викликана, щойно подія відбулася.
//? ✴️ Метод addEventListener()
//? - додає слухача події на елемент.
//? 🔸 event - ім'я події, рядок, наприклад "click".
//? 🔸 handler - колбек-функція, яка буде викликана під час настання події.
//? 🔸 options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.
console.log(
    `%c
    🔸 element.addEventListener(event, handler, options);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo:
const button1 = document.querySelector(".my-button-1");
console.log("button1:", button1);

button1.addEventListener(
    "click",
    () => {
        console.log("My button-1 was clicked");
    }
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ Для колбека можна (і бажано)
//? використовувати окрему функцію
//? і передавати на неї посилання.
//? Іменована функція підвищує читабельність коду.
const button2 = document.querySelector(".my-button-2");
console.log("button2:", button2);

const handleClick1 = () => {
    console.log("My button-2 was clicked");
    alert("My button-2 was clicked");
    button2.classList.toggle("accent");
};

button2.addEventListener("click", handleClick1);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ На одному елементі може бути 
//? будь-яка кількість обробників подій, 
//? навіть подій одного типу. 
//? Колбек-функції будуть викликатися 
//? у порядку їх реєстрації в коді.
const button3 = document.querySelector(".my-button-3");
console.log("button3:", button3);

const firstCallback = () => alert('First callback!');
const secondCallback = () => alert('Second callback!');
const thirdCallback = () => alert('Third callback!');

button3.addEventListener("click", firstCallback);
button3.addEventListener("click", secondCallback);
button3.addEventListener("click", thirdCallback);
console.log("------------------------------------------------------------------------------");


//! Метод removeEventListener()​
console.warn("Метод removeEventListener()​​:");
//? ✴️ Видаляє слухача події з елемента.
//? Аргументи аналогічні методу addEventListener().
//? ✴️ Для видалення потрібно передати посилання 
//? саме на ту колбек-функцію, 
//? яка була призначена в addEventListener(). 
//? У такому разі, для колбеків 
//? використовують окрему функцію 
//? і передають її за ім'ям (посиланням).
console.log(
    `%c
    🔸 element.removeEventListener(event, handler, options);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const clickBtn = document.querySelector(".js-target-btn");

const handleClick2 = () => {
    console.log("click event listener callback");
    alert("click event listener callback");
    clickBtn.classList.toggle("accent");
};

addListenerBtn.addEventListener("click", () => {
    clickBtn.addEventListener("click", handleClick2);
    console.log("click event listener was added to clickBtn");
});

removeListenerBtn.addEventListener("click", () => {
    clickBtn.removeEventListener("click", handleClick2);
    console.log("click event listener was removed from clickBtn");
});
console.log("------------------------------------------------------------------------------");
