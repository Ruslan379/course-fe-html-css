console.log(
    '%c 2.Ітерація по масиву.          \n   Використання циклу for.      \n   Використання циклу for...of. \n   Оператори break і continue.  ',
    'color: white; background-color: #D33F49',
);

//! Ітерація по масиву
//? Для ітерації по масиву або перебору масиву, використовуються цикли


//! Використання циклу for
console.warn("Використання циклу for:");
//? Для доступу до елементів використовується
//? синтаксис квадратних дужок масив[індекс],
//? де індекс - це значення лічильника циклу
//? від 0 і до останнього індексу масиву,
//? тобто менше, але не дорівнює його довжині.
let clients = ["Mango", "Ajax", "Poly"];
console.log("clients:", clients); //! ['Mango', 'Poly', 'Ajax']

for (let i = 0; i < clients.length; i += 1) {
    console.log(`clients[${i}]:`, clients[i]);
};
console.log("-----------------------------------------");


//! Перевизначення елементів масиву
console.warn("Перевизначення елементів масиву за допомогою циклу for:");
//? За допомогою циклу for можна перевизначити всі елементи масиву.
// clients = [0, 1, 2]; //todo: інший приклад масиву
for (let i = 0; i < clients.length; i += 1) {
    clients[i] = clients[i] + i;
    console.log(`clients[${i}]:`, clients[i]);
};
console.log("clients:", clients); //! ['Mango0', 'Ajax1', 'Poly2'] або [0, 2, 4]
console.log("---------------------------------------------");


//! Використання циклу for...of​
console.warn("Використання циклу for...of​:");
//? Конструкція for...of оголошує цикл, що перебирає
//? ітерабельні об'єкти, як-от масиви і рядки.
//? Тіло циклу буде виконуватися для значення кожного елемента.
//? Це хороша заміна циклу for,
//? якщо не потрібен доступ до лічильника ітерації.
//? variable — змінна,
//? яка буде зберігати значення елемента на кожній ітерації.
//? iterable — колекція,
//? яка містить ітерабельні(що можна порахувати) елементи, наприклад масив.
//todo: Використання циклу for...of​ для масиву

clients = ["Mango", "Ajax", "Poly"];
console.log("clients:", clients); //! ['Mango0', 'Ajax1', 'Poly2'] або [0, 2, 4]

for (const client of clients) {
    console.log(`client:`, client);
};
console.log(". . . . . . . .");

//todo: Використання циклу for...of​ для рядка
const string = "Java Script";
console.log("string:", string); //! 'Java Script'
for (const character of string) {
    console.log(`character:`, character);
};
console.log("-------------------------------------");


//! Оператори break і continue​
console.warn("Оператори break і continue​​:");
//todo: ПРИКЛАД-1:
//? Будемо шукати ім'я клієнта
//? в масиві імен, якщо знайшли - перериваємо цикл,
//? оскільки немає сенсу шукати далі, імена у нас унікальні.
//todo: ПРИКЛАД-1 (var.1)
console.warn("ПРИКЛАД-1 (var.1):");
const clients1 = ["Mango", "Poly", "Ajax"];
console.log("clients1:", clients1); //! ['Mango', 'Poly', 'Ajax']
const clientNameToFind1 = "Poly";
console.log("clientNameToFind1:", clientNameToFind1); //! 'Poly'

let message;

for (const client of clients1) {
    //? На кожній ітерації будемо перевіряти чи збігається елемент масиву з
    //? іменем клієнта. Якщо збігається - записуємо в message повідомлення
    //? про успіх і робимо break, щоб далі не шукати
    if (client === clientNameToFind1) {
        message = "Клієнт з таким ім'ям є в базі даних!";
        break;
    };
    //? Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
    message = "Клієнт з таким ім'ям відсутній в базі даних!";
};
console.log(message); //! "Клієнт з таким ім'ям є в базі даних!"
console.log(". . . . . . . . . . . . . . . . . . .");


//todo: ПРИКЛАД-1 (var.2)
console.warn("ПРИКЛАД-1 (var.2):");
//? Можна на початку задати message значення невдачі пошуку, 
//? а в циклі перезаписати його на успіх, якщо знайшли ім'я. 
//? Але break все одно нам знадобиться, оскільки, 
//? якщо у нас масив із 10000 клієнтів, 
//? а потрібний нам знаходиться на 2 позиції, 
//? то немає абсолютно жодного сенсу перебирати інші 9998 елементи.
const clients2 = ["Mango", "Poly", "Ajax"];
console.log("clients2:", clients2); //! ['Mango', 'Poly', 'Ajax']
const clientNameToFind2 = "Ajax";
console.log("clientNameToFind2:", clientNameToFind2); //! 'Ajax'
let message2 = "Клієнт з таким ім'ям відсутній в базі даних!";

for (const client of clients2) {
    if (client === clientNameToFind2) {
        message2 = "Клієнт з таким ім'ям є в базі даних!";
        console.log(`Клієнт з ім'ям ${clientNameToFind2} є в базі даних!`);
        break;
    }
    //? Якщо не збігається, то на цій ітерації нічого не робимо
};
console.log(message2); //! "Клієнт з таким ім'ям є в базі даних!"
console.log("-------------------------------------");


//todo: ПРИКЛАД-2:
console.warn("ПРИКЛАД-2:");
//? Використовуємо цикл для виведення
//? тільки чисел, більших за певне значення.
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
console.log("Масив чисел:", numbers); //! [1, 3, 14, 18, 4, 7, 29, 6, 34]
const threshold = 15;
console.log("Число для порівняння:", threshold); //! 15

//? Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
//? припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
        continue;
    }
    console.log(`Число більше за ${threshold}: ${numbers[i]}`); //! 18, 29, 34
};
