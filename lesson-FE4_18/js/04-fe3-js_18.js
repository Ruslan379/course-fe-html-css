console.log(
    '%c 4.Метод insertAdjacentHTML() ',
    'color: white; background-color: #D33F49',
);

//! Метод insertAdjacentHTML()
console.warn(`Метод insertAdjacentHTML(): \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_18/images/insert-adjacent.png"}`);
//? ✴️ Метод insertAdjacentHTML() - це сучасний метод для додавання рядка 
//? з HTML-тегами перед, після або всередину елемента. 
//? Вирішує проблему innerHTML з повторною серіалізацією 
//? вмісту елемента під час додавання розмітки до вже існуючої.
console.log(
    `%c
    elem.insertAdjacentHTML(position, string);

        🔸 "beforebegin" - перед elem
        🔸 "afterbegin" - всередині elem, перед усіма дітьми
        🔸 "beforeend" - всередині elem, після усіх дітей
        🔸 "afterend" - після elem
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Аргумент position - це рядок,
//? позиція щодо елемента elem.
//? Приймає одне з чотирьох значень:
//? 🔸 "beforebegin" - перед elem
//? 🔸 "afterbegin" - всередині elem, перед усіма дітьми
//? 🔸 "beforeend" - всередині elem, після усіх дітей
//? 🔸 "afterend" - після elem
//? ✳️❗️❗️❗️ "beforebegin" і "afterend" працюють тільки тоді,
//? коли elem вже знаходиться в DOM-дереві.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const list4 = document.querySelector(".list4");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
    .map((technology) => `<li class="list-item new">${technology}</li>`)
    .join("");

list4.insertAdjacentHTML("beforebegin", "<h3>Popular technologies</h3>");
list4.insertAdjacentHTML("afterbegin", '<li class="list-item new">C++</li>');
list4.insertAdjacentHTML("beforeend", markup);
list4.insertAdjacentHTML("afterend", '<a class="link4" href="">Read more...</a>');
console.log("----------------------------------------------------------------------------------");
