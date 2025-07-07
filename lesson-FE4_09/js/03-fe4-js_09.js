console.log(
    '%c 3.Читання даних. ',
    'color: white; background-color: #D33F49',
);

//! Читання даних
//? ✴️ Метод getItem(key) дозволяє прочитати зі сховища запис з ключем key. 
//? Якщо у сховищі відсутній запис з таким ключем, метод повертає null. 
//? Якщо значення - це звичайний рядок, немає потреби його парсити.
console.log(
    `%c
    localStorage.setItem("ui-theme", "dark");

    const theme = localStorage.getItem("ui-theme");
    console.log(theme);// "dark"
    `,
    'color: blue; font-size: 18px',
);

const newtheme = "dark";
localStorage.setItem("ui-theme", newtheme);

const theme = localStorage.getItem("ui-theme");
console.log("theme:", theme); //! "dark"
console.log("--------------------------------------------------------------------------------");


//? ✳️ В іншому випадку, необхідно розпарсити значення
//? методом JSON.parse(), щоб отримати валідні дані.
const settings2 = {
    theme: "light",
    isAuthenticated: false,
    options: [11, 12, 13],
};

localStorage.setItem("settings2", JSON.stringify(settings2));

//todo: settings2
const savedSettings2 = localStorage.getItem("settings2");
const parsedSettings2 = JSON.parse(savedSettings2);
console.log("parsedSettings2:", parsedSettings2); //! settings2 object

//todo: settings (з розділу 2.Зберігання даних.)
const savedSettings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(savedSettings);
console.log("parsedSettings:", parsedSettings); //! settings2 object
console.log("--------------------------------------------------------------------------------");
