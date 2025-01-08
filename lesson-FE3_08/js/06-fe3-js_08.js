console.log(
    '%c 6.Метод splice() ',
    'color: white; background-color: #D33F49',
);

//! Метод splice()
//? Швейцарський ніж для роботи з масивами,
//? якщо вихідний масив необхідно змінити /
//? Видаляє, додає і замінює елементи у довільному місці масиву.


//! Видалення елементів масиву за допомогою splice()
console.warn("splice() - видалення елементів масиву:");
//? Щоб видалити елементи в масиві, передаються два аргументи:
//todo: splice(index, num);
//? index — вказує індекс першого елемента для видалення
//? num — визначає кількість елементів, що видаляються.
//? Метод splice змінює вихідний масив і
//? ПОВЕРТАЄ масив, що містить видалені елементи.
const scores = [10, 20, 30, 40, 50]; 
console.log("scores:", scores); //! [10, 20, 30, 40, 50]

//? Видаляємо три елементи масиву, починаючи з другого елемента (індекс = 1):
// console.log(scores.splice(1, 3)); //! [20, 30, 40]
const deletedScores = scores.splice(1, 3);

//? Тепер масив scores містить лише два елементи:
console.log("scores.splice(1, 3) --> scores:", scores); //! [10, 50]

//? А масив deletedScores містить три видалені елементи:
console.log("deletedScores:", deletedScores); //! [20, 30, 40]
console.log("-----------------------------------------------------------");


//! Додавання елементів в масив за допомогою splice()
console.warn("splice() - додавання елементів в масив:");
//? Для того, щоб додати один або декілька елементів в масив,
//? необхідно передати ТРИ або більше аргументи,
//? за такої умови, що другий аргумент повинен дорівнювати нулю.
//todo: splice(index, 0, new_element_1, new_element_2, ...)
//? Аргумент index вказує на початковий індекс масива,
//? куди будуть вставлені нові елементи.
//? Другий аргумент - 0, він вказує методу splice() не видаляти
//? елементи в місці додавання нових, починаючи з index.
//? Третій, четвертий і всі наступні аргументи
//? - це нові елементи, які додаються в масив, починаючи з index.
//? ПОВЕРТАЄ пустий масив.
const colors = ["red", "green", "blue"];
console.log("colors:", colors); //! ['red', 'green', 'blue']

//? Додаємо два елементи масиву, починаючи з третього елемента (індекс = 2):
// console.log(colors.splice(2, 0, "yellow", "pink")); //! []
const colorsAdding = colors.splice(2, 0, "yellow", "pink");

//? Тепер масив colors містить лише п'ть елементів:
console.log('colors.splice(2, 0, "yellow", "pink") --> colors:', colors); //! ['red', 'green', 'yellow', 'pink', 'blue']

console.log("colorsAdding:", colorsAdding); //! []
console.log("-----------------------------------------------------------");


//! Заміна елементів в масиві за допомогою splice()
console.warn("splice() - заміна елементів в масиві:");
//? Заміна - це операція видалення елементів, в якій
//? додаються нові елементи в місці видалення старих.
//? Для цього необхідно передати мінімум ТРИ аргументи:
//todo: splice(index, num, new_element_1, new_element_2, ...)
//? index - вказує на індекс першого елемента для видалення
//? num - визначає кількість елементів, що видаляються
//? третій, четвертий і всі наступні аргументи
//? - це нові елементи, які додаються в масив замість видалених(старих).
//? Кількість елементів, що видаляються і додаються, може не збігатися.
//? ПОВЕРТАЄ масив, що містить видалені елементи.
const languages = ["C", "C++", "Java", "JavaScript"];
console.log("languages:", languages); //! ['C', 'C++', 'Java', 'JavaScript']

//? Заміняємо ОДИН елемент з індексом = 1
//? на ОДИН новий елемент: "Python"
let languagesReplacing = languages.splice(1, 1, "Python");
console.log('languages.splice(1, 1, "Python") --> languages:', languages); //! ['C', 'Python', 'Java', 'JavaScript']

console.log("languagesReplacing:", languagesReplacing); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? Заміняємо ОДИН елемент з індексом = 2
//? на ДЕКІЛЬКА нових елементів: "C#", "Swift", "Go"
languagesReplacing = languages.splice(2, 1, "C#", "Swift", "Go");
console.log('languages.splice(2, 1, "C#", "Swift", "Go") --> languages:', languages); //! ['C', 'Python', 'C#', 'Swift', 'Go', 'JavaScript']

console.log("languagesReplacing:", languagesReplacing); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? Заміняємо ТРИ елемента з починаючи з індекса = 2
//? на ОДИН новий елемент: "C Sharp"
languagesReplacing = languages.splice(2, 3, "C Sharp");
console.log('languages.splice(2, 3, "C Sharp") --> languages:', languages); //! ['C', 'Python', 'C Sharp', 'JavaScript']

console.log("languagesReplacing:", languagesReplacing); //! []
console.log("-----------------------------------------------------------");
