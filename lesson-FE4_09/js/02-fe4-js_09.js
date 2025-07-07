console.log(
    '%c 2.Зберігання даних. ',
    'color: white; background-color: #D33F49',
);

//! Зберігання даних
console.warn(`Зберігання даних​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_09/images/setItem-local-storage.jpg"}`);
//? ✴️ Для зберігання даних використовється метод setItem(key, value),
//? задяки якому можна додати новий запис у вигляді пари ключ:значення.
console.log(
    `%c
    localStorage.setItem("ui-theme", "light");
    localStorage.setItem("sidebar", "expanded");
    localStorage.setItem("notification-level", "mute");
    `,
    'color: blue; font-size: 18px',
);

localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");
console.log("-----------------------------------------------------------------------------------");
