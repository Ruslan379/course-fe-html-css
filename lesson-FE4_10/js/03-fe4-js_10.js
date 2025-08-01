console.log(
    '%c 3.Багатопотоковість ',
    'color: white; background-color: #D33F49',
);

//! Багатопотоковість
console.log(
    `%c
    Асинхронність і Багатопотоковість (паралелізм)
    - це різні моделі програмування
    `,
    'color: blue; font-size: 18px',
);
//? ✴️ Не треба плутайті Асинхронність і Багатопотоковість (паралелізм)
//? - це різні моделі програмування.
//? Наведемо просту аналогію, яка все розставить на свої місця.
//? 📌 Уявіть, що ви шеф у ресторані і надходить замовлення на каву і тости:
//? 🔸 Синхронний однопотоковий підхід -
//?    ви самі спочатку готуєте каву, потім тости і подаєте їх,
//?    після чого прибираєте на кухні.
//? 🔸 Асинхронний однопотоковий підхід -
//?    ви починаєте готувати каву і встановлюєте таймер,
//?    потім починаєте готувати тости і так само встановлюєте таймер.
//?    Доки кава і тости готуються, ви прибираєте на кухні.
//?    Коли таймери спрацьовують, ви знімаєте з вогню каву,
//?    дістаєте тости і подаєте їх.
//? 🔸 Багатопотоковий підхід (паралелізм) -
//?    ви наймаєте двох помічників, одного - для приготування кави,
//?    а іншого - для тостів. Тепер у вас є проблема управління
//?    помічниками (потоками), щоб вони не конфліктували один з одним
//?    на кухні під час спільного використання ресурсів.

//? ✳️ В асинхронних однопотокових процесах у вас є графік завдань,
//? в якому деякі завдання залежать від результату роботи інших.
//? З виконанням кожного завдання викликається код для обробки його результату.
//? Але вам потрібен тільки один працівник для виконання усіх завдань,
//? а не один працівник для одного завдання.
console.log("----------------------------------------------------------------------------");
