console.log(
    '%c 1.Приклад використання таймера setTimeout() ',
    'color: white; background-color: #D33F49',
);

//! Приклад-1 таймера відкладеного старту з конспекту
console.warn("Приклад-1 таймера відкладеного старту з конспекту:")
console.log(
    `%c
    let seconds = 10;
    let timerId = setTimeout(
        function() {
            console.log("Time's up!");
        },
        seconds * 1000
    );
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// let seconds = 10;
// let timerId = setTimeout(
//     function() {
//         console.log("Time's up!");
//     },
//     seconds * 1000
// );
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-1.1.Створюємо простий таймер відкладеного старту
console.warn("КРОК-1.1.Створюємо простий таймер відкладеного старту:")
console.log(
    `%c
    const timeBeforeStart = 3000; //! час до старту

    function timeСount() {
        console.log(
            "Спрацювала функція timeСount() через",
            timeBeforeStart/1000,
            "секунди"
        );
    };
    
    const timerId = setTimeout(timeСount, timeBeforeStart);
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// const timeBeforeStart = 3000; //! час до старту

// function timeСount() {
//     console.log("Спрацювала функція timeСount() через", timeBeforeStart/1000, "секунди");
// };

// const timerId = setTimeout(timeСount, timeBeforeStart);
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-1.2.Зробимо таймер прямого відліку
console.warn("КРОК-1.2.Зробимо таймер прямого відліку:")
console.log(
    `%c
    let timerId;
    const timeBeforeStart = 1000; //! час між відліками
    const iterations = 10; //! кількість ітерацій

    for (let index = 1; index <= iterations; index++) {
    timerId = setTimeout(
        function timeСount() {
            console.log(
                index,
                "Спрацювала функція timeСount()"
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
//         function timeСount() {
//             console.log(index, "Спрацювала функція timeСount()");
//         }, index * timeBeforeStart);
// };
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-1.3.Зробимо таймер зворотного відліку
console.warn("КРОК-1.3.Зробимо таймер зворотного відліку:")
console.log(
    `%c
    let timerId;
    const timeBeforeStart = 1000; //! час між відліками
    const iterations = 10; //! кількість ітерацій

    for (let index = 0; index < iterations; index++) {
        timerId = setTimeout(
            function timeСount() {
                console.log(
                    (iterations - index),
                    "Спрацювала функція timeСount()"
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
//         function timeСount() {
//             console.log((iterations - index), "Спрацювала функція timeСount()");
//         }, index * timeBeforeStart);
// };
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-1.4.Додамо умову зупинення таймеру
console.warn("КРОК-1.4.Додамо умову зупинення таймеру:")
console.log(
    `%c
    let timerId;
    const timeBeforeStart = 1000; //! час між відліками
    const iterations = 10; //! кількість ітерацій
    const stopCounter = 5; //! кількість ітерацій до зупинення таймеру

    for (let index = 0; index < iterations; index++) {
        timerId = setTimeout(
            function timeСount() {
                console.log(
                    (iterations - index),
                    "Спрацювала функція timeСount()",
                    "id:",
                    timerId
                );
                
                //! Умова зупинення таймеру:
                if (index + 1 === stopCounter) {
                    console.error(
                        "Інтервал з ідентифікатором",
                        timerId,
                        "зупинено на",
                        index + 1,
                        "-ій ітерації!"
                    );
                };

            }, index * timeBeforeStart);

        //! Умова зупинення таймеру:
        if (index === stopCounter) {
            clearTimeout(timerId);
            break;
        };
    };
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій
// const stopCounter = 5; //! кількість ітерацій до зупинення таймеру
// for (let index = 0; index < iterations; index++) {
//     timerId = setTimeout(
//         function timeСount() {
//             console.log((iterations - index), "Спрацювала функція timeСount()", "id:", timerId);
//             // clearTimeout(timerId); //! ✅❌ Видалення таймера - таймер видаляється після кожної ітерації
//             //! Умова зупинення таймеру:
//             if (index + 1 === stopCounter) {
//                 console.error(`Інтервал з ідентифікатором ${timerId} зупинено на ${index + 1}-ій ітерації!`);
//             };
//         }, index * timeBeforeStart);
    
//     // clearTimeout(timerId); //! ❌✅ Видалення таймера - таймер не спрацюэ зовсім

//     //! Умова зупинення таймеру:
//     if (index === stopCounter) {
//         clearTimeout(timerId);
//         break;
//     };
// };
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-1.5.Додамо кнопки керування стартом та зупиненням таймеру
console.warn("КРОК-1.5.Додамо кнопки керування стартом та зупиненням таймеру:")
console.log(
    `%c
    const startBtn = document.getElementById("start-set-timeout");
    const stopBtn = document.getElementById("stop-set-timeout");

    let timerId;
    const timeBeforeStart = 1000; //! час між відліками
    const iterations = 10; //! кількість ітерацій
    const stopCounter = 5; //! кількість ітерацій до зупинення таймеру

    //! ✅ Старт таймера кнопкою
    startBtn.addEventListener("click", () => {
        for (let index = 0; index < iterations; index++) {
            timerId = setTimeout(
                function timeСount() {
                    console.log(
                        (iterations - index),
                        "Спрацювала функція timeСount()",
                        "id:",
                        timerId
                    );

                    //! Умова зупинення таймеру:
                    if (index + 1 === stopCounter) {
                        console.error(
                            "Інтервал з ідентифікатором",
                            timerId,
                            "зупинено на",
                            index + 1,
                            "-ій ітерації!"
                        );
                    };
                }, index * timeBeforeStart);

            //! Умова зупинення таймеру:
            if (index === stopCounter) {
                clearTimeout(timerId);
                return;
            };
            console.log("❗️❗️❗️ Кінець роботи циклу...");
        };
    });

    //! ❌ Видалення/зупинення таймера кнопкою - НЕМОЖЛИВО❗️❗️❗️
    stopBtn.addEventListener("click", () => {
        clearTimeout(timerId);
        console.warn(
            "Інтервал з ідентифікатором",
            timerId,
            "зупинено!"
        );
    });
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const startBtn = document.getElementById("start-set-timeout");
const stopBtn = document.getElementById("stop-set-timeout");

let timerId;
const timeBeforeStart = 1000; //! час між відліками
const iterations = 10; //! кількість ітерацій
const stopCounter = 5; //! кількість ітерацій до зупинення таймеру

//! ✅ Старт таймера кнопкою
startBtn.addEventListener("click", () => {
    for (let index = 0; index < iterations; index++) {
        timerId = setTimeout(
            function timeСount() {
                console.log((iterations - index), "Спрацювала функція timeСount()", "id:", timerId);

                //! Умова зупинення таймеру:
                if (index + 1 === stopCounter) {
                    console.error(`Інтервал з ідентифікатором ${timerId} зупинено на ${index + 1}-ій ітерації!`);
                };
            }, index * timeBeforeStart);

        //! Умова зупинення таймеру:
        if (index === stopCounter) {
            clearTimeout(timerId);
            return;
        };
        console.log("❗️❗️❗️ Кінець роботи циклу...");
    };
});

//! ❌ Видалення/зупинення таймера кнопкою - НЕМОЖЛИВО❗️❗️❗️
stopBtn.addEventListener("click", () => {
    clearTimeout(timerId);
    console.warn(`Інтервал з ідентифікатором ${timerId} зупинено!`);
});
console.log("----------------------------------------------------------------------------------------------------");
