console.log(
    '%c 5.Палітра кольорів ',
    'color: white; background-color: #D33F49',
);

//! Палітра кольорів​
console.warn("Палітра кольорів​:");
//? ✳️ Будемо створювати палітру кольорів з можливістю 
//? вибрати колір по кліку і відображенням обраного кольору. 
//? Замість того, щоб призначати обробник кожному елементу палітри, 
//? яких може бути дуже багато, повісимо один слухач 
//? на загального предка div.color-palette. 
//? В обробнику події кліка використовуємо event.target, 
//? щоб отримати елемент, на якому відбулася подія 
//? і пов'язаний з ним колір, який будемо зберігати в атрибуті data-color.
const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");


//todo: Деякі допоміжні функції для рендерингу елементів палітри.
function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

function createPaletteItems() {
    const items = [];
    for (let i = 0; i < 60; i++) {
        const color = getRandomHexColor();
        const item = document.createElement("button");
        item.type = "button";
        item.dataset.color = color;
        item.style.backgroundColor = color;
        item.classList.add("item");
        items.push(item);
    }
    colorPalette.append(...items);
};

createPaletteItems();


//todo: Тут відбувається «магія» делегування
colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
    // console.log("event.target.nodeName = ", event.target.nodeName); 
    if (event.target.nodeName !== "BUTTON") {
        return;
    };

    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
    console.log(`Вибраний колір ${selectedColor}`);
};
console.log("--------------------------------------------------------------------");