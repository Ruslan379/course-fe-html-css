console.log(
    '%c 2.Об\'єкт події ',
    'color: white; background-color: #D33F49',
);

//! Об'єкт події
console.warn("Документація об'єкта події: \n http://devdocs.io/dom/event");
//? ✴️ Щоб обробити подію - недостатньо знати про те,
//? що це клік або натискання клавіші,
//? можуть знадобитися деталі.
//? Наприклад, поточне значення текстового поля,
//? елемент, на якому відбулася подія, вбудовані методи та інші.
//? ✴️ Кожна подія - це об'єкт,
//? який містить інформацію про деталі події
//? та автоматично передається першим аргументом
//? в обробник події.
//? Всі події відбуваються з базового класу Event.
const button1 = document.querySelector(".button1");
console.log("button1:", button1);

const handleClick1 = event => {
    console.log(event);
};

button1.addEventListener("click", handleClick1);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ Параметр event - це і є об'єкт події,
//? який автоматично передається першим аргументом
//? під час виклику колбек-функції.
//? Ми можемо називати його як завгодно,
//? але, як правило, його оголошують як e, evt або event.
//? ✳️ Деякі властивості об'єкта події:
//? 🔸 event.type - тип події.
//? 🔸 event.target - це той елемент, на якому фактично відбулася подія
//?    (наприклад, клацання миші, натискання клавіші і т.д.).
//? 🔸 event.currentTarget - це той елемент, на якому обробник події був встановлений,
//?    тобто елемент, до якого прив'язана функція addEventListener
const button2 = document.querySelector(".button2");
console.log("button2:", button2);

const handleClick2 = event => {
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");
    // console.log("event: ", event);
    console.log("event type(button2): ", event.type);
    console.log("event target(button2): ", event.target);
    console.log("event currentTarget(button2): ", event.currentTarget);
};

button2.addEventListener("click", handleClick2); //! event.target завжди співпадає з event.currentTarget
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

const parent = document.querySelector(".part_2 .box");
console.log("parent:", parent);

const handleClick3 = event => {
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");
    // console.log("event: ", event);
    console.log("event type(parent): ", event.type);
    console.log("event target(parent): ", event.target);
    console.log("event currentTarget(parent): ", event.currentTarget);
};

// parent.addEventListener("click", handleClick3); //! event.target може не співпадати з event.currentTarget
console.log("-----------------------------------------------------");