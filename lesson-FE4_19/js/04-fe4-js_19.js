console.log(
    '%c 4.Паралельні запити з async/await. ',
    'color: white; background-color: #D33F49',
);

//! Послідовні запити з async/await
console.warn(`Послідовні запити з async/await​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_19/images/sequential-queries.jpg"}`);
//? ✴️ Якщо одночасно необхідно зробити декілька запитів, 
//? використовувати синтаксис async/await потрібно дуже обережно. 
//? У наступному прикладі будуть виконані три послідовних запити, 
//? тому що виконання асинхронної функції призупиняється, 
//? коли інтерпретатор зустрічає await. 
//? Крім того, парс результатів запитів 
//? також буде послідовний, що забере більше часу.
const fetchUsers = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const firstResponse = await fetch(`${baseUrl}/users/1`);
    const secondResponse = await fetch(`${baseUrl}/users/2`);
    const thirdResponse = await fetch(`${baseUrl}/users/3`);

    const firstUser = await firstResponse.json();
    const secondUser = await secondResponse.json();
    const thirdUser = await thirdResponse.json();

    // console.log(firstUser, secondUser, thirdUser);
    console.log("firstUser  1️⃣:", firstUser);
    console.log("secondUser 2️⃣:", secondUser);
    console.log("thirdUser  3️⃣:", thirdUser);
    console.log("------------------------------------------------------------------------------------------------------------------------");
};
fetchUsers();
// console.log("----------------------------------------------------------------------------------------------------------");


//! Паралельні запити з async/await
//? ✴️ У попередньому прикладі всі запити робляться послідовно,
//? тому спробуємо запустити їх паралельно.
//? Для цього створюється масив промісів,
//? після чого використовується метод Promise.all(),
//? для очікування їх виконання.
//? Масив промісів створюється методами map(),
//? filter() тощо, залежно від завдання.
//? ✴️ За такого підходу, запити запускаються паралельно, 
//? що економить час очікування їх виконання, 
//? який дорівнює тривалості «найповільнішого» з них. 
//? Такий прийом підходить тільки у разі, 
//? якщо запити не залежать один від одного.
setTimeout(() => {
    console.warn(`Паралельні запити з async/await​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_19/images/parallel-queries.jpg"}`);
    const fetchUsers = async () => {
        const baseUrl = "https://jsonplaceholder.typicode.com";
        const userIds = [1, 2, 3];

        //! 1.Створюємо масив промісів
        const arrayOfPromises = userIds.map(async userId => {
            const response = await fetch(`${baseUrl}/users/${userId}`);
            return response.json();
        });
        console.log("arrayOfPromises:", arrayOfPromises);

        //! 2.Запускаємо усі проміси паралельно і чекаємо на їх завершення
        const users = await Promise.all(arrayOfPromises);
        console.log("All users 1️⃣2️⃣3️⃣:", users);
        console.log("------------------------------------------------------------------------------------------------------------------------");
    };
    fetchUsers();
}, 500);
// console.log("----------------------------------------------------------------------------------------------------------");


//! Приклад паралельних запитів з async/await та конструкцією try...catch
//? ✴️ Створимо приклад з кнопкою, клікаючи на яку, виконується запит,
//? і обробляє можливу помилку конструкцією try...catch. 
//? Це стандартний AJAX-код з використанням асинхронних функцій.
setTimeout(() => {
    console.warn("Приклад паралельних запитів з async/await та конструкцією try...catch:");
    const fetchUsersBtn = document.querySelector(".btn");
    const userList = document.querySelector(".user-list");

    fetchUsersBtn.addEventListener(
        "click",
        async () => {
            try {
                const users = await fetchUsers();
                renderUserListItems(users);
            } catch (error) {
                console.log(error.message);
            }
    });
    
    //! Функція робить запити та повертає відповідь сервера
    async function fetchUsers() {
        const baseUrl = "https://jsonplaceholder.typicode.com";
        const userIds = [1, 2, 3, 4, 5];
        //! 1.Створюємо масив промісів
        const arrayOfPromises = userIds.map(async (userId) => {
            const response = await fetch(`${baseUrl}/users/${userId}`);
            return response.json();
        });
        //! 2.Запускаємо усі проміси паралельно і чекаємо на їх завершення
        const users = await Promise.all(arrayOfPromises);
        console.log("All users 1️⃣2️⃣3️⃣4️⃣5️⃣:", users);
        return users;
    };

    //! Функція будує розмітку
    function renderUserListItems(users) {
        const markup = users
            .map(
                (user) =>
                    `
                        <li class="item">
                            <p><b>Name</b>: ${user.name}</p>
                            <p><b>Email</b>: ${user.email}</p>
                            <p><b>Company</b>: ${user.company.name}</p>
                        </li>
                    `
            )
            .join("");
        userList.innerHTML = markup;
        console.log("------------------------------------------------------------------------------------------------------------------------");
    }
}, 700);
// console.log("----------------------------------------------------------------------------------------------------------");
