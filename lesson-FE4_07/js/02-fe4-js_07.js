console.log(
    '%c 2.Використання бібліотекі Handlebars в проєкті з бандлером Vite. ',
    'color: white; background-color: #D33F49',
);

//! Бібліотека Handlebars 
console.warn("Бібліотека Handlebars: \n https://handlebarsjs.com/guide/");
console.warn("Бібліотека Handlebars на NPM: \n https://www.npmjs.com/package/handlebars");

//! КРОК-1.Встановлення бібліотеки Handlebars
console.warn("КРОК-1.Встановлення бібліотеки Handlebars:")
console.log(
    `%c
    npm i handlebars
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! Використання бібліотеки Handlebars
console.warn("Використання бібліотеки Handlebars: \n https://handlebarsjs.com/guide/installation/");
console.log(
    `%c
    Всі файли, наведені в наступних кроках, для спрощення,
    знаходяться в кореневій папці SRC проекту з Vite.
    `,
    'color: violet; font-size: 18px; font-style: italic',
);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-2.Створюємо Шаблон в файлі template.hbs
console.warn("КРОК-2.Створюємо Шаблон в файлі template.hbs:");
console.log(
    `%c
    <div class="menu">
        <h3 class="menu-title">{{title}}</h3>
        <ul class="menu-list">
            {{#each items}}
            <li class="menu-item">{{this}}</li>
            {{/each}}
        </ul>
    </div>
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-3.В файлі main.js імпортуємо бібліотеку Handlebars та Шаблон з файлу template.hbs
console.warn("КРОК-3.В файлі main.js імпортуємо бібліотеку Handlebars та Шаблон з файлу template.hbs:");
console.log(
    `%c
    import Handlebars from "handlebars";
    import сardTemplate from "./template.hbs?raw";
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-4.В файлі main.js cтворюємо змінну data з Даними для Шаблону
console.warn("КРОК-4.В файлі main.js cтворюємо змінну data з Даними для Шаблону:");
console.log(
    `%c
    const data = {
        title: 'Create content from Template and Data!',
        items: [
            'LoDash',
            'NanoID',
            'PNotify',
            'Chart.js',
            'BasicLightbox',
            'Handlebars'
        ]
    };
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-5.В файлі main.js cтворюємо функцію-шаблон template яка допоможе створити розмітку для HTML
console.warn("КРОК-5.В файлі main.js cтворюємо функцію-шаблон template яка допоможе створити розмітку для HTML:");
console.log(
    `%c
    const template = Handlebars.compile(сardTemplate);
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-6.В файлі main.js cтворюємо змінну markup, яка поєднує всю розмітку з Шаблону та Дані 
console.warn("КРОК-6.В файлі main.js cтворюємо змінну markup, яка поєднує всю розмітку з Шаблону та Дані:");
console.log(
    `%c
    const markup = template(data);
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-7.В файлі index.html cтворюємо div-контейнер для розмітки та підключаємо скрипт main.js
console.warn("КРОК-7.В файлі index.html cтворюємо div-контейнер для розмітки та підключаємо скрипт main.js:");
console.log(
    `%c
     ...
    <body>
        <div id="menu-container"></div>
        <script src="./main.js" type="module"></script>
    </body>
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-8.В файлі main.js знаходимо контейнер по id, та додємо туди рядок розмітки markup
console.warn("КРОК-8.В файлі main.js знаходимо контейнер по id, та додємо туди рядок з розміткою markup:");
console.log(
    `%c
    const container = document.querySelector('#menu-container');
    container.innerHTML = markup;
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-9.В браузері отримаємо такий контент
console.warn("КРОК-9.В браузері отримаємо такий контент:");
console.log(
    `%c
    Create content from Template and Data!

    LoDash
    NanoID
    PNotify
    Chart.js
    BasicLightbox
    Handlebars
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! Приклад підключення та вікористання біліотеки Handlebars в проєкті з Vite
console.warn("Приклад підключення та вікористання біліотеки Handlebars в проєкті з Vite: \n  https://github.com/Ruslan379/hw-js-vite \n  https://ruslan379.github.io/hw-js-vite/page/lesson-07.html");
console.log("----------------------------------------------------------------------------------------------------");
