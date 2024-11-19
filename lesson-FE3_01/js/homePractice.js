//? Створити змінну з іменем age і присвоїти їй значення свого віку.
//?  Вивести значення цієї змінної в консоль.

const age = 31;
console.log('age:', age);


//? Створити змінну з іменем name і присвоїти їй значення свого імені. 
//? Вивести значення цієї змінної в консоль.

const name = "MyName";
console.log('name:', name);


//? Створити змінну з іменем isStudent і присвоїти їй значення true або false, 
//? залежно від того, чи є студентом. Вивести значення цієї змінної в консоль.

const isStudent = true;
console.log('Я студент? - ', isStudent);


//? Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою.
//? Вивести цей рядок в консоль.

const myString = "The whole is greater than the sum of its parts";
console.log('myString:', myString);


//? Створити змінну з іменем myNumber і присвоїти їй довільне числове значення. 
//? Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.

let myNumber = 12;
myNumber = myNumber + 10;
console.log('myNumber + 10 = ', myNumber);


//? Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль.

const myNull = null;
console.log('myNull:', myNull);


//? Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt(). 
//? Після введення імені вивести повідомлення привітання з використанням введеного імені.

const message = "Enter your name";
const clientName = prompt(message);
const greeting = "Hello " + clientName;
alert(greeting);
console.log('clientName:', clientName);


//? Створити скрипт який виводить спливаюче підтвердження за допомогою confirm(). 
//? Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". 
//? Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".

const question = "Are you ready?";
const answer = confirm(question);
if (answer) {
    alert("Дякую за підтвердження!");
} else {
    alert("Чекаю на вашу готовність!");
}
console.log('Your answer-1:', answer);


//? Створити скрипт який виводить спливаюче попередження за допомогою alert(). 
//? Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm(). 
//? Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". 
//? Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!"

const warning = "Дія небезпечна, підтвердіть дію";
alert(warning);
const clientAnswer = confirm(warning);
if (clientAnswer) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}
console.log('Your answer-2:', clientAnswer);