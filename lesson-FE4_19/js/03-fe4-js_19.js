console.log(
    '%c 3.Обробка помилок в async/await. ',
    'color: white; background-color: #D33F49',
);

//! Обробка помилок в async/await. Варіант №1.
console.warn(`Варіант №1. \n  Якщо результат асинхронної функції (проміс) \n  НЕ використовується у зовнішньому коді:`);
//? ✴️ Якщо результат асинхронної функції (проміс) 
//? не використовується у зовнішньому коді, 
//? помилки обробляються в тілі функції конструкцією try...catch. 
//? Значення параметра error в блоці catch - це помилка, 
//? яку згенерує await, якщо проміс буде відхилений.
//? ✳️ 
console.log(
    `%c
    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            console.log("users:", users);
        } catch (error) {
            console.log(error.message);
        }
    };

    fetchUsers();
    `,
    'color: blue; font-size: 18px',
);
const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log("users:", users);
        console.log("----------------------------------------------------------------------------------------------------------------------------------");

    } catch (error) {
        console.log(error.message);
    }
};

fetchUsers();
console.log("----------------------------------------------------------------------------------------------------------------------------------");


//! Обробка помилок в async/await. Варіант №2.
//? ✴️ Якщо результат асинхронної функції (проміс) 
//? використовується у зовнішньому (глобальному) коді, 
//? тобто за межами інших асинхронних функцій, 
//? помилки обробляються колбеком методом catch(). 
//? Значення параметра error в методі catch() 
//? - це помилка, яку згенерує await, якщо проміс буде відхилений.
setTimeout(() => {
    console.warn(`Варіант №2. \n  Якщо результат асинхронної функції (проміс) \n  використовується у зовнішньому коді:`);
    console.log(
        `%c
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };

    fetchUsers()
        .then(users => console.log("users:", users))
        .catch(error => console.log(error));
    `,
        'color: blue; font-size: 18px',
    );
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };

    fetchUsers()
        .then(users => console.log("users:", users))
        .catch(error => console.log(error));
}, 100);
