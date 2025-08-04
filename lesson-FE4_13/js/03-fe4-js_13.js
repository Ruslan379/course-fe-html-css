console.log(
    '%c 3.Метод then(). ',
    'color: white; background-color: #D33F49',
);

//! Метод then()
console.warn("Метод then():");
console.warn(`Зображення​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_04/images/image-1.png"}`);
console.warn("Посилання: \n https://caniuse.com/?search=loading%3D%22lazy%22");

//? ✴️
//? ✳️ 

console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.then(onResolve, onReject);
    `,
    'color: blue; font-size: 18px',
);
//?     📌:
//? 🔸 onResolve(value) - буде викликана у разі успішного
//?    виконання промісу і отримає його результат як аргумент.
//? 🔸 onReject(error) - буде викликана у разі виконання 
//?    промісу з помилкою і отримає її як аргумент.




console.log("-----------------------------------------------------------------------------------");
