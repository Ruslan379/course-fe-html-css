console.log('5.Взаємодія з користувачем. Отримання даних.');

//! alert
// const myMmessage = "JavaScript is awesome!";
// alert(myMmessage);

/*
 * - як window.alert() блокує інтерпретацію
 */
// console.log('До');
// alert('УВАГА!');
// console.log('После');




/*
 * - Отримання даних
 * - Методи window.confirm() та window.prompt()
 */

// confirm() — 
// виводить модальне вікно з повід, і дві кнопки, Ok і Cancel. 
//  Натискаючи на Ok, результатом будет true, на Cancel — повертається false.


// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);






// prompt() — 
// виводить мод вікно з полем введення і кнопками Ok і Cancel.
// повертається Ok - що ввів користувач, у випадку Cancel — null.

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);




// Важлива особливість prompt полягає в тому,
//  що незалежно від того, що ввів користувач, 
// завжди повернеться рядок...........................


// let quantity = prompt('введіть кількість товарів');
// console.log(quantity);
// console.log(typeof quantity);

// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);




// практика



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