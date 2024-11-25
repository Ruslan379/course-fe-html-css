// console.log('6.Додавання чисел з плаваючою точкою');
console.log(
    '%c 6.Додавання чисел з плаваючою точкою ',
    'color: white; background-color: #D33F49',
);

//! Дробове число
//? Результат 0.1 + 0.2 не дорівнює 0.3
//? Число 0.1 у двійковій системі числення, 
//? яку використовує комп'ютер — це нескінченний дріб.
//? При додаванні 0.1 і 0.2 дві неточності складаються, виходить незначна,
//? але все ж таки помилка в обчисленнях.
// https://habr.com/ru/articles/112953/

console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); //! false
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004

//? var. 1
console.warn("Variant 1");
console.log("0.1 * 10 + 0.2 * 10 =", 0.1 * 10 + 0.2 * 10); //! 3
const result = (0.1 * 10 + 0.2 * 10) / 10;
console.log("(0.1 * 10 + 0.2 * 10) / 10 =", result); //! 0.3
// console.log("(0.1 * 10 + 0.2 * 10) / 10 =", ((0.1 * 10 + 0.2 * 10) / 10)); //! 0.3

//? var. 2
//! Метод число.toFixed(digits)
console.warn("Variant 2");
// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2));  //  ”5.00”
// console.log((8.762195).toFixed(4));  //  “8.7622”

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