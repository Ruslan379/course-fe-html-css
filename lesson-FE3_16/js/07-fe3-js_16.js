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

class ContentEditor extends User1 {
    //todo: Тіло класу ContentEditor
};
console.log("ContentEditor:", ContentEditor); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const editor = new ContentEditor("mango@mail.com");
console.log("editor:", editor); //! ContentEditor {#email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("editor.email:", editor.email); //! "mango@mail.com"

//? ✳️ Клас ContentEditor наслідує від класу User
//? його конструктор, геттер і сеттер email,
//? а також однойменну публічну властивість.
//? ❗️❗️❗️Важливо пам'ятати, що приватні властивості 
//? і методи батьківського класу не наслідуються дочірнім класом.
console.log("-------------------------------------------------");


//! Конструктор дочірнього класу
console.warn("Конструктор дочірнього класу:");
//? ✴️ 



console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");
console.log("-------------------------------------------------");
