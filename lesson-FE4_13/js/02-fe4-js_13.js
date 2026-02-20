console.log(
    '%c 2.Створення промісу. ',
    'color: white; background-color: #D33F49',
);

//! 📕 Все про проміси 
console.warn("📕 Все про проміси:");
console.warn("Використання промісів (MDN): \n https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises");
console.warn("Що таке проміси у JavaScript. Фундаментальний JavaScript: \n https://www.youtube.com/watch?v=4X7OjIjjaQE");
console.warn("Промисы в JavaScript [Полный курс 2023] для новичков: \n https://www.youtube.com/watch?v=wx5qS8KlQAg");
console.log("-----------------------------------------------------------------------------------");


//! ❌ ПРИКЛАД-1: Необхідність використання промісів
console.warn("❌ ПРИКЛАД-1: Необхідність використання промісів:");
function fetchUserInfo1() {
    let userData1 = null;

    setTimeout(() => {
        // fetch() //! очікуємо дані з серверу
        const data1 = { id: 1, name: 'Alex' };
        // return data1; //! так не працює
        userData1 = data1;
        console.log("userData1:", userData1); //! {id: 1, name: 'Alex'}
    }, 1000);

    return userData1;
};

function run1() {
    const userInfo1 = fetchUserInfo1();
    console.log("userInfo1:", userInfo1); //! null
};

run1();
console.log("-----------------------------------------------------------------------------------");


//! ✅ ПРИКЛАД-2: Необхідність використання промісів
console.warn("✅ ПРИКЛАД-2: Необхідність використання промісів:");
function fetchUserInfo2(callback) {
    setTimeout(() => {
        // fetch() //! очікуємо дані з серверу
        const data2 = { id: 1, name: 'Alex' };
        callback(data2);
    }, 1000);
};

function run2() {
    fetchUserInfo2((userInfo2) => {
        console.log("userInfo2:", userInfo2); //! {id: 1, name: 'Alex'}
    });
};

run2();
console.log("-----------------------------------------------------------------------------------");


//! Створення промісу
console.warn(`Створення промісу​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/creating-promise.png"}`);

//? ✴️ Проміс створюється як екземпляр класу Promise,
//? який приймає функцію (executor) як аргумент
//? і відразу викликає її, ще до створення і повернення промісу.
console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
        // Asynchronous operation
    });
    `,
    'color: blue; font-size: 18px',
);

//? ✴️ Функція executor повідомляє екземпляр (проміс),
//? коли і як операція, з якою він пов'язаний, буде завершена.
//? У ній можна виконувати будь-яку асинхронну операцію,
//? після завершення якої, потрібно викликати:
//? resolve() - у разі успішного виконання (стан fulfilled),
//? або reject() - у разі помилки (стан rejected).
//? Значення, що повертається цій функції, ігнорується.
//?     📌:
//? 🔸 resolve(value) - функція для виклику у разі успішної операції.
//?    Переданий їй аргумент буде значенням виконаного промісу.
//? 🔸 reject(error) - функція для виклику у разі помилки.
//?    Переданий їй аргумент буде значенням відхиленого промісу.

//todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
const isSuccess = true; //* ✅
// const isSuccess = false; //! ❌

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve("✅ Success! Value passed to resolve function");
        } else {
            reject("❌ Error! Error passed to reject function");
        }
    }, 2000);
});

//todo ⏳
console.log("promise ⏳:", promise); //! Promise {<pending>}

//* ✅ або ❌
setTimeout(() => {
    console.log("promise_setTimeout:", promise);
    //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
    //? або
    //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
}, 2500);

//? ✳️ У змінну promise буде записаний проміс (об'єкт) у стані pending, 
//? а через дві секунди, щойно буде викликаний resolve() або reject(), 
//? проміс перейде у стан fulfilled або rejected, і ми зможемо його обробити.
console.log("-----------------------------------------------------------------------------------");
