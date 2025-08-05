console.log(
    '%c 6.Ланцюжки промісів. ',
    'color: white; background-color: #D33F49',
);

//! Ланцюжки промісів
console.warn(`Ланцюжки промісів​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/promise-chain.png"}`);
//? ✴️ Метод then() результатом свого виконання повертає
//? ще один проміс, значенням якого буде те,
//? що поверне його callback-функція onResolve.
//? Це дозволяє будувати асинхронні ланцюжки з промісів.
//? ✴️ Оскільки метод then() повертає проміс,
//? перед його виконанням може минути деякий час,
//? тому ❗️ЧАСТИНА ЛАНЦЮЖКА, ЩО ЗАЛИШИЛАСЯ, БУДЕ ЧЕКАТИ❗️.
//? У разі виникнення помилки в будь-якому місці ланцюжка,
//? виконання всіх наступних then() скасовується,
//? а ❗️управління передається методу catch()❗️. 
//? Тому він знаходиться в кінці ланцюжка промісів.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});

promise
    .then(value => {
        console.log("value_then-1:", value); //! 5
        return value * 2;
    })
    .then(value => {
        console.log("value_then-2:", value); //! 10
        return value * 3;
    })
    .then(value => {
        console.log("value_then-3:", value); //! 30
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Final task_метод finally()");
    });
console.log("-------------------------------------------------------------------");
