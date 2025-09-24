console.log(
    '%c 7.Приклади HTTP-запитів з CRUD з використанням json-server ',
    'color: white; background-color: #D33F49',
);

//! Приклади HTTP-запитів з CRUD з використанням json-server
console.warn("Для демонстрації прикладів необхідно запустити json-server за адресою: http://localhost:3000");
//! GET (отримати всіх користувачів):
function getUsers() {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => console.log("GET (отримати всіх користувачів):", users))
        .catch(error => console.log(error))
        .finally(() => console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."));
};
setTimeout(() => { getUsers() }, 0);


//! POST (створити нового користувача):
function createUser() {
    const requestBody = {
        name: "Ivan",
        email: "ivan@example.com",
    };

    const options = {
        method: "POST", //! операція CREATE, створення
        body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    fetch("http://localhost:3000/users", options)
        .then(response => response.json())
        .then(user => console.log(`${options.method} (створити нового користувача):`, user))
        .catch(error => console.log(error))
        .finally(() => console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."));
};
setTimeout(() => { createUser() }, 200);


//! PUT (заміна всього ресурсу (користувача)):
function updateUserPUT() {
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
setTimeout(() => { updateUserPUT() }, 400);


//! PATCH (часткове оновлення ресурсу (користувача)):
function updateUserPATCH() {
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
setTimeout(() => { updateUserPATCH() }, 600);


//! DELETE (видалення ресурсу (користувача)):
function deleteUser() {
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
setTimeout(() => { deleteUser() }, 800);
console.log("-----------------------------------------------------------------------------------------------------------------------");
