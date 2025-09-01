console.log(
    '%c 5.Помилка новачка ',
    'color: white; background-color: #D33F49',
);

//! Помилка новачка
//? - спробу використовувати дані HTTP-запиту поза колбеком методу then().
//? Новачок намагається записати «результат fetch» у зовнішню змінну
//? і використовувати її нижче у коді, відразу після виклику методу fetch():
console.log(
    `%c
    let globalVariable; //! undefined

    //! Ініціалізація отримання даних.
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            console.log("users inside then callback: ", users);

            //! Запис результату в глобальну змінну:
            globalVariable = users;

            //! Тут все гаразд, дані знаходяться в змінній:
            console.log(
                "globalVariable всередині функції fetch callback:",
                globalVariable
            );
        });

    //! Тут немає асинхронних даних:
    console.log(
        "globalVariable поза fetch:",
        globalVariable
    ); //! undefined
    `,
    'color: blue; font-size: 18px',
);
let globalVariable; //! undefined

//! Ініціалізація отримання даних.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        console.log("users inside then callback: ", users);

        //! Запис результату в глобальну змінну:
        globalVariable = users;

        //! Тут все гаразд, дані знаходяться в змінній:
        console.log("globalVariable всередині функції fetch callback: ", globalVariable);
        console.log("-------------------------------------------------------------------------------------------------------------");

    });

//! Тут немає асинхронних даних:
console.log("globalVariable поза fetch: ", globalVariable); //! undefined
// console.log("-------------------------------------------------------------------------------------------------------------");
