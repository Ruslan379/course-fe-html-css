console.log(
    '%c 6.Методи класу                   \n   Приватні властивості та методи \n   Геттери і сеттери              \n   Статичні властивості           \n   Статичні методи                ',
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

    //todo: Метод getEmail()
    getEmail() {
        return this.email;
    };

    //todo: Метод changeEmail()
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
console.log("mango1_before:", mango1); //! User1 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("email_before:", mango1.getEmail()); //! email_before: mango@mail.com
mango1.changeEmail("mango-NEW@mail.com");

console.log("email_after:", mango1.getEmail()); //! email_after: mango-NEW@mail.com
console.log("mango1_after:", mango1); //! User1 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log("---------------------------------------------------------------------------------------");


//! Приватні властивості та методи
console.warn("Приватні властивості та методи:");
//? ✴️ Інкапсуляція - це концепція,
//? що дозволяє приховати внутрішні деталі класу.
//? Користувач класу повинен отримувати доступ
//? тільки до публічного інтерфейсу
//? - набору публічних властивостей і методів класу.
//? ✳️ В класах інкапсуляція реалізується
//? приватними властивостями та методами,
//? доступ до яких можна отримати тільки всередині класу.
//? ✳️ Припустимо, що пошта користувача
//? повинна бути недоступною для прямої зміни зовні,
//? тобто - приватною.
//? Додаючи до імені властивості символ #,
//? ми робимо її приватною.
//? Оголошення приватної властивості
//? до ініціалізації в конструкторі - ❗️обов'язкове❗️.
class User2 {
    //todo: Необов'язкове оголошення публічних властивостей
    name;
    //todo: Обов'язкове оголошення приватних властивостей
    #email;

    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.#email = email;
        this.phone = phone;
    };

    //todo: Метод getEmail()
    getEmail() {
        return this.#email;
    };

    //todo: Метод changeEmail()
    changeEmail(newEmail) {
        this.#email = newEmail;
    };

    //todo: Приватний метод #changePhonePrivat()
    #changePhonePrivat(newPhone) {
        this.phone = newPhone;
    };

    //todo: Публічний метод changePhonePublic()
    changePhonePublic(newPhone) {
        this.#changePhonePrivat(newPhone); //todo: Виклик приватного методу #changePhonePrivat() усередині класу.
    };
};
console.log("User2:", User2); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango2 = new User2({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango2_before:", mango2); //! User2 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// console.log("mango2.#email:", mango2.#email); //! Виникне помилка: Private field '#email' must be declared in an enclosing class
console.log("email_before:", mango2.getEmail()); //! email_before: mango@mail.com

mango2.changeEmail("mango-NEW@mail.com");

console.log("email_after:", mango2.getEmail()); //! email_after: mango-NEW@mail.com
console.log("mango2_after1:", mango2); //! User2 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: Виклик приватного методу #changePhone():
// mango2.#changePhonePrivat("333-33-33"); //! Виникне помилка: Private field '#changePhonePrivat' must be declared in an enclosing class
mango2.changePhonePublic("333-33-33"); 

console.log("mango2.phone:", mango2.phone); //! 333-33-33
console.log("mango2_after2:", mango2); //! User2 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '333-33-33'}
console.log("---------------------------------------------------------------------------------------");


//! Геттери і сеттери
console.warn("Геттери і сеттери:");
//? ✴️ Геттери і сеттери
//? - це коротший синтаксис оголошення методів
//? для взаємодії з властивостями.
//? Геттер і сеттер імітують звичайну публічну ❗️ВЛАСТИВІСТЬ❗️ класу,
//? але дозволяють змінювати інші властивості зручнішим способом.
//? Геттер виконується при спробі отримати значення властивості,
//? а сеттер - при спробі його змінити.
//? ✳️ Геттери і сеттери доречно використовувати
//? для простих операцій читання і зміни значення властивостей,
//? особливо приватних, як їх публічний інтерфейс.
//? ❗️❗️❗️Для роботи з властивістю, яка зберігає масив або об'єкт,
//? вони не підійдуть.
class User3 {
    //todo: Обов'язкове оголошення приватних властивостей
    #email;

    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.#email = email;
        this.phone = phone;
    };

    //todo: ❌ Метод getEmail()
    getEmail() {
        return this.#email;
    };

    //todo: ❌ Метод changeEmail()
    changeEmail(newEmail) {
        this.#email = newEmail;
    };

    //todo: ✅ Геттер email
    get email() {
        return this.#email;
    }

    //todo:✅ Сеттер email
    set email(newEmail) {
        if (newEmail === "") {
            console.error("Помилка! Пошта не може бути порожнім рядком!");
            return;
        };

        this.#email = newEmail;
    };
};
console.log("User3:", User3); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango3 = new User3({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango3_before:", mango3); //! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: ❌ Використання методів: getEmail() і changeEmail():
console.log("email_before1:", mango3.getEmail()); //! email_before: mango@mail.com
mango3.changeEmail("mango-NEW@mail.com");
console.log("email_after1:", mango3.getEmail()); //! email_after: mango-NEW@mail.com

//todo: ✅ Використання геттера і сеттера: get email() і set email():
//? ✳️ Ми оголосили геттер і сеттер email,
//? поставивши перед ім'ям властивості ключові слова get і set.
//? Всередині цих методів ми або повертаємо значення
//? приватної властивості #email, або змінюємо її значення.
//? Геттер і сеттер ❗️застосовуються в парі і повинні називатися однаково❗️.
console.log("email_before2:", mango3.email); //! email_after1: mango-NEW@mail.com
mango3.email = "mango-SET@mail.com";
console.log("email_after2:", mango3.email); //! email_after2: mango-SET@mail.com

console.log("mango3_after:", mango3); //! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango-SET@mail.com'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."); 

//? ✳️ Ще одна перевага в тому, що це методи,
//? а значить, під час запису можна виконати додатковий код,
//? наприклад, з будь-якими перевірками,
//? на відміну від виконання цієї ж операції безпосередньо з властивістю.
mango3.email = ""; //! Помилка! Пошта не може бути порожнім рядком!
console.log("---------------------------------------------------------------------------------------");


//! Статичні властивості
console.warn("Статичні властивості:");
//? ✴️ Крім публічних і приватних властивостей майбутнього екземпляра,
//? в класі можна оголосити його власні властивості,
//? ❗️доступні тільки класові❗️, але не його екземплярам
//? - статичні властивості (static).
//? Вони корисні для зберігання інформації, що стосується класу.
//? ✳️ Додамо класу користувача приватну властивість
//? role - його роль, що визначає набір прав,
//? наприклад, адміністратор, редактор, звичайний користувач тощо.
//? Можливі ролі користувачів будемо зберігати
//? як статичну властивість Roles - об'єкт з властивостями.
//? ✴️ Статичні властивості оголошуються в тілі класу.
//? Перед ім'ям властивості додається ключове слово ❗️static❗️.
class User4 {
    //todo: Оголошення та ініціалізація статичної властивості:
    static Roles = {
        ADMIN: "admin",
        EDITOR: "editor",
    };

    #email;
    #role;

    constructor({ email, role }) {
        this.#email = email;
        this.#role = role;
    }

    get role() {
        return this.#role;
    }

    set role(newRole) {
        this.#role = newRole;
    }
};
console.log("User4:", User4); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango4 = new User4({
    email: "mango@mail.com",
    role: User4.Roles.ADMIN,
});
console.log("mango4_before:", mango4); //! User4 {#email: 'mango@mail.com', #role: 'admin'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("mango4.Roles:", mango4.Roles); //! undefined
console.log("User4.Roles:", User4.Roles); //! { ADMIN: "admin", EDITOR: "editor" }

console.log("mango4.role:", mango4.role); //! "admin"
mango4.role = User4.Roles.EDITOR;
console.log("mango4.role:", mango4.role); //! "editor"

console.log("mango4_after:", mango4); //! User4 {#email: 'mango@mail.com', #role: 'editor'}

//? ✳️ Статичні властивості також можуть бути приватними,
//? тобто доступними тільки всередині класу.
//? Для цього ім'я властивості повинно починатися з символу #,
//? так само, як приватні властивості.
//? Звернення до приватної статичної властивості за межами тіла класу викличе помилку.
console.log("---------------------------------------------------------------------------------------");


//! Статичні методи
console.warn("Статичні методи:");
//? ✴️ У класі можна оголосити не тільки методи майбутнього екземпляра,
//? а також методи, доступні тільки класу - статичні методи,
//? які можуть бути як публічні, так і приватні.
//? Синтаксис оголошення аналогічний статичним властивостям,
//? за винятком того, що значенням буде метод.
//? ✴️❗️❗️❗️ Особливість статичних методів у тому,
//? що під час їх виклику ключове слово this посилається на сам клас.
//? Це означає, що статичний метод може отримати доступ
//? до статичних властивостей класу, але не до властивостей екземпляра.
//? Логічно, тому що статичні методи викликає сам клас, а не його екземпляри.
class User5 {
    static #takenEmails = [];

    static isEmailTaken(email) {
        return User5.#takenEmails.includes(email);
    };

    #email;

    constructor({ email }) {
        this.#email = email;
        User5.#takenEmails.push(email);
    };
};
console.log("User5:", User5); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango5 = new User5({ email: "mango@mail.com" });
console.log("mango5:", mango5); //! User5 {#email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("Чи є така пошта - poly@mail.com?", User5.isEmailTaken("poly@mail.com")); //! false
console.log("Чи є така пошта - mango@mail.com?", User5.isEmailTaken("mango@mail.com")); //! true
console.log("---------------------------------------------------------------------------------------");
