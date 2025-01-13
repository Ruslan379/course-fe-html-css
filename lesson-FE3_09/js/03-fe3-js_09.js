console.log(
    '%c 3.Методи indexOf()​ і includes() ',
    'color: white; background-color: #D33F49',
);

//! Метод indexOf()
console.warn("Метод indexOf():");
//? indexOf(value) повертає перший індекс,
//? в якому елемент зі значенням value
//? був знайдений в масиві, або число -1,
//? якщо такий елемент відсутній.
//? Використовуйте indexOf тоді,
//? коли необхідно отримати сам індекс елемента.
let clientsArr = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("clientsArr:", clientsArr); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('clientsArr.indexOf("Poly"):', clientsArr.indexOf("Poly")); //! 2
console.log('clientsArr.indexOf("Monkong"):', clientsArr.indexOf("Monkong")); //! -1
console.log("----------------------------------------------------");


//! Метод includes()
console.warn("Метод includes():");
//? includes(value) перевіряє, чи містить масив
//? елемент зі значенням value і повертає true
//? або false відповідно.
//? Застосування цього методу корисне в ситуаціях,
//? коли необхідно перевірити,
//? чи є елемент в масиві і не важлива його позиція (індекс).
clientsArr = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("clientsArr:", clientsArr); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('clientsArr.includes("Poly"):', clientsArr.includes("Poly")); //! true
console.log('clientsArr.includes("Monkong"):', clientsArr.includes("Monkong")); //! false
console.log("----------------------------------------------------");
