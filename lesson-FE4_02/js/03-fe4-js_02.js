console.log(
    '%c 3.Throttle ',
    'color: white; background-color: #D33F49',
);

//! Throttle і Debounce
console.warn("Throttle і Debounce​:");
//? ✴️ Throttle і Debounce - це два схожих,
//? але різних за поведінкою прийоми,
//? що дозволяють контролювати ❗️кількість разів❗️, 
//? яку ми дозволяємо виконувати функції з часом. 
//? Використовуємо їх реалізацію з бібліотеки Lodash.

//! Throttle
console.warn(`Throttle​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/throttle.png"}`);
//? ✴️ Прийом throttle контролює кількість разів,
//? яку функція може бути викликана протягом певного проміжку часу.
//? Тобто дозволяє викликати функцію не частіше
//? одного разу за N мілісекунд, гарантуючи її регулярне виконання.
//? ✳️ Використовуючи throttle, ми не контролюємо,
//? як часто браузер буде генерувати події.
//? Ми всього-на-всього беремо контроль
//? над частотою виконання функції обробника події.
//? ✳️ Реалізація з бібліотеки Lodash
//? очікує першим аргументом функцію,
//? яку необхідно «загальмувати»,
//? а другим - кількість мілісекунд.
//? Повертає нову функцію для передачі в слухач події.
// todo: Без Throttle
document.addEventListener("scroll",() => {
    console.log("Виклик обробника прокрутки");
});
// todo: З Throttle
document.addEventListener(
    "scroll",
    _.throttle(() => {
        console.log("Виклик обробника прокрутки кожні 300ms");
    }, 300)
);
console.log("-----------------------------------------------------------");


//! Throttle (Scroll me)
const vanillaOutput = document.querySelector(".part_3 .output.vanilla");
const throttledOutput = document.querySelector(".part_3 .output.throttled");
const eventCounter = {
    vanilla: 0,
    throttled: 0
};

document.addEventListener("scroll", () => {
    eventCounter.vanilla += 1;
    vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
    "scroll",
    _.throttle(() => {
        eventCounter.throttled += 1;
        throttledOutput.textContent = eventCounter.throttled;
    }, 300)
);
console.log("-----------------------------------------------------------");
