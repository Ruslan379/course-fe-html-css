console.log(
    '%c 5.Очищення сховища ',
    'color: white; background-color: #D33F49',
);

//! Очищення сховища
//? ✴️ Операція повного очищення сховища - небезпечна,
//? оскільки може порушити записи, зроблені
//? іншими розробниками проекту.
//? Проте, якщо ви хочете повністю очистити сховище,
//? потрібно викликати метод clear().
console.log(
    `%c
    localStorage.setItem("ui-theme", "light");
    localStorage.setItem("sidebar", "expanded");
    localStorage.setItem("notification-level", "mute");

    console.log(localStorage.getItem("ui-theme")); //! "light"
    console.log(localStorage.getItem("sidebar")); //! "expanded"
    console.log(localStorage.getItem("notification-level")); //! "mute"
    
    localStorage.clear();

    console.log(localStorage.getItem("ui-theme")); //! null
    console.log(localStorage.getItem("sidebar")); //! null
    console.log(localStorage.getItem("notification-level")); //! null
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");

console.log('localStorage.getItem("ui-theme"):', localStorage.getItem("ui-theme")); //! "light"
console.log('localStorage.getItem("sidebar"):', localStorage.getItem("sidebar")); //! "expanded"
console.log('localStorage.getItem("notification-level"):', localStorage.getItem("notification-level")); //! "mute"
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

localStorage.clear();

console.log('localStorage.getItem("ui-theme"):', localStorage.getItem("ui-theme")); //! null
console.log('localStorage.getItem("sidebar"):', localStorage.getItem("sidebar")); //! null
console.log('localStorage.getItem("notification-level"):', localStorage.getItem("notification-level")); //! null
console.log("-------------------------------------------------------------------------------------------------------------");
