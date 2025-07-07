console.log(
    '%c 4.Видалення даних. ',
    'color: white; background-color: #D33F49',
);

//! Видалення даних
//? ✴️ Метод removeItem(key) видаляє зі сховища вже існуючий запис з ключем key.

console.log(
    `%c
    localStorage.setItem("new-ui-theme", "dark");
    console.log(localStorage.getItem("new-ui-theme")); // "dark"

    localStorage.removeItem("new-ui-theme");
    console.log(localStorage.getItem("new-ui-theme")); // null
    `,
    'color: blue; font-size: 18px',
);

localStorage.setItem("new-ui-theme", "dark");
console.log('localStorage.getItem("new-ui-theme"):', localStorage.getItem("new-ui-theme")); //! "dark"

localStorage.removeItem("new-ui-theme");
console.log('localStorage.getItem("new-ui-theme"):', localStorage.getItem("new-ui-theme")); //! null
console.log("-------------------------------------------------------------------");
