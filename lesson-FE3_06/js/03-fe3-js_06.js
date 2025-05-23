console.log(
    '%c 3.Цикл for ',
    'color: white; background-color: #D33F49',
);

//! 3.Цикл for - цикл з лічильником
//? - цикл, в якому певна змінна змінює своє значення
//? із заданого початкового до кінцевого значення
//? з деяким кроком, і для кожного значення цієї змінної
//? тіло циклу виконується один раз.
let initialization;
let condition;
let postExpression;

for (initialization; condition; postExpression) {
    // statements
}

//? Алгоритм виконання циклу for:

//? Ініціалізація(initialization) - виконується один раз до початку циклу.
//? Використовується для створення змінної - лічильника
//? і зазначення її початкового значення.

//? Умова(condition) - вираз, що оцінюється
//? перед кожною ітерацією(повторенням) циклу.
//? Тіло циклу виконується тільки тоді,
//? коли вираз приводиться до true.
//? Цикл завершується, якщо значення буде false.

//? Тіло(statements) - набір інструкцій для виконання на кожному повторенні.
//? Виконується, якщо вираз умови приводиться до true.

//? Пост - вираз(post - expression) - виконується в кінці
//? кожного повторення циклу, до перевірки умови.
//? Використовується для оновлення змінної - лічильника.

//? ПРИКЛАД-1:
for (let i = 0; i <= 20; i += 5) {
    console.log("Лічильник, i:", i); 
};
console.log("-----------------");

//? ПРИКЛАД-2:
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
    sum += i;
    console.log("Тіло for, i =", i);
    console.log("Тіло for, sum =", sum);
    console.log(". . . . . . . . .");
};

console.log("sum:", sum);
console.log("------------------");

//? ПРИКЛАД-3:
const max = 10;
for (let i = 0; i < max; i += 1) {
    console.log("i =", i);
    console.log(`${max} % ${i} = `, max % i);
};
console.log("-----------------");
