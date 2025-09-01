console.log(
    '%c 6.Параметри рядка запиту. \n   Клас URLSearchParams.   ',
    'color: white; background-color: #D33F49',
);

//! Параметри рядка запиту
console.warn("Параметри рядка запиту:");

//? ✴️ Параметри запиту дозволяють вказати бекенду додаткові критерії.
//? Наприклад, скільки елементів колекції ми хочемо отримати в запиті,
//? можливо, необхідно додати сортування за якоюсь властивістю об'єкта,
//? обмежити вибірку тощо. Список параметрів запиту, їх назви
//? і можливі значення залежать від бекенду і описані в документації.

//? ✴️ ❗️❗️❗️ Символ ? вказує на старт параметрів запиту.
//? Кожен параметр - це пара ім'я=значення.
//? Символ & використовується для зазначення смислового «І»,
//? розділяючи параметри в рядку запиту.
console.log(
    `%c
    const url = "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name";
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ Такий GET-запит поверне масив із ❗️п'яти❗️ користувачів
//? (всього їх 10), відсортованих за ім'ям (поле name)
//? в алфавітному порядку.
//? Підкреслення в іменах параметрів специфічні
//? для цього бекенду, це не якийсь стандарт.
const fetchUsersBtn = document.querySelector(".btn5");
const userList = document.querySelector(".user-list5");

fetchUsersBtn.addEventListener("click", fetchUsers);

function fetchUsers() {
    fetchAllUsers()
        .then((users) => renderUsers(users))
        .catch((error) => console.log(error));
};

function fetchAllUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            };
            return response.json();
        })
};

function renderUsers(users) {
    const markup = users
        .map((user) => {
            return `
                <li>
                    <p><b>Name</b>: ${user.name}</p>
                    <p><b>Email</b>: ${user.email}</p>
                    <p><b>Company</b>: ${user.company.name}</p>
                </li>
            `;
        })
        .join("");
    userList.insertAdjacentHTML("beforeend", markup);
    console.log("markup:", markup);
    console.log("--------------------------------------------------------------------------------------------------------------------------");
    // console.warn("Клас URLSearchParams:");
    createSearchParams();
};
// console.log("--------------------------------------------------------------------------------------------------------------------------");


//! Клас URLSearchParams
//? ✴️ Параметрів може бути багато, і незручно складати
//? з них один довгий рядок як для читабельності,
//? так і для його подальшого редагування.
//? Під час складання рядків параметрів,
//? створюється екземпляр класу URLSearchParams
//? та ініціалізується об'єктом.
//? Результатом буде спеціальний об'єкт (ітератор)
//? з методами, який у рядковому перетворенні повертає
//? результат виклику методу toString() - своє рядкове відображення.
function createSearchParams() {
    console.warn("Клас URLSearchParams:");

    const searchParams = new URLSearchParams(
        {
            _limit: 5,
            _sort: "name",
        }
    );
    console.log("searchParams.toString():", searchParams.toString()); //! "_limit=5&_sort=name"

    const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
    console.log("url:", url); //! "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
    console.log("--------------------------------------------------------------------------------------------------------------------------");
};
//? ✳️ У рядковому вигляді властивості об'єкта 
//? стануть параметрами та їх значеннями. 
//? Параметри будуть розділені символом &. 
//? У разі інтерполяції значення в шаблонних рядках 
//? відбувається його неявне перетворення у рядок, 
//? тому не потрібно викликати метод toString() 
//? під час складання URL. 
//? Не забувайте вказувати початок рядка запиту символом ?.
// console.log("--------------------------------------------------------------------------------------------------------------------------");
