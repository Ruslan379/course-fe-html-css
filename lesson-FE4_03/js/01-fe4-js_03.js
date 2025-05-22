console.log(
    '%c 1.Бібліотека Lodash ',
    'color: white; background-color: #D33F49',
);

//! Підключення бібліотеки Lodash
console.warn("Бібліотека Lodash: \n https://lodash.com");
console.warn("Підключення бібліотеки Lodash: \n https://www.jsdelivr.com/package/npm/lodash");
console.warn("Підключення бібліотеки Lodash через CDN: \n https://cdnjs.com/libraries/lodash.js");

//? ✴️ CDN (Content Delivery Network) -
//? це географічно розподілена мережева інфраструктура,
//? що забезпечує швидку доставку контенту
//? користувачам веб-сервісів і сайтів.
//? Сервери, що входять до складу CDN,
//? географічно розташовуються таким чином,
//? щоб зробити час відповіді для користувачів
//? сайту/сервісу мінімальним.
//? ✳️ Підключимо до проекту бібліотеку Lodash через CDN.
//? Для цього використаємо сервіс cdnjs.com
//? і додамо посилання на скрипт бібліотеки в кінці HTML-документа
console.log(
    `%c
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer">
    </script>
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");


//! Використання бібліотеки Lodash (документація)
console.warn("Використання бібліотеки Lodash (документація)): \n https://lodash.com/docs/4.17.15");
console.log("");


//todo: “Math” Methods --> (_.add(augend, addend))
console.log(
    '%c “Math” Methods --> (_.add(augend, addend)) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“Math” Methods --> (_.add)): \n https://lodash.com/docs/4.17.15#add");
//? ✳️ Цей метод додає два числа (рахує суму двох чисел).
const sum = _.add(10, 5);
console.log("sum:", sum); //! 15
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//todo: “Object” Methods --> (_.findKey(object, [predicate=_.identity]))
console.log(
    '%c “Object” Methods --> (_.findKey(object, [predicate=_.identity])) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“Object” Methods --> (_.findKey): \n https://lodash.com/docs/4.17.15#findKey");
//? ✳️ Цей метод подібний до _.find, 
//? за винятком того, що він повертає ключ першого елемента, 
//? для якого предикат повертає truthy for, а не сам елемент.
const users = {
    barney: { 'age': 36, 'active': true },
    fred: { 'age': 40, 'active': false },
    pebbles: { 'age': 1, 'active': true }
};
console.log("Властивість, де age < 40:", _.findKey(users, function (o) { return o.age < 40; })); //! 'barney' (порядок ітерації не гарантовано)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//todo: “String” Methods --> _.startCase([string=""])
console.log(
    '%c “String” Methods --> _.startCase([string=""]) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“String” Methods --> (.startCase): \n https://lodash.com/docs/4.17.15#startCase");
//? ✳️ Перетворює рядок на початковий регістр..
const startCase = document.getElementById("start-case");
console.log("startCase:", startCase);

let startCaseTextContent = startCase.textContent;
console.log("startCase.textContent:", startCaseTextContent);

const NewStartCaseTextContent = _.startCase(startCaseTextContent);
console.log("_.startCase(startCase.textContent):", NewStartCaseTextContent);

startCase.textContent = NewStartCaseTextContent;
console.log("-------------------------------------------------------------------");
