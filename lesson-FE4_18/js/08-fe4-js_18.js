console.log(
    '%c 8.Використання json-server замість JSONPlaceholder API. \n   Приклади HTTP-запитів.                                ',
    'color: white; background-color: #D33F49',
);


//! Використання json-server замість JSONPlaceholder API. Приклади HTTP-запитів
console.warn("Для демонстрації прикладів необхідно: \n  замінити всі дані в файлі db.json \n  на дані з файла db-jsonplaceholder-posts.json, \n  а потім запустити json-server за адресою: \n  http://localhost:3000");
console.warn(`json-server з файлом db-jsonplaceholder-posts.json: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_18/images/emulating-jsonplaceholder-posts.jpg"}`);

//! GET (отримати всі пости):
function getAllPosts() {
    fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(posts => console.log("GET (отримати всі пости):", posts))
        .catch(error => console.log(error))
        .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------"));
};
setTimeout(() => { getAllPosts() }, 0);


//! GET (отримати пост з id:9):
function getPost() {
    const postId = 9;
    // const postId = "****"; //! для перевірки нових або змінених постів

    fetch(`http://localhost:3000/posts/${postId}`)
        .then(response => response.json())
        .then(post => console.log(`GET (отримати пост з id:${postId}):`, post))
        .catch(error => console.log(error))
        .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------"));
};
setTimeout(() => { getPost() }, 100);


//! POST (створити новий пост):
function createPost() {
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
        .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------"));
};
setTimeout(() => { createPost() }, 200);


//! PUT (заміна всього ресурсу (поста)):
function updatePostPUT() {
    const requestBody = {
        // userId: 1, //? не додаємо цієї властивості
        id: 5, //! змінюй для заміни різніх постів
        title: "Report on modern science",
        // body: "rerum voluptatem ullam culpa adipisciassumenda", //? не додаємо цієї властивості
        author: "Vir Norin",
        email: "VirNorin@example.com"
    };

    const options = {
        method: "PUT", //! операція UPDATE, оновлення
        body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    fetch(`http://localhost:3000/posts/${requestBody.id}`, options)
        .then(response => response.json())
        .then(post => console.log(`${options.method} (заміна всього ресурсу (поста) з id:${requestBody.id}):`, post))
        .catch(error => console.log(error))
        .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------"));
};
setTimeout(() => { updatePostPUT() }, 400);


//! PATCH (часткове оновлення ресурсу (поста)):
function updatePostPATCH() {
    const requestBody = {
        userId: 1, //? додаємо цю властивість
        id: 5, //! змінюй для заміни різніх постів
        title: "NEW report on modern science", //todo: змінюємо цю властивість
        body: "rerum voluptatem ullam culpa adipisciassumenda", //? додаємо цю властивість
        // author: "Vir Norin", //? НЕ змінюємо цю властивість
        // email: "VirNorin@example.com" //? НЕ змінюємо цю властивість
    };

    const options = {
        method: "PATCH", //! операція UPDATE, оновлення
        body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    fetch(`http://localhost:3000/posts/${requestBody.id}`, options)
        .then(response => response.json())
        .then(post => console.log(`${options.method} (часткове оновлення ресурсу (поста) з id:${requestBody.id}):`, post))
        .catch(error => console.log(error))
        .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------"));
};
setTimeout(() => { updatePostPATCH() }, 600);


//! DELETE (видалення ресурсу (поста) з id:9):
function deletePost() {
    const postIdToDelete = 9;
    // const postIdToDelete = "****"; //! для перевірки видалення постів

    const options = {
        method: "DELETE", //! операція DELETE, видалення
    };

    fetch(`http://localhost:3000/posts/${postIdToDelete}`, options)
        .then(response => {
            console.log("Статус:", response.status);
            return response;
        })
        .then(response => response.json())
        .then(post => console.log(`${options.method} (видалення ресурсу (поста) з id:${postIdToDelete}):`, post))
        .catch(error => console.log(error))
        .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------"));
};
setTimeout(() => { deletePost() }, 800);
console.log("-----------------------------------------------------------------------------------------------------------------------");
