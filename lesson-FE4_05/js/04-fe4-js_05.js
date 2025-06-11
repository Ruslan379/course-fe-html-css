console.log(
    '%c 4.Бібліотека Chart.js. ',
    'color: white; background-color: #D33F49',
);

//! Бібліотека Chart.js
console.warn("Бібліотека Chart.js: \n https://www.chartjs.org");
console.warn("Бібліотека Chart.js на NPM: \n https://www.npmjs.com/package/chart.js");


//! Встановлення бібліотеки Chart.js
console.warn("Встановлення бібліотеки Chart.js:")
console.log(
    `%c
    npm i chart.js
    або
    npm install --save-dev @pnotify/core
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------------------------------------");


//! Використання бібліотеки Chart.js
console.warn("Використання бібліотеки Chart.js: \n https://www.chartjs.org/docs/latest/getting-started/usage.html");
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
