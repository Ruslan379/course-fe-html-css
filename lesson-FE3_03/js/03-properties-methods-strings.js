// console.log('3.Властивості та методи рядків');
console.log(
    '%c 3.Властивості та методи рядків ',
    'color: white; background-color: #D33F49',
);

//! Властивості та методи рядків
//? Властивості -  описові характеристики сутності.

//! [1] .length
//? Довжина. Властивість length
const textOne = "Live! Laugh! Love!";
// console.log(textOne.length);
// console.log("Repair droid".length);
// console.log("JavaScript is awesome".length);


//! [2] string[index]
//? Індексація рядків.
//? Отримуємо символи рядка - string[index]
const greating = "Доброго дня";
const firstSymbol = greating[0];
const secondSymbol = greating[1];
const lastElementIndex = greating.length - 1;

const lastSymbol = greating[lastElementIndex];
// const lastSymbol = greating[greating.length - 1];
// console.log(firstSymbol);
// console.log(secondSymbol);
// console.log(lastSymbol);


//чи можна змінити рядок?  ==========================================
let title = "Моя історія";
// title[6] = ".";   // не можна
// console.log(title);



//  Методи — це дії, які можна виконати із сутністю
// Не можна викликати метод рядка без рядка
// objectName.method()

//! [1] toLowerCase() і toUpperCase()
//? Зміна регістру - методи не змінюють вихідний рядок

const phrase = "Live! Laugh! Love!";
// console.log(phrase.toUpperCase());
// console.log(phrase.toLowerCase());

const message2 = "Welcome to Bahamas!";
// console.log(message2.toLowerCase()); 
// console.log(message2);   //  методи не змінюють вихідний рядок


// Для чого цей метод ????????????????
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