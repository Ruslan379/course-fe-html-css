console.log(
    '%c 2.Деструкткризація масивів. ',
    'color: white; background-color: #D33F49',
);

//! Деструкткризація масивів
console.warn("Деструкткризація масивів:");
//? ✴️ Деструктуризоване присвоювання можна використовувати
//? і для масивів, але з деякими особливостями.
//? ❗️➖ Замість фігурних дужок {} використовуються квадратні [].
//? ❗️➖ Змінним, зазначеним у квадратних дужках [],
//?      будуть послідовно присвоюватися значення елементів масиву.
//? ✳️ Після ключового слова const або let ставимо
//? квадратні дужки, як і у випадку з оголошенням масиву.
//? Всередині дужок, через кому, вказуємо імена змінних,
//? в які будуть поміщені значення масиву.
//? ✳️ Внаслідок такого запису будуть створені 3 змінні, 
//? і в них будуть поміщені елементи в нумерованому порядку
//?  - від 0 і до кінця масиву.
const rgb1 = [200, 255, 100];
console.log("rgb1:", rgb1);
console.log("`  `  `  `  `  `  `  `  `  `");

const [red1, green1, blue1] = rgb1;

console.log(`Red1:${red1}, Green1:${green1}, Blue1:${blue1}`); //! 'Red:200, Green:255, Blue:100'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Присвоєння значення змінної після її оголошення
console.warn("Присвоєння значення змінної після її оголошення:");
//? ✴️ Під час деструктуризації масивів,
//? значення змінної може присвоюватися після її оголошення.
//? На практиці це рідко використовується.
const rgb2 = [128, 100, 255];
console.log("rgb2:", rgb2);
console.log("`  `  `  `  `  `  `  `  `  `");

let red2, green2, blue2;

[red2, green2, blue2] = rgb2;

console.log(`Red2:${red2}, Green2:${green2}, Blue2:${blue2}`); //! 'Red2:128, Green2:100, Blue2:255'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Значення за замовчуванням
console.warn("Значення за замовчуванням:");
//? ✴️ Якщо змінних більше, ніж елементів масиву,
//? їм буде присвоєно undefined,
//? тому можна вказувати значення за замовчуванням.
const rgb3 = [100, 128, 200];
console.log("rgb3:", rgb3);
console.log("`  `  `  `  `  `  `  `  `  `");

const [red3, green3, blue3, alfa3 = 0.3] = rgb3;

console.log(`Red3:${red3}, Green3:${green3}, Blue3:${blue3}, Alfa3:${alfa3}`); //! 'Red3:100, Green3:128, Blue3:200, Alfa3:0.3'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Часткова деструктуризація
console.warn("Часткова деструктуризація:");
//? ✴️ Іноді з масиву необхідно деструктуризувати тільки перші N елементів,
//? а інші зберегти в одну змінну у вигляді масиву.
//? Деструктуруючи масив, можна розпакувати і присвоїти
//? іншу частину елементів масиву змінної, використовуючи операцію ... (rest).
const rgb4 = [150, 220, 50];
console.log("rgb4:", rgb4);
console.log("`  `  `  `  `  `  `  `  `  `");

const [red4, ...restOthercColors4] = rgb4;

console.log("red4:", red4); //! 150
console.log("restOthercColors4:", restOthercColors4); //! [220, 50]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Пропуск елементів
console.warn("Пропуск елементів:");
const rgb5 = [11, 112, 213];
console.log("rgb5:", rgb5);
console.log("`  `  `  `  `  `  `  `  `  `");

const [, , blue5] = rgb5;

console.log(`Blue5: ${blue5}`); //! 'Blue5: 213'
console.log("---------------------------------------------------");
