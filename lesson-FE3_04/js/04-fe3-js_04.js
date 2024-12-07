console.log(
    '%c 4.Тернарний оператор ',
    'color: white; background-color: #D33F49',
);

//! Перетворення типів у числа
//! Метод Number(val)
//? Більшість арифметичних операцій і математичних функцій 
//? перетворюють значення у число автоматично.
//? Для того, щоб зробити це явно, використовується функція Number(val), 
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
console.log("------------------------------------------------------------");


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


//! Перетворення деяких типів даних у рядок
//! Метод .toString()
//? Метод.toString() перетворює об'єкт або примітивне значення в рядок у потрібному форматі.
console.log(
    "%c Перетворення деяких типів даних у рядок. \n Метод .toString()                        ",
    "color: yellow; background-color: darkred",
);
const integerValue = 432369;
let convertedString = integerValue.toString();
console.log('convertedString = (432369).toString():', convertedString);  //! "432369"
console.log('typeof convertedString:', typeof convertedString);  //! string
let convertedNumber = Number.parseInt(convertedString); //! var.1 - парсить з рядка ціле число
// let convertedNumber = Number(convertedString); //! var.2 - явно приводить до числа
console.log('convertedNumber = Number.parseInt(convertedString):', convertedNumber);  //! 432369
console.log('typeof convertedNumber:', typeof convertedNumber);  //! number
console.log("-------------------------------------------------------------------------");

convertedString = integerValue.toString(2);
console.log('convertedString = (432369).toString(2):', convertedString);  //! "1101001100011110001"
console.log('typeof convertedString:', typeof convertedString);  //! string
convertedNumber = Number.parseInt(convertedString);
console.log('convertedNumber = Number.parseInt(convertedString):', convertedNumber);  //! 1101001100011110001
console.log('typeof convertedNumber:', typeof convertedNumber);  //! number
console.log("-------------------------------------------------------------------------");

convertedString = integerValue.toString(16);
console.log('convertedString = (432369).toString(16):', convertedString);  //! "698f1"
console.log('typeof convertedString:', typeof convertedString);  //! string
convertedNumber = Number.parseInt(convertedString, 16);
console.log('convertedNumber = Number.parseInt(convertedString, 16):', convertedNumber);  //! 432369
console.log('typeof convertedNumber:', typeof convertedNumber);  //! number
console.log("-------------------------------------------------------------------------");


//todo Методи: parseInt() и Number.parseInt()
//? Функціонально методи ідентичні,
//? але використання Number.parseInt() переважно
console.log(
    "%c Методи: parseInt(stringValue, ?) и \n Number.parseInt(stringValue, ?)    ",
    "color: yellow; background-color: darkred",
);
const stringValue10 = "432369";
// let parsedInteger = parseInt(stringValue10); //! var.1 - парсить з рядка ціле число
let parsedInteger = Number.parseInt(stringValue10); //! var.2 - також парсить з рядка ціле число
console.log('parsedInteger = Number.parseInt("432369"):', parsedInteger);  //! 432369
console.log('typeof parsedInteger:', typeof parsedInteger);  //! number
console.log("-------------------------------------------------------------------------");

// parsedInteger = parseInt(stringValue10, 2); //! var.1
parsedInteger = Number.parseInt(stringValue10, 2); //! var.2
console.log('parsedInteger = Number.parseInt("432369", 2):', parsedInteger);  //! NaN
console.log('typeof parsedInteger:', typeof parsedInteger);  //! number
console.log("-------------------------------------------------------------------------");

const stringValue2 = "1101001100011110001";
// parsedInteger = parseInt(stringValue2); //! var.1
parsedInteger = Number.parseInt(stringValue2); //! var.2
console.log('parsedInteger = Number.parseInt("1101001100011110001"):', parsedInteger);  //! 1101001100011110000
console.log('typeof parsedInteger:', typeof parsedInteger);  //! number
console.log("-------------------------------------------------------------------------");

// parsedInteger = parseInt(stringValue2, 2); //! var.1
parsedInteger = Number.parseInt(stringValue2, 2); //! var.2
console.log('parsedInteger = Number.parseInt("1101001100011110001", 2):', parsedInteger);  //! 432369
console.log('typeof parsedInteger:', typeof parsedInteger);  //! number
console.log("-------------------------------------------------------------------------");

const stringValue16 = "698f1";
// parsedInteger = parseInt(stringValue16, 16); //! var.1
parsedInteger = Number.parseInt(stringValue16, 16); //! var.2
// console.log('parsedInteger = Number.parseInt("698f1", 16):', parsedInteger);  //! 432369
console.log('typeof parsedInteger:', typeof parsedInteger);  //! number
console.log("-------------------------------------------------------------------------");
