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

//! PATCH:
const requestBody = {
    id: 9,
    author: "Fay Rodis",
    title: "Treatise on Inferno",
};

const options = {
    method: "PATCH", //! операція UPDATE, оновлення
    body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${requestBody.id}`, options)
    .then(response => response.json())
    .then(res => console.log("Відповідь сервера на PATCH:", res))
    .catch(error => console.log(error))
    .finally(() => console.log("-----------------------------------------------------------------------------------------------------"));


//! Meтод GET. Операція READ. Читання
//? ☹️ Але, JSONPlaceholder API, на жаль, фактично не змінює дані після запиту:
// setTimeout(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${requestBody.id}`)
//         .then(response => response.json())
//         .then(post => console.log(`post №${requestBody.id} після PATCH:`, post))
//         .catch(error => console.log(error))
//         .finally(() => console.log("-----------------------------------------------------------------------------------------------------"));
// }, 500);
// console.log("-----------------------------------------------------------------------------------------------------"));
