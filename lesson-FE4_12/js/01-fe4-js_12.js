console.log(
    '%c 1.Створення дати:                        \n   Клас Date - new Date() (поточна дата). \n   Клас Date - new Date(string).          \n   Метод - Date.parse(string).            ',
    'color: white; background-color: #D33F49',
);

//! Дата і час
//? ✴️ Клас Date безпосередньо абстрагує більшу частину роботи з датами.
//? Це дозволяє нам відображати моменти у часі як об'єкти
//? і маніпулювати ними заздалегідь визначеними методами.
//? Використовуючи можливості класу Date, можна створювати годинник,
//? лічильники, календарі та інші інтерактивні елементи інтефрейсу.


//! Клас Date - new Date() (поточна дата)
console.warn("Клас Date - new Date() (поточна дата):");
//? ✴️ Екземпляр об'єкта Date - це об'єкт, що відображає певний момент часу.
//? Створення дати без аргументів повертає об'єкт, що зберігає дату і час
//? на момент його ініціалізації, тобто поточні.
//? У рядковому перетворенні об'єкт повертає результат виклику
//? методу toString(), тому у другому лозі ми отримаємо рядок, а не об'єкт.
console.log(
    `%c
    const date = new Date(); //! поточна дата

    const startDate0 = new Date(0);
    `,
    'color: blue; font-size: 18px',
);

const date = new Date(); //! поточна дата

console.log("date:", date); //! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof (date):", typeof (date)); //! object

console.log("date.toString():", date.toString()); //! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof (date.toString()):", typeof (date.toString())); //! string
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✳️ Оскільки не були передані аргументи, буде створена поточна дата і час.
//? Однак, можна додатково передати рядок або число в Date, 
//? і результатом буде об'єкт, що описує зазначену дату і час:
const startDate0 = new Date(0);
console.log("startDate0 = new Date(0):", startDate0); //! Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)
const startDate1000 = new Date(1000);

console.log("startDate1000 = new Date(1000):", startDate1000); //! Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)
console.log("--------------------------------------------------------------------------------------------------------");



//! Клас Date - new Date(string)
console.warn("Клас Date - new Date(string):");
//? ✴️ Створюючи екземпляр класу Date, можна встановити дату рядком.
//? Рядок може описувати тільки дату або дату і час.
const teamMeetingDate = new Date("March 16, 2030");
console.log('teamMeetingDate = new Date("March 16, 2030"):\n',  teamMeetingDate);  //! "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log('preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00"):\n', preciseTeamMeetingDate);  //! "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Встановлення часу у вигляді рядків внутрішньо викликає метод Date.parse(),
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
    "\n", futureDate10
);
console.log("--------------------------------------------------------------------------------------------------------");


//! Метод - Date.parse(string)
console.warn("Метод - Date.parse(string):");


console.log("--------------------------------------------------------------------------------------------------------");