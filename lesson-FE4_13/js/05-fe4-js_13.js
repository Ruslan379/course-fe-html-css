console.log(
    '%c 5.Метод finally(). ',
    'color: white; background-color: #D33F49',
);

//! Метод finally()
console.warn(`Метод finally()​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/method-finally.png"}`);
//? ✴️ Цей метод може бути корисним,
//? якщо необхідно виконати код після того,
//? як обіцянка буде дозволена (fulfilled або rejected),
//? незалежно від результату.
//? Дозволяє уникнути дублювання коду в обробниках then() і catch().
//? ✴️ Колбек-функція не отримає жодних аргументів, 
//? оскільки неможливо визначити - виконана чи відхилена обіцянка. 
//? Тут буде виконуватися код, який необхідно запустити в будь-якому разі.
console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.finally(() => {
      // Promise fulfilled or rejected
    });
    `,
    'color: blue; font-size: 18px',
);
console.log("-----------------------------------------------------------------------------------");


//! ПРИКЛАД використання методу finally()
console.warn("ПРИКЛАД використання методу finally():");
//todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
// const isSuccess = true; //* ✅
const isSuccess = false; //! ❌

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
    })
    //todo: Виконається ОБОВ'ЯЗКОВО четвертим етапом незалежно від стану (fulfilled або rejected)
    .finally(() => console.log("⚠️Promise settled...")); //todo: "⚠️Promise settled..."
console.log("-----------------------------------------------------------------------------------");
