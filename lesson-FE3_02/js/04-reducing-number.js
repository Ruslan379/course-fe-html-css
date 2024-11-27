// console.log(`4.Приведення до числа.\n  Методи Number.parseInt() і\n  Number.parseFloat()`);
console.log(
    '%c 4.Приведення до числа.      \n   Методи Number.parseInt() і\n   Number.parseFloat()       ',
    'color: white; background-color: #D33F49',
);

//! Перетворення типів у числа
//! Метод Number(val)
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
console.log("---------------------------------------------");


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
console.log("---------------------------------------------");


//? Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.
console.log(
    "%c Арифметичні операції (+, -, *, /) --> перетворення типів ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number("5" * 2):', Number("5" * 2));  //! 10
console.log('Number("2" * "5"):', Number("2" * "5"));  //! 10
console.log('Number("10" - 7):', Number("10" - 7));  //! 3
console.log('Number(15 - "10"):', Number(15 - "10"));  //! 5
console.log('Number(15 - "10px"):', Number(15 - "10px"));  //! NaN
console.log('Number(5 + 5):', Number(5 + 5));  //! 10
console.log('???_Number(5 + "5"):', Number(5 + "5"));  //todo 55 ????
console.log('???_Number(5 + "5" + 5):', Number(5 + "5" + 5));  //todo 555 ????
console.log('???_Number(5 + 5 + "5"):', Number(5 + 5 + "5"));  //todo 105 ????
console.log('Number(true + 5):', Number(true + 5));  //! 6
console.log('???_Number(true + "5"):', Number(true + "5"));  //todo NaN
console.log('???_(true + "5"):', true + "5");  //todo true5
console.log('Number(5 - true):', Number(5 - true));  //! 4
console.log('Number(true - 1):', Number(true - 1));  //! 0
console.log("---------------------------------------------");


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
console.log("---------------------------------------------");


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
console.log('Number.parseInt("12qwe74"):', Number.parseInt("12qwe74"));  //! 12
console.log('Number.parseInt("12.46qwe79"):', Number.parseInt("12.46qwe79"));  //! 12
console.log('Number.parseInt("cm5"):', Number.parseInt("cm5"));  //! NaN
console.log('Number.parseInt(""):', Number.parseInt(""));  //! NaN
console.log('Number.parseInt("qweqwe"):', Number.parseInt("qweqwe"));  //! NaN
console.warn("Hexadecimal system:");
console.log('Number.parseInt("0xff", 16):', Number.parseInt("0xff", 16));  //! 255
console.log('Number.parseInt("ff", 16):', Number.parseInt("ff", 16));  //! 255
//todo Калькулятор:
console.log(
    "%c Калькулятор: ",
    "color: red; background-color: #95B46A",
    "https://calculat.io/ru/number/hex-to-dec/ff"
);
console.log("---------------------------------------------");


//! Метод Number.parseFloat() 
//? - перетворює рядок на число з плаваючою крапкою.
//? Number.parseFloat() парсить з рядка дробове число.
console.log(
    "%c Number.parseFloat() ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number.parseFloat("5"):', Number.parseFloat("5"));  //! 5
console.log('Number.parseFloat("5"):', Number.parseFloat("5"));  //! 5
console.log('Number.parseFloat("5.5"):', Number.parseFloat("5.5"));  //! 5.5
console.log('Number.parseFloat("5cm"):', Number.parseFloat("5cm"));  //! 5
console.log('Number.parseFloat("12qwe74"):', Number.parseFloat("12qwe74"));  //! 12
console.log('Number.parseFloat("12.46qwe79"):', Number.parseFloat("12.46qwe79"));  //! 12.46
console.log('Number.parseFloat("cm5"):', Number.parseInt("cm5"));  //! NaN
console.log('Number.parseFloat(""):', Number.parseFloat(""));  //! NaN
console.log('Number.parseInt("qweqwe"):', Number.parseFloat("qweqwe"));  //! NaN
console.warn("Hexadecimal system:");
console.log('Number.parseFloat("0xff", 16):', Number.parseFloat("0xff", 16));  //! 0
console.log('Number.parseFloat("ff", 16):', Number.parseFloat("ff", 16));  //! NaN
console.log("---------------------------------------------");


//! Перетворення типів даних у рядок
//! Метод .toString()
//? Метод.toString() перетворює об'єкт або примітивне значення в рядок у потрібному форматі.
console.log(
    "%c Перетворення типів даних у рядок. \n Метод .toString() ",
    "color: yellow; background-color: #2274A5",
);
const integerValue = 432369;
let convertedString = integerValue.toString();
console.log('convertedString:', convertedString);  //! "432369"
console.log('typeof convertedString:', typeof convertedString);  //! string
convertedString = parseInt(convertedString);
console.log('parseInt(convertedString):', convertedString);  //! 432369
console.log('typeof parseInt(convertedString):', typeof parseInt(convertedString));  //! number
console.log("---------------------------------------------");
convertedString = integerValue.toString(2);
console.log('convertedString(2):', convertedString);  //! "1101001100011110001"
console.log('typeof convertedString:', typeof convertedString);  //! string
convertedString = parseInt(convertedString);
console.log('parseInt(convertedString):', convertedString);  //! 1101001100011110001
console.log('typeof parseInt(convertedString):', typeof parseInt(convertedString));  //! number
console.log("---------------------------------------------");
convertedString = integerValue.toString(16);
console.log('convertedString(16):', convertedString);  //! "698f1"
console.log('typeof convertedString:', typeof convertedString);  //! string
convertedString = parseInt(convertedString);
console.log('parseInt(convertedString):', convertedString);  //! 698f1
console.log('typeof parseInt(convertedString):', typeof parseInt(convertedString));  //! number
console.log("---------------------------------------------");
console.warn("parseInt(stringValue)");
const stringValue = "432369";
const parsedInteger = parseInt(stringValue);
console.log('parsedInteger:', parsedInteger);  //! "432369"
console.log('typeof parsedInteger:', typeof parsedInteger);  //! number
