console.log(
    '%c 4.Методи new Date(): Геттери. ',
    'color: white; background-color: #D33F49',
);

//! Методи new Date()
//? ✴️ Екземпляр класу Date має безліч методів
//? для читання і запису значень дати і часу.
//? Методи повертають або присвоюють рік, місяць,
//? день місяця або тижня, годину, хвилину, секунду
//? і мілісекунду для кожного екземпляра.
//? Ці дані можуть бути у вигляді рядка
//? з урахуванням місцевого календаря або мови.


//! Геттери
console.warn("Геттери:");
//? ✴️ Геттери використовуються для читання усієї дати 
//? або окремої складової. Значення, що повертається, 
//? залежить від поточного часового поясу, 
//? встановленого на вашому комп'ютері.
console.log(
    `%c
    const date = new Date();
    ----------------------------------------------------------------------------
    date.getDate() - повертає день місяця від 1 до 31

    date.getDay() -  повертає день тижня від 0 до 6

    date.getMonth() - повертає місяць від 0 до 11

    date.getFullYear() - повертає рік з 4 цифр

    date.getHours() - повертає години

    date.getMinutes() - повертає хвилини

    date.getSeconds() - повертає секунди

    date.getMilliseconds() - повертає мілісекунди

    date.getTime() - повертає кількість мілісекунд минулих зі старту епохи Unix
    ----------------------------------------------------------------------------
    `,
    'color: blue; font-size: 18px',
);
const date = new Date();
// const date = new Date("Sun Jul 27 2025 16:39:21.358 GMT+0300");
console.log("date: ", date); //! Sun Jul 27 2025 16:39:21 GMT+0300 (Восточная Европа, летнее время)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? Повертає день місяця від 1 до 31:
console.log("date.getDate(): ", date.getDate()); //! 27

//? Повертає день тижня від 0 до 6:
console.log("date.getDay(): ", date.getDay()); //! 0

//? Повертає місяць від 0 до 11:
console.log("date.getMonth(): ", date.getMonth()); //! 6

//? Повертає рік з 4 цифр:
console.log("date.getFullYear(): ", date.getFullYear()); //! 2025

//? Повертає години:
console.log("date.getHours(): ", date.getHours()); //! 16

//? Повертає хвилини:
console.log("date.getMinutes(): ", date.getMinutes()); //! 39

//? Повертає секунди:
console.log("date.getSeconds(): ", date.getSeconds()); //! 21

//? Повертає мілісекунди:
console.log("date.getMilliseconds(): ", date.getMilliseconds()); //! 358

//? Повертає кількість мілісекунд минулих зі старту епохи Unix:
console.log("getTime():", date.getTime());
console.log("------------------------------------------------------------------------------------------------------------------------");


//! Приклад форматування поточної дати
console.warn("Приклад форматування поточної дати:");
const currentDate = new Date();

//? Час в мс з початку епохи Unix: ....  значення будуть змінюватися
console.log(`Час в мс з початку епохи Unix: ${currentDate.getTime()}`);

let result = ' Дата: ';

result += currentDate.getDate() + '/'; //! день
result += (currentDate.getMonth() + 1) + '/'; //! місяць
result += currentDate.getFullYear() + ','; //! рік

result += '\n День тижня: ' + convertDayOfWeek(currentDate.getDay()) + ','; //! день тижня

result += '\n Час: ' + currentDate.getHours() + ':'; //! години
result += currentDate.getMinutes() + ':'; //! хвилини
result += currentDate.getSeconds() + ':'; //! секунди
result += currentDate.getMilliseconds() + ''; //! мілісекунди

//? Рядок повинен показати поточу дату та час:
console.log(result); //! ...  значення будуть змінюватися
//! Дата: 27/7/2025,
//! День тижня: неділя,
//! Час: 17:3:41:541

//? Функция конвертує день тижня у звичний нам рядковий формат:
// todo: var.1
// function convertDayOfWeek(dayOfWeek) {
//     console.error("currentDate.getDay():", dayOfWeek); //!
//     let dayOfWeekString = "";

//     switch (dayOfWeek) {
//         case 0:
//             dayOfWeekString = "неділя";
//             break;
//         case 1:
//             dayOfWeekString = "понеділок";
//             break;
//         case 2:
//             dayOfWeekString = "вівторок";
//             break;
//         case 3:
//             dayOfWeekString = "середа";
//             break;
//         case 4:
//             dayOfWeekString = "четвер";
//             break;
//         case 5:
//             dayOfWeekString = "п'ятниця";
//             break;
//         case 6:
//             dayOfWeekString = "субота";
//             break;
//         default:
//             console.warn("ERROR"); //! інструкції default блока;
//     };
//     // console.log("День тижня:", dayOfWeekString); //!
//     return dayOfWeekString;
// };

// todo: var.2 (приклад Валерія Шмідта)
function convertDayOfWeek(dayOfWeek) {
    const week = [
        'Неділя',
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четверг',
        "П'ятниця",
        'Субота'
    ];
    return week[dayOfWeek];
};
// convertDayOfWeek(currentDate.getDay());
console.log("------------------------------------------------------------------------------------------------------------------------");


//! Геттери у форматі UTC
console.warn("Геттери у форматі UTC:");
//? ✴️ Існують еквівалентні версії цих методів,
//? які повертають значення у форматі UTC (Coordinated Universal Time),
//? а не адаптовані до поточного часового поясу користувача.
console.log(
    `%c
    const date = new Date();
    ----------------------------------------------------------------------------
    date.getUTCDate() - повертає день місяця від 1 до 31

    date.getUTCDay() -  повертає день тижня від 0 до 6

    date.getUTCMonth() - повертає місяць від 0 до 11

    date.getUTCFullYear() - повертає рік з 4 цифр

    date.getUTCHours() - повертає години

    date.getUTCMinutes() - повертає хвилини

    date.getUTCSeconds() - повертає секунди

    date.getUTCMilliseconds() - повертає мілісекунди
    ----------------------------------------------------------------------------
    `,
    'color: darkgreen; font-size: 18px',
); console.log("------------------------------------------------------------------------------------------------------------------------");
