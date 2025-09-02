console.log(
    '%c 7.HTTP-заголовки ',
    'color: white; background-color: #D33F49',
);

//! HTTP-заголовки
//? ✴️ Клас Headers дозволяє виконувати різні дії 
//? в заголовках HTTP-запиту і відповіді. 
//? До цих дій належать діставання, налаштування, 
//? додавання і видалення заголовків.
console.log(
    `%c
    const headers = new Headers(
        {
            "Content-Type": "application/json",
            "X-Custom-Header": "custom value",
        }
    );

    headers.append("Content-Type", "text/bash");
    headers.append("X-Custom-Header", "custom value");
    headers.has("Content-Type"); //! true
    headers.get("Content-Type"); //! "text/bash"
    headers.set("Content-Type", "application/json");
    headers.delete("X-Custom-Header");
    `,
    'color: blue; font-size: 18px',
);

const headers = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "custom value",
});

headers.append("Content-Type", "text/bash");
headers.append("X-Custom-Header", "custom value");
headers.has("Content-Type"); //! true
headers.get("Content-Type"); //! "text/bash"
headers.set("Content-Type", "application/json");
headers.delete("X-Custom-Header");
console.log("----------------------------------------------------------------------------------");


//? ✳️ На практиці для складання заголовків запиту,
//? як правило, використовують просто літерал об'єкта
//? з властивостями. У такому разі методів не буде,
//? що найчастіше і не потрібно:
const headersNext = {
    "Content-Type": "application/json",
    "X-Custom-Header": "custom value",
};

//? ✳️ Запит з використанням заголовків буде виглядати наступним чином:
console.log(
    `%c
    fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            headers: {
                Accept: "application/json",
            },
        }
    )
    .then(response => {
        //! логіка обробки відповіді
    });
    `,
    'color: blue; font-size: 18px',
);

fetch(
    "https://jsonplaceholder.typicode.com/users", 
    {
        headers: {
            Accept: "application/json",
        },
    }
)
.then(response => {
    //! логіка обробки відповіді
});

//? ✳️ Сучасні браузери додають багато заголовків за замовчуванням, 
//? залежно від операції і тіла запиту, тому немає потреби 
//? явно вказувати стандартні заголовки.
console.log("----------------------------------------------------------------------------------");
