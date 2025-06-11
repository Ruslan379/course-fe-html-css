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
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------------------------------------");


//! Використання бібліотеки PNotify
console.warn("Використання бібліотеки PNotify:")
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
console.log("------------------------------------------------------------------------------------------------------------------");
