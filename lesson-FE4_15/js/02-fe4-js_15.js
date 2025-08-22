console.log(
    '%c 2.Promise.race()​. ',
    'color: white; background-color: #D33F49',
);

//! Promise.race()
//? ✴️ Повертає виконаний або відхилений проміс,
//? залежно від того, з яким результатом завершиться ❗️«НАШВИДШИЙ»❗️ 
//? з переданих промісів, зі значенням або причиною його відхилення.
console.log(
    `%c
    Promise.race([promise1, promise2, promise3, ...])
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ Коли хоча б один проміс з масиву виконається
//? або буде відхилений, проміс, що повертається,
//? перейде у стан resolved або rejected,
//? а всі інші будуть відкинуті.
const delayTime = 3000; //* ✅
// const delayTime = 2500; //! ✅❌
// const delayTime = 500; //! ❌❌

const makePromise = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay <= delayTime) {
                resolve(text);
            } else {
                reject("❌ Error!");
            };
        }, delay)
    });
};

// todo: var.1
const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

// todo: var.2
// const promiseA = makePromise("promiseA value", 3000);
// const promiseB = makePromise("promiseB value", 1000);

//*
Promise.race([promiseA, promiseB])
    .then(value => console.log("✅ Promise.race([promiseA, promiseB]).then(value):", value)) //! "promiseA value"(var.1) або "promiseB value"(var.2)
    .catch(error => console.log(error)); //! ❌ Error!(var.1, var.2)

//todo: Виміряємо час роботи промісу:
// function promiseRace() {
//     const start = Date.now(); //todo: Початок вимірювання часу
//     console.log("start:", start); //!
//     let end = start;

//     Promise.race([promiseA, promiseB])
//         .then(value => {
//             console.log("✅ Promise.race([promiseA, promiseB]).then(value):", value); //! "promiseA value"(var.1) або "promiseB value"(var.2)
//             end = Date.now(); //todo: Кінець вимірювання часу
//             console.log("end:", end); //!
//             console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
//             //todo: Результат вимірювання часу
//             console.log(`Promise.race зайняв = ${end - start} мс`); //! 1015 мс
//             console.log("------------------------------------------------------------------------------------------");
//         })
//         .catch(error => {
//             console.log("❌ Promise.race([promiseA, promiseB]).then(value):", error); //! ❌ Error!(var.1, var.2)
//             console.log("end:", end); //!
//             console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
//             //todo: Результат вимірювання часу
//             console.log(`Promise.race зайняв = ${end - start} мс`); //! 1015 мс або 0 мс, якщо const delayTime = 500
//             console.log("------------------------------------------------------------------------------------------");
//         })
// };
// promiseRace();
// console.log("------------------------------------------------------------------------------------------");
