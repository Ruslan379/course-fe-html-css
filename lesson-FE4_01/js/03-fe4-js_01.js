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
const parent2 = document.querySelector("#parent-2");
const child2 = document.querySelector("#child-2");
const descendant2 = document.querySelector("#descendant-2");

parent2.addEventListener("click", () => {
    alert(
        "PARENT-2 click. \n Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!"
    );
    console.log("PARENT-2 click");
});

child2.addEventListener("click", (event) => {
    //! зупиняє обробку ВСІХ подій,
    //! тобто зупиняє і спливання, і виклик інших оброблювачів на поточному елементі
    event.stopImmediatePropagation();
    // event.stopPropagation(); //! перешкоджає просуванню події далі
    alert(
        "CHILD-2 click-1. \n Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!"
    );
    console.log("CHILD-2 click-1");
});

child2.addEventListener("click", (event) => {
    alert(
        "CHILD-2 click-2. \n Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!"
    );
    console.log("CHILD-2 click-2");
});

descendant2.addEventListener("click", (event) => {
    event.stopPropagation(); //! перешкоджає просуванню події далі
    alert("DESCENDANT-2 click");
    console.log("DESCENDANT-2 click");
});

//? ✴️❗️ event.stopPropagation():
//? 🔸  - зупиняє лише сплив події вгору по дереву DOM.
//? 🔸  - не заважає іншим обробникам на цьому елементі виконатися.
//? ✳️ Якщо елемент має декілька обробників на одну подію,
//? то, навіть у разі припинення спливання,
//? усі вони будуть виконані.
//? Тобто метод stopPropagation()
//? тільки перешкоджає просуванню події далі.

//? ✴️❗️ event.stopImmediatePropagation():
//? 🔸  - зупиняє і спливання, і виклик інших оброблювачів тому ж елементі.
//? 🔸  - використовується, коли потрібно повністю припинити обробку ВСІХ подій.
//? ✳️ Якщо необхідно повністю зупинити обробку події,
//? використовується метод stopImmediatePropagation().
//? Він не тільки запобігає спливанню, але й зупиняє обробку ❗️ВСІХ подій❗️ на поточному елементі.
console.log("------------------------------------------------------------------");


//! Активний елемент (приклад-1 (до))​
console.warn("Активний елемент (приклад-1 (до))​​:");
//? ✳️ Розглянемо приклад, в якому є розмітка, яка складається
//? з батьківського елемента <div id="buttons-box>"
//? та вкладених в нього дочірніх елементів
//? <button class="buttons-box-button">Button-N</button>.
//? Треба вивести в консоль повідомлення про те,
//? на якому з елементів відбувся клік:
const buttonBox = document.querySelector(".part_3 #buttons-box");
const button1 = document.querySelector(".part_3 .buttons-box-button:nth-child(1)");
const button2 = document.querySelector(".part_3 .buttons-box-button:nth-child(2)");
const button3 = document.querySelector(".part_3 .buttons-box-button:nth-child(3)");

console.log("Buttons box:", buttonBox);
console.log("Button-1:", button1);
console.log("Button-2:", button2);
console.log("Button-3:", button3);

buttonBox.addEventListener("click", (event) => {
    console.log('Клік в "Buttons box"');

    // event.currentTarget.classList.toggle("active");

    setTimeout(() => {
        event.target.classList.toggle("active");
    }, 1500);

    // event.target.classList.toggle("active");
});

button1.addEventListener("click", (event) => {
    // event.stopPropagation(); //! перешкоджає просуванню події далі
    event.target.classList.toggle("active");
    console.log('Клік в "Button-1"');
});

button2.addEventListener("click", (event) => {
    event.stopPropagation(); //! перешкоджає просуванню події далі
    event.target.classList.toggle("active");
    console.log('Клік в "Button-2"');
});

button3.addEventListener("click", (event) => {
    event.stopPropagation(); //! перешкоджає просуванню події далі
    event.target.classList.toggle("active");
    console.log('Клік в "Button-3"');
});
console.log("------------------------------------------------------------------");
