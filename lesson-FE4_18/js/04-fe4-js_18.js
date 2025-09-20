console.log(
    '%c 4.Meтоди PUT і PATCH. Операція UPDATE. Оновлення. ',
    'color: white; background-color: #D33F49',
);

//! Meтоди PUT і PATCH. Операція UPDATE. Оновлення
//? ✴️ Методи PUT і PATCH використовуються для оновлення існуючих даних.
//? Який метод використовувати, буде написано в документації бекенду.
//? Метод fetch() повинен відправити на сервер запит, в тілі якого
//? необхідно вказати об'єкт з полями для зміни. Шлях вказує,
//? в якій колекції і який елемент ми хочемо оновити.
//? Бекенд, після отримання запиту, обробить його і у відповіді
//? поверне оновлений ресурс.

//? 📌 Метод PATCH ЗАМІНЯЄ в існуючому ресурсі ТІЛЬКИ ТІ
//?     значення і властивості, які передані в тілі запиту.
//? 📌 Метод PUT ПОВНІСТЮ ЗАМІНЯЄ ВЕСЬ РЕСУРС
//?    переданими даними в тілі запиту.

//? ✳️ У відповідь, якщо все добре, отримаємо JSON з оновленим об'єктом:
console.log(
    `%c
        📌 Відповідь сервера на PATCH:
    {
        "id": 9,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno",
        userId: 1,
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log(
    `%c
        📌 Відповідь сервера на PUT:
    {
        "id": 9,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno"
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const requestBody = {
    id: 9,
    author: "Fay Rodis",
    title: "Treatise on Inferno",
};

//? PATCH  або PUT:
const options = {
    method: "PATCH", //! операція UPDATE, оновлення
    // method: "PUT", //! операція UPDATE, оновлення
    body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${requestBody.id}`, options)
    .then(response => response.json())
    .then(res => console.log(`Відповідь сервера на ${options.method}:`, res))
    .catch(error => console.log(error))
    .finally(() => console.log("-----------------------------------------------------------------------------------------------------"));


//! Meтод GET. Операція READ. Читання
//? ☹️ Але, JSONPlaceholder API, на жаль, фактично не змінює дані після запиту:
// setTimeout(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${requestBody.id}`)
//         .then(response => response.json())
//         .then(post => console.log(`post №${requestBody.id} після ${options.method}:`, post))
//         .catch(error => console.log(error))
//         .finally(() => console.log("-----------------------------------------------------------------------------------------------------"));
// }, 500);
// console.log("-----------------------------------------------------------------------------------------------------"));
