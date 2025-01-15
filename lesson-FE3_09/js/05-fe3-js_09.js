console.log(
    '%c 5.Оголошення функції (function declaration) ',
    'color: white; background-color: #D33F49',
);

//! 5.Оголошення функції (function declaration)
console.warn("Створення ти виклики функції (function declaration):");
//? Оголошення функції (function declaration)
//? - це Інший спосіб створити функцію використовуючи
//? ключове слово function на початку інструкції.
//? Особливістю такого синтаксису є те,
//? що функцію можна викликати як
//? ✅ ДО її оголошення(створення) в коді, так i
//? ✅ ПІСЛЯ її оголошення(створення).
fnDec(); //todo✅: виклик  функції (function declaration) ДО її створення
function fnDec() {
    console.log("Це функція 'fnDec'");
};
fnDec(); //todo✅: виклик  функції (function declaration) ПІСЛЯ її створення
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . ");

console.warn("Створення ти виклики функції (function expression):");
//? Функціональний вираз(function expression)
//? ❌ не можна викликати ДО місця його оголошення(створення),
//? ✅ тільки ПІСЛЯ місця його оголошення(створення),
//?  тому що це буквально оголошення const змінної.
// fnExp(); //todo❌: виклик  функції (function expression) ДО її створення
const fnExp = function() {
    console.log("Це функція 'fnExp'");
};
fnExp(); //todo✅: виклик  функції (function expression) ПІСЛЯ її створення
console.log("-----------------------------------------------------");
