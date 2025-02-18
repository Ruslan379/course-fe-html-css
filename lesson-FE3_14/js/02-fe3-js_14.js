console.log(
    '%c 2.Чисті функції. ',
    'color: white; background-color: #D33F49',
);

//! Функція з побічними ефектами
console.warn("Функція з побічними ефектами:")
//? ✴️ Функція з побічними ефектами - це функція,
//? яка в процесі виконання може змінювати
//? або використовувати глобальні змінні,
//? змінювати значення аргументів посилального типу,
//? виконувати операції введення-виведення тощо.
//? ✳️ Функція dirtyMultiply(array, value) множить 
//? кожен елемент масиву array на число value. 
//? Вона змінює (мутує) вихідний масив за посиланням.
const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
        array[i] = array[i] * value;
    };
};

const numbers = [1, 2, 3, 4, 5];
console.log("numbers_before:", numbers); //! [1, 2, 3, 4, 5]

dirtyMultiply(numbers, 2);

//todo: Відбулася мутація вихідних даних - масиву numbers:
console.log("numbers_after:", numbers); //! [2, 4, 6, 8, 10]
console.log(". . . . . . . . . . . . . . . . . . . .");



//! Чиста функція
console.warn("Чиста функція:");
//? ✴️ Чиста функція (pure function) - це функція,
//? результат якої залежить тільки від
//? значень переданих аргументів.
//? За умови однакових аргументів вона
//? завжди повертає один і той самий результат
//? і не має побічних ефектів,
//? тобто не змінює значення аргументів.
//? ✳️ Напишемо реалізацію чистої функції 
//? множення елементів масиву, 
//? що повертає новий масив, не змінюючи вихідний.
const pureMultiply = (array, value) => {
    const newArray1 = [];
    const newArray2 = [];

    //todo: var.1
    for (let i = 0; i < array.length; i += 1) {
        newArray1.push(array[i] * value);
    };

    //todo: var.2
    array.forEach(element => {
        newArray2.push(element * value);
    });

    // return newArray1;
    // return newArray2;
    return {
        newArray1,
        newArray2
    };
};

const numbers2 = [1, 2, 3, 4, 5];
console.log("numbers2_before:", numbers2); //! [1, 2, 3, 4, 5]

const doubledNumbers = pureMultiply(numbers2, 2);

//todo: Мутація вихідних даних - масиву numbers2 не відбулася:
console.log("numbers2_after:", numbers2); //! [1, 2, 3, 4, 5]

//todo: Функція повернула новий масив зі зміненими даними:
console.log("doubledNumbers:", doubledNumbers); //! [2, 4, 6, 8, 10]
console.log("---------------------------------------");
