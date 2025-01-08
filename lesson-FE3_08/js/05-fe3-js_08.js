console.log(
    '%c 5.Метод slice() ',
    'color: white; background-color: #D33F49',
);

//! 5.Метод slice()
console.warn("Метод slice(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/slice.png");
//? .slice(start, end)  - ПОВЕРТАЄ новий масив, що містить
//? КОПІЮ частини початкового масиву, не змінюючи його.
//? КОПІЯ нового масиву створюється ВІД start і ДО end, але НЕ ВКЛЮЧНО end.
//? start та end - індекси елементів початкового масиву.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("clients:", clients); //!

const clientsSlice = clients.slice(1, 3);
console.log("clients.slice(1, 3):", clientsSlice); //!
console.log("-----------------------------------------");

