console.log(
    '%c 6.Створення персонального сервера баз даних з json-server ',
    'color: white; background-color: #D33F49',
);

//! Бібліотека json-server
console.warn("Бібліотека json-server на NPM: \n https://www.npmjs.com/package/json-server");
//? ✴️ json-server – це легка бібліотека для швидкого
//? прототипування REST API на основі JSON-файлу (db.json).
//? Дуже зручно для фейкового бекенда під час розробки фронтенду:
//? підтримує GET/POST/PUT/PATCH/DELETE, фільтри, пагінацію,
//? сортування, зв'язки _embed / _expand,
//? перезаписує db.json при змінах (за умовчанням при --watch).


//! КРОК-1.Створення проекту та встановлення json-server
console.warn("КРОК-1.Створення проекту та встановлення json-server:");
console.log(
    `%c
        📌 Створіть папку проекту my-json-server:

    mkdir my-json-server
    cd my-json-server
    npm init -y


        📌 Встановіть в проект залежність json-server:

    npm i json-server


        📌 Перенесіть папку проекту my-json-server
            до папки з усіма вашими проектами.


        📌 Відкрийте проект my-json-server у VSCode.
    `,
    'color: blue; font-size: 18px',
);
console.log("");


//! КРОК-2.Створення головного файлу бази даних
console.warn("КРОК-2.Створення головного файлу бази даних:");
console.log(
    `%c
        📌 Створіть файл db.json у корені проекту my-json-server
            та додайте у файл db.json такі дані:

    {
        "users": [
            { "id": 1, "name": "Leanne Graham", "email": "leanne@example.com" },
            { "id": 2, "name": "Ervin Howell", "email": "ervin@example.com" },
            { "id": 3, "name": "Bob Dylan", "email": "bob@example.com" }
        ],
        "posts": [
            { "id": 1, "userId": 1, "title": "Post 1", "body": "..." },
            { "id": 2, "userId": 1, "title": "Post 2", "body": "..." }
        ],
        "comments": [
            { "id": 1, "postId": 1, "body": "Nice post!" }
        ]
    }
    `,
    'color: blue; font-size: 18px',
);
console.log("");


//! КРОК-3.Налаштування проекту my-json-server
console.warn("КРОК-3.Налаштування проекту my-json-server:");
console.log(
    `%c
        📌 Додайте такий скрипт в файл package.json:

        "scripts": {
            "json-server": "json-server --watch db.json --port 3000"
        },
    `,
    'color: blue; font-size: 18px',
);
console.log("");


//! КРОК-4.Запуск проекту my-json-server
console.warn("КРОК-4.Запуск проекту my-json-server:");
console.log(
    `%c
        📌 Запустіть ваш проект my-json-server:

        npm run json-server


        📌 Відкрийте ваш сервер в браузері, доступний за адресою:
        
        http://localhost:3000.
    `,
    'color: blue; font-size: 18px',
);
console.log("");


//! КРОК-5.Відображення серверу в браузері
console.warn(`КРОК-5.Відображення серверу в браузері​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_18/images/json-server.jpg"}`);
console.log("");


//! КРОК-6.Збереження проекту my-json-server на GitHub
console.warn("КРОК-6.Збереження проекту my-json-server на GitHub:");
console.log(
    `%c
        📌 Додайте ваш проекту my-json-server на ваш GitHub.
    `,
    'color: blue; font-size: 18px',
);
console.log("");


//! КРОК-7.Важливе зауваження стосовно роботи з json-server
console.warn("КРОК-7.❗️❗️❗️ Важливе зауваження стосовно роботи з json-server:");
//? ✴️ Операції POST/PUT/DELETE будуть змінювати дані у файлі db.json.
//? ✴️ ❗️❗️❗️ Якщо ви самостійно зміните дані у файлі db.json, то після цього
//? необхідно ОБОВ'ЯЗКОВО ПЕРЕВАНТАЖИТИ ваш сервер у VSCode
//? (закрити його за допомогою Ctrl+C і відкрити знову: npm run json-server).
console.log(
    `%c
    📌 Операції POST/PUT/DELETE будуть змінювати дані у файлі db.json.

    📌❗️❗️❗️ Якщо ви самостійно зміните дані у файлі db.json, то після цього 
           необхідно ОБОВ'ЯЗКОВО ПЕРЕВАНТАЖИТИ ваш сервер у VSCode
           (закрити його за допомогою Ctrl+C і відкрити знову: npm run json-server).
    `,
    'color: blue; font-size: 18px',
);

//! Приклад проєкту персонального сервера баз даних з json-server
console.warn("Приклад проєкту персонального сервера баз даних з json-server: \n  https://github.com/Ruslan379/json-server");
console.log("------------------------------------------------------------------------------------------------------------------------------");
