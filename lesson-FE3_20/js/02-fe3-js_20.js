console.log(
    '%c 2.Події миші​:                     \n   Типи подій миші.​                \n   Порядок подій.                  \n   Кнопка миші.​                    \n   Координати: clientX/Y, pageX/Y. \n   Прокрутка (scroll).​             ',
    'color: white; background-color: #D33F49',
);

//! Події миші
console.warn("Події миші: \n https://uk.javascript.info/event-details");
//? ✴️ У цьому розділі ми докладніше розглянемо
//? події миші та їх властивості.
//? ✴️ Зверніть увагу: 
//? подібні події можуть надходити не тільки від миші, 
//? але й з інших пристроїв, 
//? таких як телефони та планшети, 
//? де вони емулюються для сумісності.
console.log("---------------------------------------------------------------------------");


//! Типи подій миші
console.warn("Типи подій миші:");
//? ✴️ Ми вже бачили деякі з цих подій:
//? 🔸 mousedown/mouseup - клікання/відпускання кнопки миші над елементом.
//? 🔸 mouseover/mouseout - курсор заходить/виходить з елемента.
//? 🔸 mousemove - кожне переміщення миші над елементом викликає цю подію.
//? 🔸 click - спрацьовує після mousedown, а потім mouseup над тим же елементом,
//?    якщо була використана ліва кнопка миші.
//? 🔸 dblclick - спрацьовує після двох кліків на одному елементі за короткий проміжок часу.
//?    На сьогоднішній день рідко використовується.
//? 🔸 contextmenu - спрацьовує при натисканні правої кнопки миші.
//?    Є й інші способи відкрити контекстне меню, наприклад, 
//?    за допомогою спеціальної клавіші на клавіатурі, 
//?    але це вже не зовсім подія миші.
//? Також існують кілька інших подій, про них ми розповімо пізніше.
console.log(
    `%c
    🔸 mousedown/mouseup
    🔸 mouseover/mouseout
    🔸 mousemove
    🔸 click
    🔸 dblclick
    🔸 contextmenu
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
const myButton1 = document.querySelector(".my-button-1");
console.log("myButton1:", myButton1);

myButton1.addEventListener("contextmenu", clickRightButton);

function clickRightButton(event) {
    console.log("event.target:", event.target);
    console.log("event.currentTarget:", event.currentTarget);
    console.log("Клік правою кнопкою миші на <My button-1>");
};
console.log("---------------------------------------------------------------------------");


//! Порядок подій
console.warn("Порядок подій:");
//? ✴️ Як ви можете бачити зі списку вище,
//? дія користувача може викликати безліч подій.
//? ✳️ Наприклад, клік лівою кнопкою
//? спочатку ініціює mousedown, коли кнопку натиснуто,
//? потім, коли її відпускають.
//? ✳️ У випадках, коли одна дія ініціює декілька подій, 
//? їх порядок фіксується.
//? Тобто обробники викликаються в порядку: 
//? mousedown → mouseup → click.
console.log("---------------------------------------------------------------------------");


//! Кнопка миші
console.warn("Кнопка миші:");
//? ✴️ Події, пов’язані з кліками,
//? завжди мають властивість button,
//? що дозволяє отримати точну кнопку миші.
//? ✴️ Зазвичай ми не використовуємо її
//? для подій click і contextmenu,
//? оскільки перше відбувається лише
//? при натисканні лівою кнопкою миші,
//? а останнє – лише при натисканні правою кнопкою миші.
//? ✴️ З іншого боку, обробникам mousedown та mouseup
//? може знадобитися event.button,
//? тому що ці події запускаються на будь-якій кнопці,
//? тому button дозволяє розрізняти
//? “праву кнопку миші” та “ліву кнопку миші”.
console.log(
    `%c
    🔸 0 - ліва кнопка (основна)
    🔸 1 - середня кнопка (допоміжна)
    🔸 2 - права кнопка (другорядна)
    🔸 3 - кнопка X1 (назад)
    🔸 4 - кнопка X2 (вперед)
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");
const myButton2 = document.querySelector(".my-button-2");
console.log("myButton2:", myButton2);

myButton2.addEventListener("mousedown", clickButton);

function clickButton(event) {
    console.log("Клік кнопкою миші на <My button-2>");
    console.log("event.button:", event.button);
    console.log(". . . . . . . . . . . . . . . . . .");
    
};
console.log("---------------------------------------------------------------------------");


//! Координати: clientX/Y, pageX/Y
console.warn("Координати clientX/Y і pageX/Y: \n https://uk.javascript.info/coordinates");
//? ✴️ Усі події миші надають координати у двох варіантах:
//? 🔸 Відносно Window: clientX та clientY.
//? 🔸 Відносно Document: pageX та pageY.


//! Координати clientX/Y
console.warn("Координати clientX/Y:");
const currentMouseCoordinatesWindow = document.getElementById("output-window");
console.log("currentMouseCoordinatesWindow:", currentMouseCoordinatesWindow);

document.addEventListener("mousemove", showCoordinatesClientXY);

function showCoordinatesClientXY(event) {
    currentMouseCoordinatesWindow.textContent =
        `clientX: ${event.clientX}, clientY: ${event.clientY}`;
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");


//! Координати pageX/Y
console.warn("Координати pageX/Y:");
const currentMouseCoordinatesDocument = document.getElementById("output-document");
console.log("currentMouseCoordinatesDocument:", currentMouseCoordinatesDocument);

document.addEventListener("mousemove", showCoordinatesPagetXY);

function showCoordinatesPagetXY(event)  {
    currentMouseCoordinatesDocument.textContent =
        `pageX: ${event.pageX}, pageY: ${event.pageY}`;
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");


//! Різниця між clientX/Y, pageX/Y
//? ✴️ Коли сторінка прокручена до самого початку,
//? то верхній лівий кут вікна точно збігається
//? з верхнім лівим кутом документа,
//? тому їх системи координат також збігаються.
//? Але якщо документ прокрутити,
//? то координати елементів відносно вікна змінюються,
//? а координати, відносно документа, залишаються сталими.
//? ✳️ На цьому малюнку ми беремо точку в документі 
//? та демонструємо її координати 
//? перед прокруткою (ліворуч) і після неї (праворуч):
console.warn(`Різниця між clientX/Y, pageX/Y: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_20/images/coordinates-clientXY-pageXY.jpg"}`);

//? ✴️ Коли використати?
//? 🔸 clientX/Y – якщо потрібні координати
//?    всередині видимої частини сторінки
//?    (наприклад, для роботи з element.getBoundingClientRect()).
//? 🔸 pageX/Y – якщо важливо враховувати
//?    прокручування сторінки
//?    (наприклад, для позиціонування спливаючих вікон, підказок).
//? ❗️❗️❗️ Підсумок:
//? Якщо сторінка довга і користувач може прокручувати її вниз, 
//? використовуйте pageX/Y.
//? Якщо прокручування не має значення – clientX/Y.
console.log("---------------------------------------------------------------------------");


//! Прокрутка (scroll)
console.warn("Прокрутка (scroll):");
//? ✴️ Подія scroll дозволяє реагувати
//? на прокручування сторінки або елемента.
//? Є багато цікавих речей, які при цьому можна зробити.
//? ✳️ Наприклад:
//? 🔸 Показати/приховати додаткові елементи керування
//?    або інформацію залежно від того,
//?    де в документі перебуває користувач
//? 🔸 Завантажити більше даних,
//?    коли користувач прокрутить сторінку вниз до кінця.
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    document.getElementById("scroll-info").textContent = `Прокрутка: ${scrollTop}px`;
});
//? ✳️ Як це працює:
//? 🔸 window.addEventListener("scroll", callback) - відстежує подію scroll.
//? 🔸 window.scrollY або document.documentElement.scrollTop – отримують поточну позицію прокручування.
//?  🔸scrollTop - виводить на #scrollInfo кількість пікселів, на яку сторінка прокручена вниз.
console.log("---------------------------------------------------------------------------");


//! Приклад "Пересуньте м’яч по полю"
console.warn('Приклад "Пересуньте м’яч по полю": \n https://uk.javascript.info/task/move-ball-field');
