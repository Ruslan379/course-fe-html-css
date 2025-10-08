console.log(
    '%c 5.Приклади CRUD HTTP-запитів з async/await \n   та використанням json-server             ',
    'color: white; background-color: #D33F49',
);

//! Приклади CRUD HTTP-запитів з async/await та використанням json-server
console.warn("Для демонстрації прикладів необхідно: \n  замінити всі дані в файлі db.json \n  на дані з файла db-start.json, \n  а потім запустити json-server за адресою: \n  http://localhost:3000");
//! GET (отримати всіх користувачів):
async function getUsers() {
    const res = await fetch('http://localhost:3000/users');
    const users = await res.json();
    console.log("GET(отримати всіх користувачів):", users);
    console.log("---------------------------------------------------------------------------------------------------------------");
};
setTimeout(() => { getUsers() }, 0);


//! POST (створити нового користувача):
async function createUser() {
    const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Ivan', email: 'ivan@example.com' })
    });
    const user = await res.json();
    console.log("POST (створити нового користувача):", user);
    console.log("---------------------------------------------------------------------------------------------------------------");
};
setTimeout(() => { createUser() }, 200);


//! PUT (заміна всього ресурсу (користувача)):
async function updateUserPUT() {
    const res = await fetch('http://localhost:3000/users/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 1, name: 'New name', email: 'new@example.com' })
    });
    const user = await res.json();
    console.log("PUT (заміна всього ресурсу (користувача)):", user);
    console.log("---------------------------------------------------------------------------------------------------------------");
};
setTimeout(() => { updateUserPUT() }, 400);


//! PATCH (часткове оновлення ресурсу (користувача)):
async function updateUserPATCH() {
    const res = await fetch('http://localhost:3000/users/2', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Updated name' })
    });
    const user = await res.json();
    console.log("PATCH (часткове оновлення ресурсу (користувача):", user);
    console.log("---------------------------------------------------------------------------------------------------------------");
};
setTimeout(() => { updateUserPATCH() }, 600);


//! DELETE (видалення ресурсу (користувача)):
async function deleteUser() {
    const res = await fetch('http://localhost:3000/users/3', {
        method: 'DELETE',
    });
    const user = await res.json();
    const status = res.status
    console.log("DELETE (видалення ресурсу (користувача):", user);
    console.log("Статус:", status);
    console.log("---------------------------------------------------------------------------------------------------------------");
};
setTimeout(() => { deleteUser() }, 800);
console.log("---------------------------------------------------------------------------------------------------------------");
