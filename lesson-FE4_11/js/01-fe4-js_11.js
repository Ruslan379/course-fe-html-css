console.log(
    '%c 1.Приклад використання таймера setTimeout() ',
    'color: white; background-color: #D33F49',
);

//! Приклад с конспекту
console.warn("Приклад с конспекту:")
console.log(
    `%c
    let seconds = 10;
    let timerId = setTimeout(
        function () {
            console.log("Time's up!");
        }, seconds * 1000);
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
let seconds = 10;
let timerId = setTimeout(
    function () {
        console.log("Time's up!");
    }, seconds * 1000);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-1.Створюємо простий таймер відкладеного старту
console.warn("КРОК-1.Створюємо простий таймер відкладеного старту:")
console.log(
    `%c
    function workingFunction() {
        console.log("Спрацювала функція workingFunction()");
    };

    const timeBeforeStart = 1000; //! час до старту

    const timerId = setTimeout(workingFunction, timeBeforeStart);

    console.log("timerId:", timerId);
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// function workingFunction() {
//     console.log("Спрацювала функція workingFunction()");
// };
// const timeBeforeStart = 1000; //! час до старту
// const timerId = setTimeout(workingFunction, timeBeforeStart);
// console.log("timerId:", timerId);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-2.Зробимо таймер прямого відліку
console.warn("КРОК-2.Зробимо таймер прямого відліку:")
console.log(
    `%c
    const timeBeforeStart = 1000; //! час між відліками

    const iterations = 10; //! кількість ітерацій

    for (let index = 1; index <= iterations; index++) {
    timerId = setTimeout(
        function workingFunction() {
            console.log(
                index,
                "Спрацювала функція workingFunction()"
            );
        }, index * timeBeforeStart);
    };
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// let timerId;

// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій
// for (let index = 1; index <= iterations; index++) {
//     timerId = setTimeout(
//         function workingFunction() {
//             // console.log(`${index} Спрацювала функція workingFunction()`);
//             console.log(index, "Спрацювала функція workingFunction()");
//         }, index * timeBeforeStart);
// };

// console.log("timerId:", timerId);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-3.Зробимо таймер зворотного відліку
console.warn("КРОК-3.Зробимо таймер зворотного відліку:")
console.log(
    `%c
    const timeBeforeStart = 1000; //! час між відліками

    const iterations = 10; //! кількість ітерацій

    for (let index = 0; index < iterations; index++) {
        timerId = setTimeout(
            function workingFunction() {
                console.log(
                    (iterations - index),
                    "Спрацювала функція workingFunction()"
                );
            }, index * timeBeforeStart);
    };
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// let timerId;

// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій
// for (let index = 0; index < iterations; index++) {
//     timerId = setTimeout(
//         function workingFunction() {
//             // console.log(`${iterations - index} Спрацювала функція workingFunction()`);
//             console.log((iterations - index), "Спрацювала функція workingFunction()");
//         }, index * timeBeforeStart);
// };

// console.log("timerId:", timerId);
console.log("----------------------------------------------------------------------------------------------------");