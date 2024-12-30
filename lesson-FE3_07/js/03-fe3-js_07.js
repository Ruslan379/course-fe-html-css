console.log(
    '%c 3.Багатовимірні масиви ',
    'color: white; background-color: #D33F49',
);

//! Багатовимірні масиви
//? Багатовимірні масиви
//? Масиви можуть містити інші масиви як елементи.
//? Це можна використовувати для створення матриць.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("Багатовимірний масив [matrix]:", matrix); //! [Array(3), Array(3), Array(3)]
console.log("matrix[0][0]:", matrix[0][0]); //! 1
console.log("matrix[1][1]:", matrix[1][1]); //! 5
console.log("matrix[2][2]:", matrix[2][2]); //! 9
console.log("----------------------------------------------");


//todo: ПРИКЛАД:
//? Використуємо вкладені цикли для того
//? щоб перебрати багатовимірний масив [matrix]
//? та знайти суму всіх його елементів.
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
    console.log(`Підмасив матриці matrix[${i}]:`, matrix[i]);

    for (let j = 0; j < matrix[i].length; j += 1) {
        console.log(`Елемент підмасив матриці matrix[${i}][${j}]:`, matrix[i][j]);
        total += matrix[i][j];
        // console.log("total in for:", total);
    }
} 
console.log("Сума всіх елементів, <total> = ", total); //! 45
