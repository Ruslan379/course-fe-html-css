console.log(
    '%c 1.Двійкова логіка. Приведення типів. ',
    'color: white; background-color: #D33F49',
    );

//! Приведення типів
//? Приведення явне на - Boolean(value)
//? в логічних операціях, здійснюється приведення типів операндів
//? до true або false - Truthy і Falsy
//? необхідно на вході мати два значення та між ними логічний оператор

//todo ❗️❗️❗️ 6 хибних (falsy) значень, які приводять
//todo     до false в логічному перетворенні:
//!  0, null, NaN, порожній рядок: "" (або ''), false, undefined 

console.log("Boolean(0):", Boolean(0));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(NaN):", Boolean(NaN));
console.log('Boolean(""):', Boolean(""));
console.log("Boolean(false):", Boolean(false));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("---------------------------");

//?  Абсолютно все інше приводиться до true.
console.log("Boolean(1456):", Boolean(1456));
console.log('Boolean("world"):', Boolean("world"));




