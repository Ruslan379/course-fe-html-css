console.log(
    '%c 3.Припинення спливання ',
    'color: white; background-color: #D33F49',
);

//! Припинення спливання​
console.warn("Припинення спливання​:");
//? ✴️ Зазвичай, подія буде спливати вгору до елемента window, 
//? викликаючи усі обробники на своєму шляху. 
//? Але будь-який проміжний обробник може вирішити, 
//? що подія повністю оброблена і зупинити спливання, 
//? викликавши метод stopPropagation().
const parent = document.querySelector("#parent-2");
const child = document.querySelector("#child-2");
const descendant = document.querySelector("#descendant-2");

parent.addEventListener("click", () => {
    alert(
        "Parent-2 click handler. \n Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!"
    );
    console.log("Parent-2 click handler");
});

child.addEventListener("click", (event) => {
    event.stopImmediatePropagation(); //! зупиняє обробку подій на поточному елементі
    alert(
        "Child-2 click handler. \n Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!"
    );
    console.log("Child-2 click handler");
});

descendant.addEventListener("click", (event) => {
    event.stopPropagation(); //! перешкоджає просуванню події далі
    alert("Descendant-2 click handler");
    console.log("Descendant-2 click handler");
});
console.log("-----------------------------------------------------------");

//? ✳️ Якщо елемент має декілька обробників на одну подію,
//? то, навіть у разі припинення спливання,
//? усі вони будуть виконані.
//? Тобто метод stopPropagation() тільки перешкоджає просуванню події далі.

//? ✴️ Якщо необхідно повністю зупинити обробку події, 
//? використовується метод stopImmediatePropagation(). 
//? Він не тільки запобігає спливанню, але й зупиняє обробку подій на поточному елементі.