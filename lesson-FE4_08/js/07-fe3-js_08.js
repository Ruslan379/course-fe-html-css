console.log(
    '%c 7.Метод concat() ',
    'color: white; background-color: #D33F49',
);

//! 7.Метод concat()
//? Об'єднує два або більше масивів в один.
//? Він не змінює масив, на якому викликається,
//? а ПОВЕРТАЄ новий масив.
//? Порядок аргументів методу впливає
//? на порядок елементів нового масиву.
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("oldClients:", oldClients); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
const newClients = ["Monkong", "Singu"];
console.log("newClients:", newClients); //! ['Monkong', 'Singu']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log("oldClients.concat(newClients):", allClientsWithOldFirst); //! ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Monkong', 'Singu']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log("newClients.concat(oldClients):", allClientsWithNewFirst); //! ['Monkong', 'Singu', 'Mango', 'Ajax', 'Poly', 'Kiwi']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log("oldClients:", oldClients); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("newClients:", newClients); //! ['Monkong', 'Singu']
console.log("--------------------------------------------------------------");
