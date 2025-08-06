console.log(
    '%c 3.Метод then(). ',
    'color: white; background-color: #D33F49',
);

//! Метод then()
console.warn(`Метод then()​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/method-then.png"}`);
//? ✴️ Код, якому потрібно зробити щось асинхронно,
//? створює обіцянку і повертає її. Зовнішній код,
//? отримавши обіцянку, навішує на неї обробники.
//? Після завершення процесу асинхронний код переводить
//? обіцянку у стан fulfilled або rejected,
//? і автоматично викликаються обробники у зовнішньому коді.
//? ✴️ Метод then() приймає два аргументи 
//? - callback-функції, які будуть викликані, 
//? коли проміс змінить свій стан. 
//? Результат промісу, значення або помилку, 
//? вони отримають як аргументи.
console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.then(onResolve, onReject);
    `,
    'color: blue; font-size: 18px',
);
//?     📌:
//? 🔸 onResolve(value) - буде викликана у разі успішного
//?    виконання промісу і отримає його результат як аргумент.
//? 🔸 onReject(error) - буде викликана у разі виконання
//?    промісу з помилкою і отримає її як аргумент.

//? ✳️ Якщо функції onResolve і onReject містять складну логіку,
//? їх, для зручності, оголошують як зовнішні функції
//? і передають в метод then() за ім'ям.
console.log("-----------------------------------------------------------------------------------");


//! ПРИКЛАД використання методу then()
console.warn("ПРИКЛАД використання методу then():");
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
console.log(". . . . . . . . . . . . . . . . . .");

promise.then(
    //todo: onResolve виконається третім етапом або не виконається взагалі
    value => {
        console.log("Виклик onResolve всередині promise.then():");
        console.log("promise_onResolve:", promise); //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
        console.log("✅ value:", value); //* "✅ Success! Value passed to resolve function"
    },
    //todo: onReject виконається третім етапом або не виконається взагалі
    error => {
        console.log("Виклик onReject всередині promise.then():");
        console.log("promise_onReject:", promise); //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
        console.log("❌ error:", error); //! "❌ Error! Error passed to reject function"
    }
);
console.log("-----------------------------------------------------------------------------------");
