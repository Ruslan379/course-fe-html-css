// console.log(`4.Приведення до числа.\n  Методи Number.parseInt() і\n  Number.parseFloat()`);
console.log(
    '%c 4.Приведення до числа.\n   Методи Number.parseInt() і\n   Number.parseFloat() ',
    'color: white; background-color: #D33F49',
);

//! Перетворення типів у числа
//? Більшість арифметичних операцій і математичних функцій 
//? перетворюють значення у число автоматично.
//? Для того, щоб зробити це явно, використовуйте функцію Number(val), 
//? передаючи їй у val те, що потрібно привести до числа.
console.log(
    "%c Number(val) --> ЧИСЛО ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number(5):', Number(5));  //! 5
console.log('Number("5"):', Number("5"));  //! 5
console.log('Number(36 + "432"):', Number(36 + "432")); //? 36432
console.log('Number(true):', Number(true));  //! 1
console.log('Number(false):', Number(false));  //! 0
console.log('Number(null):', Number(null));  //! 0
console.log('Number(""):', Number(""));  //! 0
console.log("---------------------------");


//? Якщо значення привести до числа неможливо, результатом буде 
//? спеціальне числове значення NaN(Not a Number)
console.log(
    "%c Number(val) --> NaN ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number(undefined):', Number(undefined)); //! NaN
console.log('Number("Jacob"):', Number("Jacob")); //! NaN
console.log('Number("36px"):', Number("36px")); //! NaN
console.log('Number(36 + "Привiт!"):', Number(36 + "Привiт!")); //! NaN
console.log("---------------------------");


//? Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.
console.log(
    "%c Арифметичні операції (+, -, *, /) --> ЧИСЛО ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number("5" * 2):', Number("5" * 2));  //! 10
console.log('Number("2" * "5"):', Number("2" * "5"));  //! 10
console.log('Number("10" - 7):', Number("10" - 7));  //! 3
console.log('Number(15 - "10"):', Number(15 - "10"));  //! 5
console.log('Number(15 - "10px"):', Number(15 - "10px"));  //! NaN
console.log('Number(true + 5):', Number(true + 5));  //! 6
console.log('Number(5 - true):', Number(5 - true));  //! 4
console.log('Number(true - 1):', Number(true - 1));  //! 0
console.log("---------------------------");


//? Порівняння (<, >, <=, >=) також виконується неявне перетворення типів. 
//?  перед порівнянням вони приводяться до числа.
console.log(
    "%c Порівняння (<, >, <=, >=) --> ЧИСЛО ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number("10" > 5):', Number("10" > 5));  //! true -> 1
console.log('Number(10 > "5"):', Number(10 > "5"));  //! true -> 1
console.log('Number(5 > true):', Number(5 > true));  //! true -> 1
console.log('Number(5 < true):', Number(5 < true));  //! false -> 0
console.log('Number("5" < true):', Number("5" < true));  //! false -> 0
console.log("---------------------------");


//! Перетворення рядків у число. 
//? Методи Number.parseInt() і Number.parseFloat()​
//? Перетворюють рядок символ за символом, ДОКИ ЦЕ МОЖЛИВО.
//? У разі виникнення помилки повертається підсумкове число.


//! Метод Number.parseInt()
//? Number.parseInt() парсить з рядка ціле число.
//? 2 аргументи:
//? 1- Рядок - обовязково 
//? 2- Система числення, до якої відноситься рядок (за замовчуванням десяткова система). 
//? Наприклад, для десяткової системи буде 10, для шістнадцяткової - 16 тощо..

//? Метод аналізує рядок зліва направо, видаляючи пробіли на початку і
//? перетворюючи допустимі символи у число до тих пір, поки не зіткнеться 
//? з першим недопустимим символом.
console.log(
    "%c Number.parseInt() ",
    "color: yellow; background-color: #2274A5",
);
console.warn("Decimal system:");
console.log('Number.parseInt("5"):', Number.parseInt("5"));  //! 5
console.log('Number.parseInt("5.5"):', Number.parseInt("5.5"));  //! 5
console.log('Number.parseInt("5cm"):', Number.parseInt("5cm"));  //! 5
console.log('Number.parseInt("12qwe74"):', Number.parseInt("12qwe74"));  //! 5
console.log('Number.parseInt("12.46qwe79"):', Number.parseInt("12.46qwe79"));  //! 5
console.log('Number.parseInt("cm5"):', Number.parseInt("cm5"));  //! 5
console.log('Number.parseInt(""):', Number.parseInt(""));  //! 5
console.log('Number.parseInt("qweqwe"):', Number.parseInt("qweqwe"));  //! 5
console.warn("Hexadecimal system:");
console.log('Number.parseInt("0xff", 16):', Number.parseInt("0xff", 16));  //! 5
console.log('Number.parseInt("ff", 16):', Number.parseInt("ff", 16));  //! 5
//todo Калькулятор:
console.log(
    "%c Калькулятор: ",
    "color: red; background-color: #95B46A",
    "https://calculat.io/ru/number/hex-to-dec/ff"
);


//! Метод Number.parseFloat() - перетворює рядок на число з плаваючою крапкою.

// console.log(Number.parseFloat("5")); 
// console.log(Number.parseFloat("5.5")); 
// console.log(Number.parseFloat("3.14")); 
// console.log(Number.parseFloat("5cm")); 
// console.log(Number.parseFloat("5.5cm")); 
// console.log(Number.parseFloat("12qwe74")); 
// console.log(Number.parseFloat("12.46qwe79"));
// console.log(Number.parseFloat("cm5")); 
// console.log(Number.parseFloat("")); 
// console.log(Number.parseFloat("qweqwe")); 






//! Дробове число
// результат 0.1 + 0.2 не дорівнює 0.3
// Число 0.1 у двійковій системі числення, 
// яку використовує комп'ютер — це нескінченний дріб.
// При додаванні 0.1 і 0.2 дві неточності складаються, виходить незначна,
//  але все ж таки помилка в обчисленнях.
// https://habr.com/ru/articles/112953/

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// variant 1
// console.log(0.1 * 10 + 0.2 * 10); // 3
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// variant 2
// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2));  //  ”5.00”
// console.log((8.762195).toFixed(4));  //  “8.7622”

// - Метод число.toFixed(digits)
let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary);





//! ПРАКТИКА
//todo [0]
// console.log(2 > 1);
// console.log(4 < 2);
// console.log(58 == 36);
// console.log(8 != 9);
// console.log('58' > 10);
// console.log('007' == 7);
// console.log(true == 1);
// console.log(false == 0);
// console.log(0 === false);
// console.log('007' === 7);
// console.log('58' !== 58);
// console.log(null > 0);
// console.log(null >= 0);
// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

//todo [1]
// Змінна value містить величину у вигляді рядка, 
// що складається з числової частини та одиниці виміру. 
// Наприклад, 24.5px, 14cm, 20.3vh тощо.

// Оголоси змінну numerical і доповни код таким чином, щоб:

// Якщо це можливо, значенням змінної numerical буде число з плаваючою крапкою,
//  що утворилось з рядка змінної value
// В іншому випадку, значенням numerical буде NaN.

const value = "24.5px";
// 
const numerical = Number.parseFloat(value);

//todo 2
let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);

let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);


//todo [3]
let numOne = 5.845;
// console.log(numOne.toFixed(1));

// Преобразовать в число
// console.log(+numOne.toFixed(1));
// console.log(Number(numOne.toFixed(1)));


//todo [4] (додатково якщо є час)
let valueOne = parseInt("150.58px");
// console.log(valueOne);
// console.log(typeof valueOne);


// let valueTwo = parseFloat("150.58px");
// console.log(valueTwo);
// console.log(typeof valueTwo);

// let valueTwo = parseFloat("a150.58px");
// console.log(valueTwo);
// console.log(typeof valueTwo);