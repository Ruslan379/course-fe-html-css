console.log(
    '%c 2.Бібліотека PNotify. ',
    'color: white; background-color: #D33F49',
);

//! Бібліотека PNotify
console.warn("Бібліотека PNotify на NPM: \n https://www.npmjs.com/package/pnotify");
console.warn("Бібліотека PNotify на GitHub: \n https://sciactive.github.io/pnotify/");


//! Встановлення бібліотеки PNotify
console.warn("Встановлення бібліотеки PNotify:")
console.log(
    `%c
    npm i pnotify
    або
    npm install --save-dev @pnotify/core
    або
    npm install @pnotify/core @pnotify/mobile
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------");



//! Використання бібліотеки PNotify
console.warn("Використання бібліотеки PNotify (так не працює):")
console.log(
    `%c
    import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
    import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

    defaultModules.set(PNotifyMobile, {});

    alert({
        text: 'Моя перша нотифікація!'
    });
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------");



//! Створення та ініціалізація проекту за допомогою бандлера Vite:
console.warn("Створення та ініціалізація проекту за допомогою бандлера Vite:")
console.log(
    `%c
    npm init vite@latest vite-project -- --template vanilla

    cd vite-project
    npm install
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------");



console.warn("Підключення та використання бібліотеки PNotify в проекті з Vite:")
console.log(
    `%c
        HTML:
    <!-- PNotify core CSS -->
    <link rel="stylesheet" href="/node_modules/@pnotify/core/dist/PNotify.css" />
    <!-- PNotify mobile CSS -->
    <link rel="stylesheet" href="/node_modules/@pnotify/mobile/dist/PNotifyMobile.css" />
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------");

console.log(
    `%c
            JS (src/main.js):
    import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';
    import * as PNotifyMobile from '@pnotify/mobile';
    import '@pnotify/core/dist/BrightTheme.css';

            // Підключаємо мобільний модуль (опціонально).
    defaultModules.set(PNotifyMobile, {});

            // Приклад: по кліку на кнопку показуємо повідомлення
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        alert({
            text: 'Привіт из PNotify + Vite!',
            type: 'success',
            delay: 2000
        });
    });
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------------------------");
