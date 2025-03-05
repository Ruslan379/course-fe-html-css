console.log(
    '%c 6.Методи класу         \n   Приватні властивості \n   Геттери і сеттери    \n   Статичні властивості \n   Статичні методи      ',
    'color: white; background-color: #D33F49',
);

//! Методи класу
console.warn("Методи класу:");
//? ✴️ Для роботи з властивостями майбутнього екземпляра 
//? використовуються методи класу - функції,
//? які будуть доступні екземпляру в його прототипі.
class User1 {
    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    //todo: Метод getEmail
    getEmail() {
        return this.email;
    };

    //todo: Метод changeEmail
    changeEmail(newEmail) {
        this.email = newEmail;
    };
};
console.log("User1:", User1); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango1 = new User1({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango1:", mango1); //! User1 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("email_before:", mango1.getEmail()); //! email_before: mango@mail.com
mango1.changeEmail("mango-NEW@mail.com");
console.log("email_after:", mango1.getEmail()); //! email_after: mango-NEW@mail.com
console.log("mango1:", mango1); //! User1 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log("---------------------------------------------------------------------------------");
