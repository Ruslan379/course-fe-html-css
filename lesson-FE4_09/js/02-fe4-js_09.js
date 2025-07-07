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
console.log("-----------------------------------------------------------------------------------------------");


//? ✳️ Якщо необхідно зберегти щось, крім рядка, 
//? наприклад, масив або об'єкт, необхідно перетворити 
//? їх у рядок методом JSON.stringify().
console.log(
    `%c
    const settings = {
        theme: "dark",
        isAuthenticated: true,
        options: [1, 2, 3],
    };

    localStorage.setItem("settings", JSON.stringify(settings));

    `,
    'color: blue; font-size: 18px',
);

const settings = {
    theme: "dark",
    isAuthenticated: true,
    options: [1, 2, 3],
};

console.log("JSON.stringify(settings):", JSON.stringify(settings));

localStorage.setItem("settings", JSON.stringify(settings));
console.log("-----------------------------------------------------------------------------------------------");
