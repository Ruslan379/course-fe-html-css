// console.log('1.Що таке "Рядок"');
console.log(
    '%c 1.Що таке "Рядок" ',
    'color: white; background-color: #D33F49',
    );

//! Що таке "Рядок"
//? Правила іменування складових виразу:
//? + - * / % називаються ОПЕРАТОРАМИ, 
//? а то на чому вони застосовуються - ОПЕРАНДАМИ.
//? ОПЕРАНД - це значення, до якого застосовується оператор, 
//? наприклад, в арифметичних або логічних виразах.
//todo Літерали можуть бути операндами, коли вони беруть участь у виразі.
const userAge = 30 - 6; //? Числа 30 та 6 є операндами
const h = 180; //? 180 - числовий літерал
const t = 10; //? 10 - числовий літерал
const userHeight = h - t; //? h та t - операнди


//? Бінарні оператори застосов до двух операндів(літералів) (-)
const clientAge = 30 - 6;
//? Унарні застосов до одного операнда(літералів) (=)
const userCash = -800;


//? Задаємо змінні
const x = 8;
const y = 5;
const x2 = 10;
console.log("x =", x);
console.log("y =", y);
console.log("x2 =", x2);
console.log("--------------");

//? Додавання
console.log("x + y =", x + y); 

//? Віднімання
console.log("x - y =", x - y);
console.log("y - x =", y - x);

//? Множення
console.log("y * x =", x * y); 

//? Ділення
console.log("x / y =", x / y);
console.log("x2 / y =", x2 / y);

//? Залишок від ділення
console.log("Залишок від ділення x / y =", x % y);
console.log("Залишок від ділення x2 / y =", x2 % y); 

//? Зведення у ступінь
console.log("x(8) у ступіні y(5) =", x ** y); //! 32768
console.log("2 у ступіні 3 =", 2 ** 3); //!  8



//! Комбіновані оператори
//? Арифметичні операції із заміною
//todo Ділення: /=. Приклад: 
//todo Залишок від ділення: %=. Приклад: 

//? Додавання із заміною
//todo x += y еквівалентно x = x + y
let valueSum = 10;
// valueSum = valueSum + 5; //! var 1.
valueSum += 5;  //! var 2.
console.log("valueSum:", valueSum);

//? Віднімання із заміною
//todo x -= y еквівалентно x = x - y
let valueX = 10;
let valueY = 4;
// valueX = valueX - valueY; //! var 1.
valueX -= valueY;  //! var 2.
console.log("Додавання - valueX:", valueX);

//? Множення із заміною
//todo x *= y еквівалентно x = x * y
let valueG = 4;
let valueU = 3;
// valueG = valueG * valueU; //! var 1.
valueG *= valueU;  ///! var 2.
console.log("Множення - valueG:", valueG);

//? Ділення із заміною
//todo x /= y еквівалентно x = x / y
let valueM = 100;
let valueN = 5;
// valueM = valueM / valueN; //! var 1.
valueM /= valueN;  //! var 2.
console.log("Ділення - valueM:", valueM);

//? Залишок від ділення із заміною
//todo x %= y еквівалентно x = x % y
let valueO = 30;
let valueP = 20;
// valueO = valueO % valueP; //! var 1.
valueO %= valueP;  //! var 2.
console.log("Залишок від ділення valueO/valueP --> valueO:", valueO);
