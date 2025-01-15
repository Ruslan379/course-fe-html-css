console.log(
    '%c 7.Hoisting (Підняття змінних) ',
    'color: white; background-color: #D33F49',
);

//! 7.Hoisting (Підняття змінних)
//? У мовах програмування, в тому числі в JavaScript, код виконується у дві фази:

//! Фаза компіляції
console.warn("Фаза компіляції, інтерпретації або оцінки (compile time, evaluation time):");
//? Фаза компіляції, інтерпретації
//? або оцінки (compile time, evaluation time)
//? - підготовка перед виконанням коду,
//? перевірка валідності синтаксису вихідного коду.
console.log('Цього повідомлення не буде в консолі.');
// cons valueOne = 5; //! ❌ ПОМИЛКА компіляції!
console.log(". . . . . . . . . . . . . . . . . . .");

//! Фаза виконання
//? Фаза виконання (runtime) - скрипт починає виконуватися,
//? виконуються інструкції викликів функцій і оцінки виразів,
//? відбувається пошук необхідних ідентифікаторів
//? у відповідних областях видимості тощо.

//! Підняття змінних (hoisting)
console.warn("Підняття змінних (hoisting) з var:");
//? - це механізм інтерпретатора, який,
//? ДО фази виконання коду,
//? підіймає оголошення змінних
//? в початок області видимості (блочної або функції)
//? в якій вони були оголошені.
//todo: Саме тому працює function declaration
//todo: і так дивно поводяться змінні,
//todo: оголошені використовуючи var
//todo: - їх оголошення підіймаються
//todo: в початок області видимості функції
//todo: в якій вони були оголошені.
console.log("Global-1 --> valueVar:", valueVar); //! undefined
valueVar = 5;
console.log("Global-2 --> valueVar:", valueVar); //! 5

if (true) {
    console.log("if-1 --> valueVar:", valueVar); //! 5
    var valueVar = 10;
    console.log("if-2 --> valueVar:", valueVar); //! 10
};

valueVar = 15;
console.log("Global-3 -->valueVar:", valueVar); //! 15
console.log(". . . . . . . . . . . . . . . . . . .");


//! Ось тому ми використовуємо let або const
console.warn("Підняття змінних (hoisting) з let або const:");
//? Змінні оголошені використовуючи let або const
//? так само підіймаються, але при цьому
//? підкоряються блочні області видимості,
//? нічим не ініціалізуются за замовчуванням
//? і не доступні для звернення
//? до того місця в коді де були оголошені в коді.
//todo У кожній області видимості буде створена своя, незалежна змінна value:
// console.log("Global-1 --> value:", value); //! ❌ ПОМИЛКА інтерпретатора: ReferenceError: value is not defined
const value = 5;
console.log("Global-2 --> value:", value); //! 5

if (true) {
    // console.log("if-1 --> value:", value); //! ❌ ПОМИЛКА інтерпретатора: ReferenceError: value is not defined
    const value = 10;
    console.log("if-2 --> value:", value); //! 10
};

console.log("Global-3 --> value:", value); //! 5
console.log("----------------------------------------------");
