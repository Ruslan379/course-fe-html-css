console.log(
    '%c 1.Інструкція switch ',
    'color: white; background-color: #D33F49',
);
    
//! 1.Інструкція switch
//? У деяких випадках незручність читання складних
//? розгалужень if...else можна уникнути, використовуючи
//? «плоскіший» синтаксис інструкції розгалуження switch.

//? Межі застосування switch обмежені задачами з одним
//? загальним запитанням(що порівнювати) і рядом
//? варіантів відповідей(з чим порівнювати).
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_05/images/switch.jpg");

//? Його синтаксис складається із блоку switch (значення)
//? - що потрібно порівняти і набору окремих випадків case значення
//? - з чим потрібно порівняти.
//? Для порівняння використовується оператор строгої рівності ===.
//? Тобто, не можна порівняти більше або менше, лише рівність.
const valueOriginal = 50;
// const valueOriginal = 100;
// const valueOriginal = 200;
// const valueOriginal = 400;

const valueToCompare1 = 50;
const valueToCompare2 = 100;
const valueToCompare3 = 200;

console.log("valueOriginal:", valueOriginal);
console.log(". . . . . . . . . . .");
console.log("valueToCompare1:", valueToCompare1);
console.log("valueToCompare2:", valueToCompare2);
console.log("valueToCompare3:", valueToCompare3);

switch (valueOriginal) {
    case valueToCompare1:
        console.log("Спрацював код ПЕРШОГО блока"); //! інструкції ПЕРШОГО блока;
        break;

    case valueToCompare2:
        console.log("Спрацював код ДРУГОГО блока"); //! інструкції ДРУГОГО блока;
        break;
    
    case valueToCompare3:
        console.log("Спрацював код ТРЕТЬОГО блока"); //! інструкції ТРЕТЬОГО блока;
        break;

    default:
        console.warn("НЕ спрацював ЖОДЕН блок!"); //! інструкції default блока;
};
console.log("----------------------------");

//? Приклад:
let cost;
// const subscription = "free";
const subscription = "pro";
// const subscription = "premium";
// const subscription = "personal";

switch (subscription) {
    case "free":
        cost = 0;
        break;

    case "pro":
        cost = 100;
        break;

    case "premium":
        cost = 500;
        break;

    default:
        console.log("Invalid subscription type");
}
console.log("cost:", cost); //! 100