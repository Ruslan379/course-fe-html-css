console.log(
    '%c 2.Колбек-функції. \n   Інлайн колбеки. ',
    'color: white; background-color: #D33F49',
);

//! Виклик функції або передача посилання на функцію
//? Функції не відрізняються від чисел, рядків або масивів
//? - це просто спеціальний тип даних (об'єкт вищого порядку),
//? значення, яке можна зберігати у змінній
//? або передавати у якості аргументу в іншу функцію.
const greet1 = function(name) {
    return `Ласкаво просимо ${name}.`;
};

console.warn("Виклик функції:");
//? Викликаємо функцію greet1 і виводимо результат у консоль
console.log(greet1("Манго")); //! 'Ласкаво просимо Манго'.

console.warn("Передача посилання на функцію:");
//? Виводимо функцію greet1 у консоль, не викликаючи її.
//? Передається посилання на функцію,
//? а не результат виклику (відсутні круглі дужки),
//? тому в консоль виводиться її тіло.
//? Це означає, що функцію можна присвоїти у змінну
//? або передати як аргумент іншої функції.
console.log(greet1); //! ƒ greet1() { return `Ласкаво просимо ${name}.`; }
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Колбек-функції
console.warn("Колбек-функції:");
//? Функція зворотного виклику (callback, колбек)
//? - це функція, яка передається іншій функції
//? як аргумент, а та, в свою чергу, викликає передану функцію.

//? Функція вищого порядку (higher order function)
//? - функція, яка приймає у якості параметрів
//? інші функції або повертає функцію у якості результату.

//todo: Приклад створення та використання Колбек-функції:
//? У виклику функції registerGuest
//? ми передали посилання на функцію greet як аргумент,
//? тому вона буде присвоєна в параметр callback
//? і викликана всередині функції registerGuest
//? за допомогою круглих дужок - callback(guesName). 
//? Ім'я параметра для колбека може бути довільним, 
//? головне пам'ятати, що значенням буде функція.
//todo: Колбек-функція:
function greet(name) {
    console.log(`Global -> Ласкаво просимо ${name}.`);
};

//todo: Функція вищого порядку:
function registerGuest(guesName, callback) {
    console.log(`Реєструємо гостя ${guesName}.`);
    //todo: var.1
    // greet(guesName);
    // function greet(name) {
    //     console.log(`function registerGuest -> Ласкаво просимо ${name}.`);
    // };
    
    //todo: var.2
    callback(guesName); 
};

//todo: var.1 (виклик з використанням виклику іншої функції в середині функції)
// registerGuest("Манго"); //! 'Реєструємо гостя Манго.'  'Ласкаво просимо Манго.'
//todo: var.2 (виклик з використанням Колбек-функції)
registerGuest("Манго", greet); //! 'Реєструємо гостя Манго.'  'Ласкаво просимо Манго.'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Інлайн колбеки
console.warn("Інлайн колбеки:");
//? Якщо колбек-функція - маленька,
//? і потрібна тільки для передачі аргументом,
//? її можна оголосити безпосередньо
//? на момент виклику функції,
//? в яку передаємо колбек.
//? Така функція буде доступна тільки
//? у якості значення параметра і більше ніде в коді.
function registerGuest2(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
};

//todo: Передаємо інлайн функцію greet2 у якості колбека:
registerGuest2(
    "Манго",
    function greet2(nameGreet2) {
        console.log(`Ласкаво просимо ${nameGreet2}.`);
    }
);

//todo: Передаємо інлайн функцію notify2 у якості колбека:
registerGuest2(
    "Полі",
    function notify2(nameNotify2) {
    console.log(`Шановний(а) ${nameNotify2}, ваш номер буде готовий за 30 хвилин.`);
});
console.log("-------------------------------------------------------");


//! Приклад-алгоритм "Приготування кави" за допомогою Колбек-функцій 
console.warn("Приклад функції \"Приготування кави\" за допомогою Колбек-функцій:");
let groundCoffee;
let hotWater;
let coffee;

//! 1 - функція "Приготування меленої кави"
function makesGroundCoffee() {
    groundCoffee = "30 грам";
    console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
    return groundCoffee;
};

//! 2 - функція "Приготування окропу (гарячої води)".
function makesHotWater() {
    hotWater = "250 мілілітрів";
    console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
    return hotWater;
};

//! 3 - функція "Приготування кави"
function makingCoffee(callback1, callback2) {
    if (!(callback1())) {
        return "Потрібна мелена кава!";
    };

    if (!(callback2())) {
        return "Потрібна гаряча вода!";
    };

    coffee = groundCoffee + hotWater;
    coffee = "✅ Кава готова!"
    return coffee;
};

console.log(makingCoffee(makesGroundCoffee, makesHotWater));
console.log("--------------------------------------------");


//! Приклад використання Предикатних функцій за допомогою Колбек-функцій
console.warn("Приклад використання Предикатних функцій \n  за допомогою Колбек-функцій:");
const logins = ["Rich", "UmaThurman"];

//! 1
function isLoginValid(login) {
    console.log("1.⏳ -> function isLoginValid(login)");
    console.log("login.length", login.length);
    if (login.length >= 4 && login.length <= 16) {
        return true;
    };
    console.log(". . . . . . . . . . . . . . .");
    return false;
};

//! 2
function isLoginUnique(allLogins, login) {
    console.log("2.⏱️ -> function isLoginUnique(allLogins, login)");
    console.log(". . . . . . . . . . . . . . .");
    return !(allLogins.includes(login));
};

//! 3
function addLogin(allLogins, login, callback1, callback2) {
    console.log("3.➕👨‍💼✔️ -> addLogin(allLogins, login)");

    if (!(callback1(login))) {
        return "Помилка! Логін повинен бути від 4 до 16 символів.";
    };

    if (!(callback2(allLogins, login))) {
        return "Такий логін вже використовується!";
    };

    allLogins.push(login);
    console.log('logins:', logins);
    console.log(". . . . . . . . . . . . . . .");
    return "Логін успішно доданий!";
};

console.warn("3️⃣ - функція addLogin(allLogins, login)");
console.log('addLogin(logins, "Dog"):', addLogin(logins, "Dog", isLoginValid, isLoginUnique));
console.log("---------------------------------------------------------------------------");
console.log('addLogin(logins, "UmaThurman"):', addLogin(logins, "UmaThurman", isLoginValid, isLoginUnique));
console.log("---------------------------------------------------------------------------");
console.log('addLogin(logins, "HedyLamarr"):', addLogin(logins, "HedyLamarr", isLoginValid, isLoginUnique));
console.log("*****************************************************************************************");
