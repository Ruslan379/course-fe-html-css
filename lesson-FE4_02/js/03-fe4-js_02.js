console.log(
    '%c 3.Throttle (обмежувач частоти) ',
    'color: white; background-color: #D33F49',
);

//! Throttle і Debounce
console.warn("Throttle і Debounce​:");
//? ✴️ У JavaScript концепції throttle (троттлінг)
//? і debounce (дебаунсинг) використовуються
//? для керування частотою виконання функцій
//? - особливо корисні для обробки подій,
//? які можуть відбуватися дуже часто
//? (наприклад, scroll, resize, input, mousemove тощо).

//? ✳️ Throttle і Debounce - це два схожих,
//? але різних за поведінкою прийоми,
//? що дозволяють контролювати ❗️кількість разів❗️,
//? яку ми дозволяємо виконувати функції з часом.
//? Використовуємо їх реалізацію з бібліотеки Lodash.


//! Throttle (обмежувач частоти)
console.warn(`Throttle​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/throttle.png"}`);
//? ❗️❗️❗️ Throttle - функція виконується не частіше,
//?     ніж один раз на заданий інтервал часу N,
//?     навіть якщо подія відбувається частіше.
//? 📌 Використання Throttle:
//? 🔸 Обробка подій прокручування.
//? 🔸 Відстеження переміщення миші.
//? 🔸 Обмеження частоти натискань.

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
document.addEventListener(
    "scroll",
    () => {
        console.log("Виклик обробника прокрутки");
    }
);
// todo: З Throttle
document.addEventListener(
    "scroll",
    _.throttle(() => {
        console.log("Виклик обробника прокрутки кожні 300ms");
    }, 300)
);
console.log("-----------------------------------------------------------");


//! Throttle (Scroll me)
console.warn("Throttle (Scroll me)​:");
const vanillaOutput = document.querySelector(".part_3 .output.vanilla");
const throttledOutput = document.querySelector(".part_3 .output.throttled");
const eventCounter = {
    vanilla: 0,
    throttled: 0
};
let { vanilla, throttled } = eventCounter;

document.addEventListener("scroll", () => {
    vanilla += 1;
    vanillaOutput.textContent = vanilla;
});

document.addEventListener(
    "scroll",
    _.throttle(() => {
        throttled += 1;
        throttledOutput.textContent = throttled;
    }, 300)
);
console.log("-----------------------------------------------------------");
