console.log(
    '%c 4.Promise.resolve() і Promise.reject(). ',
    'color: white; background-color: #D33F49',
);

//! new Promise ----> Promise.resolve() і Promise.reject()
console.warn("new Promise ----> Promise.resolve() і Promise.reject():");
//? ✴️ Статичні методи для створення промісів,
//? що миттєво успішно виконуються або відхиляються.
//? Працюють аналогічно new Promise() за винятком
//? можливості вказати затримку, але мають коротший синтаксис.
//! ✳️ Fulfilled promise
new Promise(resolve => resolve("✅ SUCCESS value from new Promise"))
    .then(value =>
    console.log("new Promise:", value)
);

Promise.resolve("✅✅ SUCCESS value from Promise.resolve")
    .then(value => {
        console.log("Promise.resolve:", value)
        console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
    }
);

//! ✳️ Rejected promise
new Promise((resolve, reject) => reject("❌ ERROR from new Promise"))
    .catch(error =>
    console.error("new Promise:", error)
);

Promise.reject("❌❌ ERROR from from Promise.resolve")
    .catch(error => {
        console.error("Promise.resolve:", error);
        console.log("----------------------------------------------------------");
    });
// console.log("----------------------------------------------------------");


