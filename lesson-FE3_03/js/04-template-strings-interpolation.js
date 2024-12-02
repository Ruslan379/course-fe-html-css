// console.log(`4.Шаблонні рядки та інтерполяція`);
console.log(
    '%c 4.Шаблонні рядки та інтерполяція ${…} ',
    'color: white; background-color: #D33F49',
);

//! Шаблонні рядки та інтерполяція ${…}
//? Шаблонні рядки — це синтаксис, який полегшує об'єднання 
//? статичного тексту з динамічним(змінними)
//? за допомогою зворотніх(дивних) лапок(англ.backticks)(``)
//? Шаблонні рядки дозволяють підставляти значення змінних 
//? безпосередньо всередині рядка
//? за допомогою синтаксису інтерполяції -  ${змінна}.
const userName = "Clinton Eastwood";
const message = `Hello, ${userName}!`;
console.log("message:", message);
console.log("---------------------------------------------------");

const guestName = "Mango";
const roomNumber = 207;
//todo var.1
const greeting1 = "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log("greeting1:", greeting1);
//todo var.1
const greeting2 = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log("greeting2:", greeting2);
console.log("---------------------------------------------------");


//? Декілька рядків
let text = 
`
Привіт!
Вітаю на нашому сайті!
Тут ти знайдеш все, що потрібно!
`;
console.log("text:", text);
console.log("---------------------------------------------------");

//? Все що в лапках буде рядком
const myString = "123";
const myNumber = 123;

console.log("myString:", myString);
console.log("typeof myString:", typeof myString);

console.log("myNumber:", myNumber);
console.log("typeof myNumber:", typeof myNumber);

//todo var.1
const result1 = myString + myNumber;
console.log("result1:", result1);

//todo var.2
const result2 = `myString + myNumber`;
console.log("result2:", result2);

//todo var.3
const result3 = `${myString} + ${myNumber}`;
console.log("result3:", result3);
console.log("---------------------------------------------------");








//! ПРАКТИКА
//todo [1]
// console.log(String(false));
// console.log(Number(false));
// console.log(String(null));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log("false" + null)
// console.log("5" + false);
// console.log("5" + null);


//todo [2]
//? чи буде 579 ?
const myText = 123 + "456";
// console.log("myText:", myText);


//todo [3]
//? чи вірний напис?
const actorsName = "Robin Williams";
let actorsGreeting = 'Hello! My name is ${actorsName}';
// console.log("actorsGreeting:", actorsGreeting);
// actorsGreeting = `Hello! My name is ${actorsName}.`;
// console.log("actorsGreeting again:", actorsGreeting);


//todo [4]
//? Оголоси змінну message і запиши в неї повідомлення про покупку.
//? "You picked <назва товару>, price per item is <ціна товару> credits".
//? Напиши скрипт для замовлення цього товару:
//? Товар <назва товару>, ціна за одну штуку  <ціна товару>,
//? <ціна доставки>, виводити суму замовлення - message
//? у форматі "You ordered <назва товару> worth <total price> credits"