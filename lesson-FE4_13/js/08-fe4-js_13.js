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
        console.log("---------------------------------------------------------------------");
    });
};

run1();
// console.log("---------------------------------------------------------------------");


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
            })
            .catch(error => console.error(error))
            .finally(() => {
                console.error("Операція завершена!");
                console.log("---------------------------------------------------------------------");
            });
    };

    run2();
}, 1000);
// console.log("---------------------------------------------------------------------");


//! ПРИКЛАД-3: Асинхронна функція запиту на сервер з неявним промісом
setTimeout(() => {
    console.warn("ПРИКЛАД-3: Асинхронна функція запиту на сервер з неявним промісом:");

    function fetchUserInfo3() {
        const data3 = fetch("https://jsonplaceholder.typicode.com/photos"); //! очікуємо дані з серверу
        return data3;
    };

    function run3() {
        fetchUserInfo3()
            // .then((response) => {
            //     console.log("response:", response); 
            // })
            .then((response) => response.json())
            .then((data) => {
                console.log("data:", data); //! масив із 5000 об'єктів
            })
            .catch(console.error)
            .finally(() => {
                console.error("Операція завершена - отримали дані із сервера!");
                console.log("---------------------------------------------------------------------");
            });
    };

    run3();

}, 2000);
// console.log("---------------------------------------------------------------------");