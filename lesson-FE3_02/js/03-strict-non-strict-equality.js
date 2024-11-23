console.log('3.Строга та нестрога рівность/нерівность');

// Перетворення типів: числа
// Перетворення рядків у числа
//  Перевірка на число

// Для явного перетворення - вбудовану функцію Number(),
// console.log(Number("5")); 
// console.log(Number(true)); 
// console.log(Number(false)); 
// console.log(Number(null)); 
// console.log(Number(""));

// Якщо неможливо привести значення до числа
// console.log(Number(undefined)); 
// console.log(Number("Jacob")); 
// console.log(Number("25px")); 


// Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.
// console.log("5" * 2); 
// console.log(2 * "5");
// console.log("10" - 5); 
// console.log(15 - "10");
// console.log(5 + true); 
// console.log(true + 5);
// console.log(5 - true); 
// console.log(true - 1);


// порівняння (<, >, <=, >=) також виконується неявне перетворення типів. 
//  перед порівнянням вони приводяться до числа.
// console.log("10" > 5); 
// console.log(10 > "5"); 
// console.log(5 > true); 
// console.log(5 < true); 
// console.log("5" < true); 


// Перетворення рядків у числа

// Метод Number.parseInt()
// 2 аргументи:
// 1- Рядок - обовязково 
// 2- Система числення, до якої відноситься рядок ( за замовчуванням десяткова система). 
// Наприклад, для десяткової системи буде 10, для шістнадцяткової - 16 тощо..

// Метод аналізує рядок зліва направо, видаляючи пробіли на початку і
//  перетворюючи допустимі символи у число до тих пір, поки не зіткнеться 
//  з першим недопустимим символом.

// console.log(Number.parseInt("5")); 
// console.log(Number.parseInt("5.5")); 
// console.log(Number.parseInt("5cm")); 
// console.log(Number.parseInt("12qwe74"));  
// console.log(Number.parseInt("12.46qwe79"));  
// console.log(Number.parseInt("cm5")); 
// console.log(Number.parseInt("")); 
// console.log(Number.parseInt("qweqwe"));

// console.log(parseInt('0xff', 16));
// console.log(parseInt('ff', 16));

// Метод Number.parseFloat() - перетворює рядок на число з плаваючою крапкою.

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


//  Перевірка на число

// метод Number.isNaN(val). Він перевіряє, чи є вказане значення NaN чи ні. 
// Цей метод відповідає на питання "Це Not A Number?", І повертає:
// true — якщо значення val це NaN
// false — якщо значення val це не NaN

// console.log(isNaN(25 + "Привiт!"));


// Дробове число
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


// ПРАКТИКА

// 0
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

// 1
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

//2
let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth: ', elementWidth);

let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);


// 3
let numOne = 5.845;
// console.log(numOne.toFixed(1));

// Преобразовать в число
// console.log(+numOne.toFixed(1));
// console.log(Number(numOne.toFixed(1)));


// 4додатково якщо є час
let valueOne = parseInt("150.58px");
// console.log(valueOne);
// console.log(typeof valueOne);


// let valueTwo = parseFloat("150.58px");
// console.log(valueTwo);
// console.log(typeof valueTwo);

// let valueTwo = parseFloat("a150.58px");
// console.log(valueTwo);
// console.log(typeof valueTwo);



