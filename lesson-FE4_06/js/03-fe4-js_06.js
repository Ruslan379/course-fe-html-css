console.log(
    '%c 3.Експорт та імпорт в ECMAScript Modules (ESM) ',
    'color: white; background-color: #D33F49',
);

//! Експорт та імпорт в ECMAScript Modules (ESM)
console.warn("Експорт та імпорт в ECMAScript Modules (ESM):");
//? ✴️ Нова система модулів відрізняється від CommonJS і інших,
//? перш за все тим, що це стандарт.
//? А значить, з часом, буде підтримуватися браузерами нативно,
//? без додаткових інструментів.
//? Однак зараз браузерна підтримка слабка, тому ESM використовуються
//? в поєднанні з інструментами збірки модулів,
//? такими як Webpack, Parcel, Rollup, Vite та іншими.
console.log(
    `%c
    EECMAScript Modules (ESM) використовуються
    в поєднанні з інструментами збірки модулів,
    такими як Webpack, Parcel, Rollup, Vite та іншими.
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ Найважливіша відмінність ESM полягає в тому, 
//? що вони розроблені з урахуванням статичного аналізу. 
//? Це означає, що при імпорті модулів, імпорт обробляється під час компіляції, 
//? тобто до запуску скрипта. 
//? Це дозволяє видаляти експорт, який не використовується іншими модулями, 
//? перш ніж запускати скрипт, що може призвести до значної економії ваги JS-файлу, 
//? зменшивши навантаження на браузер.
console.log("----------------------------------------------------------------------------------------------------------------");



//! Іменований експорт (Named export) var.1
console.warn("Іменований експорт (Named export) var.1:");
console.log(
    `%c
        //? Файл myModule.js
    const sqrt = Math.sqrt;
    export const square = x => x * x;
    export const diag = (x, y) => sqrt(square(x) + square(y))
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------");


console.log(
    `%c
        //? Файл index.js
    import { square, diag } from './myModule.js';
    console.log(square(11)); //! 121
    console.log(diag(4, 3)); //! 5
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------");




//! Іменований експорт (Named export) var.2
console.warn("Іменований експорт (Named export) var.2:");
console.log(
    `%c
        //? Файл myModule.js
    const sqrt = Math.sqrt;
    const square = x => x * x;
    const diag = (x, y) => sqrt(square(x) + square(y));
    export { square, diag };
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------");


console.log(
    `%c
        //? Файл index.js
    import { square, diag } from './myModule.js';
    console.log(square(11)); //! 121
    console.log(diag(4, 3)); //! 5
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------");



//! Імпорт всього як об'єкта (Namespace import)
console.warn("Імпорт всього як об'єкта (Namespace import):");
console.log(
    `%c
        //? Файл myModule.js
    const sqrt = Math.sqrt;
    export const square = x => x * x;
    export const diag = (x, y) => sqrt(square(x) + square(y));
        //? або
    const sqrt = Math.sqrt;
    const square = x => x * x;
    const diag = (x, y) => sqrt(square(x) + square(y));
    export { square, diag };
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------");


console.log(
    `%c
        //? Файл index.js
    import * as myModule from './myModule.js';
    console.log(myModule.square(11)); //! 121
    console.log(myModule.diag(4, 3)); //! 5
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------");



//! Експорт за замовчуванням (Default export)
console.warn("Експорт за замовчуванням (Default export):");
console.log(
    `%c
        //? myFunc.js
    export default function creatUser(name, age) {
        return {name, age}
    };

        //? myClass.js
    export default class User {
        constructor({ name, age } = {}) {
            this.name = name;
            this.age = age;
        };
        getInfo() {
            return "User " + this.name + " is " + this.age + " years old";
        };
    };
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------");

console.log(
    `%c
        //? Файл index.js
    import creatUser from './myFunc.js';
    import User from './myClass.js';

    const user = creatUser("Mango", 12);
    const newUser = new User(user);

    console.log(newUser.getInfo()); //! User Mango is 12 years old
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------------------");

