console.log(
    '%c 7.Промісифікація функцій. ',
    'color: white; background-color: #D33F49',
);

//! ПРИКЛАД-1: Асинхронна функція з колбеками
console.warn("ПРИКЛАД-1: Асинхронна функція з колбеками:");
//? ✴️ Зараз функція fetchUserFromServer() знає занадто багато 
//? про той код, який буде використовувати результат її роботи. 
//? Вона очікує колбеки і відповідає за їх виклик за певних умов. 
//? Тобто ми передаємо щось всередину функції (колбеки) і 
//? сподіваємося, що воно відпрацює правильно, але це недобре.
const fetchUserFromServer1 = (username, onSuccess, onError) => {
    console.log(`Fetching data-1 for ${username}:`);

    setTimeout(() => {
        //todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
        // const isSuccess = true; //* ✅
        const isSuccess = false; //! ❌

        if (isSuccess) {
            onSuccess("✅ success-1");
            console.log("-------------------------------------------------");
        } else {
            onError("❌ error-1");
            console.log("-------------------------------------------------");
        };
    }, 2000);
};

const onFetchSuccess1 = user => {
    console.log("user_onFetchSuccess1:", user);
};

const onFetchError1 = error => {
    console.error("error_onFetchError1:", error);
};

fetchUserFromServer1("Mango", onFetchSuccess1, onFetchError1);
// console.log("-------------------------------------------------");


//! ПРИКЛАД-2: Промісифікована Асинхронна функція
setTimeout(() => { 
    console.warn("ПРИКЛАД-2: Промісифікована Асинхронна функція:");
//? ✴️ Краще, якщо функція не зважає на той код, який буде
//? використовувати її результат. Вона просто виконує якусь операцію
//? і повертає результат своєї роботи у зовнішній код.
//? Для того щоб повернути результат асинхронної операції,
//? з функції необхідно повернути проміс.
//? Промісифікація - це перетворення функції з колбеками таким чином,
//? щоб вона не приймала колбеки, а повертала проміс.
const fetchUserFromServer2 = username => {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data-2 for ${username}`);

        setTimeout(() => {
            //todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
            const isSuccess = true; //* ✅
            // const isSuccess = false; //! ❌

            if (isSuccess) {
                resolve("✅ success-2");
            } else {
                reject("❌ error-2");
            }
        }, 2000);
    });
};

fetchUserFromServer2("Mango")
    .then(user => console.log("user_fetchUserFromServer2:", user))
    .catch(error => console.error("error_fetchUserFromServer2:", error));
}, 2500);
// console.log("-------------------------------------------------");
