console.warn('3.Виведення даних в консоль розробника.\n    Оголошення змінних');

//! Виведення даних в консоль розробника(DevTools)
console.log(10);
console.log(50);
console.log("50");
console.log("50");
console.log("Hello");
console.log("JavaScript is awesome!");
console.log(true);
console.log(null);
console.log(undefined);
console.log("-----------------------");


//! Оголошення змінної
//? Змінні  — це контейнери(коробки, бокси) для зберігання даних

//! Імена змінних
//? Використовуэться camelCase - нотація для ідентифікаторів - яка э стандартом!
//? Перше слово пишеться малими літерами, а кожне наступне починається з великої.
//* Наприклад: user, greetUser, getUserData, isActive, activeGuestCount, totalWorkerSalary.

//! const
//todo Інструкція оголошення змінної з ключовим словом const:
//? Оголошення змінної починається з ключового слова - const
//? потім ідентифікатор (унікальне імя) - age
//? потім оператор присвоєння - =
//? потім значення - 20
// const age; //! ❌ Неправильно, буде помилка!
const age = 20;
console.log(age); //! 20
console.log("age:", age); //! age: 20

const companyName = "Mango";
console.log(companyName); //! "Mango"
console.log("companyName:", companyName); //! companyName: Mango

//todo Якщо змінна оголошена як const,
//todo перевизначити її значення НЕМОЖЛИВО!!!
//! ❌ Неправильно, буде помилка:
// const companyName = "Poly";
// companyName = "Poly"; //! Uncaught TypeError: Assignment to constant variable.
console.log("-----------------------");


//! let (var.1)
//* Для того, щоб оголосити змінну, якій у подальшому
//* можна буде присвоїти НОВЕ ЗНАЧЕННЯ,
//* використовується ключове слово let.
//todo Інструкція оголошення змінної з ключовим словом let (var.1)
//? Оголошення змінної починається з ключового слова - let
//? потім ідентифікатор (унікальне імя) - сurrentMonth
//? потім оператор присвоєння - =
//? потім значення - "January"
let сurrentMonth = "January";
console.log('сurrentMonth:', сurrentMonth); //! "January"

//* Якщо змінна оголошена як let,
//* перевизначити її значення МОЖЛИВО!!!
// let сurrentMonth = "February"; //! ❌ Неправильно, буде помилка!
сurrentMonth = "February"; //* ✅ Правильно!
console.log('сurrentMonth:', сurrentMonth); //! "February"
console.log("-----------------------");


//todo Створення змінної без ключового слова let або const
//todo у режимі ”strict mode” призведе до помилки
// currentYear = 2024; //! Uncaught ReferenceError: currentYear is not defined

//! let (var.2)
//todo Інструкція оголошення змінної з ключовим словом let (без задання значення) (var.2)
//? Оголошення змінної починається з ключового слова - let
//? потім ідентифікатор (унікальне імя) - сurrentMonth
//? оператор присвоєння - відсутній
//? значення - відсутніє

//? let clientName — це змінна, яка була оголошена ключовим словом let,
//? але не ініціалізована значенням.
//? За замовчуванням їй присвоюється початкове значення undefined.
let clientName;
console.log('clientName:', clientName); //! undefined

//? Ініціалізація clientName значенням:
// let clientName = "Mango"; //! ❌ Неправильно, буде помилка!
clientName = "Mango";
console.log('clientName:', clientName); //! "Mango"
console.log("-----------------------");


//todo Неможливо звернутися до змінної до її оголошення.
//! ❌ Неправильно, буде помилка:
// console.log('myAge:', myAge); //! Uncaught ReferenceError: myAge is not defined

//todo Неможливо отримати доступ до змінної до її ініціалізаці
let myAge;
console.log('myAge:', myAge); //! myAge: undefined

//? Оголошення змінної myAge:
myAge = 16;
//* ✅ Правильно! 
//* Звертаємося до змінної myAge після її оголошення та ініціалізаці:
console.log('myAge:', myAge); 
console.log("-----------------------");

//todo Різниця між const і let:
//? Єдина відмінність const і let полягає у тому,
//? що const забороняє повторно присвоювати змінній будь-яке значення.
//? Оголошення const робить код читабельнішим, тому що змінна
//? завжди посилається на одне і те саме зачення.
//? У випадку з let такої впевненості немає.


//! Імена КОНСТАНТ 
//? Константа, що зберігає значення кольору
const COLOR_TEAL = "#009688";
console.log('COLOR_TEAL:', COLOR_TEAL);

//? Константа, що зберігає повідомлення про результат логіну
const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо!";
console.log('LOGIN_SUCCESS_MESSAGE:', LOGIN_SUCCESS_MESSAGE);
console.log("-----------------------");








//! Практика
//todo [1]
//? Використовуючи два console.log() напиши код, який виведе в консоль
//? інструментів розробника два значення: рядок "" та число
// console.log("Jacob Mercer")
// console.log(26)

//todo [2]
//? За допомогою ключового слова const оголоси дві змінні:
//? productName - для зберігання назви товару,
//? pricePerItem - для зберігання ціни за одиницю товару.

//todo [3]
//? Ім'я товару змінили на "my cup" і збільшили його ціну на 50 кредитів. 
//? Перевизнач значення змінних pricePerItem і productName після їх оголошення.
let productName = "cup";
let pricePerItem = 200;
//? Змініть код під цим рядком:
productName = "";
pricePerItem = "";

//? 4 чи є тут помилка?
// const userName = "Mango";
// userName = "Poly";


//? 5 чи є тут помилка?
// console.log(userName);
// const userName = "Mango";
