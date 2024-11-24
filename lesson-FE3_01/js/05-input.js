console.warn('5.Взаємодія з користувачем. Отримання даних.');

//! alert
const myMmessage = "JavaScript is awesome!";
// console.log(myMmessage);
// alert(myMmessage);

//* Приклад того як window.alert() блокує інтерпретацію
// console.log('До');
// alert('УВАГА!');
// console.log('Після');



//! Отримання даних
//* Методи window.confirm() та window.prompt()

//! confirm() 
//? Виводить модальне вікно з повід, і дві кнопки, Ok і Cancel. 
//? Натискаючи на Ok, результатом будет true, 
//? Натискаючи на Cancel — повертається false.

//todo Просимо клієнта підтвердити бронювання готелю
//todo і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// console.log('isComing:', isComing);


//! prompt()  
//? Виводить модальне вікно з полем введення і кнопками Ok і Cancel.
//? Повертається Ok - що ввів користувач, у випадку Cancel — null.

//todo Запитуємо назву готеля, в якому хотів би зупинитися клієнт
//todo і зберігаємо результат виклику prompt у змінну.

// const hotelName = prompt("Please enter desired hotel name");
// console.log('hotelName:', hotelName);


//? Важлива особливість prompt полягає в тому,
//?  що незалежно від того, що ввів користувач, 
//? завжди повернеться рядок
// let quantity = prompt('Введіть кількість товарів');
// console.log('quantity-1:', quantity);
// console.log('typeof quantity =', typeof quantity);

//? Зміна типу зі string на number
// quantity = Number(quantity);
// console.log('quantity-2:', quantity);
// console.log('typeof quantity-2 =', typeof quantity);




//! практика

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