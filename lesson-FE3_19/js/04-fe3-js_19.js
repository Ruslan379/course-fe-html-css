console.log(
    '%c 4.Події елементів форм ',
    'color: white; background-color: #D33F49',
);

//! Подія submit​
console.warn("Подія submit​:");
//? ✴️ Відправлення форми відбувається під час кліку
//? по кнопці з атрибутом type="submit"
//? або натискання клавіші Enter,
//? перебуваючи в будь-якому її текстовому полі.
//? ✴️ Подію submit можна застосувати для
//? валідації (перевірки) форми перед відправленням,
//? оскільки на об'єкті події існує багато
//? корисних властивостей,
//? пов'язаних з елементами форми.
//? ✴️ Сабміт форми ❗️перезавантажує сторінку❗️,
//? тому не забувайте скасовувати
//? дію за замовчуванням методом ❗️preventDefault()❗️.
//?❗️ ✴️ Властивість elements DOM-елемента форми 
//?❗️ містить об'єкт з посиланнями на усі її елементи, 
//?❗️ які мають атрибут name. 
//?❗️ Тому в прикладі ми отримуємо значення полів, 
//?❗️ звертаючись до login.value і password.value.
const registerForm = document.querySelector(".form");
console.log("registerForm:", registerForm);

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); //todo: ❗️скасовує перезавантаження сторінки❗️
    console.log("event.currentTarget:", event.currentTarget);
    const form = event.target;
    console.log("form = event.target:", form);
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        return console.log("❗️❗️❗️ Please fill in all the fields!");
    }

    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
};
console.log("-------------------------------------------------------------------------------------------------------------");


//! Подія change​
console.warn("Подія change​​:");
//? ✴️ Відбувається після зміни елемента форми.
//? Для текстових полів або textarea
//? подія відбудеться не на кожному введенні символу,
//? а після втрати фокусу, що не завжди зручно.
//? Наприклад, доки ви набираєте щось у текстовому полі
//? - подія відсутня, але як тільки фокус пропав,
//? відбудеться подія change.
//? Для інших елементів, наприклад,
//? select, чекбоксів і радіо-кнопок,
//? подія change спрацьовує відразу під час вибору значення.
// todo: Приклад-1:
console.warn("Приклад-1​​:");
const input1 = document.querySelector(".input1");
console.log("input1:", input1);

input1.addEventListener("change", setInput);

function setInput(event) {
    const inputOptionValue = event.currentTarget.value;
    console.log("inputOptionValue:", inputOptionValue);

    input1.value = inputOptionValue + 1000;
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


// todo: Приклад-2:
console.warn("Приклад-2​​:");
const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

console.log("select:", select);
console.log("textOutput:", textOutput);
console.log("valueOutput:", valueOutput);

select.addEventListener("change", setOutput);

function setOutput(event) {
    const selectedOptionValue = event.currentTarget.value;
    const selectedOptionIndex = event.currentTarget.selectedIndex;
    const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;

    textOutput.textContent = selectedOptionText;
    valueOutput.textContent = selectedOptionValue;
};
console.log("-------------------------------------------------------------------------------------------------------------");


//! Подія input​​
console.warn("Подія input​​:");
//? ✴️ Відбувається тільки на текстових полях і textarea,
//? і створюється щоразу при зміні значення елемента,
//? не чекаючи втрати фокусу.
//? На практиці input - це найголовніша подія
//? для роботи з текстовими полями форми.
const textInput41 = document.querySelector(".text-input41");
const output = document.querySelector(".output");

console.log("textInput41:", textInput41);
console.log("output:", output);

const setTextFieldValue = (event) => {
    output.textContent = event.currentTarget.value;
};

textInput41.addEventListener("input", setTextFieldValue);
console.log("-------------------------------------------------------------------------------------------------------------");


//! Події focus і blur
console.warn("Події focus і blur​​:");
//? ✴️ Елемент отримує фокус під час кліку миші
//? або переходу клавішею Tab.
//? Момент отримання і втрати фокусу
//? - дуже важливий, отримуючи фокус,
//? ми можемо завантажити дані для автозаповнення,
//? почати відстежувати зміни тощо.
//? Під час втрати фокусу - перевірити введені дані.
//? ✴️ Під час фокусування елемента відбувається подія focus,
//? а коли фокус зникає,
//? наприклад, користувач клікає в іншому місці екрана,
//? відбувається подія blur.
//? Активувати або скасувати фокус можна програмно,
//? викликавши в коді для елемента однойменні методи focus() і blur().
const textInput42 = document.querySelector(".text-input42");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

console.log("textInput42:", textInput42);
console.log("setFocusBtn:", setFocusBtn);
console.log("removeFocusBtn:", removeFocusBtn);

setFocusBtn.addEventListener("click", () => {
    textInput42.focus();
});

removeFocusBtn.addEventListener("click", () => {
    textInput42.blur();
});

textInput42.addEventListener("focus", () => {
    textInput42.value = "This input has focus";
});

textInput42.addEventListener("blur", () => {
    textInput42.value = "";
});
console.log("-------------------------------------------------------------------------------------------------------------");
