console.warn('4.Tипи даних. Спеціальні значення. Оператор typeof.');

//! 4-1.Tипи даних
//! 4-2.Спеціальні значення
//! 4-3.Оператор typeof
//! ___________________________


//! 4-1.Tипи даних
//? Number —  цілі числа і числа з плаваючою комою (крапкою).
const myAge = 10;
const totalPrice = 200.74;
// const totalPrice = 200,74;

//? String   — рядки, послідовність з нуля або більше символів. 
//? Рядок починається і закінчується одинарними ', або подвійними лапками ".
const userName = 'Chelsy';
const message = 'welcome!';
const username = 'Mango995';
const description = "JavaScript is awesome!";
// console.log('username:', username); // Mango995

//? Boolean   — логічний тип даних, прапорці стану.
const isOpen = true;
const shouldConfirm = false;
const isModalOpen = true;
const isLoggedIn = false;
// console.log('isLoggedIn:', isLoggedIn); // false


//! 4-2.Спеціальні значення
//? null — особливе значення, яке по суті означає ніщо. 
//? Використовується в тих ситуаціях, коли необхідно 
//? явно вказати порожнечу. 
let value = null;
// console.log('value:', value); // null

//? undefined - значення на даний момент невідоме чи невизначене.
//? змінна була оголошена, але ще не була ініціалізована значенням
let myValue;
// console.log('myValue:', myValue); // undefined


//! 4-3.Оператор typeof
/*
* Використовується для отримання типу значення змінної. 
* повертає на місце свого виклику тип значення змінної, 
* вказаного після нього — рядок, в якому вказано тип.
*/
const quantity = 17;
// console.log('typeof quantity =', typeof quantity); // виведе "number"

const myMessage = "JavaScript is awesome!";
// console.log('typeof myMessage =', typeof myMessage); // виведе "string"

const isSidebarOpen = false;
// console.log('typeof isSidebarOpen =', typeof isSidebarOpen); // виведе "boolean"

let userAge;
// console.log('typeof userAge =', typeof userAge); // виведе "undefined"

const type = typeof isOpen;
// console.log('type:', type); // виведе "boolean"

let myStatus = null;
// console.log('typeof myStatus =', typeof myStatus); // виведе "object"
//?  В ранніх версіях JavaScript null було розглянуто 
//?  як спеціальний випадок об’єкта.
//?  Це була помилка в реалізації мови, збережена для 
//?  забезпечення зворотної сумісності з існуючим кодом



//? BigInt
/*
* В JavaScript тип данних «number» не може
* містити числа більше, ніж 9007199254740991,
* чи менше, ніж -9007199254740991.
* ECMAScript 2020 (ES11). Він дозволяє працювати з цілими числами, 
* які можуть бути більшими за максимальне значення
*/
const bigInteger = 12345678901234567890123456789n;
// console.log('typeof bigInteger =', typeof bigInteger); // виведе "bigint"


//? Symbol
/*
* Символи використовуються для створення унікальних 
* ідентифікаторів, що не можуть бути випадково
* переплутані з іншими ідентифікаторами,
*/
let id = Symbol("id");
// console.log('typeof id =', typeof id); // виведе "symbol"






//! практика
//? 1
// Оголоси наступні змінні, використовуючи ключове слово const 
//  і присвой їм відповідні значення.

// topSpeed - число 160
// distance - число 617.54
// login - рядок "mango935"
// isOnline - буль true
// isAdmin - буль false


// const age = 10;
// const firstName = 'Chelsy';
// const isVIP = true;
// console.log(age);
// console.log(firstName);
// console.log(isVIP);

// console.log(typeof 'Chelsy');

// console.log('This is a number: ', age);


//? 2
// Оголоси змінну з привітанням, виведи її через alert()
