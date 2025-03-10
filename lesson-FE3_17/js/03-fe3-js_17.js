console.log(
    '%c 3.Пошук елементів (DOM-вузлів). ',
    'color: white; background-color: #D33F49',
);

//! Методи elem.querySelector* 
console.warn("Методи elem.querySelector* ");
//? ✳️ Отже, ми вже знаємо що DOM-елемент
//? - це об'єкт з властивостями і методами.
//? Саме час навчитися швидко знаходити елемент
//? за довільним CSS-селектором.
//? Група методів ❗️elem.querySelector*❗️
//? - це сучасний стандарт для пошуку елементів.
//? Вони дозволяють знайти елемент або групу елементів 
//? за CSS-селектором будь-якої складності.
console.log(
    `%c
    element.querySelector(selector);
    `,
    'color: darkred; font-size: 16px',
);
//? ✴️ Використовується, якщо необхідно знайти тільки один,
//? найчастіше унікальний елемент.
//? 🔸 Повертає перший знайдений елемент всередині element,
//?    що відповідає CSS-селектору selector.
//? 🔸 Якщо нічого не знайдено, поверне null.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log(
    `%c
    element.querySelectorAll(selector);

    `,
    'color: darkred; font-size: 16px',
);
//? ✴️ Використовується, якщо необхідно знайти колекцію елементів,
//? тобто отримати масив посилань на елементи з однаковим селектором.
//? Наприклад, всі елементи списку з класом menu-item.
//? 🔸 Повертає псевдомасив всіх елементів всередині element,
//?    які відповідають CSS-селектору selector.
//? 🔸 Якщо нічого не знайдено, поверне порожній масив.
console.log("---------------------------------------------------------------------------------------------");

//! Приклад пошуку елементів за селектором
console.warn("Приклад пошуку елементів за селектором:");
//? ✳️ Розглянемо такий приклад пошуку елементів за селектором:
console.log(
    `%c
    <ul id="menu" class="menu">
        <li class="menu-item">home</li>
        <li class="menu-item">about</li>
        <li class="menu-item">gallery</li>
        <li>blog</li>
    </ul>
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
// console.log(listWithId);
console.log("listWithId = document.querySelector('#menu'):", listWithId);

const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);
console.log("listWithClass = document.querySelector('.menu'):", listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);
console.log('menuItemsByTagName = document.querySelectorAll("li"):', menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);
console.log('menuItemsByClass = document.querySelectorAll(".menu-item"):', menuItemsByClass);

const alltMenuItem = document.querySelectorAll(".menu-item");
// alltMenuItem.style.color = 'green'; //! Error: Cannot set properties of undefined (setting 'color')
for (const element of alltMenuItem) {
    element.style.color = 'green';
};
// console.log(alltMenuItem);
console.log('alltMenuItem = document.querySelector(".menu-item"):', alltMenuItem);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
console.log('firstMenuItem = document.querySelector(".menu-item"):', firstMenuItem);
console.log("---------------------------------------------------------------------------------------------");