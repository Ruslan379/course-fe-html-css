console.log(
    '%c 5.Таймер: setInterval(). ',
    'color: white; background-color: #D33F49',
);

//! Таймер: setInterval()
//? ✴️ Метод setInterval() - це простий спосіб 
//? повторення коду знову і знову зі встановленим 
//? проміжком часу повторень. 
//? Синтаксис і параметри такі самі як у setTimeout(). 
//? На відміну від setTimeout(), інтервал запускає 
//? виконання функції не один раз, 
//? а регулярно повторює її через вказаний проміжок часу. 
//? Зупинити виконання можна викликом методу clearInterval(id).
//? ✳️ 

console.log(
    `%c
    const timerId = setInterval(callback, delay, arg1, arg2, ...);
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! Приклад-1: setInterval()
console.warn("Приклад-1: setInterval():");
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;
let counter = "";

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        // counter++; //! лічильник часу
        console.log(`${counter} Генерація випадкового числа: ${Math.random()}, id: ${timerId}`);
        // clearTimeout(timerId); //! ✅❌ Видалення/зупинення таймера

        //! ✅❌ Видалення/зупинення таймера за умовою
        const stopCounter = 10;
        if (counter === stopCounter) {
            clearTimeout(timerId);
            console.error(`Інтервал з ідентифікатором ${timerId} зупинено на ${stopCounter}-ій секунді!`);
        };
    }, 1000);
});

//! ✅❌ Видалення/зупинення таймера кнопкою
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    console.warn(`Інтервал з ідентифікатором ${timerId} зупинено!`);
});
console.log("----------------------------------------------------------------------------------------------------");
