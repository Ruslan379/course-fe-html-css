console.log(
    '%c 2.Бібліотека nanoid. ',
    'color: white; background-color: #D33F49',
);

//! Бібліотека nanoid
console.warn("Бібліотека nanoid на NPM: \n https://www.npmjs.com/package/nanoid");
console.warn("Бібліотека nanoid на GitHub: \n https://github.com/ai/nanoid/blob/HEAD/README.ru.md");


//! Встановлення бібліотеки nanoid
console.warn("Встановлення бібліотеки nanoid:")
console.log(
    `%c
    npm i nanoid
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");


//! Використання бібліотеки nanoid
console.warn("Використання бібліотеки nanoid:")
console.log(
    `%c
    import { nanoid } from 'nanoid'
    const id = nanoid();
    console.log("id:", id); //! LwSYuYYuT74FtNmT5pfl8
    `,
    'color: blue; font-size: 18px',
);