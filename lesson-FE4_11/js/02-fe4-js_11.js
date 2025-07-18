console.log(
    '%c 2.Приклад використання таймера setInterval() ',
    'color: white; background-color: #D33F49',
);

//! Приклад секундоміра з конспекту
console.warn("Приклад секундоміра з конспекту:")
console.log(
    `%c
    let seconds = 0;
    let timerId = setInterval(
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
// let timerId = setInterval(
//     function () {
//     seconds++;
//     console.log("seconds:", seconds);
//     },
//     1000
// );
console.log("----------------------------------------------------------------------------------------------------");


//! КРОК-2.1.Створюємо простий таймер(секундомір) та зупинимо його через 5 інтервалів(1 інтервал = 1 секунді)
console.warn("КРОК-1.Створюємо простий таймер(секундомір) та зупинимо його через 5 інтервалів(1 інтервал = 1 секунді):");
console.log(
    `%c
    const timeBetweenCounts = 1000; //! час між відліками
    const stopCounter = 5; //! кількість інтервалів до зупинення таймеру

    function createInterval() {
        const timerId = setInterval(() => {
            console.log("⏱️ Відлік часу в секундах, id:", timerId);
        }, timeBetweenCounts);
        setTimeout(() => {
            clearInterval(timerId);
            console.log("🛑⏱️ Інтервал з ідентифікатором," timerId, "зупинено!");
        }, timeBetweenCounts * stopCounter + 10);
    };

    createInterval();
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const timeBetweenCounts = 1000; //! час між відліками
const stopCounter = 5; //! кількість інтервалів до зупинення таймеру

function createInterval() {
    const timerId = setInterval(() => {
        console.log(`⏱️ Відлік часу в секундах, id: ${timerId}`);
    }, timeBetweenCounts);
    setTimeout(() => {
        clearInterval(timerId);
        console.log(`🛑⏱️ Інтервал з ідентифікатором ${timerId} зупинено!`);
    }, timeBetweenCounts * stopCounter + 10);
};

createInterval();
console.log("----------------------------------------------------------------------------------------------------");
