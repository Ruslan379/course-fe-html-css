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
console.log("clients:", clients); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']

const clientsSlice = clients.slice(1, 3);
console.log("clients.slice(1, 3):", clientsSlice); //! ['Ajax', 'Poly']

console.log("--------------------------------------------------------------");



//? Якщо start та end не зазначені,
//? буде створена повна копія початкового масиву.
const clientsSliceAll = clients.slice();
console.log("clients.slice():", clientsSliceAll); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("--------------------------------------------------------------");



//? Якщо не зазначено end, копіювання буде
//? зі start і до кінця початкового масиву.
const clientsSliceStart1 = clients.slice(1);
console.log("clients.slice(1):", clientsSliceStart1); //! ['Ajax', 'Poly', 'Kiwi']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const clientsSliceStart3 = clients.slice(3);
console.log("clients.slice(3):", clientsSliceStart3); //! ['Kiwi']
console.log("--------------------------------------------------------------");



//? У методі slice() можна не вказувати перший аргумент(start),
//? але при цьому треба вказати другий аргумент(end).
//? Якщо перший аргумент опущений, треба замість нього
//? задати значення undefined, яке інтерпретується як 0.
//? Тоді, копія початкового масиву створиться з початку масиву ДО end.
const clientsSliceEnd2 = clients.slice(undefined, 2);
console.log("clients.slice(undefined, 2):", clientsSliceEnd2); //! ['Mango', 'Ajax']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const clientsSliceEnd3 = clients.slice(undefined, 3);
console.log("clients.slice(undefined, 3):", clientsSliceEnd3); //! ['Mango', 'Ajax', 'Poly']
console.log("--------------------------------------------------------------");


//? Якщо start чи end негативні(від'ємні), тоді вони
//? інтерпретуються як довжина об'єкта плюс ix значення.
const clientsLength = clients.length;
console.log("clients.length:", clientsLength); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const clientsSliceNegative = clients.slice(-3, -1);
console.log("clients.slice(-3, -1):", clientsSliceNegative); //! ['Ajax', 'Poly']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const clientsSlicePositive = clients.slice(1, 3);
console.log("clients.slice(1, 3):", clientsSlicePositive); //! ['Ajax', 'Poly']
console.log("--------------------------------------------------------------");

