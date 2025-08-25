console.log(
    '%c 2.REST API ',
    'color: white; background-color: #D33F49',
);

//! REST API
console.warn(`REST API​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_15/images/rest-api.png"}`);
console.warn("API простими словами. Що таке API: \n https://www.youtube.com/watch?v=vPVAYsc-U60");
console.warn("REST API простими словами. Що таке REST API: \n https://www.youtube.com/watch?v=EaFr0wYaxxM");
console.log(
    `%c
    API - інтерфейс або НАБІР ПРАВИЛ зв'язку
          між різними програмними компонентами.

    REST - СТИЛЬ бекенд-архітектури,
           для опису мережевих ресурсів.

    REST API - бекенд побудований за принципом REST.
    `,
    'color: blue; font-size: 18px',
);
//? 1️⃣✴️ API (Application Programming Interface
//? – інтерфейс програмування додатків)
//? – це набір правил, методів та інструментів,
//? який дозволяє одній програмі взаємодіяти з іншою.

//? ✳️ 📌 Приклад API- замовлення їжи в ресторані:
//? МЕНЮ – це API.
//? Ти(КЛІЄНТ) не заходиш на кухню і не готуєш сам
//? – ти робиш замовлення щодо «контракту» (МЕНЮ).
//? Кухня(СЕРВЕР) готує їжу та приносить тобі результат.
//? 💻 У програмуванні це означає:
//? програма не лізе всередину іншої програми,
//? а використовує «договорені способи спілкування» - API.

//? 2️⃣✴️ REST(Representational State Transfer
//? – передача стану уявлення) – це архітектурний СТИЛЬ,
//? який визначає, як API може бути влаштовано.

//?    📌 Основні ідеї REST:
//? 🔸 Клієнт та сервер розділені.
//? 🔸 Взаємодія відбувається через HTTP
//?    - звичайні запити: GET, POST, PUT, DELETE.
//? 🔸 Кожен ресурс має унікальну URL
//?    - адресу(наприклад, /users/1 — це конкретний користувач).
//? 🔸 Кожен запит є незалежним одив від одного.

//? 3️⃣✴️ REST API - бекенд побудований за принципом REST,
//? або API, побудований за принципами REST.
//? Він дозволяє клієнту(браузеру, програмі, іншому серверу)
//? спілкуватися з сервером через HTTP - запити.
//? Слугує прошарком між веб-застосунком і базою даних.
//? Має стандартний інтерфейс для звернення до ресурсів.
//? Працює як веб-сайт, ми посилаємо HTTP-запит з клієнта на сервер,
//? а у відповідь, замість HTML-сторінки, отримуємо дані в JSON-форматі.
console.log("-------------------------------------------------------------------------------");


//! Формат запиту
//? ✴️ REST-сервіс вимагає, щоб клієнт робив запит
//? на додавання, видалення або зміну даних.
//? Запит може складатися з наступних частин:
console.warn(`Формат запиту​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_15/images/request-format.png"}`);
console.log("-------------------------------------------------------------------------------");


//! Приклади REST API запитів:
console.warn("Приклади REST API запитів:");
console.log("1️⃣ Отримати список користувачів:");
console.log(
    `%c
    GET https://example.com/api/users
    `,
    'color: blue; font-size: 18px',
);
console.log("Відповідь cервера (JSON):");
console.log(
    `%c
    [
        {
            "id": 1,
            "name": "Alice",
            "email": "alice@example.com",
            "age": 25
        },
        {
            "id": 2,
            "name": "Bob",
            "email": "bob@example.com",
            "age": 27
        }
    ]
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log("2️⃣ Отримати конкретного користувача (id: 1):");
console.log(
    `%c
    GET https://example.com/api/users/1
    `,
    'color: blue; font-size: 18px',
);
console.log("Відповідь cервера (JSON):");
console.log(
    `%c
    {
        "id": 1,
        "name": "Alice",
        "email": "alice@example.com",
        "age": 25
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log("3️⃣ Створити нового користувача:");
console.log(
    `%c
    POST https://api.example.com/users
    `,
    'color: blue; font-size: 18px',
);
console.log("Тіло запиту (JSON):");
console.log(
    `%c
    {
        "name": "Charlie",
        "email": "charlie@example.com",
        "age": 30
    }
    `,
    'color: blue; font-size: 18px',
);
console.log("Відповідь cервера (JSON):");
console.log(
    `%c
    {
        "id": 3,
        "name": "Charlie",
        "email": "charlie@example.com",
        "age": 30
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.log("4️⃣ Оновити дані користувача (наприклад, ім'я):");
console.log(
    `%c
    PATCH https://api.example.com/users/1
    `,
    'color: blue; font-size: 18px',
);
console.log("Тіло запиту (JSON):");
console.log(
    `%c
    {
        "name": "Alice Cooper",
    }
    `,
    'color: blue; font-size: 18px',
);
console.log("Відповідь cервера (JSON):");
console.log(
    `%c
    {
        "id": 1,
        "name": "Alice Cooper",
        "email": "alice@example.com",
        "age": 25
    }
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------------------");
