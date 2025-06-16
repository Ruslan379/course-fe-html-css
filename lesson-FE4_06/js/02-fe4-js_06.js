console.log(
    '%c 2.Експорт та імпорт в CommonJS Modules ',
    'color: white; background-color: #D33F49',
);

//! Експорт та імпорт в CommonJS Modules
console.warn("Експорт та імпорт в CommonJS Modules:");
console.warn(`Зображення​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_04/images/image-1.png"}`);
console.warn("Посилання: \n https://caniuse.com/?search=loading%3D%22lazy%22");

//? ✴️ CommonJS — модульна система використовується в Node.js.
//? Модулі мають компактний синтаксис, призначені для синхронного
//? завантаження і, в основному, використовуються на сервері і
//? не працюють в браузері за замовчуванням.
//? ✳️ CommonJS-модуль це багаторазово використовуваний фрагмент JS-коду,
//? який експортує певні об'єкти, роблячи їх доступними для інших модулів.
//? ✴️ Кожен JS-файл зберігає код в унікальному контексті модуля.
//? Для того щоб описати інтерфейс модуля використовується
//? об'єкт module.exports, значення якого буде доступно
//? для використання іншими модулями при імпорті.
//? ✴️ Для того щоб отримати інтерфейс модуля в коді (імпортувати), 
//? використовується функція require('шлях-до-модуля'). 
//? Результатом свого виконання require поверне інтерфейс модуля
//?  — то що в модулі зазначено в module.exports.

console.log(
    `%c
        //? Файл greeter.js
    const helloMessage = 'Hello';
    const goodbyeMessage = 'Goodbye';
    const hello = () => helloMessage + " world!";
    const goodbye = () => goodbyeMessage + " my friend!";

    module.exports = {
        hello,
        goodbye,
    };
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------------");
console.log(
    `%c
        //? Файл index.js
    const greeter = require('./greeter.js');
    console.log(greeter.hello()); //! "Hello world!"
    console.log(greeter.goodbye()); //! "Goodbye my friend!"
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------------");
