console.warn('5.Взаємодія з користувачем. Отримання даних.');

//todo Методи window.alert(), window.confirm(), window.prompt()
//! alert() - виведення даних в модальне вікно
//! confirm() - oтримання даних з модального вікна
//! prompt() - oтримання додаткових даних з модального вікна
//! ___________________________


//! alert()
//? Виводить модальне вікно з ПОВІДОМЛЕННЯМ і КНОПКОЮ [OK] та чекає підтвердження.
const myMmessage = "alert() --> JavaScript is awesome!";
console.log(myMmessage);
alert(myMmessage);
console.log("---------------------------------");

//?o Приклад того як alert() блокує інтерпретацію(компіляцію)
console.log('До запуска alert()');
alert('alert() --> Зверніть увагу на консоль!');
//todo Тут код припиняє свою роботу до
//todo підтерження повідомленя від alert(),
//todo тобто до натискання на кнопку[OK]
console.log('Після виконання alert()');
console.log("---------------------------------");


//! confirm() - oтримання даних з модального вікна
//? Виводить модальне вікно з ПОВІДОМЛЕННЯМ і КНОПКАМИ [OK] і [Cancel].
//? Натискаючи на [OK] отримуємо в змінну isComing значення = true,
//? Натискаючи на [Cancel] отримуемо в змінну isComing значення = false.
//todo ПРИКЛАД: Просимо клієнта підтвердити бронювання готелю
//todo і зберігаємо результат роботи confirm у змінну isComing
let isComing = confirm("confirm() --> Please confirm hotel reservation_[OK]");
console.log('isComing_[OK]:', isComing);
isComing = confirm("confirm() --> Please confirm hotel reservation_[Cancel]");
console.log('isComing_[Cancel]:', isComing);
console.log("---------------------------------");


//! prompt() - oтримання додаткових даних з модального вікна
//? Виводить модальне вікно з ПОВІДОМЛЕННЯМ та ПОЛЕМ ВВЕДЕННЯ ДАНИХ і КНОПКАМИ [OK] і [Cancel].
//? Отримуємо в змінну hotelName значення = ТЕ, що  користувач ввів в ПОЛЕ ВВЕДЕННЯ ДАНИХ.
//? Отримуємо в змінну hotelName значення = пустий рядок - якщо користувач НЕ ввів дані та натиснув КНОПКУ [OK].
//? Отримуємо в змінну hotelName значення = null - якщо користувач НЕ ввів/ввів дані та натиснув КНОПКУ [Cancel].
//todo Запитуємо назву готеля, в якому хотів би зупинитися клієнт
//todo і зберігаємо результат виклику prompt у змінну.
let hotelName = prompt("prompt() --> Please enter desired hotel name_(name+[OK])");
console.log('hotelName_(name+[OK]):', hotelName);

hotelName = prompt("prompt() --> Please enter desired hotel name_[OK]");
console.log('hotelName_[OK]:', hotelName);

hotelName = prompt("prompt() --> Please enter desired hotel name_[Cancel]");
console.log('hotelName_[Cancel]:', hotelName);
console.log("---------------------------------");


//todo Важлива особливість prompt полягає в тому,
//todo  що незалежно від того, що ввів користувач,
//todo тип значення змінної буде - рядок(string)!
let quantity = prompt('prompt() --> Введіть кількість товарів');
console.log('quantity(before)):', quantity);
console.log('typeof quantity(before) =', typeof quantity);

//todo Перетворюємо тип значення змінної quantity зі string на number:
quantity = Number(quantity);
console.log('quantity(after)):', quantity);
console.log('typeof quantity(after) =', typeof quantity);
console.log("---------------------------------");

//todo Перевірка на NaN - метод Number.isNaN(val)

function сheckForNumber() { 
    const itsNotAnumber = Number.isNaN(quantity);
    console.log('itsNotAnumber:', itsNotAnumber);

    if (itsNotAnumber) {
        alert(" ПОМИЛКА!\n Це не число!\n Введіть ЧИСЛО!");
        quantity = prompt('prompt() --> Введіть кількість товарів ще раз');
        console.log('quantity(before)):', quantity);
        console.log('typeof quantity(before) =', typeof quantity);

        //todo Перетворюємо тип значення змінної quantity зі string на number:
        quantity = Number(quantity);
        console.log('quantity(after)):', quantity);
        console.log('typeof quantity(after) =', typeof quantity);
        console.log("---------------------------------");
    }
    else {
        alert("Кількість товару підтверджено!");
        return;
    } 
};
сheckForNumber();





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

