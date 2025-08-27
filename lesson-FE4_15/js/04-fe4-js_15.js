console.log(
    '%c 4.Коди відповідей​. \n   Запит-Відповідь. ',
    'color: white; background-color: #D33F49',
);

//! Коди відповідей
//? ✴️ На запит клієнта сервер відправляє відповідь,
//? яка містить код стану, щоб інформувати клієнта
//? про результат операції. Коди діляться на групи:
console.warn(`Групи кодів відповідей​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_15/images/response-codes-1.png"}`);
console.warn(`Коди відповідей​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_15/images/response-codes-2.png"}`);
console.log("-----------------------------------------------------------------------------------------");


//! Запит-Відповідь
console.warn("Запит-Відповідь:");
//? ✴️ Припустимо у нас є застосунок, який дозволяє
//? переглядати, створювати, редагувати і видаляти
//? користувачів, бекенд якого розміщений на
//? https://jsonplaceholder.typicode.com.
//? Використовуючи отримані знання, опишемо ❗️псевдокодом❗️
//? процес запит-відповідь до бекенду.

//? ✳️ Якщо ми хочемо отримати дані про всіх клієнтів,
//? GET запит буде виглядати наступним чином:
console.log("1️⃣ Запит до cервера (список всіх користувачів):");
console.log(
    `%c
    GET https://jsonplaceholder.typicode.com/users
    Accept: application/json
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ На що сервер відправить нам таку відповідь:
console.log("Відповідь cервера (список всіх користувачів):");
console.log(
    `%c
    Status: 200 OK
    Content-Type: application/json
    Body: JSON-дані про всіх користувачів (масив об'єктів):
    https://jsonplaceholder.typicode.com/users
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log("2️⃣ Запит до cервера (користувач з id:3):");
console.log(
    `%c
    GET https://jsonplaceholder.typicode.com/users/3
    Accept: application/json
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ На що сервер відправить нам таку відповідь:
console.log("Відповідь cервера (користувач з id:3):");
console.log(
    `%c
    Status: 200 OK
    Content-Type: application/json
    Body: JSON-дані користувача з id:3 (об'єкт):
    https://jsonplaceholder.typicode.com/users/3
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Для того щоб додати нового клієнта, виконуємо POST запит:
console.log("3️⃣ Запит до cервера (додати нового користувача):");
console.log(
    `%c
    POST https://jsonplaceholder.typicode.com/users
    Accept: application/json
    Body: {
            "name": "Veda Kong",
            "username": "Efremova",
            "email": "Vedakong@freemail.net"
           }
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ Сервер додає унікальний ідентифікатор
//? і повертає увесь об'єкт як результат.
//? І відправить нам таку відповідь :
console.log("Відповідь cервера (додати нового користувача):");
console.log(
    `%c
    Status: 201 OK
    Content-Type: application/json
    Body: JSON-дані нового користувача (об'єкт):
    {
        "name": "Veda Kong",
        "username": "Efremova",
        "email": "Vedakong@freemail.net",
        "id": 11
    }
    `,
    'color: blue; font-size: 18px',
);
console.log("-----------------------------------------------------------------------------------------");
