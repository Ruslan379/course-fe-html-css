console.log(
    '%c 3.Перевірка відповіді методу fetch() ',
    'color: white; background-color: #D33F49',
);

//! Перевірка відповіді методу fetch()
//? ✴️ Значення промісу, який повертає метод fetch(),
//? - це об'єкт зі службовою інформацією про стан відповіді сервера.
//? Екземпляр класу Response містить різні методи і властивості.

//? ✳️ Залежно від типу отримуваного контенту, використовуються
//? різні методи для перетворення тіла відповіді у дані:
//? 🔸 json() - парсить дані в JSON-форматі.
//? 🔸 text() - парсить дані в простому текстовому форматі,
//?    наприклад .csv (табличні дані).
//? 🔸 blob() - парсить дані, що описують файл,
//?    наприклад, зображення, аудіо або відео.

//? ✳️ У першому методі then() виконується перевірка статусу відповіді 
//? і перетворення даних у правильний формат, або явне створення помилки, 
//? щоб обробити невдалий HTTP-запит в блоці catch(). 
console.log(
    `%c
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
          // Data handling
        })
        .catch(error => {
          // Error handling
        });

    `,
    'color: blue; font-size: 18px',
);
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        //! Data handling
        console.log("data:", data); //! масив об'єктів з користувачами
    })
    .catch(error => {
        //! Error handling
        console.log("error:", error);
    })
    .finally(() => console.log("------------------------------------------------------------------------------------"));

//? ✳️ Це необхідно для того, щоб fetch() правильно зреагував 
//? на статус код 404, який, технічно, не є помилкою, 
//? але для клієнта - це неуспішний результат.
// console.log("------------------------------------------------------------------------------------");
