console.warn('5.Взаємодія з користувачем. Отримання даних.');
//! alert - виведення даних в модальне вікно
//! confirm() - oтримання даних з модального вікна
//! prompt() - oтримання даних з модального вікна
//! ___________________________

//! alert
const myMmessage = "JavaScript is awesome!";
console.log(myMmessage);
alert(myMmessage);

//* Приклад того як window.alert() блокує інтерпретацію
console.log('До');
alert('УВАГА!');
console.log('Після');


//todo Методи window.confirm() та window.prompt()

//! confirm() - oтримання даних з модального вікна
//? Виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel.
//? Натискаючи на Ok, результатом будет true,
//? Натискаючи на Cancel — повертається false.
//todo Просимо клієнта підтвердити бронювання готелю
//todo і зберігаємо результат роботи confirm у змінну
const isComing = confirm("Please confirm hotel reservation");
console.log('isComing:', isComing);


//! prompt() - oтримання даних з модального вікна
//? Виводить модальне вікно з полем введення і кнопками Ok і Cancel.
//? Повертається Ok - що ввів користувач, у випадку Cancel — null.
//todo Запитуємо назву готеля, в якому хотів би зупинитися клієнт
//todo і зберігаємо результат виклику prompt у змінну.
const hotelName = prompt("Please enter desired hotel name");
console.log('hotelName:', hotelName);


//todo Важлива особливість prompt полягає в тому,
//todo  що незалежно від того, що ввів користувач,
//todo завжди повернеться рядок
let quantity = prompt('Введіть кількість товарів');
console.log('quantity-1:', quantity);
console.log('typeof quantity =', typeof quantity);

//todo Зміна типу зі string на number
quantity = Number(quantity);
console.log('quantity-2:', quantity);
console.log('typeof quantity-2 =', typeof quantity);







//! Практика
//todo [1]
// Оголоси змінну з привітанням, виведи її через alert()


//todo [2]
// const shouldRenew = confirm('Хочете продовжити підпистку?');
// console.log(shouldRenew);

// if (shouldRenew ){
//         alert("Дякую за підтвердження!");
//     } else {
//         alert("Дію відмінено!");
//     }


// const message = "введіть імя";
// const clientName = prompt(message);
// const greeting = "Доброго дня " + clientName;
// console.log(greeting);

// if (clientName === null) {
//     alert("Спробуйте ще раз");
// } else {
//     alert(greeting);
// }


// let clientAge = prompt("Введіть ваш вік");

// console.log(clientAge);

// if (clientAge === null) {
//     alert("До наступних зустрічей");
// } else if (clientAge >= 16) {
//     alert("Вам до лікаря для дорослих");
// } else if (clientAge < 16){
//     alert("Вам до лікаря для дітей");
// } else {
//     alert("Спробуйте ще раз");
// }

