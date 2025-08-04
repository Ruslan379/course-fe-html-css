console.log(
    '%c 4.Метод catch(). ',
    'color: white; background-color: #D33F49',
);

//! Метод catch()
//! Метод then()
console.warn(`Метод catch()​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/method-then.png"}`);
//? ✴️ На практиці в методі then() обробляють
//? тільки успішне виконання промісу,
//? а помилку його виконання у спеціальному
//? методі catch() для «відловлювання» помилок.
//? ✴️ Колбек-функція буде викликана у разі виконання
//? промісу з помилкою, і отримає її як аргумент.
console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.catch(error => {
      // Promise rejected
    });
    `,
    'color: blue; font-size: 18px',
);
console.log("-----------------------------------------------------------------------------------");


//! ПРИКЛАД використання методу catch()
console.warn("ПРИКЛАД використання методу catch():");
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

promise
    //todo: Виконається третім етапом якщо буде стан "Виконано (fulfilled)" або не виконається взагалі
    .then(value => {
        console.log("Спрацював метод then():");
        console.log("promise_then():", promise); //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
        console.log("✅ value:", value); //* "✅ Success! Value passed to resolve function"
    })
    //todo: Виконається третім етапом якщо буде стан "Відхилено (rejected)" або не виконається взагалі
    .catch(error => {
        console.log("Спрацював метод catch():");
        console.log("promise_catch():", promise); //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
        console.log("❌ error:", error); //! "❌ Error! Error passed to reject function"
    });
console.log("-----------------------------------------------------------------------------------");
