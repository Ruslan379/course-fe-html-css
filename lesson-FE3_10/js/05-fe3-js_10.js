console.log(
    '%c 5.Фільтрація масиву з використанням стрілкової функції ',
    'color: white; background-color: #D33F49',
);

//! Фільтрація масиву з використанням стрілкової функції
//? Напишемо функцію фільтрації елементів масиву. 
//? Перший параметр array це масив,
//? будемо перебирати його використовуючи цикл for...of.
//? Другий параметр callbackTest це callback-функція, 
//? яка виконується для кожного елемента масиву.
let result1;
let result2;

const filter = (array, callbackTest) => {
    const filteredArray = [];

    for (const item of array) {
        console.log("item:", item);
        const passed = callbackTest(item);

        if (passed) {
            filteredArray.push(item);
        };
    };

    return filteredArray;
};

console.warn("Приклад-1_1. \n  Використання стрілкової функції як колбек:");
const callback1 = value => value >= 3;
//todo: Виклик функції зі стрілочною функцією як колбек:
result1 = filter([1, 2, 3, 4, 5], callback1);
console.log("result1:", result1);
console.log(". . . . . . . . . . . . .");

console.warn("Приклад-1_2. \n  Використання анонімної стрілкової функції як колбек:");
//todo: Виклик функції з анонімною стрілочною функцією як колбек:
result1 = filter([1, 2, 3, 4, 5], (value) => value >= 3);
console.log("result1:", result1);
console.log(". . . . . . . . . . . . .");


console.warn("Приклад-2_1. \n  Використання стрілкової функції як колбек:");
const callback2 = value => value <= 4;
//todo: Виклик функції зі стрілочною функцією як колбек:
result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log("result2:", result2);
console.log(". . . . . . . . . . . . . .");

console.warn("Приклад-2_2. \n  Використання анонімної стрілкової функції як колбек:");
//todo: Виклик функції з анонімною стрілочною функцією як колбек:
result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], (value) => value <= 4);
console.log("result2:", result2);
console.log("----------------------------");
