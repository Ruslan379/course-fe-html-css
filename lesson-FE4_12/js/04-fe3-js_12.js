console.log(
    '%c 4.Присвоєння за значенням і за посиланням ',
    'color: white; background-color: #D33F49',
);


// location.href = "../../lesson-FE3_08/lesson-FE3_08.html"; //todo: миттєвий перехід за посиланням
//todo: var.1:
// console.warn("Присвоєння за значенням і за посиланням (Урок-JS-08): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/lesson-FE3_08.html");

//todo: var.2:
// const relativePath = "lesson-FE3_08/lesson-FE3_08.html";
// console.log("window.location.origin:", window.location.origin); //! http://127.0.0.1:5500  або  https://ruslan379.github.io
// console.warn(`Присвоєння за значенням і за посиланням (Урок-JS-08): \n ${window.location.origin}/${relativePath}`);

//todo: var.3:
// const baseUrl3 = window.location.href.replace(/\/[^/]*$/, "/");
// console.log("baseUrl3:", baseUrl3); //! http://127.0.0.1:5500/lesson-FE3_12/   або  https://ruslan379.github.io/course-fe-html-css/lesson-FE3_12/
// console.warn(`Присвоєння за значенням і за посиланням (Урок-JS-08): ${baseUrl3}lesson-FE3_08/lesson-FE3_08.html`);

//todo: var.4: ✅❓
// const url4 = window.location.href;
// const baseUrl4 = url4.split("/lesson-FE3_12/")[0] + "/";
// console.log("baseUrl4:", baseUrl4); //! http://127.0.0.1:5500/  або  https://ruslan379.github.io/course-fe-html-css/

//todo: var.5:
// const url5 = window.location.href;
// const baseUrl5 = url5.substring(0, url5.lastIndexOf('/') + 1);
// console.log("baseUrl5:", baseUrl5); //! http://127.0.0.1:5500/lesson-FE3_12/  або  https://ruslan379.github.io/course-fe-html-css/lesson-FE3_12/

//todo: var.6:✅✅
// const url6 = window.location.href;
// const baseUrl6 = url6.substring(0, url6.lastIndexOf('/'));
// const baseUrl61 = baseUrl6.substring(0, baseUrl6.lastIndexOf('/') + 1);
// console.log("baseUrl61:", baseUrl61); //! http://127.0.0.1:5500/  або  https://ruslan379.github.io/course-fe-html-css/

// //todo: var.7:✅✅✅
// console.log("``````````````````````````````````````````````````````````````````````````");
// const relativePath = "lesson-FE3_08/lesson-FE3_08.html";
// const url7 = window.location.href;
// console.log("Початковий шлях:", url7); //! http://127.0.0.1:5500/lesson-FE3_12/lesson-FE3_12.html  або  https://ruslan379.github.io/course-fe-html-css/lesson-FE3_12/lesson-FE3_12.html

// const urlParts = url7.split('/');

// const dynamicRelativePath = urlParts.slice(-2).join('/');
// console.log("dynamicRelativePath:", dynamicRelativePath); //! lesson-FE3_12/lesson-FE3_12.html

// const baseUrl7 = urlParts.slice(0, -2).join('/') + '/';
// console.log("baseUrl7:", baseUrl7); //! http://127.0.0.1:5500/  або  https://ruslan379.github.io/course-fe-html-css/

// const restorePath = `${baseUrl7}${dynamicRelativePath}`
// console.log("Відновлений шлях.:", restorePath); //! http://127.0.0.1:5500/lesson-FE3_12/lesson-FE3_12.html  або  https://ruslan379.github.io/course-fe-html-css/lesson-FE3_12/lesson-FE3_12.html

// //todo: ❗️ ❗️ ❗️ var.finally: ✅✅✅
// console.warn(`Присвоєння за значенням і за посиланням (Урок-JS-08): \n ${baseUrl7}${relativePath}`);
// console.log("``````````````````````````````````````````````````````````````````````````");




//! Присвоєння за значенням і за посиланням
console.warn(`Присвоєння за значенням і за посиланням (Урок-JS-08): \n ${(window.location.href.split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_08/lesson-FE3_08.html"}`);


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
