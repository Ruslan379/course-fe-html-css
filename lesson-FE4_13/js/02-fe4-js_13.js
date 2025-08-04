console.log(
    '%c 2.Створення промісу. ',
    'color: white; background-color: #D33F49',
);

//! Створення промісу 
console.warn("Створення промісу:");
console.warn("Використання промісів (MDN): \n https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises");
console.warn("Що таке проміси у JavaScript. Фундаментальний JavaScript: \n https://www.youtube.com/watch?v=4X7OjIjjaQE");
console.warn("Промисы в JavaScript [Полный курс 2023] для новичков: \n https://www.youtube.com/watch?v=wx5qS8KlQAg");
console.log("----------------------------------------------------------------------------");


//! ❌ ПРИКЛАД-1: Необхідність використання промісів
console.warn("❌ ПРИКЛАД-1: Необхідність використання промісів:");
function fetchUserInfo1() {
    let userData1 = null;

    setTimeout(() => {
        // fetch() //! очікуємо дані з серверу
        const data1 = { id: 1, name: 'Alex' };
        // return data;
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
console.log("----------------------------------------------------------------------------");


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
        console.log("userInfo2:", userInfo2); //! null
    });
    
};

run2();
console.log("----------------------------------------------------------------------------");
