console.log('1.Математичні оператори');

// Арифметичні операції
// Комбіновані оператори
// Оператори порівняння

//  правильне іменування складових виразу. 
// + - * / % називаються операторами, 
// а то на чому вони застосовуються операндами.
let userAge = 30 - 6; //Числа 30 та 6 - операнди
let userHeight = 200 - 20; // h та y - операнди


// Бінарні оператори застосов до двух операндів (-)
let clientAge = 30 - 6;
// Унарні застосов до одного операнда (=)
let userCash = -800;

const x = 8;
const y = 5;
// console.log(x + y); 

// const x = 8;
// const y = 5;
// console.log(x - y); 

// const x = 8;
// const y = 5;
// console.log(x * y); 

// const x = 8;
// const y = 5;
// console.log(x / y); 

// const x = 8;
// const y = 5;
// console.log(x % y); 

// const x = 8;
// const y = 5;
// console.log(x ** y); // 32768

// Додавання: +=. Приклад: x += y еквівалентно x = x + y
// Віднімання: -=. Приклад: x -= y еквівалентно x = x - y
// Множення: *=. Приклад: x *= y еквівалентно x = x * y
// Ділення: /=. Приклад: x /= y еквівалентно x = x / y
// Остача від ділення: %=. Приклад: x %= y еквівалентно x = x % y

let age = 25;
// age = age + 1;
// age += 1;
// console.log(age); 

// Оператори порівняння
// використовуються для порівняння двох значень і 
// повертають булеве значення (true або false)

// const a = 2;
// const b = 5;

// console.log(a > b); 
// console.log(b > a); 
// console.log(a >= b); 
// console.log(b >= a); 

// console.log(a < b); 
// console.log(b < a); 
// console.log(a <= b); 
// console.log(b <= a); 

// Оператори рівності

// Оператори несуворої рівності:
// console.log(5 == 5); 
// console.log(5 == 3); 
// console.log(5 != 3); 
// console.log(5 != 5); 
// Погано, бо виконується неявне приведення рядків і булевого значення до ЧИСЛА
// console.log(5 == "5"); 
// console.log(5 != "5"); 
// console.log(1 == true); 
// console.log(1 != true); 


// оператори суворої рівності
// Добре, приведення типів не виконується
// console.log(5 === 5); 
// console.log(5 === "5"); 
// console.log(5 !== "5"); 
// console.log(5 !== 5); 
// console.log(1 === true); 
// console.log(1 !== true); 




// PRACTICE

//0
// let resultOne = "25" - 5;
// console.log(resultOne);
// console.log(typeof resultOne);

// let resultTwo = 10 * "80";
// console.log(resultTwo);
// console.log(typeof resultTwo);

//Приоритет операторов

//Разный приоритет
// let resultOne = 2 - 1 * 5;
// console.log(resultOne);

//Скобки
// let resultTwo = (2 - 1) * 5;
// console.log(resultTwo);

//Одинаковый приоритет
// let resultThree = 2 - 1 + 5;
// console.log(resultThree);


// 1
// Доповни код, присвоївши змінній totalPrice вираз для підрахунку 
// загальної суми замовлення. Змінна pricePerItem зберігає ціну за одиницю товару,
//  а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// 2
// Заміни у виразах стандартні математичні оператори на комбіновані оператори

// let a = 5;
// let b = 10;
let c = 15;
let d = 20;

// Change code below this line
// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// 3
// Оголоси змінну isAdult та задай їй результат перевірки значення змінної age.
//  Використай оператори порівняння та доповни код так, щоб 
//  значенням isAdult було true, якщо вік користувача більше або дорівнює 18 
//  та false, якщо менше 18.

// const age = 16;
// 
const isAdult = age >= 18;

// 4
// Оголоси змінну isValid і задай їй значенням результат перевірки
//  рівності паролей в змінних correctPassword і userPassword.

// Якщо паролі співпадають (сувора рівність), значення isValid має бути true
// Якщо паролі не співпадають, значення isValid має бути false

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";

const isValid = correctPassword === userPassword;


// let a = 1 + 2;
// let b = 2;

// let result = 8 - (a = b + 3);
// console.log("Результат в скобках: " + a);
// console.log("Общий результат: " + result);


