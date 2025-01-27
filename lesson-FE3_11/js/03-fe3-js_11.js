console.log(
    '%c 3.Абстрагування повторення       \n  (використання callback-функцій) ',
    'color: white; background-color: #D33F49',
);

//! 3.Абстрагування повторення (Використання callback-функцій).
//? Абстракція - приховування деталей реалізації.
//? Дозволяє думати про задачі на вищому (абстрактному) рівні.
//? Функції - це хороший спосіб побудови абстракцій.

console.warn("1.Виконуємо якусь дію певну кількість разів:");
//? 1.Наприклад, скрипт виконує якусь дію певну кількість разів.
//? З цією метою можна написати цикл for.
for (let i = 0; i < 10; i += 1) {
    console.log("for -> i:", i);
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.warn("2.Виконуємо якусь дію n(5) разів за допомогою функії:");
//? 2.Чи можемо ми абстрагувати 
//? «робити щось n разів» у якості функції? 
//? - так, напишемо функцію, 
//? яка викликає console.log() n разів.
function repeatLog(n) {
    for (let i = 0; i < n; i += 1) {
        console.log("function -> i:", i);
    }
};
repeatLog(5);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.warn("3.Виконуємо якусь дію передаючи її(дію) як аргумент:");
//? 3.Але, якщо ми хочемо виконати щось, крім логування чисел? 
//? Оскільки «робити щось» можна уявити функцією, 
//? а функції - це просто значення, ми можемо передати дію як аргумент.
function loggingPrint(value) {
    console.log("Logging value: ", value);
};

function сounterPrint(printValue) {
    console.log("Counter value: ", printValue);
};

function repeat(n, action) {
    for (let i = 0; i < n; i += 1) {
        action(i);
    }
};

//? Передаємо loggingPrint як callback-функцію
repeat(3, loggingPrint);
//! Logging value: 0
//! Logging value: 1
//! Logging value: 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? Передаємо сounterPrint як callback-функцію
repeat(3, сounterPrint);
//! Counter value: 0
//! Counter value: 1
//! Counter value: 2
console.log("-------------------------------------------------------");