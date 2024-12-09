console.log(
    '%c 2.Логічні оператори: \n   «І», «АБО», «НЕ».  \n   Порядок обчислення.',
    'color: white; background-color: #D33F49',
);

//! 2.Логічні оператори
//? ​Існує три логічні оператори, які використовуються 
//? для перевірки виконання множинних виразів:
//? «І»(оператор &&), «АБО»(оператор ||), «НЕ»(оператор !).


//! 2-1.Логічне «І» (оператор &&)
console.log(
    "%c 2-1.Логічне «І» (оператор &&) ",
    "color: yellow; background-color: #2274A5",
);
//todo: вираз && вираз
//? ❗️❗️❗️ Запинається на БРЕХНІ.
//* Повертає те на чому запнулось або останній операнд.
//? Оператор && приводить всі операнди до булю і повертає одне зі значень.
//? Щоб оператор && повернув true, потрібно щоб 
//? всі операнди були істинними (truthy)
console.log("false && false:", false && false); //! false
console.log("false && true:", false && true); //! false
console.log("true && false:", true && false); //! false
console.log("true && true:", true && true); //! true
console.log("----------------------------");

//? Приклади:
console.log('1 && 4:', 1 && 4); //! 4
console.log('1 && 4 && 0:', 1 && 4 && 0); //! 0
console.log('1 && 4 && "mango":', 1 && 4 && "mango"); //! mango
console.log('1 && 4 && 0 && "mango":', 1 && 4 && 0 && "mango"); //! 0
console.log('1 && 4 && "":', 1 && 4 && ""); //! пустий рядок 
console.log('1 && "" && 4:', 1 && "" && 4); //! також пустий рядок
console.log("----------------------------");

let num = 20;
const result1 = num > 10 && num < 30;
console.log("num > 10 && num < 30:", result1); //! true

const result2 = num > 10 && num < 10;
console.log("num > 10 && num < 10:", result2); //! false


//! 2-2.Логічне «АБО» (оператор ||)
console.log(
    "%c 2-2.Логічне «АБО» (оператор ||) ",
    "color: yellow; background-color: #2274A5",
);
//todo: вираз || вираз
//? ❗️❗️❗️ Запинається на ПРАВДІ.
//* Повертає те на чому запнулось або останній операнд.
//? Оператор || приводить всі операнди до булю і повертає одне зі значень.
//? Щоб оператор || повернув true, достатньо щоб 
//? хоч би один операнд був істинним (truthy)
console.log("false || false:", false || false); //! false
console.log("false || true:", false || true); //! true
console.log("true || false:", true || false); //! true
console.log("true || true:", true || true); //! true
console.log("----------------------------");

//? Приклади:
console.log('1 || 4:', 1 || 4); //! 1
console.log('1 || 4 || 0:', 1 || 4 || 0); //! 1
console.log('1 || 4 || "mango":', 1 || 4 || "mango"); //! 1
console.log('1 || 4 || 0 || "mango":', 1 || 4 || 0 || "mango"); //! 1
console.log('1 || 4 || "":', 1 || 4 || ""); //! 1 
console.log('1 || "" || 4:', 1 || "" || 4); //! 1
console.log('"" || 1 || 4:', "" || 1 || 4); //! 1
console.log('false || 0 || "":', false || 0 || ""); //! пустий рядок
console.log("----------------------------");

num = 20;
const result3 = num > 10 || num < 30;
console.log("num > 10 || num < 30:", result3); //! true

const result4 = num > 10 || num < 10;
console.log("num > 10 || num < 10:", result4); //! true


//! 2-3.Логічне «НЕ» (оператор !)
console.log(
    "%c 2-3.Логічне «НЕ» (оператор !) ",
    "color: yellow; background-color: #2274A5",
);
//todo: !вираз
//? Робить інверсію: правда => брехня,  брехня => правда
//? призводить операнд до булю, якщо необхідно, 
//? а потім замінює його на протилежний