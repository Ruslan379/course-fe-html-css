// console.log(`5.Явне приведення до числа.\n  Перевірка на число.\n  Метод Number.isNaN()`);
console.log(
    '%c 5.Явне приведення до числа.\n   Перевірка на число.      \n   Метод Number.isNaN()     ',
    'color: white; background-color: #D33F49',
);

//! Явне приведення(перетворення) до числа - Number(val)
//? Для явного перетворення значення у число 
//? використовується функція Number(val).
//? У val передають те, що потрібно привести до числа.
//? Якщо значення привести до числа неможливо, 
//? результатом буде спеціальне числове значення NaN(Not a Number).
console.log(
    "%c Number(val) ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number(false):', Number(false)); //? 0
console.log('Number(true):', Number(true)); //? 1
console.log('Number("qwerty"):', Number("qwerty")); //? NaN
console.log('Number(36 + "Привiт!"):', Number(36 + "Привiт!")); //? NaN
console.log('Number(36 + "432"):', Number(36 + "432")); //? 36432
console.log("----------------------------------");


//! Перевірка на число  - метод isNaN(val)
//? Він перевіряє, чи Є(true) вказане значення НЕ ЧИСЛО(NaN) чи НІ(false),
//? намагаючись зробити ПРИВЕДЕННЯ ДО ЧИСЛА, якщо це можливо.
//? Цей метод відповідає на питання "Це Not A Number (NaN)?" (це НЕ ЧИСЛО?), 
//? та повертає:
//* true — якщо значення val це "NaN" (тобто, "ТАК, це НЕ ЧИСЛО!")
//! false — якщо значення val це ЧИСЛО, "не NaN", або його вдалось привести до ЧИСЛА (тобто, "НІ, це - ЧИСЛО!")
console.log(
    "%c isNaN(val) ",
    "color: yellow; background-color: #2274A5",
);
console.log('isNaN(36):', isNaN(36)); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN("36"):', isNaN("36")); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN("      36      "):', isNaN("      36      ")); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN("36px"):', isNaN("36px")); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log('isNaN(36 + "Привiт!"):', isNaN(36 + "Привiт!")); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log('isNaN("Привiт!"):', isNaN("Привiт!")); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log('isNaN(NaN):', isNaN(NaN)); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log('isNaN(undefined):', isNaN(undefined)); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log("----------------------------------");

//? Три дивні значення isNaN()
//todo: [1]
console.log('isNaN(""):', isNaN("")); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN("    "):', isNaN("    ")); //! false, "НІ, це - ЧИСЛО!"
//todo: [2]
console.log('isNaN(true):', isNaN(true)); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN(false):', isNaN(false)); //! false, "НІ, це - ЧИСЛО!"
//todo: [3]
console.log('isNaN(null):', isNaN(null)); //! false, "НІ, це - ЧИСЛО!"
console.log("----------------------------------");

//? Як уникнути трьох дивних значення isNaN()
console.log('parseFloat(null):', parseFloat(null)); //! NaN
console.log('parseFloat(" "):', parseFloat(" ")); //! NaN
console.log('parseFloat(true):', parseFloat(true)); //! NaN
console.log('isNaN(NaN):', isNaN(NaN)); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log("----------------------------------");
console.log('Number.parseFloat(null):', Number.parseFloat(null)); //! NaN
console.log('Number.parseFloat(" "):', Number.parseFloat(" ")); //! NaN
console.log('Number.parseFloat(true):', Number.parseFloat(true)); //! NaN
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); //* true, "ТАК, це НЕ ЧИСЛО!"


//! Перевірка на NaN - метод Number.isNaN(val)
//? Для всіх значень val крім NaN, при передачі в Number.isNaN(val) поверне false.
//? Цей метод НЕ виробляє спробу перетворити val до числа, а просто виконує перевірку на NaN.
//? Для більшої точності рекомендується використовувати
//? Number.isNaN() замість isNaN() у сучасних проектах.
console.log(
    "%c Number.isNaN(val) ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number.isNaN("qwerty"):', Number.isNaN("qwerty")); //! false
console.log('Number.isNaN(36 + "Привiт!"):', Number.isNaN(36 + "Привiт!")); //! false
console.log('Number.isNaN(36):', Number.isNaN(36)); //! false
let valueNaN = Number("qwerty");
console.log('valueNaN = Number("qwerty"):', valueNaN); //! NaN
console.log('Number.isNaN(valueNaN):', Number.isNaN(valueNaN)); //! true
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); //! true
console.log("----------------------------------");
//! Тип значення NaN: number
console.warn("Тип значення NaN: number");
console.log('typeof NaN:', typeof NaN); //! number
console.log('typeof 36:', typeof 36); //! number
console.log('typeof "36":', typeof "36"); //! string
