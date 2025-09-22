console.log(
    '%c 8.Використання json-server замість JSONPlaceholder API. \n   Приклади HTTP-запитів.                                ',
    'color: white; background-color: #D33F49',
);


//! Використання json-server замість JSONPlaceholder API. Приклади HTTP-запитів
console.warn("Для демонстрації прикладів необхідно: \n  замінити всі дані в файлі db.json \n  на дані з файла db-jsonplaceholder-posts.json, \n  а потім запустити json-server за адресою: \n  http://localhost:3000 ");
console.warn(`json-server з файлом db-jsonplaceholder-posts.json: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_18/images/emulating-jsonplaceholder-posts.jpg"}`);

//! GET (отримати всі пости):
async function getAllPosts() {
    fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(posts => console.log("GET (отримати всі пости):", posts))
        .catch(error => console.log(error))
        .finally(() => console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "));
};
setTimeout(() => { getAllPosts() }, 0);


//! GET (отримати пост №9):
async function getPost() {
    const postId = 9;
    // const postId = "****"; //! для перевірки нових або змінених постів

    fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(post => console.log(`GET (отримати пост №${postId}):`, post))
        .catch(error => console.log(error))
        .finally(() => console.log("-----------------------------------------------------------------------------------------------------"));
};
setTimeout(() => { getPost() }, 100);


//! POST (створити новий пост):
async function createPost() {
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

    fetch("http://localhost:3000/posts", options)
        .then(response => response.json())
        .then(post => console.log(`${options.method} (створити новий пост):`, post))
        .catch(error => console.log(error))
        .finally(() => console.log("-------------------------------------------------------------------------------------------"));
};
setTimeout(() => { createPost() }, 200);


//! PUT (заміна всього ресурсу (користувача)):
async function updateUserPUT() {
    const requestBody = {
        id: 1,
        name: "New name",
        email: "new@example.com",
    };

    const options = {
        method: "PUT", //! операція UPDATE, оновлення
        body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    fetch(`http://localhost:3000/users/${requestBody.id}`, options)
        .then(response => response.json())
        .then(user => console.log(`${options.method} (заміна всього ресурсу (користувача) з id:${requestBody.id}):`, user))
        .catch(error => console.log(error))
        .finally(() => console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."));
};
// setTimeout(() => { updateUserPUT() }, 400);


//! PATCH (часткове оновлення ресурсу (користувача)):
async function updateUserPATCH() {
    const requestBody = {
        id: 2,
        name: "Updated name",
    };

    const options = {
        method: "PATCH", //! операція UPDATE, оновлення
        body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    fetch(`http://localhost:3000/users/${requestBody.id}`, options)
        .then(response => response.json())
        .then(user => console.log(`${options.method} (часткове оновлення ресурсу (користувача) з id:${requestBody.id}):`, user))
        .catch(error => console.log(error))
        .finally(() => console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."));
};
// setTimeout(() => { updateUserPATCH() }, 600);


//! DELETE (видалення ресурсу (користувача)):
async function deleteUser() {
    const postIdToDelete = 3;

    const options = {
        method: "DELETE", //! операція DELETE, видалення
    };

    fetch(`http://localhost:3000/users/${postIdToDelete}`, options)
        .then(response => {
            console.log("Статус:", response.status);
            return response;
        })
        .then(response => response.json())
        .then(user => console.log(`${options.method} (видалення ресурсу (користувача) з id:${postIdToDelete}):`, user))
        .catch(error => console.log(error))
        .finally(() => console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."));
};
// setTimeout(() => { deleteUser() }, 800);
console.log("-----------------------------------------------------------------------------------------------------------------------");
