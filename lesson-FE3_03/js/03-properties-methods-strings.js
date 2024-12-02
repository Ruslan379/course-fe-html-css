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
const massage1 = "Live! Laugh! Love!";
console.log("massage1.length:", massage1.length); //! 18

console.log('"Repair droid".length:', "Repair droid".length); //! 12
console.log('"JavaScript is awesome".length:', "JavaScript is awesome".length); //! 21


//! [2] string[index]
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

const firstSymbol = myString[0];
console.log("firstSymbol = myString[0]:", firstSymbol); //! "J"
const secondSymbol = myString[1];
console.log("secondSymbol = myString[1]:", secondSymbol); //! "a"
console.log("------------------------------");

console.warn("Останній символ:");
const lastElementIndex = myString.length - 1;
console.log("lastElementIndex = myString.length - 1:", lastElementIndex); //! 9

const lastSymbol = myString[lastElementIndex]; //todo var.1
// const lastSymbol = myString[myString.length - 1]; //todo var.2
console.log("lastSymbol = myString[lastElementIndex]:", lastSymbol); //! "t"


//! [3] Чи можна змінити рядок?
console.log(
    "%c Чи можна змінити рядок? ",
    "color: yellow; background-color: #2274A5",
);
let title = "Моя історія";
// title[4] = ",";   //! НЕ МОЖНА!
console.log("title:", title); //! "t"
console.error("Uncaught TypeError: Cannot assign to read only property '6' of string 'Моя історія'");


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
const phrase = "Live! Laugh! Love!";
// console.log(phrase.toUpperCase());
// console.log(phrase.toLowerCase());

const message2 = "Welcome to Bahamas!";
// console.log(message2.toLowerCase()); 
// console.log(message2);   //  методи не змінюють вихідний рядок


//? Для чого цей метод ????????????????
const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

// console.log(brandName); 
// console.log(userInput); 
// console.log(userInput === brandName); 
// console.log(lowercaseInput); 
// console.log(lowercaseInput === brandName); 




// 2  ============================================================ 
// Метод str.indexOf(substr, pos) - substr в  str, починаючи з pos

//повертає індекс першого входження (індекс першого символу) підрядка, якщо він знайдений
// або -1, якщо підрядок не виявлено

const message = "Welcome to Bahamas!";
const index = message.indexOf("to");
// console.log(index); 
// console.log(message.indexOf("hello")); 

const phrase1 = "Live! Laugh! Love!";
// console.log(phrase1.indexOf('Lau'));
// console.log(phrase1.indexOf('Lau', 2));
// console.log(phrase1.indexOf('ve', 2));




// 3  ============================================================ 
// includes() використовується для перевірки наявності підрядка у рядку
// str.includes(substring)  => true / false

const username = 'Jacob Mercer';

// console.log(username.includes('Jacob')); // true
// console.log(username.includes('John')); // false
// console.log(username.includes('Mercer')); // true
// console.log(username.includes('Doe')); // false

// Регістр символів у рядку й підрядку має значення
// console.log(username.includes('jacob')); // false
// console.log(username.includes('mercer')); // false

const phrase2 = "Live! Laugh! Love!";
// console.log(phrase2.includes('Lau'));
// console.log(phrase2.includes('Lau', 7));




// 4  ============================================================ 
//  Методи startsWith() і endsWith() призначені для перевірки початку й закінчення рядка відповідно.
//  Вони повертають булеве значення true або false, 

const str = "Hello, world!";

// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

// console.log(str.endsWith("world!")); // true
// console.log(str.endsWith("World!")); // false (метод чутливий до регістру)


// console.log(phrase2.startsWith('Lau'));
// console.log(phrase2.endsWith('!'));


const phrase3 = "Live! Laugh! Love!";
const searchPhrase = "LiV";

// console.log(phrase3.includes(searchPhrase.toLowerCase()));
// console.log(phrase3.toLowerCase().includes(searchPhrase.toLowerCase()));




// 5  ============================================================ 
//  Метод trim() використовується для видалення 
// початкових і кінцевих пробілів із рядка.
const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
// console.log(trimmedInput); // "JavaScript is awesome!"
// console.log(input); // " JavaScript is awesome!    "




//   ============================================================
// 6.padEnd  padStart
const input2 = "JavaScript";
// console.log(input2.padEnd(20, '!'));

// console.log(input2.padStart(20, ')'));





//! ПРАКТИКА
//todo [1]
// змінна з імям, знайти довжину і вивести повідомлення
// "Username <name> is <length> characters long


//todo [2]
// Який індекс першого елемента рядка?


//todo [3]
// Отримати символ "н":
const fruit = 'апельсин';
// console.log(fruit[fruit.length - 1])


//todo [4]
// Чи правильно змінюється рядок?
let product = "Морозиво";
// product[1] = "O";
// console.log(product);


//todo [5]
// верхній регістр
const myText3 = 'мій серіал';
// console.log(product.toUpperCase());


//todo [6]
// чи містить фраза "Jason Neis" це слово "jAsOn" має бути так
// Здійсни перевірку незалежно від регістру
const str1 = "Jason Neis".toLowerCase();
const searchWord = "jAsOn".toLowerCase();
// console.log(str1);
// console.log(searchWord);

// console.log(str1.includes(searchWord));
// console.log(str1.includes("jAsOn".toLowerCase()));
// console.log("Jason Neis".toLowerCase().includes("jAsOn".toLowerCase()));


//todo [7]
// true чи false ?
const myText5 = 'стілець';
// console.log(myText5.includes('лец', 4));


//todo [8]
// 8 "styles.css", перевірити чи закінчується на ".css", ".js"

// console.log("styles.css".endsWith(".css"));
// console.log("styles.css".endsWith(".js"));