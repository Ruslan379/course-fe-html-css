console.log(
    '%c 5.Форматування дати. ',
    'color: white; background-color: #D33F49',
);

//! Форматування дати
//? ✴️ Об'єкт дати може бути представлений
//? у різних рядкових і числових форматах.
//? Для цього існує цілий набір методів.

//?   📌 Наприклад:
//? 🔸 toString(),
//? 🔸 toDateString(),
//? 🔸 toTimeString()
//?  - повертають стандартне рядкове відображення,
//? що не задане жорстко у стандарті,
//? а залежить від браузера.
//? Єдина вимога до нього - читабельність для людини.

//? ✳️ Метод toString() повертає дату повністю,
//? а toDateString() і toTimeString() - тільки дату і час відповідно.

const date = new Date("March 16, 2030 14:25:00");
console.log("date: ", date); //! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)

console.log("date.toString():", date.toString()); //! "Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)"

console.log("date.toTimeString():", date.toTimeString()); //! "14:25:00 GMT+0200 (Восточная Европа, стандартное время)"

console.log("date.toLocaleTimeString():", date.toLocaleTimeString()); //! "14:25:00"

console.log("date.toUTCString():", date.toUTCString()); //! "Sat, 16 Mar 2030 12:25:00 GMT"

console.log("date.toDateString():", date.toDateString()); //! "Sat Mar 16 2030"

console.log("date.toISOString():", date.toISOString()); //! "2030-03-16T12:25:00.000Z"

console.log("date.toLocaleString():", date.toLocaleString()); //! "16.03.2030, 14:25:00"

console.log("date.getTime():", date.getTime()); //! 1899894300000
console.log("-------------------------------------------------------------------------------------------");


//! Новий стандарт форматування дати
console.warn("Новий стандарт форматування дати:");
//? ✴️ У всіх браузерах, крім IE10-, підтримується новий стандарт,
//? який додає спеціальні методи для форматування дат.

//? ✴️ Це робиться викликом date.toLocaleString (locale, opts),
//? в якому можна задати багато налаштувань.
//? Він дозволяє вказати, які параметри дати потрібно вивести,
//? і ряд налаштувань виведення, після чого інтерпретатор сам сформує рядок.

// const newStandardDateFormatting = new Date();
const newStandardDateFormatting = new Date("March 16, 2030 14:25:00");
console.log("date: ", date); //! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");

//? Формат виведення:
const options = {
    weekday: 'long',
    // weekday: 'short',
    // weekday: 'narrow',
    
    year: 'numeric',
    // year: "2-digit",

    month: 'short',
    // month: 'long',
    // month: "narrow",
    // month: 'numeric',
    // month: '2-digit',
    
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',

    // hour12: true, //! Для країн, де використовується AM/PM

    timeZone: "Europe/Kyiv",
    // timeZone: "Asia/Tokyo",
    // timeZone: "America/New_York",
};

//! Україна
const localeUk = newStandardDateFormatting.toLocaleString('Uk-uk', options);
console.log("localeUk_Україна:", localeUk); //! субота, 16 бер. 2030 р., 14:25
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");

//! Великобританія
const localeGB = newStandardDateFormatting.toLocaleString('en-GB', options);
console.log("localeUk_Великобританія:", localeGB); //! Saturday, 16 Mar 2030, 14:25
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");

//! USA
const localeUs = newStandardDateFormatting.toLocaleString('en-US', options);
console.log("localeUs_Україна:", localeUs); //! Saturday, Mar 16, 2030, 02:25 PM
console.log("-------------------------------------------------------------------------------------------");
