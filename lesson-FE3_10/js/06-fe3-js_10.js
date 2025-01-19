console.log(
    '%c 6.Область видимості.                     \n   Область видимості функції.             \n   Пошук за ланцюжком областей видимості. ',
    'color: white; background-color: #D33F49',
);

//! Область видимості
console.warn("Область видимості:");
//todo: Область видимості (scope)
//? — це незалежна від мови концепція,
//? яка описує доступність змінних у виконуваному коді.

//todo: Scope chain (ланцюжок областей видимості)
//? - області видимості утворюють ієрархію,
//? так що дочірні області мають доступ до змінних
//? з батьківських областей, але не навпаки.

//todo: Існує ДВІ області видимості:
//?    1. Г Л О Б А Л Ь Н А
//? - область видимості де знаходяться змінні,
//? оголошені на самому верхньому рівні,
//? тобто поза будь-яких конструкцій
//? на зразок if, while, for і функцій.

//?    2. Б Л О К О В А
//? - область видимості де знаходяться змінні,
//? оголошені всередині інструкцій
//? if, for, функцій та інших блоків коду,
//? взятих у фігурні дужки {},
//? знаходяться в блоковій області видимості
//? і доступні тільки всередині цього блоку коду
//? або у блоках, вкладених в нього.
const globalValue = 100;
console.log("Global --> globalValue:", globalValue); //! 100
console.log(". .  . . . .  . . . . . . .");

const func = function() {
    console.log("func --> globalValue:", globalValue); //! 100
    const funcValue = 20;
    console.log("func --> funcValue:", funcValue); //! 20
    // console.log("func --> forValue:", forValue); //! Uncaught ReferenceError: funcValue is not defined
    // console.log("func --> ifValue:", ifValue); //! Uncaught ReferenceError: funcValue is not defined
};
func();
console.log(". .  . . . .  . . . . . . .");

for (let i = 0; i < 3; i++) {
    console.log("i:", i); 
    console.log("for --> globalValue:", globalValue); //! 100
    const forValue = 30;
    console.log("for --> forValue:", forValue); //! 30
    // console.log("for --> funcValue:", funcValue); //! Uncaught ReferenceError: funcValue is not defined
    // console.log("for --> ifValue:", ifValue); //! Uncaught ReferenceError: funcValue is not defined
    console.log(". .  . . . .  . . . . . . .");

    if (i === 2) {
        console.log("if --> globalValue:", globalValue); //! 100
        const ifValue = 40;
        console.log("if --> ifValue:", ifValue); //! 40
        console.log("if --> forValue:", forValue); //! 30
        // console.log("if --> funcValue:", funcValue); //! Uncaught ReferenceError: funcValue is not defined
        console.log(". .  . . . .  . . . . . . .");
    };
};

// console.log("Global --> funcValue:", funcValue); //! Uncaught ReferenceError: funcValue is not defined
// console.log("Global --> forValue:", forValue); //! Uncaught ReferenceError: funcValue is not defined
// console.log("Global --> ifValue:", ifValue); //! Uncaught ReferenceError: funcValue is not defined

console.log("----------------------------------------");


//! Область видимості функції
console.warn("Область видимості функції:");
//? Функції створюють власну локальну область видимості. 
//? Змінні, створені всередині функції, включаючи 
//? параметри, локальні всередині цієї функції 
//? і не доступні коду із зовні. 
//? Локальні змінні будуть створюватися кожен раз 
//? при виконанні функції, і їх окремі інкарнації 
//? ніяк один з одним не пов'язані.
const value = 100;
console.log("Global --> value:", value); //! 100
console.log(". .  . . . .  . . . . . . . . . .");

const fooNew = function () {
    // console.log("1.fooNew --> value:", value); //! 100
    const value = 50;
    console.log("2.fooNew --> value:", value); //! 50
    const functionNewValue = 70;
    console.log("3.fooNew --> functionNewValue:", functionNewValue); //! 70
};
fooNew();
console.log(". .  . . . .  . . . . . . . . . .");

console.log("Global --> value:", value); //! 100
// console.log("Global --> functionNewValue:", functionNewValue); //! Uncaught ReferenceError: functionNewValue is not defined
console.log("----------------------------------------");


//! Пошук за ланцюжком областей видимості
console.warn("Пошук за ланцюжком областей видимості: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_09/images/scope-chain-search.png");
//? Інтерпретатор намагається спочатку знайти змінну 
//? в тій області видимості, в якій до неї звернулися. 
//? Якщо така змінна у локальній області видимості - відсутня, 
//? то він виходить назовні, на один рівень за одну спробу, 
//? доки не знайде значення або не дійде до 
//? найвищої області видимості (глобальної) і зрозуміє, 
//? що змінну з таким ідентифікатором неможливо знайти, 
//? тому що її просто не існує, у такому випадку виникне помилка того, 
//? що змінна не оголошена.
const a = 10;

const foo = function() {
    const b = 20;

    for (let i = 0; i < 5; i++) {
        const c = 30;

        if (i === 3) {
            const d = 40;
            console.log("if --> a:", a); //! 10
            console.log("if --> b:", b); //! 20
            console.log("if --> c:", c); //! 30
            console.log("if --> d:", d); //! 40
        };
    };
};
foo();
console.log("----------------------------------------");
