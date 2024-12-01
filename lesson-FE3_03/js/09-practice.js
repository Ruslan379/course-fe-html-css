// console.log('9.Практика:');
console.log(
  "%c 9.Практика: ",
  "color: white; background-color: #D33F49",
);

//! ПРАКТИКА
//! 2.Додаткові завдання
//todo [1]
//? Створіть змінні a1, a2, a3, a4, a5 . 
//? За допомогою математичних операторів,
//? знайдіть значення виразів: 5 + 3; 5 - 3; 5 * 3; 5 / 3, 
//? помістивши результат кожного виразу в змінну.
//? Наприклад, let a1 = 5 + 3. 
//? Вивести в консоль всі змінні по черзі.
const a1 = 5 + 3;
const a2 = 5 - 3;
const a3 = 5 * 3;
const a4 = 5 / 3;
// console.log(a1); //8
// console.log(a2); //2
// console.log(a3); //15
// console.log(a4); //1.666


//todo [2]
//? Створіть змінні a6, a7, a8, a9, a10. 
//? Помістіть в них результат виразів:
//? 5 % 3;   3 % 5;   5 + '3';   '5' - 3;   75 + 'кг' 
//? і виведіть на екран за допомогою alert по черзі всі змінні.
const a6 = 5 % 3;
const a7 = 3 % 5;
const a8 = 5 + '3';
const a9 = '5' - 3;
const a10 = 75 + 'кг';
// console.log(a6); //2
// console.log(3 / 5);
// console.log(a7); //3
// console.log(a8); //"53"
// console.log(a9); //2
// console.log(a10); //"75кг"


//todo [3]
//? Напишіть скрипт для створення випадкового числа 
//? з плаваючою крапкою від min до max(не враховуючи max).
const min = 1;
const max = 10;
const result = Math.random() * (max - min) + min;
// console.log(Number(result.toFixed(1)));

//* приклад з функцією
// function getRandomFloat(min, max) {
//     return Math.random() * (max - min) + min;
// }
// let randomNumber = getRandomFloat(1.5, 5.5);
// console.log(randomNumber);


//todo [4]
//? Створіть функцію яка генерує 
//? випадкове ціле число від min до max включно.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomInt = getRandomInt(1, 10);
// console.log(randomInt);


//todo [5]
//? Напишіть скрипт, який просить відвідувача 
//? ввести два числа, і в результаті показує їх суму.
// let firstNumber = prompt('Давай число 1');
// firstNumber = Number(firstNumber);
// console.log(firstNumber);

// let secondNumber = prompt('Давай число 2');
// secondNumber = Number(secondNumber);
// console.log(secondNumber);

// const sumResult = firstNumber + secondNumber;

// console.log(sumResult);


//! 3.Творчі завдання
//? Створити змінні к1… к4 , в них почергово 
//? записати ТІЛЬКИ результат приведення до ЦІЛОГО ЧИСЛА з даних:
//? 1) 5px; 2) 12djd334; 3) 12.45asdwe12; 4) qwqweeewq;
// console.log(Number.parseInt("5px")); 
// console.log(Number.parseInt("12djd334")); 
// console.log(Number.parseInt("12.45asdwe12")); 
// console.log(Number.parseInt("qwqweeewq")); 

//? Створити змінні к1… к4 , в них почергово 
//? записати ТІЛЬКИ результат приведення до ДРОБОВОГО ЧИСЛА з даних:
//? 1) 5px; 2) 12djd334; 3) 12.45asdwe12; 4) qwqweeewq;
// console.log(Number.parseFloat("5px")); 
// console.log(Number.parseFloat("12djd334")); 
// console.log(Number.parseFloat("12.45asdwe12")); 
// console.log(Number.parseFloat("qwqweeewq")); 

//? За допомогою об’єкту Math виведіть в консоль 
//? найбільше і найменше значення серед заданих
//? (2, 34, 99, 3, 22, 36, 733, 18)
// console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
// console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

//? У змінну random згенеруйте випадкове число від 3 до 19 включно. 
//? Результат виведіть в консоль.
// let random = Math.random() * (max - min) + min;
// let random = Math.random() * (19 - 3) + 3;
// console.log(random); 

//? Інкремент ++
let addUser = 2;
addUser++;
// console.log(addUser);

//? Работает також як і
addUser = addUser + 1;
//? або
addUser += 1;


//? Декремент --
let removeUser = 2;
removeUser--;
// console.log(removeUser);


let usersCounter = 10;
//? Постпрефіксна форма
usersCounter++;
usersCounter--;

//? Префіксная форма
++usersCounter;
--usersCounter;
// console.log(++usersCounter);


// let usersCounter = (8 + 2, 19 + 1);
// console.log(usersCounter);

// let someBigNum = 1000000;
// console.log(someBigNum);

// let someBigNum = 1e6; // 1 * 1000000;
// console.log(someBigNum);


// let someLittleNum = 0.000001;
// console.log(someLittleNum);

// let someLittleNum = 1e-6; // 1 / 1000000;
// console.log(someLittleNum);


//! 4. Супертворчі завдання
//? Напишіть скрипт, який знаходить площу прямокутника. 
//? Висота 23см, шириною 10см — всі данні повинні зберігатися в змінних.
//? Значення площі повинно зберігається в числовій змінній.
let height = 23; 
let width = 10;  
//* Обчислюємо площу
let area = height * width;


//? Напишіть скрипт, який знаходить об'єм циліндра 
//? висотою 10м і діаметром основи 4м, 
//? результат та дані повинні зберігатися в змінних.
//* Зберігаємо дані у змінних
let heightC = 10; 
let diameter = 4; 
//* Радіус основи — це половина діаметра
let radius = diameter / 2;
//* Обчислюємо об'єм циліндра за формулою: V = π * r^2 * h
let volume = Math.PI * Math.pow(radius, 2) * heightC;
//* Виводимо результат
// console.log("Об'єм циліндра: " + volume.toFixed(2) + " м³");

//? У прямокутного трикутника дві сторони зі значенням 3 і 4. 
//? Знайдіть гіпотенузу k по теоремі Піфагора
//? (потрібно використовувати функцію Math.pow(число, ступінь) 
//? або оператор піднесення до степеня **).
//? Результат та дані повинні зберігатися в змінних.
let a = 3; 
let b = 4; 
//* Обчислюємо гіпотенузу за теоремою Піфагора: k^2 = a^2 + b^2
let k = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Гіпотенуза трикутника: " + k);


//? Що буде в консолі?
// const isEqual = 0 == false; 
// const isEqual = 0 !== false; 
// const isEqual = '12' == 12; 
// const isEqual = '12' === 12; 

// console.log(0 == false); //true
// console.log(0 !== false); //true
// console.log('12' == 12); //true
// console.log('12' === 12); //false
