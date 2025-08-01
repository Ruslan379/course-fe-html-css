console.log(
    '%c 3.Unix час. ',
    'color: white; background-color: #D33F49',
);

//! new Date(number)
console.warn("new Date(numder):");
//? ✳️ В області інформатики існує концепція епохи Unix.
//? Цей момент часу встановлений на
//? північ 1 січня 1970 року в часовому поясі UTC.
//? ✴️ Внутрішньо дати відображені в мілісекундах, 
//? що минули після опівночі 1 січня 1970 року у часовому поясі UTC. 
//? Для комп'ютера - це дата початку відліку часу - Unix час. 
//? Тому під час ініціалізації дати одним числом, 
//? воно являє собою кількість мілісекунд, що вже минула.
console.log(
    `%c
    - Дата початку відліку часу - 1 січня 1970 року,
    - Unix час,
    - timestamp.

    const startDate0 = new Date(0); 
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ В клас Date можна додатково передати число,
//? і результатом буде об'єкт, що описує зазначену дату і час.
const startDate0 = new Date(0); //! дата початку відліку часу - 1 січня 1970 року - Unix час - timestamp
console.log("startDate0 = new Date(0):", startDate0); //! Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)
const startDate1000 = new Date(1000); Number

//! Повертає числове значення цієї дати (timestamp) - кількість мілісекунд, що минула з півночі 1 січня 1970 року.
console.log("startDate1000 = new Date(1000):", startDate1000); //! Thu Jan 01 1970 03:00:01 GMT+0300 (Восточная Европа, стандартное время)

console.log("new Date(1899894300000):", new Date(1899894300000)); //! Sat Mar 16 2030 19:25:00 GMT+0200 (Восточная Европа, стандартное время)

console.log("new Date(1753541240287):", new Date(1753541240287)); //! Sat Jul 26 2025 17:47:20 GMT+0300 (Восточная Европа, летнее время)
console.log("--------------------------------------------------------------------------------------------------------");


//! Date.now()
console.warn("Date.now():");
//? ✴️ Щоб побачити число мілісекунд від цієї дати до
//? поточного моменту, використовується статичний метод Date.now().

//? ✳️ Зручність цього формату полягає в тому, 
//? що можна представляти точні моменти часу 
//? у вигляді одного числа і не турбуватися 
//? про дати, рядки і часові пояси, 
//? оскільки можна отримати всю необхідну інформацію коли необхідно.
console.log(
    `%c
    const date = Date.now();
    `,
    'color: blue; font-size: 18px',
);
const date = Date.now();
console.log("date = Date.now():", date); //! 1753541240287
console.log("typeof date:", typeof date); //! number
console.log("--------------------------------------------------------------------------------------------------------");
