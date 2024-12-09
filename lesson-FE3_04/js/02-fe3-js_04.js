console.log(
    '%c 2.Логічні оператори: \n   «І», «АБО», «НЕ».  \n   Порядок обчислення.',
    'color: white; background-color: #D33F49',
);

//! Логічні оператори
//? ​Існує три логічні оператори, які використовуються 
//? для перевірки виконання множинних виразів:
//? «І»-&&, «АБО»-||, «НЕ»-!.
//todo Результатом роботи Логічних операторів є: true або false


//! Логічне І (оператор &&)
//* вираз && вираз
//? Запинається на брехні
//? Повертає (false або false), те на чому запнулось або останній операнд.
//? Оператор && приводить всі операнди до булю і повертає одне зі значень.
//? Щоб оператор && повернув true, потрібно щоб 
//? всі операнди були істинними (truthy)
console.log("false && false:", false && false); //! false
console.log("false && true:", false && true); //! false
console.log("true && false:", true && false); //! false
console.log("true && true:", true && true); //! true
console.log("----------------------");

//? Приклади:
console.log('1 && 4 && 0 && "mango"', 1 && 4 && 0 && "mango"); //! false

const num = 20;
const result1 = num > 10 && num < 30;
console.log("num > 10 && num < 30:", result1); //! true

const result2 = num > 10 && num < 10;
console.log("num > 10 && num < 10:", result2); //! true
