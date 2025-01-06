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
const numbersArr= [];
console.log("numbersArr:", numbersArr); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let push = numbersArr.push("first");
console.log('numbersArr.push("first"):', numbersArr); //! ['first']
console.log("push:", push); //! 1
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = numbersArr.push("second");
console.log('numbersArr.push("second"):', numbersArr); //! ['first', 'second']
console.log("push:", push); //! 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = numbersArr.push("third");
console.log('numbersArr.push("third"):', numbersArr); //! ['first', 'second', 'third']
console.log("push:", push); //! 3
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = numbersArr.push("fourth");
console.log('numbersArr.push("fourth"):', numbersArr); //! ['first', 'second', 'third', 'fourth']
console.log("push:", push); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = numbersArr.push("fifth");
console.log('numbersArr.push("fifth"):', numbersArr); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log("push:", push); //! 5
console.log("-------------------------------------------------------------------");


//! Метод pop()
console.warn("Метод pop():");
//? Метод pop() видаляє останній елемент з кінця масиву
//? і ПОВЕРТАЄ видалений елемент. 
//? Якщо масив порожній, метод ПОВЕРТАЄ undefined.
console.log("numbersArr:", numbersArr); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let pop = numbersArr.pop();
console.log('numbersArr.pop():', numbersArr); //! ['first', 'second', 'third', 'fourth']
console.log("pop:", pop); //! 'fifth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = numbersArr.pop();
console.log('numbersArr.pop():', numbersArr); //! ['first', 'second', 'third']
console.log("pop:", pop); //! 'fourth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = numbersArr.pop();
console.log('numbersArr.pop():', numbersArr); //! ['first', 'second']
console.log("pop:", pop); //! 'third'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = numbersArr.pop();
console.log('numbersArr.pop():', numbersArr); //! ['first']
console.log("pop:", pop); //! 'second'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = numbersArr.pop();
console.log('numbersArr.pop():', numbersArr); //! []
console.log("pop:", pop); //! 'first'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = numbersArr.pop();
console.log('numbersArr.pop():', numbersArr); //! []
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
