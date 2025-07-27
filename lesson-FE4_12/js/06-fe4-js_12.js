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
