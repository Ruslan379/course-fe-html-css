// console.log('1.Що таке "Рядок"');
console.log(
    '%c 1.Що таке "Рядок" ',
    'color: white; background-color: #D33F49',
    );

//! Що таке "Рядок"
//? Рядок  — це індексований набір з нуля або більше символів,
//? укладених в одинарні або подвійні лапки. 

const course1 = "JavaScript"; 
console.log("course1:", course1); //! JavaScript

const course2 = 'JavaScript';
console.log("course2:", course2); //! JavaScript

const course3 = `JavaScript`;
console.log("course3:", course3); //! JavaScript

console.log("-------------------");
let emptyString;
emptyString = "";
// emptyString = " ";
// emptyString = "1";
// emptyString = 1;
// emptyString = null;
// emptyString = false;
// emptyString = true;
// emptyString = 0;
// emptyString = "0";
console.log("emptyString:", emptyString); //! 
console.log("typeof emptyString:", typeof emptyString); //! string
console.log("Number(emptyString):", Number(emptyString)); //! 0

console.log("-------------------");
//? Перевірка на "що це"?:
console.warn("emptyString - що це?");
if (emptyString === undefined) {
    console.log("Можливо це - undefined"); //! Можливо це - undefined
} else {
    if (typeof emptyString === "string") {
        if (emptyString.length === 0) {
            console.log("Це - ПУСТИЙ РЯДОК"); //! Це - ПУСТИЙ РЯДОК
        } else {
            if (emptyString.length >= 0 & typeof emptyString === "string") {
                console.log("А це - просто РЯДОК"); //! А це - просто РЯДОК
            }
        }
    }
}
if (Number(emptyString) === NaN) {
    console.log("А це - просто РЯДОК (❌ так НЕ ПРАЦЮЄ!!!)"); //! ❌ так НЕ ПРАЦЮЄ!!!
}
if (typeof emptyString === "number") {
    console.log("О, а це вже ЧИСЛО!"); //! О, а це вже ЧИСЛО!
}
if (emptyString === null) {
    console.log("Мабуть це всеж таки - null"); //! Мабуть це всеж таки - null
}
if (typeof emptyString === "boolean") {
    console.log("Ого, а це - БУЛЬ"); //! Ого, а це - БУЛЬ
}

