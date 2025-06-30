console.log(
    '%c 3.Метод JSON.parse(). ',
    'color: white; background-color: #D33F49',
);

//! Метод JSON.parse()
console.log(
    `%c
    JSON.parse(json)
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------");

//? ✴️ Щоб отримати з JSON валідне JavaScript значення,
//? його необхідно розпарсити (parse).
//? Це операція зворотна перетворенню в рядок (stringify).
//? Тепер, коли dog - це валідний об'єкт,
//? з ним можна працювати звичайним чином.
const dogJSON = '{"name":"Mango","age":3,"isHappy":true}';

const dog = JSON.parse(dogJSON);
console.log("dog:", dog); //! {name: "Mango", age: 3, isHappy: true}
console.log("dog.name:", dog.name); //! "Mango"
console.log("--------------------------------------------------");

