console.log(
    '%c 1.Створення дати:                 \n   Клас new Date() (поточна дата). \n   Клас new Date(string).          \n   Метод - Date.parse(string).     ',
    'color: white; background-color: #D33F49',
);

//! Дата і час
//? ✴️ Клас Date безпосередньо абстрагує більшу частину роботи з датами.
//? Це дозволяє нам відображати моменти у часі як об'єкти
//? і маніпулювати ними заздалегідь визначеними методами.
//? Використовуючи можливості класу Date, можна створювати годинник,
//? лічильники, календарі та інші інтерактивні елементи інтефрейсу.


//! Клас new Date() (поточна дата)
console.warn("Клас new Date() (поточна дата):");
//? ✴️ Екземпляр класа Date - це об'єкт, що відображає певний момент часу.
//? Створення дати без аргументів повертає об'єкт, що зберігає дату і час
//? на момент його ініціалізації, тобто поточні.
//? У рядковому перетворенні об'єкт повертає результат виклику
//? методу toString(), тому у другому лозі ми отримаємо рядок, а не об'єкт.
console.log(
    `%c
    const date = new Date(); //! поточна дата
    `,
    'color: blue; font-size: 18px',
);

const date = new Date(); //! поточна дата

console.log("date:", date); //! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof date:", typeof date); //! object
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log("date.toString():", date.toString()); //! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof date.toString():", typeof date.toString()); //! string
console.log("------------------------------------------------------------------------------------");


//! Клас new Date(string)
console.warn("Клас new Date(string):");
//? ✳️ Оскільки вище не були передані аргументи,
//? була створена поточна дата і час.
//? Однак, можна додатково передати рядок або число в Date,
//? і результатом буде об'єкт, що описує зазначену дату і час.

//? ✴️ Створюючи екземпляр класу Date, можна встановити дату рядком.
//? Рядок може описувати тільки дату або дату і час.
const teamMeetingDate = new Date("March 16, 2030");
console.log('teamMeetingDate = new Date("March 16, 2030"):\n',  teamMeetingDate);  //! "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log('preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00"):\n', preciseTeamMeetingDate);  //! "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Встановлення часу у вигляді рядків
//? внутрішньо викликає метод Date.parse(),
//? який перетворює рядок у число - кількість мілісекунд.
//? Саме тому формат переданого рядка - дуже гнучкий.
//? Наприклад, можна не вказувати нуль для днів і місяця.
//? Розглянемо кілька прикладів, які матимуть майже однаковий результат:
console.log(
    `%c
    Маємо майже однаковий результат:
    
    new Date("2030");
    new Date("2030-03");
    new Date("2030-03-16");
    new Date("03/16/2030");
    new Date("2030/03/16");
    new Date("2030/3/16");
    new Date("March 16, 2030");
    new Date("16 March 2030");
    new Date("March 16, 2030 14:25:00");
    new Date("2030-03-16 14:25:00");
    new Date("2030-03-16T14:25:00");

    new Date("Sat Mar 16 2030 14:25:00 GMT+0200");
    `,
    'color: blue; font-size: 18px',
);
const futureDate0 = new Date("2030");
const futureDate1 = new Date("2030-03");
const futureDate2 = new Date("2030-03-16");
const futureDate3 = new Date("03/16/2030");
const futureDate4 = new Date("2030/03/16");
const futureDate5 = new Date("2030/3/16");
const futureDate6 = new Date("March 16, 2030");
const futureDate7 = new Date("16 March 2030");
const futureDate8 = new Date("March 16, 2030 14:25:00");
const futureDate9 = new Date("2030-03-16 14:25:00");
const futureDate10 = new Date("2030-03-16T14:25:00");

const futureDate11 = new Date("Sat Mar 16 2030 14:25:00 GMT+0200");

console.log(
    "\n", futureDate0,
    "\n", futureDate1,
    "\n", futureDate2, 
    "\n", futureDate3, 
    "\n", futureDate4, 
    "\n", futureDate5, 
    "\n", futureDate6, 
    "\n", futureDate7, 
    "\n", futureDate8, 
    "\n", futureDate9, 
    "\n", futureDate10,
    "\n",
    "\n", futureDate11
);
console.log("------------------------------------------------------------------------------------");


//! Метод - Date.parse(string)
console.warn("Метод - Date.parse(string):");
//? ✴️ Метод Date.parse(str) може читати дату з рядка
//? та перетворює рядок у число - кількість мілісекунд.
//? ✴️ Виклик Date.parse(str) аналізує рядок у заданому форматі 
//? та повертає timestamp (кількість мілісекунд з 1 січня 1970 UTC+0). 
//? Якщо формат недійсний, повертає NaN.
console.log(
    `%c
    Date.parse("2030-03-16T14:25:00.000+02:00");
    `,
    'color: blue; font-size: 18px',
);
const timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00");
console.log('timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00"):', timestampDateParse);  //! 1899894300000 (timestamp)
console.log("typeof timestampDateParse:", typeof timestampDateParse); //! number

//! ✳️ Формат недійсний, повертає NaN:
const timestampDateParseError = Date.parse("2030-03-16T14:25:00.000+Z");
console.log('timestampDateParseError = Date.parse("2030-03-16T14:25:00.000+Z"):', timestampDateParseError);  //! NaN

//? ✳️ Формат рядка повинен бути:
//? YYYY - MM - DDTHH: mm: ss.sssZ,
//? 📌 де:
//? 🔸 YYYY-MM-DD — це дата: рік-місяць-день.
//? 🔸 Символ "T" використовується як роздільник.
//? 🔸 HH:mm:ss.sss — це час: години, хвилини, секунди і мілісекунди.
//? 🔸 'Z' - необов’язкова частина яка позначає часовий пояс у форматі +-hh:mm.
//?    Одинична буква Z буде означати UTC+0.

//? ✳️ Коротші варіанти також можливі, як YYYY-MM-DD або YYYY-MM або навіть YYYY.

console.log(
    `%c
            Формат рядка:

        YYYY - MM - DDTHH: mm: ss.sssZ
    
    🔸 YYYY-MM-DD — це дата: рік-місяць-день.
    🔸 Символ "T" використовується як роздільник.
    🔸 HH:mm:ss.sss — це час:
       години, хвилини, секунди і мілісекунди.
    🔸 'Z' - необов’язкова частина яка позначає
       часовий пояс у форматі +-hh:mm.
       Одинична буква Z буде означати UTC+0.
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------");
