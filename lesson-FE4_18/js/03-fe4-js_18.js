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
const postToAdd = {
    author: "Mango",
    body: "CRUD is awesome",
};

const options = {
    method: "POST",
    body: JSON.stringify(postToAdd),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(response => response.json())
    .then(post => console.log("post:", post))
    .catch(error => console.log(error))
    .finally(() => console.log("-------------------------------------------------------------"));

//? ✳️ Робимо запит на створення поста,
//? звертаючись до ресурсу /posts,
//? але у налаштуваннях методу fetch()
//? змінюємо HTTP-метод на POST.
//? Таким чином, бекенд знає, що потрібно
//? не прочитати вже існуючий,
//? а створити новий ресурс в цій колекції.

//? ✳️ Тіло запиту повинно бути рядком,
//? тому що протокол HTTP передає усе як текст.
//? При передачі складних типів даних,
//? їх обов'язково необхідно привести
//? до рядка методом JSON.stringify().
//? Не забуваємо вказати заголовок Content-Type,
//? який уточнює для бекенду тип переданих даних.

//? ✳️ У відповідь, якщо все добре,
//? отримаємо JSON з доданим id.
//? Ідентифікатор буде унікальним для кожного об'єкта:
console.log(
    `%c
        📌 Відповідь сервера:
    {
        "id": 101,
        "author": "Mango",
        "content": "CRUD is awesome"
    }
    `,
    'color: blue; font-size: 18px',
);
// console.log("-------------------------------------------------------------");
