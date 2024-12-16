console.log(
    '%c 1.Інструкція switch ',
    'color: white; background-color: #D33F49',
);
    
//! Інструкція switch
//? Послідовність виконання коду зверху вниз !!!!
//? Для зміни послідовності використовуються цикли та розгалуження.

//? Розгалуження — можливість виконати ту чи іншу
//? послідовність коду в залежності від умови.
//? Результат перевірки умови - завжди буде true або false

//? Двійкова логіка - булева логіка де
//? умови бінарні, тобто можуть бути представлені
//? у вигляді 0 і 1, а також у вигляді слів true і false


//! Приведення типів
//? Приведення явне на - Boolean(value)
//? в логічних операціях, здійснюється приведення типів операндів
//? до true або false - Truthy і Falsy
//? необхідно на вході мати два значення та між ними логічний оператор

//todo ❗️❗️❗️ 6 хибних (falsy) значень, які приводять
//todo     до false в логічному перетворенні:
//!  0, null, NaN, порожній рядок: "" (або ''), false, undefined 

console.log("Boolean(0):", Boolean(0)); //! false
console.log("Boolean(null):", Boolean(null)); //! false
console.log("Boolean(NaN):", Boolean(NaN)); //! false
console.log('Boolean(""):', Boolean("")); //! false
console.log("Boolean(false):", Boolean(false)); //! false
console.log("Boolean(undefined):", Boolean(undefined)); //! false
console.log("---------------------------");

//?  Абсолютно все інше приводиться до true.
console.log("Boolean(1456):", Boolean(1456)); //! true
console.log("Boolean(-1456):", Boolean(-1456)); //! true
console.log('Boolean("world"):', Boolean("world")); //! true




