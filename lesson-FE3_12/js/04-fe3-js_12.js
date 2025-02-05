console.log(
    '%c 4.Присвоєння за значенням і за посиланням ',
    'color: white; background-color: #D33F49',
);

//! Присвоєння за значенням і за посиланням
// location.href = "../../lesson-FE3_08/lesson-FE3_08.html"; //todo: миттєвий перехід за посиланням
//todo: var.1:
console.warn("Присвоєння за значенням і за посиланням (Урок-JS-08): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/lesson-FE3_08.html");

//todo: var.2:
const relativePath = "lesson-FE3_08/lesson-FE3_08.html";
console.log("window.location.origin:", window.location.origin); //! http://127.0.0.1:5500  или 
console.warn(`Присвоєння за значенням і за посиланням (Урок-JS-08): \n ${window.location.origin}/${relativePath}`);

//todo: var.3:
const baseUrl = window.location.href.replace(/\/[^/]*$/, "/");
console.warn(`Присвоєння за значенням і за посиланням (Урок-JS-08): ${baseUrl}lesson-FE3_08/lesson-FE3_08.html`);

//todo: var.4:
const url2 = window.location.href;
const baseUrl2 = url2.split("/lesson-FE3_12/")[0] + "/";
console.log("baseUrl2:", baseUrl2); //! http://127.0.0.1:5500/ или

//todo: var.5:
const url3 = window.location.href;
const baseUrl3 = url3.substring(0, url3.lastIndexOf('/') + 1);
console.log("baseUrl3:", baseUrl3); //! http://127.0.0.1:5500/lesson-FE3_12/ или


//! Присвоєння за значенням
console.warn("Присвоєння за значенням:");
//? ✴️ За умови передачі за значенням,
//? змінним виділяється нова комірка пам'яті
//? і в неї копіюються дані.
//? ✳️ Присвоєння за значенням: в пам'яті буде створена ще
//? одна комірка, в яку буде скопійоване значення 5
let a = 5;
let b = a;
console.log("a:", a); //! 5
console.log("b:", b); //! 5
console.log(". . . .");

//? ✳️ Змінимо значення a на 10:
a = 10;
console.log("a:", a); //! 10
//? ✳️ Значення b не змінилося, оскільки це окрема копія:
console.log("b:", b); //! 5
console.log("------------------------------------------------");


//! Присвоєння за посиланням 
console.warn("Присвоєння за посиланням:");
//? ✴️ Складні типи - об'єкти, масиви, функції присвоюються за посиланням,
//? тобто змінна просто отримує посилання на вже існуючий об'єкт.
//? ✳️ Оскільки objA - це об'єкт, в objB записується посилання на вже існуючий
//? в пам'яті об'єкт objA. Тепер objA і objB вказують на один і той же об'єкт:
const objA = { name: 'Mango', age: 2 };
const objB = objA;
console.log("objA:", objA); //! {name: 'Mango', age: 2}
console.log("objB:", objB); //! {name: 'Mango', age: 2}
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Змінимо об'єкт, змінивши значення властивості,
//? використовуючи вказівник з objA:
objA.age = 3; 
console.log("objA:", objA); //! {name: 'Mango', age: 3}

//? ✳️ objB також змінилось, тому що objB,
//? як і arrA, просто містять посилання на 
//? одне і те ж саме місце в пам'яті:
console.log("objB:", objB); //! {name: 'Mango', age: 3}
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Результат повторюється, 
//? якщо додати ще одину влистивість до objB:
objB.gender = "male";
console.log("objA:", objA); //! {name: 'Mango', age: 3, gender: 'male'}
console.log("objB:", objB); //! {name: 'Mango', age: 3, gender: 'male'}
console.log("------------------------------------------------");
