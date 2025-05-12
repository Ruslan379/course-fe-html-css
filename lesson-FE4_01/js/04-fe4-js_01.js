console.warn('4.Tипи даних. Спеціальні значення. Оператор typeof.');

//! Tипи даних
//! Спеціальні значення типу даних
//! Оператор typeof
//! BigInt - спеціальний тип даних
//! Symbol - спеціальний тип даних
//! ___________________________


//! Tипи даних
//? Number —  цілі числа і(або) числа з плаваючою комою(крапкою).
const myAge = 10;
const totalPrice = 200.74;
// const totalPrice = 200,74; //! ❌ Неправильно, буде помилка!
console.log('totalPrice:', totalPrice); //! totalPrice: 200.74

//? String   — рядки, послідовність з нуля("") або більше символів. 
//? Рядок починається і закінчується одинарними ', або подвійними лапками ".
const userName = 'Chelsy'; //! userName i username - це різні імена змінних
const message = 'welcome!';
const username = 'Mango-369'; //! userName i username - це різні імена змінних
const description = "JavaScript is awesome!";
console.log('userName:', userName); //! userName: Chelsy
console.log('username:', username); //! Mango-369

//? Boolean   — логічний тип даних, прапорці стану.
//? Має лише два значеня: true або false (правда або брехня)
const isOpen = true;
const shouldConfirm = false;
const isModalOpen = true;
const isLoggedIn = false;
console.log('isLoggedIn:', isLoggedIn); //! false


//! Спеціальні значення типу даних
//? null — особливе значення, яке по суті означає НІЩО. 
//? Використовується в тих ситуаціях, коли необхідно 
//? явно вказати порожнечу. 
let value = null;
console.log('value:', value); //! null

//? undefined - значення на даний момент невідоме чи невизначене.
//? undefined буде тоді, коли змінна була оголошена, 
//? але ще не була ініціалізована значенням
let myValue;
console.log('myValue:', myValue); //! undefined
console.log("-----------------------");


//! Оператор typeof
//? Використовується для отримання типу значення змінної. 
//? повертає на місце свого виклику тип значення змінної, 
//? вказаного після нього — рядок, в якому вказано тип.
const quantity = 17;
console.log('typeof quantity =', typeof quantity); //! typeof quantity = number

const myMessage = "JavaScript is awesome!";
console.log('typeof myMessage =', typeof myMessage); //! typeof myMessage = string

const isSidebarOpen = false;
console.log('typeof isSidebarOpen =', typeof isSidebarOpen); //! typeof isSidebarOpen = boolean

const isClose = true;
const typeIsClose = typeof isClose;
console.log('typeIsClose:', typeIsClose); //! type: boolean

let userAge;
console.log('typeof userAge =', typeof userAge); //! typeof userAge = undefined

//?  В ранніх версіях JavaScript null було розглянуто
//?  як спеціальний випадок об’єкта.
//?  Це була помилка в реалізації мови, збережена для
//?  забезпечення зворотної сумісності з існуючим кодом
let myStatus = null;
console.log('typeof myStatus =', typeof myStatus); // виведе "object"
console.log("-----------------------");


//! BigInt - спеціальний тип даних
//? В JavaScript тип данних «number» не може
//? містити числа більше, ніж 9007199254740991,
//? чи менше, ніж -9007199254740991.
//? ECMAScript 2020 (ES11)дозволяє працювати з цілими числами,
//? які можуть бути більшими за максимальне значення
//? використовуючи тип даних - BigInt
const bigInteger = 12345678901234567890123456789n;
console.log('typeof bigInteger =', typeof bigInteger); // виведе "bigint"


//! Symbol - спеціальний тип даних
//? Symbol використовуються для створення унікальних 
//? ідентифікаторів, що не можуть бути випадково
//? переплутані з іншими ідентифікаторами,
const id = Symbol("myId");
console.log('typeof id =', typeof id); //! typeof id = symbol







//! Практика
//todo [1]


