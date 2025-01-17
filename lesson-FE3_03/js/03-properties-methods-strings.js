// console.log('3.Властивості та методи рядків');
console.log(
    '%c 3.Властивості та методи рядків ',
    'color: white; background-color: #D33F49',
);

//! Властивості та методи рядків
//todo Властивості - це описові характеристики сутності.

//! [1] .length
//? Властивість .length дозволяє отримати довжину рядка,
//? тобто кількість його символів
console.log(
    "%c Властивість .length ",
    "color: yellow; background-color: #2274A5",
);
const lifeMotto = "Live! Laugh! Love!";
console.log("lifeMotto.length:", lifeMotto.length); //! 18

console.log('"Repair droid".length:', "Repair droid".length); //! 12
console.log('"JavaScript is awesome".length:', "JavaScript is awesome".length); //! 21


//! [2.1] string[index]
//? Індексація рядків.
//? Отримуємо символи рядка згідно индекса - string[index]
console.log(
    "%c Індексація рядків: string[index] ",
    "color: yellow; background-color: #2274A5",
);
const myString = "JavaScript";
console.log("myString:", myString); //! "JavaScript"
console.log("myString.length:", myString.length); //! 10
console.log("------------------------------");

let firstSymbol = myString[0];
console.log("firstSymbol = myString[0]:", firstSymbol); //! "J"
let secondSymbol = myString[1];
console.log("secondSymbol = myString[1]:", secondSymbol); //! "a"
console.log("------------------------------");

console.warn("Останній символ:");
const lastElementIndex = myString.length - 1;
console.log("lastElementIndex = myString.length - 1:", lastElementIndex); //! 9

const lastSymbol = myString[lastElementIndex]; //todo var.1
// const lastSymbol = myString[myString.length - 1]; //todo var.2
console.log("lastSymbol = myString[lastElementIndex]:", lastSymbol); //! "t"


//! [2.2] charAt().
//? Індексація рядків.
//? Отримуємо символи рядка згідно индекса - метод charAt(index)
console.log(
    "%c Індексація рядків: метод charAt() ",
    "color: yellow; background-color: #2274A5",
);
console.log("myString:", myString); //! "JavaScript"
console.log("------------------------------");

firstSymbol = myString.charAt(0);
console.log("firstSymbol = myString.charAt(0):", firstSymbol); //! "J"
secondSymbol = myString.charAt(1);
console.log("secondSymbol = myString.charAt(1):", secondSymbol); //! "a"
console.log("------------------------------");


//! [3] Чи можна змінити рядок?
console.log(
    "%c Чи можна змінити рядок? ",
    "color: yellow; background-color: #2274A5",
);
let title = "Моя історія";
console.log("title:", title); //! "Моя історія"
// title[4] = ",";   //! НЕ МОЖНА!
console.error("Uncaught TypeError: Cannot assign to read only property '6' of string 'Моя історія'");
console.log("title:", title); //! "Моя історія"



//todo Методи — це дії, які можна виконати із сутністю
//todo Не можна викликати метод рядка без рядка
//todo синтаксис: objectName.method()

//! [4] toLowerCase() і toUpperCase()
//? Зміна регістру.
//? Ці методи не змінюють вихідний рядок.
console.log(
    "%c Зміна регістру:               \n toLowerCase() і toUpperCase() ",
    "color: yellow; background-color: #2274A5",
);
const myLifeMotto = "Live! Laugh! Love!";
console.log("myLifeMotto:", myLifeMotto); //! "Live! Laugh! Love!"
console.log("myLifeMotto.toLowerCase():", myLifeMotto.toLowerCase()); //! "live! laugh! love!"
console.log("myLifeMotto.toUpperCase():", myLifeMotto.toUpperCase()); //! "LIVE! LAUGH! LOVE!"
console.log("---------------------------------------------");

const message2 = "Welcome to Bahamas!";
console.log("message2.toLowerCase():", message2.toLowerCase()); //! "welcome to bahamas!"
console.log("message2.toUpperCase():", message2.toUpperCase()); //! "WELCOME TO BAHAMAS!"
//? методи toLowerCase() і toUpperCase() 
//? не змінюють вихідний рядок:
console.log("message2:", message2);  //! "Welcome to Bahamas!" 
console.log("---------------------------------------------");

//todo Для чого потрібні методи toLowerCase() і toUpperCase()?
console.warn("Використання toLowerCase() і toUpperCase():");
//? Бувають ситуації, коли всі символи в рядку
//? необхідно перетворити в один регістр, ВЕРХНІЙ або нижній.
//? Наприклад, для пошуку за ключовим словом,
//? коли користувач вводить рядок 'saMsUng',
//? а порівняти його потрібно з рядком 'samsung' або 'SAMSUNG'.
console.log('"saMsUng" === "samsung":', "saMsUng" === "samsung"); //! false
console.log('"saMsUng" === "SAMSUNG":', "saMsUng" === "SAMSUNG"); //! false
console.log("---------------------------------------------");
//? Щоб не вимагати абсолютно точне введення, 
//? можна зробити «нормалізацію» введеного користувачем рядка,
//? тобто перетворити всі його символи у верхній 
//? або нижній регістр.
//? Методи рядка toLowerCase() і toUpperCase() 
//? повернуть новий рядок у відповідному регістрі,
//? не змінюючи оригінальний.
const BRAND_NAME = "SAMSUNG";
console.log("BRAND_NAME:", BRAND_NAME);  //! "SAMSUNG"
const userInput = "saMsUng";
console.log("userInput:", userInput);  //! "saMsUng"
console.log('userInput === BRAND_NAME:', userInput === BRAND_NAME); //! false
console.log("---------------------------------------------");

const normalizedToUpperCaseInput = userInput.toUpperCase();
console.log("userInput.toUpperCase():", normalizedToUpperCaseInput);  //! "SAMSUNG"
console.log('userInput.toUpperCase() === BRAND_NAME:', normalizedToUpperCaseInput === BRAND_NAME); //! true


//! [5] indexOf()
//? Метод string.indexOf(substr, pos) - substr в  str, починаючи з pos
//? Повертає позицію(індекс), на якій знаходиться ПЕРШИЙ збіг підрядка
//? або - 1, якщо нічого не знайдено.
console.log(
    "%c Метод: indexOf() ",
    "color: yellow; background-color: #2274A5",
);
const message3 = "Welcome to Bahamas!";
console.log("message3:", message3);  //! "Welcome to Bahamas!" 
const index = message3.indexOf("to");
console.log('index = message3.indexOf("to"):', index);  //! 8 
console.log('message3.indexOf("hello"):', message3.indexOf("hello"));  //! -1
console.log("---------------------------------------------");

const myLifeMotto1 = "Live! Laugh! Love!";
console.log("myLifeMotto1:", myLifeMotto1);  //! "Live! Laugh! Love!"

console.log('myLifeMotto1.indexOf("Lau"):', myLifeMotto1.indexOf("Lau"));  //! 6
console.log('myLifeMotto1.indexOf("Lau", 7):', myLifeMotto1.indexOf("Lau", 7));  //! -1

console.log('myLifeMotto1.indexOf("ve", 2):', myLifeMotto1.indexOf("ve", 2));  //! 2
console.log('myLifeMotto1.indexOf("ve", 5):', myLifeMotto1.indexOf("ve", 5));  //! 15


//! [6] includes()
//? Перевіряє, чи міститься підрядок в рядку,
//? повертає буль - true, якщо міститься,
//? і false - якщо НЕ міститься.
//? Регістр символів в рядку і підрядку має значення.
console.log(
    "%c Метод: includes() ",
    "color: yellow; background-color: #2274A5",
);
const username = "Jacob Mercer";
console.log("username:", username);  //! "Jacob Mercer"
console.log('username.includes("Jacob"):', username.includes("Jacob"));  //! true
console.log('username.includes("Jakob"):', username.includes("Jakob"));  //! false
console.log('username.includes("Mercer"):', username.includes("Mercer"));  //! true
console.log('username.includes("Jаcob"):', username.includes("Jаcob"));  //! false (літера "а" - ураїньска)!!!
console.log("---------------------------------------------");

//? Регістр символів у рядку й підрядку має значення
console.log('username.includes("jacob"):', username.includes("jacob"));  //! false
console.log('username.includes("mercer"):', username.includes("mercer"));  //! false
console.log("---------------------------------------------");

const myLifeMotto2 = "Live! Laugh! Love!";
console.log("myLifeMotto2:", myLifeMotto2);  //! "Live! Laugh! Love!"
console.log('myLifeMotto2.includes("Lau"):', myLifeMotto2.includes("Lau"));  //! true
console.log('myLifeMotto2.includes("Lau", 7):', myLifeMotto2.includes("Lau", 7));  //! false
console.log("---------------------------------------------");


//! [7] startsWith() і endsWith()
//? Методи startsWith() і endsWith() призначені
//? для перевірки початку й закінчення рядка відповідно.
//? Вони повертають булеве значення true або false, 
console.log(
    "%c Методи: startsWith() і endsWith() ",
    "color: yellow; background-color: #2274A5",
);
const myString2 = "Hello, world!";
console.log("myString2:", myString2);  //! "Hello, world!"
console.log('myString2.startsWith("Hello"):', myString2.startsWith("Hello"));  //! true
console.log('myString2.endsWith("world!"):', myString2.endsWith("world!"));  //! true

//? Метод чутливий до регістру
console.log('myString2.startsWith("hello"):', myString2.startsWith("hello"));  //! false
console.log('myString2.endsWith("World!):', myString2.endsWith("World!"));  //! false
console.log("---------------------------------------------");

//? Приклад-2
const myLifeMotto3 = "Live! Laugh! Love!";
console.log("myLifeMotto3:", myLifeMotto3);  //! "Live! Laugh! Love!"
console.log('myLifeMotto3.startsWith("Lau"):', myLifeMotto3.startsWith("Lau"));  //! false
console.log('myString2.endsWith("!"):', myString2.endsWith("!"));  //! true
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const searchmyLifeMotto3 = "LiV";
console.log("searchmyLifeMotto3:", searchmyLifeMotto3);  //! "LiV"
console.log(
    "myLifeMotto3.includes(searchmyLifeMotto3.toLowerCase()):",
    myLifeMotto3.includes(searchmyLifeMotto3.toLowerCase())
);  //! false
console.log(
    "myLifeMotto3.toLowerCase().includes(searchmyLifeMotto3.toLowerCase()):",
    myLifeMotto3.toLowerCase().includes(searchmyLifeMotto3.toLowerCase())
);  //! true


//! [8] trim()
//? Метод trim() використовується для видалення(“обрізання”)
//? початкових і кінцевих пробілів із рядка.
console.log(
    "%c Метод: trim() ",
    "color: yellow; background-color: #2274A5",
);
const input = " JavaScript    ";
console.log(input); //! " JavaScript    "
console.log(
    `%c${input}`,
    "color: darkred; background-color: yellow",
); //! " JavaScript    "
console.log("input.length:", input.length); //! 15
console.log(". . . . . . . . .");

const trimmedInput = input.trim();
console.log(trimmedInput); //! "JavaScript"
console.log(
    `%c${trimmedInput}`,
    "color: yellow; background-color: green",
); //! "JavaScript!"
console.log("trimmedInput.length:", trimmedInput.length); //! 10


//! [9] padStart() і padEnd()
//?  padStart() і padEnd) доповнюють поточний рядок
//? іншим рядком(кілька разів, якщо потрібно),
//? доки отриманий рядок не досягне заданої довжини.
//? Відступ застосовується з кінця / початку поточного рядка.
console.log(
    "%c Методи: padStart() і padEnd() ",
    "color: yellow; background-color: #2274A5",
);
const input2 = "JavaScript";
console.log("input2:", input2);  //! "JavaScript"

console.log('input2.padEnd(20, "!"):', input2.padEnd(20, "!"));  //! JavaScript!!!!!!!!!!
console.log('input2.padEnd(input2.length + 1,"!"):', input2.padEnd(input2.length + 1, "!"));  //! JavaScript!
console.log("--------------------------------------------------");

console.log('input2.padStart(20, "<"):', input2.padStart(20, "<"));  //! <<<<<<<<<<JavaScript
console.log(
    '(input2.padStart(input2.length + 1, "<")).padEnd(input2.length + 2, ">"):',
    (input2.padStart(input2.length + 1, "<")).padEnd(input2.length + 2, ">")
);  //! <JavaScript>


//! [10] replace() і replaceAll()
//? Повертають новий рядок, в якому перше(replace)
//? або усі збіги(replaceAll) підрядка
//? замінені на вказане значення.
console.log(
    "%c Методи: replace() і replaceAll() ",
    "color: yellow; background-color: #2274A5",
);
const jsFileName = "script.js";
console.log("jsFileName:", jsFileName);  //! "script.js"
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log('jsFileName.replace(".js", ".min.js"):', minifiedJsFileName);  //! "script.min.js"
console.log("----------------------------------------------------");

const cssFileNames = "styles.css, about.css, portfolio.css";
console.log("cssFileNames:", cssFileNames);  //! "styles.css, about.css, portfolio.css"
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log('cssFileNames.replaceAll(".css", ".min.css"):', minifiedCssFileNames);  //! "styles.min.css, about.min.css, portfolio.min.css"


//! [11] slice()
//? Метод рядків slice(startIndex, endIndex) використовується
//? для створення копії частини або всього рядка.
//? Він робить копію елементів рядка від startIndex і до,
//? але не включно endIndex і повертає новий рядок,
//? не змінюючи оригінал.
console.log(
    "%c Метод: slice() ",
    "color: yellow; background-color: #2274A5",
);
const productName = "Repair droid";
console.log("productName:", productName);  //! "Repair droid"
console.log("productName.slice(0, 4):", productName.slice(0, 4)); //! "Repa"
console.log("productName.slice(3, 9):", productName.slice(3, 9)); //! "air dr"
console.log("productName.slice(0, productName.length):", productName.slice(0, productName.length)); //! "Repair droid"
console.log("productName.slice(0, productName.length - 1):", productName.slice(0, productName.length - 1)); //! "Repair droi"
console.log("productName.slice(7, productName.length):", productName.slice(7, productName.length)); //! "droid"
console.warn("Останній символ:");
console.log("productName.slice(-1):", productName.slice(-1)); //! "d"
console.log("-------------------------------------------------------");
