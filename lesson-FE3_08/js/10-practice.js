// console.log('10.Практика:');
console.log(
  "%c 10.Практика: ",
  "color: white; background-color: #D33F49",
);

//! ПРАКТИКА-8 (Урок-08_JS)
//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? Перетворити масив:
const arrayOriginal = ["мango-10", "Kiwi-2", "Monkong-2", "Singu-2", "Mango-1", "Ajax-1", "Poly-1", "singu-20"];
//? на масив arrayNew:
//todo: ["Mango-1", "Ajax-1", "Poly-1", "Kiwi-2", "Monkong-2", "Singu-2"];
//? не змінюючи значення елементів та використовуючи методи:
//? push(), pop(), unshift(), shift(),
//? slice(), splice(), concat() за власним бажанням!
//! Код виконаного завдання
let arrayNew = [];
console.log("arrayOriginal:", arrayOriginal);
console.log("arrayNew:", arrayNew);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//todo [2]
console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);
//? Сформуфати початковий масив arrayIn будь якої довжини, наприклад, m=13,
//? та розділити його на масиви по n=5 елементів,
//? і скласти з них вихідний масив масивів finalArr
let arrayIn = [];
const m = 13;
// const m = 21;
const n = 5;
// const n = 3;
//! Код виконаного завдання
//todo-1: Використовуємо готовий масив:
// arrayIn = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];

//todo-2: Формуємо масив з m елементів:
for (let i = 1; i <= m; i++) {
  arrayIn.push(i*10);
};
console.log("arrayIn:", arrayIn);

let finalArrlength = Math.ceil(arrayIn.length / n);
console.log("finalArrlength:", finalArrlength);

let finalArr = [];

for (let i = 0; i < finalArrlength; i++) {
  const arr = [];

  for (let j = 0 + (i * n); j < n + (i * n); j++) {
    if (arrayIn[j]) arr.push(arrayIn[j]);
    // console.log("arr:", arr);
  };

  finalArr[i] = arr;
  console.log(`finalArr[${i}]`, finalArr[i]);
};
console.log("finalArr:", finalArr);

//todo: логіка роботи циклів
// n = 5:
// i = 1, j = 1 --- 5
// i = 2, j = 6 --- 10
// i = 3, j = 11 --- 13
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
