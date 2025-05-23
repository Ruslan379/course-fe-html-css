console.log(
    '%c 3.Дії браузера за замовчуванням. \n   Подія submit.                  ',
    'color: white; background-color: #D33F49',
);

//! Дії браузера за замовчуванням
console.warn("Дії браузера за замовчуванням:");
//? ✴️ Деякі події викликають дію браузера,
//? вбудовану за замовчуванням як реакція на певний тип події.
//? Наприклад, клік на посиланні
//? ініціює перехід на нову адресу, зазначену в href,
//? а відправлення форми перезавантажує сторінку.
//? Найчастіше ця поведінка небажана і її необхідно скасувати.
//? ✴️ Для скасування дії браузера за замовчуванням
//? в об'єкта події є стандартний метод ❗️preventDefault()❗️.
console.log(
    `%c
    🔸 event.preventDefault()
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . .");


//! Подія submit
console.warn("Дії браузера за замовчуванням:");
//? ✴️ Виникає при відправці форми.
//? Його застосовують для валідації (перевірки)
//? форми перед відправкою.
//? Щоб відправити форму, у відвідувача є два способи:
//? 🔸 Натиснути кнопку з type =" submit "
//? 🔸 Натиснути кнопку Enter, перебуваючи в якомусь полі форми
//? ✴️ Який би спосіб не вибрав відвідувач 
//? - буде згенеровано подія submit. 
//? В обробнику цієї події можна перевірити дані, 
//? і виконати дії по результатах перевірки.
const form = document.querySelector(".register-form");

form.addEventListener(
    "submit",
    (event) => {
        event.preventDefault(); //todo: ❗️скасовує перезавантаження сторінки❗️

        const {
            elements: { username, password }
        } = event.currentTarget;

        console.log("Username:", username.value);
        console.log("Password:", password.value);
    }
);
console.log("---------------------------------------");
