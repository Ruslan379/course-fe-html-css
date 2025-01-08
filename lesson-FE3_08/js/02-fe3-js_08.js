console.log(
    '%c 2.Методи split() і join() ',
    'color: white; background-color: #D33F49',
);

//! Метод split()
console.warn("Метод split():");
//? Метод split(delimiter) перетворює рядок в масив,
//? «розбиваючи» його роздільником delimiter.
//? Якщо роздільник - це порожній рядок,
//? то створиться масив окремих символів.
//? Роздільником може бути один або декілька символів.
const string = "Mango";
console.log('string:', string);
const stringToArr = string.split("");
console.log('string.split(""):', stringToArr); //! ['M', 'a', 'n', 'g', 'o']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");

const message = "JavaScript - це цікаво";
console.log('message:', message);
let messageArr = message.split(" ");
console.log('messageArr = message.split(" "):', messageArr); //! ['JavaScript', '-', 'це', 'цікаво']
console.log("----------------------------------------------------");


//! Метод join()
console.warn("Метод join():");
//? Метод масивів join(delimiter)
//? об'єднує елементи масиву у рядок.
//? У рядку елементи будуть розділені символом
//? або групою символів, зазначених в delimiter.
//? Тобто ця операція протилежна методу рядків split(delimiter).
messageArr = ["JavaScript", "це", "цікаво"];
console.log('messageArr:', messageArr);
console.log('messageArr.join(""):', messageArr.join("")); //! "JavaScriptцецікаво"
console.log('messageArr.join(" "):', messageArr.join(" ")); //! "JavaScript це цікаво"
console.log('messageArr.join("-"):', messageArr.join("-")); //! "JavaScript-це-цікаво"
console.log("----------------------------------------------------");
