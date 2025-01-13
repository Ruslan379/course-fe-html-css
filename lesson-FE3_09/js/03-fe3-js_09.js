console.log(
    '%c 3.Псевдомасив arguments​.     \n   Перетворення псевдомасиву. ',
    'color: white; background-color: #D33F49',
);

//! Псевдомасив arguments
console.warn("Псевдомасив arguments:");
//? Доступ до списку всіх аргументів можна отримати
//? за допомогою спеціальної змінної arguments,
//? яка доступна тільки всередині функції
//? і зберігає всі аргументи у якості псевдомасиву.
//? Псевдомасив arguments - колекція з властивістю length
//? і можливістю звернутися до елементу за індексом,
//? але відсутністю більшості методів для роботи з масивом.
const multiply = function() {
    let total = 1;
    for (const argument of arguments) {
        console.log("total:", total);
        console.log("argument:", argument);
        total *= argument;
        console.log("total * argument =", total);
        console.log(". . . . . . . . . . . . .");
    };
    return total;
};

console.log("return total --> multiply(1, 2, 3):", multiply(1, 2, 3)); //!  6
console.log("----------------------------------------------");
console.log("return total --> multiply(1, 2, 3, 4):", multiply(1, 2, 3, 4)); //!  24
console.log("----------------------------------------------");
console.log("return total --> multiply(1, 2, 3, 4, 5):", multiply(1, 2, 3, 4, 5)); //!  120
console.log("----------------------------------------------");


//! Перетворення псевдомасиву
//? Зазвичай псевдомасив необхідно перетворити
//? у повноцінний масив, оскільки у псевдомасиву
//? відсутні методи масиву, наприклад slice() або includes().
//? На практиці застосовують декілька основних способів.
//! Array.from(arguments)
console.warn("Перетворення псевдомасиву методом Array.from(arguments):");
//? Використовуючи метод Array.from(),
//? можна створити масив із псевдомасиву.
const fnArray = function() {
    //todo: Змінна argsArray буде містити повноцінний масив
    const argsArray = Array.from(arguments);
    console.log("argsArray:", argsArray);
    return argsArray;
};

fnArray(10, 20, 30, 40, 50); //! [10, 20, 30, 40, 50]
console.log("return argsArray --> fnArray(10, 20, 30, 40, 50):", fnArray(10, 20, 30, 40, 50)); //! [10, 20, 30, 40, 50]
console.log("-------------------------------------------------------------------------------------------------------");
fnArray("Mango", "Ajax", "Poly", "Kiwi"); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('return argsArray --> fnArray("Mango", "Ajax", "Poly", "Kiwi"):', fnArray("Mango", "Ajax", "Poly", "Kiwi")); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("-------------------------------------------------------------------------------------------------------");
fnArray(true, false, null, undefined); //! [true, false, null, undefined]
console.log("return argsArray --> fnArray(true, false, null, undefined):", fnArray(true, false, null, undefined)); //! [true, false, null, undefined]
console.log("-------------------------------------------------------------------------------------------------------");


//! ...(rest)
console.warn("Перетворення псевдомасиву операцією ...(rest):");
//? Використовуючи операцію ... (rest), можна зібрати
//? будь-яку кількість елементів, у нашому випадку аргументів,
//? в масив, і зберегти його в змінну.
//? Збираємо всі аргументи, використовуючи операцію rest безпосередньо в підписі функції.
const fnRest = function(...argsRest) {
    //todo: Змінна argsRest буде містити повноцінний масив
    console.log("argsRest:", argsRest);
    return argsRest;
};

fnRest(10, 20, 30, 40, 50); //! [10, 20, 30, 40, 50]
console.log("return argsRest --> fnRest(10, 20, 30, 40, 50):", fnRest(10, 20, 30, 40, 50)); //! [10, 20, 30, 40, 50]
console.log("-------------------------------------------------------------------------------------------------------");
fnRest("Mango", "Ajax", "Poly", "Kiwi"); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('return argsRest --> fnRest("Mango", "Ajax", "Poly", "Kiwi"):', fnRest("Mango", "Ajax", "Poly", "Kiwi")); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("-------------------------------------------------------------------------------------------------------");
fnRest(true, false, null, undefined); //! [true, false, null, undefined]
console.log("return argsRest --> fnRest(true, false, null, undefined):", fnRest(true, false, null, undefined)); //! [true, false, null, undefined]
console.log("-------------------------------------------------------------------------------------------------------");