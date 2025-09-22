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


//! КРОК-1.Встановлення json-server
console.warn("КРОК-1.Встановлення json-server:");
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
console.log("-----------------------------------------------------------------------------------");


//! КРОК-2.Створення головного файлу бази даних
console.warn("КРОК-2.Створення головного файлу бази даних:");