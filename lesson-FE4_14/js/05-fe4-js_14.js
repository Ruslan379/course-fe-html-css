console.log(
    '%c 1.Promise.allSettled(promises). ',
    'color: white; background-color: #D33F49',
);


//! Promise.allSettled(promises)
//? ✴️ Метод Promise.allSettled(promises)
//? виконує всі проміси з переданого масиву
//? і повертає масив результатів кожного промісу
//? — навіть якщо деякі з них завершилися з помилкою.

//? ✴️ На відміну від Promise.all,
//? який припиняє роботу при першому відхиленому промісі,
//? allSettled чекає завершення всіх
//? і для кожного повертає об'єкт з:
//? 🔸 status - "fulfilled" (успішно виконаний) або "rejected" (відхилений);
//? 🔸 value - результат (якщо успішний);
//? 🔸 reason - причина помилки (якщо відхилено).

//? ✅ Де корисний Promise.allSettled:
//? 🔸 Коли потрібно дочекатися завершення всіх завдань,
//?    навіть якщо деякі з них впадуть.
//? 🔸 При паралельному завантаженні кількох ресурсів,
//?    де помилки деяких файлів не повинні переривати процес.
console.log(
    `%c
    const promiseA = makePromise("promiseA value", 1000); 
    const promiseB = makePromise("promiseB value", 3000); 
    const promiseC = makePromise("promiseС value", 2000);
    
    Promise.allSettled([promiseA, promiseB, promiseC])
    .then(value => console.log(value));
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const delayTime = 2500; 

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

const promiseA = makePromise("promiseA value", 1000); //* ✅
const promiseB = makePromise("promiseB value", 3000); //! ❌
const promiseC = makePromise("promiseС value", 2000); //* ✅


Promise.allSettled([promiseA, promiseB, promiseC])
    .then(value => console.log("Promise.allSettled([promiseA, promiseB, promiseC]).then(value):\n", value))
    // .catch(error => console.log(error)) 
    .finally(() => { console.log("-------------------------------------------------------------------------------------");});

//todo: Результат в конолі:
//? [
//*     0: { status: 'fulfilled', value: 'promiseA value' },
//!     1: { status: 'rejected', reason: '❌ Error!' },
//*     2: { status: 'fulfilled', value: 'promiseC value' }
//? ]
// console.log("-----------------------------------------------------------------------------------------");


//! ПРИКЛАД анімаційної версії в консолі,
//? щоб було видно, що Promise.allSettled
//? дійсно чекає на завершення всіх промісів
//? — і успішних, і з помилками.
setTimeout(() => {
    console.warn("ПРИКЛАД анімаційної версії в консолі:");
    function delayedPromise(name, delay, shouldReject = false) {
        console.log(`⏳ ${name} запущено, затримка: ${delay} мс`);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldReject) {
                    console.log(`❌ ${name} завершився з помилкою`);
                    reject(`Помилка в ${name}`);
                } else {
                    console.log(`✅ ${name} успішно виконано`);
                    resolve(`Результат ${name}`);
                }
            }, delay);
        });
    }

    //! Створюємо масив промісів з різним часом виконання:
    const promises = [
        delayedPromise('Завдання 1', 2000), //* ✅
        delayedPromise('Завдання 2', 1000, true), //! ❌
        delayedPromise('Завдання 3', 3000), //* ✅
        delayedPromise('Завдання 4', 1500, true), //! ❌
        delayedPromise('Завдання 5', 2500) //* ✅
    ];

    console.log('\n--- Очікування всіх промісів с Promise.allSettled ---\n');

    Promise.allSettled(promises)
        .then(results => {
            console.log('\n=== Підсумок виконання всіх завдань ===');
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    console.log(`Проміс ${index + 1}: ✅ Успіх → ${result.value}`);
                } else {
                    console.log(`Проміс ${index + 1}: ❌ Помилка → ${result.reason}`);
                };
            });
        })
        .finally(() => { console.log("-------------------------------------------------------------------------------------"); });

}, 5000);
// console.log("-----------------------------------------------------------------------------------------");
