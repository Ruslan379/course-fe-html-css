console.log(
    '%c 7.Наслідування класів:         \n   Конструктор дочірнього класу \n   Методи дочірнього класу      ',
    'color: white; background-color: #D33F49',
);

//! Наслідування класів
console.warn("Наслідування класів:");
//? ✴️ Ключове слово extends
//? дозволяє реалізувати наслідування класів,
//? коли один клас (дочірній, похідний)
//? наслідує властивості і методи іншого класу (батьківського).
console.log(
    `%c
    class Child extends Parent {
        // ...
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");
//? ✳️ У виразі class Child extends Parent дочірній клас Child
//? наслідує (розширює) від батьківського класу Parent.
//? ✳️ Це означає, що ми можемо оголосити базовий клас, 
//? який зберігає загальні характеристики і методи 
//? для групи похідних класів, які наслідують 
//? властивості і методи батьківського, 
//? але також додають свої унікальні.
class Parent {
    //todo: Тіло класу Parent
};
console.log("Parent:", Parent); //! {}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");

class Child extends Parent {
    //todo: Тіло класу Parent
    //todo: Тіло класу Child
};
console.log("Child:", Child); //! {}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");

class User1 {
    #email;

    constructor(email) {
        this.#email = email;
    };

    get email() {
        return this.#email;
    };

    set email(newEmail) {
        this.#email = newEmail;
    };
};
console.log("User1:", User1); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

class ContentEditor1 extends User1 {
    //todo: Тіло класу ContentEditor1
};
console.log("ContentEditor1:", ContentEditor1); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const editor1 = new ContentEditor1("mango@mail.com");
console.log("editor1:", editor1); //! ContentEditor1 {#email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("editor1.email:", editor1.email); //! editor1.email: mango@mail.com

//? ✳️ Клас ContentEditor наслідує від класу User
//? його конструктор, геттер і сеттер email,
//? а також однойменну публічну властивість.
//? ❗️❗️❗️Важливо пам'ятати, що приватні властивості 
//? і методи батьківського класу не наслідуються дочірнім класом.
console.log("-----------------------------------------------------------------------------");


//! Конструктор дочірнього класу
console.warn("Конструктор дочірнього класу:");
//? ✴️ Насамперед в конструкторі дочірнього класу
//? необхідно викликати спеціальну функцію ❗️super(аргументи)❗️
//? - це псевдонім конструктора батьківського класу.
//? В іншому випадку, при спробі звернутися до this
//? в конструкторі дочірнього класу, виникне помилка.
//? Під час виклику конструктора батьківського класу
//? передаємо необхідні йому аргументи для ініціалізації властивостей.
class User2 {
    #email;

    constructor(email) {
        this.#email = email;
    };

    get email() {
        return this.#email;
    };

    set email(newEmail) {
        this.#email = newEmail;
    };
};
console.log("User2:", User2); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

class ContentEditor2 extends User2 {
    constructor({ email, posts }) {
        //todo: Виклик конструктора батьківського класу User
        super(email);
        this.posts = posts;
    };
};
console.log("ContentEditor2:", ContentEditor2); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const editor2 = new ContentEditor2({ email: "mango@mail.com", posts: [] });
console.log("editor2:", editor2); //! ContentEditor2 {posts: Array(0), #email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("editor2.email:", editor2.email); //! editor2.email: mango@mail.com
console.log("-----------------------------------------------------------------------------");


//! Методи дочірнього класу
console.warn("Методи дочірнього класу:");
//? ✴️ В дочірньому класі можна оголошувати методи,
//? які будуть доступні тільки його екземплярам.
class User3 {
    #email;

    constructor(email) {
        this.#email = email;
    };

    get email() {
        return this.#email;
    };

    set email(newEmail) {
        this.#email = newEmail;
    };
};
console.log("User3:", User3); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

class ContentEditor3 extends User3 {
    constructor({ email, posts }) {
        super(email);
        this.posts = posts;
    };

    addPost(post) {
        this.posts.push(post);
    };
};
console.log("ContentEditor3:", ContentEditor3); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const editor3 = new ContentEditor3({ email: "mango@mail.com", posts: [] });
console.log("editor3_before:", editor3); //! ContentEditor3 {posts: Array(0), #email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("editor3.email:", editor3.email); //! editor3.email: mango@mail.com

editor3.addPost("post-1");
console.log("editor3.posts:", editor3.posts); //! ['post-1']
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("editor3_after:", editor3); //! ContentEditor3 {posts: Array(1), #email: 'mango@mail.com'}
console.log("-----------------------------------------------------------------------------");
