console.log(
    '%c 4.Debounce (відкладений виклик) ',
    'color: white; background-color: #D33F49',
);

//! Debounce (відкладений виклик)
console.warn(`Debounce: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/debounce.png"}`);
//? ❗️❗️❗️ Debounce - функцію буде викликано лише після того,
//?     як подія припиниться на заданий час.
//? 📍 Використання Debounce:
//? 🔸 Автопідказки під час введення в поле пошуку.
//? 🔸 Перевірка даних форми.
//? 🔸 Підвантаження даних після того, як користувач перестав друкувати.

//? ✴️ Прийом debounce гарантує, 
//? що функція буде викликана лише у тому разі, 
//? якщо між подіями буде пауза N мілісекунд. 
//? Наприклад, доки користувач скролить сторінку 
//? функція не буде викликана, 
//? але щойно він перестав скролити, 
//? функція буде викликана через 300 мілісекунд. 
//? Якщо скрол відновиться раніше, 
//? ніж через 300 мілісекунд після паузи, 
//? функція не буде викликана.
const vanillaOutput = document.querySelector(".part_4 .output.vanilla");
const throttledOutput = document.querySelector(".part_4 .output.throttled");
const debouncedOutput = document.querySelector(".part_4 .output.debounced");
const eventCounter = {
    vanilla: 0,
    throttled: 0,
    debounced: 0
};
let { vanilla, throttled, debounced } = eventCounter;

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

document.addEventListener(
    "scroll",
    _.debounce(() => {
        debounced += 1;
        debouncedOutput.textContent = debounced;
    }, 300)
);
console.log("---------------------------------------------------------");


//! Input (with debounce)
console.warn("Input (with debounce)​:");
const input = document.querySelector(".part_4 .input");
console.log("input:", input); //!
//todo: Відправка запиту без debounce
// input.addEventListener("input", () => {
//     console.log("Відправка запиту без debounce:", input.value);
// });
//todo: Відправка запиту з debounce
input.addEventListener("input", _.debounce(() => {
    console.log("Відправка запиту з debounce:", input.value);
}, 500));
console.log("---------------------------------------------------------");


//! Режими методу Debounce​
console.warn(`Режими методу Debounce: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/debounce-mode.png"}`);
//? ✴️ За замовчуванням метод debounce працює у режимі,
//? коли функція викликається через N мілісекунд
//? після паузи між потоками подій.
//? Цей режим називається ❗️trailing❗️ edge (в кінці).
//? Існують завдання, коли функцію потрібно викликати
//? відразу під час настання першої події в потоці,
//? а потім ігнорувати усі наступні події до паузи між ними,
//? наприклад, - 300 мілісекунд.
//? а старті наступного потоку подій ця поведінка повторюється.
//? Такий режим називається ❗️leading❗️ edge (на початку).
//? ✳️ На практиці режим leading може застосовуватись,
//? наприклад, у разі, коли необхідно виконати функцію
//? відправлення запиту на сервер при першому натисканні кнопки,
//? після чого, ігнорувати всі наступні кліки до паузи.
//? У прикладі реалізований debounce в обох режимах для події scroll.
const vanillaOutput4 = document.querySelector(".trailing-leading .output.vanilla");
const throttledOutput4 = document.querySelector(".trailing-leading .output.throttled");
const trailingOutput4 = document.querySelector(".trailing-leading .output.trailing");
const leadingOutput4 = document.querySelector(".trailing-leading .output.leading");
const eventCounter4 = {
    vanilla4: 0,
    throttled4: 0,
    trailing4: 0,
    leading4: 0
};

let { vanilla4, throttled4, trailing4, leading4 } = eventCounter4;
//! Trailing debounce
document.addEventListener(
    "scroll",
    _.debounce(() => {
        trailing4 += 1;
        trailingOutput4.textContent = trailing4;
    }, 300)
);

//! Leading debounce
document.addEventListener(
    "scroll",
    _.debounce(
        () => {
            leading4 += 1;
            leadingOutput4.textContent = leading4;
        },
        300,
        { trailing: false, leading: true }
    )
);

document.addEventListener("scroll", () => {
    vanilla4 += 1;
    vanillaOutput4.textContent = vanilla4;
});

document.addEventListener(
    "scroll",
    _.throttle(() => {
        throttled4 += 1;
        throttledOutput4.textContent = throttled4;
    }, 300)
);
console.log("---------------------------------------------------------");
