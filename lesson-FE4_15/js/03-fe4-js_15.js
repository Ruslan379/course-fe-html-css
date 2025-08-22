console.log(
    '%c 3.Promise.any(). ',
    'color: white; background-color: #D33F49',
);

//! Promise.any()
//? ✴️ Схожий на Promise.race, але чекає лише
//? на ❗️ПЕРШИЙ УСПІШНО ВИКОНАНИЙ перший❗️ проміс
//? і отримує його результат.
//? Якщо ж всі надані проміси завершуються з помилкою,
//? то повертається проміс, що завершується з помилкою
//? за допомогою AggregateError — спеціального об’єкта помилки
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError), 
//? який зберігає всі помилки промісів у своїй властивості errors.
console.log(
    `%c
    Promise.any([promise1, promise2, promise3, ...])
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
                reject(new Error("❌ Помилка!"));
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
Promise.any([promiseA, promiseB])
    .then(value => console.log("✅ Promise.any([promiseA, promiseB]).then(value):", value)) //! "promiseA value"(var.1) або "promiseB value"(var.2)
    .catch(error => console.log(error.errors[0])); //! ❌ Error: ❌ Помилка! (var.1, var.2)

//todo: Виміряємо час роботи промісу:
// function promiseAny() {
//     const start = Date.now(); //todo: Початок вимірювання часу
//     console.log("start:", start); //!
//     let end = start;

//     Promise.any([promiseA, promiseB])
//         .then(value => {
//             console.log("✅ Promise.any([promiseA, promiseB]).then(value):", value); //! "promiseA value"(var.1) або "promiseB value"(var.2)
//             end = Date.now(); //todo: Кінець вимірювання часу
//             console.log("end:", end); //!
//             console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
//             //todo: Результат вимірювання часу
//             console.log(`Promise.any зайняв = ${end - start} мс`); //! 1015 мс або 0 мс, якщо const delayTime = 500
//             console.log("------------------------------------------------------------------------------------------");
//         })
//         .catch(error => {
//             console.log("❌ Promise.any([promiseA, promiseB]).then(value):", error.errors[0]); //! ❌ Error: ❌ Помилка! (var.1, var.2)
//             console.log("end:", end); //!
//             console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
//             //todo: Результат вимірювання часу
//             console.log(`Promise.any зайняв = ${end - start} мс`); //! 1015 мс або 0 мс, якщо ❌
//             console.log("------------------------------------------------------------------------------------------");
//         })
// };
// promiseAny();
// console.log("------------------------------------------------------------------------------------------");
