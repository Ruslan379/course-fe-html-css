console.log(
    '%c 4.Методи push() і pop() та unshift() і shift() ',
    'color: white; background-color: #D33F49',
);

//! 4.Методи push() і pop() та unshift() і shift()
console.warn("Методи push() і pop() та unshift() і shift(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/methods-push-pop-unshift-shift.jpg");
//? Додають або видаляють крайні елементи масиву. 
//? Працюють тільки з крайнім лівим 
//? і крайнім правим елементом, 
//? і не можуть вставити або видалити 
//? елемент з довільної позиції.

//! Метод push()
console.warn("Метод push():");
//? Метод push() додає один або декілька елементів
//? наприкінці масиву, без необхідності зазначати
//? індекси елементів, що додаються.
//? ПОВЕРТАЄ довжину масиву після додавання елементів.
const array= [];
console.log("array:", array); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let push = array.push("first");
console.log('array.push("first"):', array); //! ['first']
console.log("push:", push); //! 1
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("second");
console.log('array.push("second"):', array); //! ['first', 'second']
console.log("push:", push); //! 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("third");
console.log('array.push("third"):', array); //! ['first', 'second', 'third']
console.log("push:", push); //! 3
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("fourth");
console.log('array.push("fourth"):', array); //! ['first', 'second', 'third', 'fourth']
console.log("push:", push); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("fifth");
console.log('array.push("fifth"):', array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log("push:", push); //! 5
console.log("-------------------------------------------------------------------");


//! Метод pop()
console.warn("Метод pop():");
//? Метод pop() видаляє останній елемент з кінця масиву
//? і ПОВЕРТАЄ видалений елемент. 
//? Якщо масив порожній, метод ПОВЕРТАЄ undefined.
console.log("array:", array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second', 'third', 'fourth']
console.log("pop:", pop); //! 'fifth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second', 'third']
console.log("pop:", pop); //! 'fourth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second']
console.log("pop:", pop); //! 'third'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first']
console.log("pop:", pop); //! 'second'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! []
console.log("pop:", pop); //! 'first'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! []
console.log("pop:", pop); //! undefined
console.log("-------------------------------------------------------------------");


//! Метод unshift()
console.warn("Метод unshift():");
//?

console.log("-----------------------------------------");


//! Метод shift()
console.warn("Метод shift():");
//?

console.log("-----------------------------------------");
