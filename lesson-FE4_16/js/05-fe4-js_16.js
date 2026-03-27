console.log(
    '%c 5.Робота з публічним REST API. ',
    'color: white; background-color: #D33F49',
);

//! Робота з публічним REST API.
//? ✴️ Кожен бекенд унікальний, їх тисячі.
//? З іншого боку REST API побудовані
//? за стандартною архітектурою.
//? Це означає, що можна зрозуміти принцип їх роботи,
//? після чого, все що потрібно зробити
//? - це ознайомитися з документацією того бекенду,
//? який необхідно використовувати.
//? ✳️ Продовжимо працювати з API https://jsonplaceholder.typicode.com.
//? З документації беремо URL ресурсу для запиту 
//? інформації про колекції несправжніх користувачів.
console.log(
    `%c
    https://jsonplaceholder.typicode.com/users
    `,
    'color: blue; font-size: 18px',
);
//?     📌 Цей шлях складається з наступних частин::
//? 🔸 https://jsonplaceholder.typicode.com
//?    - це ендпоінт, базовий URL, точка входу в API.
//? 🔸 /users - ресурс, до якого ми звертаємося.

//? ✳️ По кліку на кнопку «Fetch users» 
//? зробимо GET-запит і виведемо 
//? список користувачів за отриманими даними.
const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", fetchUsers);

function fetchUsers() {
    fetchData()
        .then((users) => renderUsers(users))
        .catch((error) => console.log(error));
};

function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            };
            return response.json();
        })
};

//todo: var.1
// function renderUsers(users) {
//     const markup = users
//         .map((user) => {
//             return `
//                 <li>
//                     <p><b>Name</b>: ${user.name}</p>
//                     <p><b>Email</b>: ${user.email}</p>
//                     <p><b>Company</b>: ${user.company.name}</p>
//                 </li>
//             `;
//         })
//         .join("");

//todo: var.2
function renderUsers(users) {
    const markup = users
        .map(user =>
            `
            <li>
                <p><b>Name</b>: ${user.name}</p>
                <p><b>Email</b>: ${user.email}</p>
                <p><b>Company</b>: ${user.company.name}</p>
            </li>
        `
        ).join("");
    userList.insertAdjacentHTML("beforeend", markup);
    console.log("markup:", markup);
    console.log("----------------------------------------------------------------------");
};
//? ✳️ Зверніть увагу на те, що функція fetchData() 
//? повертає проміс, тому до результату її виклику 
//? ми додаємо ланцюжок методів then() і catch().
// console.log("----------------------------------------------------------------------");
