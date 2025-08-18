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
//* ✅ Fulfilled promise
new Promise(resolve => resolve("✅ SUCCESS value from new Promise"))
    .then(value =>
    console.log("new Promise:", value)
);

Promise.resolve("✅✅ SUCCESS value from Promise.resolve")
    .then(value => {
        console.log("Promise.resolve:", value);
        console.log("typeof Promise.resolve:", typeof value); //! string
        console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
    }
);

//! ❌ Rejected promise
new Promise((resolve, reject) => reject("❌ ERROR from new Promise"))
    .catch(error =>
    console.error("new Promise:", error)
);

Promise.reject("❌❌ ERROR from from Promise.resolve")
    .catch(error => {
        console.error("Promise.resolve:", error);
        console.log("------------------------------------------------------------------------");
    });
// console.log("------------------------------------------------------------------------");


//! Код до рефакторингу
//? ✳️ Ці методи використовуються для промісифікаціі функцій,
//? коли необхідно побудувати ланцюжок промісів
//? і вже є початкове значення.
//! Виконаємо рефакторинг наступного коду:
const makeGreeting = guestName => {
    if (guestName === "" || guestName === undefined) {
        return {
            success: false,
            message: "❌ Guest name must not be empty",
        };
    };

    return {
        success: true,
        message: `✅ Welcome ${guestName}`,
    };
};

//* ✅
setTimeout(() => {
    console.warn("Код до рефакторингу:");
    const result = makeGreeting("Mango");
    console.log("result:", result); //! {success: true, message: '✅ Welcome Mango'}

    if (result.success) {
        console.log(result.message); //* ✅ Welcome Mango
    } else {
        console.error(result.message);
    };
}, 0);

//! ❌
setTimeout(() => {
    const result = makeGreeting("");
    console.log("result:", result); //! {success: false, message: '❌ Guest name must not be empty'}

    if (result.success) {
        console.log(result.message);
    } else {
        console.error(result.message); //! ❌ Guest name must not be empty
        console.log("------------------------------------------------------------------------");
    };
}, 0);
// console.log("------------------------------------------------------------------------");


//! Код після рефакторингу (крок-1)
//? ✳️ Використовуючи колбек, відпадає необхідність
//? повертати складні об'єкти зі статусом операції
//? і перевіряти його у зовнішньому коді.
const makeGreeting1 = (guestName, onSuccess, onError) => {
    if (guestName === "" || guestName === undefined) {
        return onError("❌1️⃣ Guest name must not be empty");
    }
    onSuccess(`✅1️⃣ Welcome ${guestName}`);
};

//* ✅1️⃣
setTimeout(() => {
    console.warn("Код після рефакторингу (крок-1):");
    makeGreeting1(
        "Mango",
        greeting => console.log(greeting), //* ✅1️⃣ Welcome Mango
        error => console.error(error)
    );
}, 0);

//! ❌1️⃣
setTimeout(() => {
    makeGreeting1(
        "",
        greeting => console.log(greeting),
        error => {
            console.error(error); //! ❌1️⃣ Guest name must not be empty
            console.log("------------------------------------------------------------------------");
        }
    );
}, 0);
// console.log("------------------------------------------------------------------------");


//! Код після рефакторингу (крок-2)
//? ✳️ Останнім кроком буде промісифікація функції makeGreeting()
//? для того, щоб повністю усунути її залежність від зовнішнього коду:
const makeGreeting2 = guestName => {
    if (guestName === "" || guestName === undefined) {
        return Promise.reject("❌2️⃣ Guest name must not be empty");
    }

    return Promise.resolve(`✅2️⃣ Welcome ${guestName}`);
};

//* ✅2️⃣
setTimeout(() => {
    console.warn("Код після рефакторингу (крок-2):");
    makeGreeting2("Mango")
        .then(greeting => console.log(greeting)) //* ✅2️⃣ Welcome Mango
        .catch(error => console.error(error));
}, 0);

//! ❌2️⃣
setTimeout(() => {
    makeGreeting2("")
        .then(greeting => console.log(greeting))
        .catch(error => {
            console.error(error); //! ❌2️⃣ Guest name must not be empty
            console.log("------------------------------------------------------------------------");
        });
}, 0);
// console.log("------------------------------------------------------------------------");
