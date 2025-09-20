console.log(
    '%c 3.Meтод POST. Операція CREATE. Створення. ',
    'color: white; background-color: #D33F49',
);

//! Meтод POST. Операція CREATE. Створення
//? ✴️ Метод POST використовується для додавання нового ресурсу.
//? Метод fetch() повинен відправити POST-запит на сервер,
//? в тілі якого буде об'єкт з полями author і body,
//? ідентифікатор буде автоматично створений базою даних.
//? Результатом такого запиту буде об'єкт, доданий в базу даних.

//? ✳️ У відповідь, якщо все добре, отримаємо JSON з доданим id.
//? Ідентифікатор "id" буде унікальним для кожного об'єкта:
console.log(
    `%c
        📌 Відповідь сервера на POST:
    {
        "id": 101,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno"
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? 📌 Для відправлення POST запиту або запиту
//? з іншим методом, треба використати fetch параметри {options}:
//? 🔸 method — HTTP-метод, наприклад POST (використовується найчастіше),
//? 🔸 body — тіло запиту, значенням якого є щось одне із списку:
//?    - рядок (наприклад, у форматі JSON),
//?    - об’єкт FormData, для відправки даних як multipart/form-data,
//?    - Blob/BufferSource для відправлення бінарних даних,
//?    - URLSearchParams, для відправлення даних у кодуванні x-www-form-urlencoded (використовуєся рідко),
console.warn("URLSearchParams: \n https://uk.javascript.info/url");
//? 🔸 headers — заголовок, який вказує тип переданих даних в тілі запиту.

const requestBody = {
    author: "Fay Rodis",
    title: "Treatise on Inferno",
};

const options = {
    method: "POST", //! операція CREATE, створення
    body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(response => response.json())
    .then(res => console.log("Відповідь сервера на POST:", res))
    .catch(error => console.log(error))
    .finally(() => console.log("-------------------------------------------------------------------------------------------"));

//? ✳️ Робимо запит на створення поста,
//? звертаючись до ресурсу /posts,
//? але у налаштуваннях методу fetch()
//? змінюємо HTTP-метод на POST в об'єкті параметрів {options}.
//? Таким чином, бекенд знає, що потрібно
//? не прочитати вже існуючий,
//? а СТВОРИТИ новий ресурс в цій колекції.

//? ✳️ Тіло запиту body повинно бути рядком,
//? тому що протокол HTTP передає усе як текст.
//? При передачі складних типів даних,
//? їх обов'язково необхідно привести
//? до рядка методом JSON.stringify()
//? або задати інший тип (дивись вище).
//? Не забуваємо вказати заголовок Content-Type,
//? який уточнює для бекенду тип переданих даних.


//! Meтод GET. Операція READ. Читання
//? ☹️ Але, JSONPlaceholder API, на жаль, фактично не змінює дані після запиту:
// setTimeout(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/101`)
//         .then(response => response.json())
//         .then(post => console.log(`post №101 після POST:`, post))
//         .catch(error => console.log(error))
//         .finally(() => console.log("-------------------------------------------------------------------------------------------"));
// }, 500);
// console.log("-------------------------------------------------------------------------------------------"));
