console.log(
    '%c 5.Meтод DELETE. Операція DELETE. Видалення. ',
    'color: white; background-color: #D33F49',
);

//! Meтод DELETE. Операція DELETE. Видалення
//? ✴️ Метод DELETE використовується для видалення існуючих даних. 
//? Метод fetch() повинен відправити на сервер DELETE-запит без тіла. 
//? Шлях вказує, в якій колекції і який елемент ми хочемо видалити. 
//? Бекенд, після отримання запиту, обробить його, 
//? видалить ресурс з колекції і у відповіді поверне статус результату.

//? ✳️ У відповідь, якщо все добре, отримаємо JSON з оновленим об'єктом:
console.log(
    `%c
        📌 Відповідь сервера на DELETE:
    Post deleted
    Status: 200
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const postIdToDelete = 9;

const options = {
    method: "DELETE", //! операція DELETE, видалення
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, options)
    .then(response => console.log("Відповідь сервера на DELETE:", response))
    // .then(response => console.log("Відповідь response.status на DELETE:", response.status))
    .catch(error => console.log(error))
    .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------------"));


//! Meтод GET. Операція READ. Читання
//? ☹️ Але, JSONPlaceholder API, на жаль, фактично не змінює дані після запиту:
// setTimeout(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`)
//         .then(response => response.json())
//         .then(post => console.log(`post №${postIdToDelete} після ${options.method}:`, post))
//         .catch(error => console.log(error))
//         .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------------"));
// }, 500);
// console.log("-----------------------------------------------------------------------------------------------------------------------------"));
