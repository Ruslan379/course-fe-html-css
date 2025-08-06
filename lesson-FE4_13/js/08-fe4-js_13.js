console.log(
    '%c 8.Неявне використання промісу. ',
    'color: white; background-color: #D33F49',
);

//! ПРИКЛАД-1: Асинхронна функція запиту на сервер з колбеками
console.warn("ПРИКЛАД-1: Асинхронна функція запиту на сервер з колбеками:");
function fetchUserInfo1(callback) {
    setTimeout(() => {
        // fetch() //! очікуємо дані з серверу
        const data1 = { id: 1, name: 'Alex-1' };

        callback(data1);
    }, 500);
};

function run1() {
    fetchUserInfo1((userInfo1) => {
        console.log("userInfo1:", userInfo1); //! {id: 1, name: 'Alex-1'}
        console.log("--------------------------------------------------------------");
    });
};

run1();
// console.log("--------------------------------------------------------------");


//! ПРИКЛАД-2: Промісифікована Асинхронна функція запиту на сервер
setTimeout(() => {
    console.warn("ПРИКЛАД-2: Промісифікована Асинхронна функція:");

    function fetchUserInfo2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // fetch() //! очікуємо дані з серверу
                const data2 = { id: 2, name: 'Alex-2' };

                // callback(data2);
                resolve(data2);
            }, 700);
        });
    };

    function run2() {
        fetchUserInfo2()
            .then((userInfo2) => {
                console.log("userInfo2:", userInfo2); //! {id: 2, name: 'Alex-2'}
                console.log("--------------------------------------------------------------");
        });
    };

    run2();
}, 1000);
// console.log("--------------------------------------------------------------");