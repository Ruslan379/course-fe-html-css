console.log(
    '%c 2.Приклад використання таймера setInterval() ',
    'color: white; background-color: #D33F49',
);

//! Приклад-2 секундоміра з конспекту
console.warn("Приклад-2 секундоміра з конспекту:")
console.log(
    `%c
    let seconds = 0;

    let intervalId = setInterval(
        function () {
            seconds++;
            console.log("seconds:", seconds);
        },
        1000
    );
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// let seconds = 0;

// let intervalId = setInterval(
//     function () {
//         seconds++;
//         console.log("seconds:", seconds);
//     },
//     1000
// );
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-2.1.Створюємо простий таймер(секундомір) та зупинимо його через 5 інтервалів(1 інтервал = 1 секунді)
console.warn("КРОК-2.1.Створюємо простий таймер(секундомір) та зупинимо його через 5 інтервалів(1 інтервал = 1 секунді):");
console.log(
    `%c
    const timeBetweenCounts = 1000; //! час між відліками
    const stopCounter = 5; //! кількість інтервалів до зупинення таймеру

    function createInterval() {
        const intervalId = setInterval(() => {
            console.log(
                "⏱️ Відлік часу в секундах,
                id:", intervalId
            );
        }, timeBetweenCounts);

        //! Умова зупинення таймеру:
        setTimeout(() => {
            clearInterval(intervalId);
            console.error(
                "❌⏱️ Інтервал з ідентифікатором",
                intervalId,
                "зупинено!"
            );
        }, timeBetweenCounts * stopCounter + 10);
    };

    createInterval();
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// const timeBetweenCounts = 1000; //! час між відліками
// const stopCounter = 5; //! кількість інтервалів до зупинення таймеру

// function createInterval() {
//     const intervalId = setInterval(() => {
//         console.log(`⏱️ Відлік часу в секундах, id: ${intervalId}`);
//     }, timeBetweenCounts);

//     //! Умова зупинення таймеру:
//     setTimeout(() => {
//         clearInterval(intervalId);
//         console.error(`❌⏱️ Інтервал з ідентифікатором ${intervalId} зупинено!`);
//     }, timeBetweenCounts * stopCounter + 10);
// };

// createInterval();
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-2.2.Додамо лічильник часу та умову зупинення таймеру
console.warn("КРОК-2.2.Додамо лічильник часу та умову зупинення таймеру:");
console.log(
    `%c
    const timeBetweenCounts = 1000; //! час між відліками
    const stopCounter = 5; //! кількість інтервалів до зупинення таймеру - умова зупинення таймеру
    
    function createInterval() {
        let count = 0; //! початковий стан лічильник часу
        const intervalId = setInterval(() => {
            count ++;
            console.log(
                "⏱️", count,
                "- відлік часу в секундах, id:",
                intervalId
            );

            //! Умова зупинення таймеру:
            if (count >= stopCounter) {
                clearInterval(intervalId);
                console.error(
                    "🛑⏱️ Інтервал з ідентифікатором",
                    intervalId,
                    "зупинено!"
                );
            };
        }, timeBetweenCounts);
    };

    createInterval();
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// const timeBetweenCounts = 1000; //! час між відліками
// const stopCounter = 5; //! кількість інтервалів до зупинення таймеру - умова зупинення таймеру

// function createInterval() {
//     let count = 0; //! початковий стан лічильник часу
//     const intervalId = setInterval(() => {
//         count ++;
//         console.log(`⏱️ ${count} - відлік часу в секундах, id: ${intervalId}`);

//         //! Умова зупинення таймеру:
//         if (count >= stopCounter) {
//             clearInterval(intervalId);
//             console.error(`🛑⏱️ Інтервал з ідентифікатором ${intervalId} зупинено!`);
//         };
//     }, timeBetweenCounts);
// };

// createInterval();
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-2.3.Додамо інтерфейс керування таймером: 
//!  - введення інтервалу до зупинення таймеру (у секундах),
//!  - кнопки старту та зупинення таймеру.
console.warn("КРОК-2.3.Додамо інтерфейс керування таймером: \n - введення інтервалу до зупинення таймеру (у секундах), \n - кнопки старту та зупинення таймеру.");
console.log(
    `%c
    const timeBetweenCounts = 1000; //! час між відліками
    let stopCounter = null; //! кількість інтервалів до зупинення таймеру - умова зупинення таймеру
    let intervalId = null; //! для видалення ідентифікатора кнопкою

    const infoInput = document.getElementById("info-input");
    const input = document.getElementById("stop-counter"); 
    const startBtn = document.getElementById("start-set-interval"); //! кнопка <Start setInterval>
    const stopBtn = document.getElementById("stop-set-interval"); //! кнопка <Stop setInterval>

    function createInterval() {
        let count = 0; //! початковий стан лічильник часу
        let stopCounter = parseInt(input.value);
        if (!stopCounter || stopCounter < 1 || stopCounter > 20) {
            infoInput.style.color = "red"
            infoInput.textContent = "Введіть число від 1 до 20!";
            console.error("Введіть число від 1 до 20!");
            return;
        };
        console.log(
            "Кількість ітерацій до зупинення (stopCounter):",
            stopCounter
        );

        intervalId = setInterval(() => {
            count++;
            console.log(
                    "⏱️", count,
                    "- відлік часу в секундах, id:",
                    intervalId
                );

            //! Умова зупинення таймеру:
            if (count >= stopCounter) {
                clearInterval(intervalId);
                console.error(
                    "🚫⏱️ Інтервал з ідентифікатором",
                    intervalId,
                    "зупинено на",
                    stopCounter,
                    "-ій ітерації!"
                );
            };
        }, timeBetweenCounts);
    };

    //! Старт таймера кнопкою <Start setInterval>
    startBtn.addEventListener("click", createInterval);

    //! Видалення/зупинення таймера кнопкою <Stop setInterval>
    stopBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        console.warn(
            "⚠️⏱️Інтервал з ідентифікатором",
            intervalId,
            "зупинено повністю!"
        );
    });
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const timeBetweenCounts = 1000; //! час між відліками
// const stopCounter = 10;
let stopCounter = null; //! кількість інтервалів до зупинення таймеру - умова зупинення таймеру
let intervalId = null; //! для видалення ідентифікатора кнопкою

const infoInput = document.getElementById("info-input");
const input = document.getElementById("stop-counter"); 
const startBtn = document.getElementById("start-set-interval"); //! кнопка <Start setInterval>
const stopBtn = document.getElementById("stop-set-interval"); //! кнопка <Stop setInterval>

//! Звук
const alert = document.getElementById('alert');
const beep = document.getElementById('beep');
const stop = document.getElementById('stop');
const final = document.getElementById('final');

function createInterval() {
    let count = 0; //! початковий стан лічильник часу для ПРЯМОГО відліку
    // let count = 100; //? початковий стан лічильник часу для ЗВОРОТНОГО відліку
    const countInitialReverse = count; //?  для ЗВОРОТНОГО відліку

    let stopCounter = parseInt(input.value);
    if (!stopCounter || stopCounter < 1 || stopCounter > 20) {
        infoInput.style.color = "red"
        infoInput.textContent = "Введіть число від 1 до 20!";
        console.error("Введіть число від 1 до 20!");
        alert.play(); //! Звук
        return;
    };
    console.log("Кількість ітерацій до зупинення (stopCounter):", stopCounter); //!

    intervalId = setInterval(() => {
        count++; //! для ПРЯМОГО відліку
        console.log(`⏱️ ${count} - відлік часу в секундах, id: ${intervalId}`);
        // count--; //?  для ЗВОРОТНОГО відліку
        beep.play(); //! Звук

        //! Умова зупинення таймеру:
        if (count >= stopCounter) { //! для ПРЯМОГО відліку
        // if (count <= countInitialReverse - stopCounter) { //?  для зворотного відліку
            clearInterval(intervalId);
            console.error(`🚫⏱️ Інтервал з ідентифікатором ${intervalId} зупинено на ${stopCounter}-ій ітерації!`);
            setTimeout(() => stop.play(), 300); //! Звук
        };
    }, timeBetweenCounts);
};

//! Старт таймера кнопкою <Start setInterval>
startBtn.addEventListener("click", createInterval);

//! Видалення/зупинення таймера кнопкою <Stop setInterval>
stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    console.warn(`⚠️⏱️Інтервал з ідентифікатором ${intervalId} зупинено повністю!`);
    setTimeout(() => final.play(), 300); //! Звук
});
console.log("----------------------------------------------------------------------------------------------------");
