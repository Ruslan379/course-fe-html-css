console.log(
    '%c 4.Використання властивостей елементів DOM-дерева. ',
    'color: white; background-color: #D33F49',
);

//! Використання властивостей елементів DOM-дерева
//? ✴️ Під час побудови DOM-дерева,
//? деякі стандартні HTML-атрибути
//? стають властивостями елементів.
//? Подивимося на декілька властивостей, які часто використовуються.
//? 🔸 hidden — контролює видимість елемента.
//? 🔸 value — містить поточний текстовий контент елементів форм: input, select, textarea.
//? 🔸 checked — зберігає стан чекбокса або радіо кнопки.
//? 🔸 name — зберігає значення вказане в HTML-атрибут name.
//? 🔸 src — шлях до зображення тега <img>.

//! Властивість textContent​
console.warn("Властивість textContent​:");
//? ✴️ elem.textContent 
//? - повертає текстовий контент всередині елемента. 
//? Доступний для читання і запису. 
//? Неважливо, що буде передано в textContent, 
//? дані завжди будуть записані як текст.
const elementFirst = document.querySelector(".menu-item2");
console.log("elementFirst:", elementFirst); //! <li class="menu-item2">logo</li>

const textElementFirst = elementFirst.textContent;
console.log("textElementFirst = elementFirst.textContent:", textElementFirst); //! logo
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const elementSecond = elementFirst.nextElementSibling;
console.log("elementSecond.textContent:", elementSecond.textContent); //! home
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

elementSecond.textContent = 'HOME-page';
console.log("elementSecond.textContent:", elementSecond.textContent); //! home
console.log("elementSecond = elementFirst.nextElementSibling:", elementSecond); //! <li class="menu-item2">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");


//! Властивість classList
console.warn("Властивість classList:");
//? ✴️ У властивості classList
//? зберігається об'єкт з методами
//? для роботи з класами елемента:
//? 🔸 elem.classList.contains(class)
//?  - повертає true або false,
//?  залежно від наявності класу class в елемента.
//? 🔸 elem.classList.add(class)
//?  - додає клас class до списку класів елемента.
//? 🔸 elem.classList.remove(class)
//?  - видаляє клас class зі списку класів елемента.
//? 🔸 elem.classList.toggle(class)
//?  - якщо відсутній клас class, то додає його,
//?  якщо - присутній, навпаки - видаляє.
//? 🔸 elem.classList.replace(oldClass, newClass)
//? - замінює існуючий клас oldClass на вказаний newClass.
//todo: Перевірка на наявність:
console.log('elementSecond.classList.contains("menu-item"):', elementSecond.classList.contains("menu-item")); //! false
console.log('elementSecond.classList.contains("menu-item2"):', elementSecond.classList.contains("menu-item2")); //! true
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Додавання:
elementSecond.classList.add("second"); //todo: додаємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2 second">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Видалення:
elementSecond.classList.remove("second"); //todo: видаляємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Додавання або видалення:
elementSecond.classList.toggle("second"); //todo: додаємо або видаляємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false або true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li> або <li class="menu-item2 second">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Заміна:
elementSecond.classList.replace("second", "secondNew"); //todo: замінюємо клас "second" на клас "secondNew"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false
console.log('elementSecond.classList.contains("secondNew"):', elementSecond.classList.contains("secondNew")); //! true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li> або <li class="menu-item2 secondNew">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");


//! Властивість style
console.warn("Властивість style:");
//? ✴️ Використовується для
//? читання та зміни інлайнових стилів.
//? Повертає об'єкт CSSStyleDeclaration,
//? який містить список усіх властивостей,
//? визначених тільки у вбудованих стилях елемента,
//? а не весь CSS❗️❗️❗️.
//? ❗️Під час запису властивості записуються в camelCase❗️, 
//? тобто background-color перетворюється на element.style.backgroundColor тощо.
const elementLast = document.querySelector(".menu-itemLast");

const textElementLast = elementLast.textContent;
console.log("textElementLast = elementLast.textContent:", textElementLast); //! blog

//todo var.1. Змінюємо властивості:
// elementLast.style.fontSize = "24px";
// elementLast.style.textAlign = "center";
// elementLast.style.color = "tomato";
// elementLast.style.backgroundColor = "teal";

//todo var.2. Змінюємо властивості:
const newStyle = {
    fontSize: "24px",
    textAlign: "center",
    color: "tomato",
    backgroundColor: "teal",
};
Object.assign(elementLast.style, newStyle);

console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("elementFirst:", elementLast); //! <li class="menu-itemLast" style="font-size: 24px; text-align: center; color: tomato; background-color: teal;">blog</li>
console.log("elementLast.style:", elementLast.style); //! CSSStyleDeclaration - inline styles object
console.log("----------------------------------------------------------------------------------------------------------------------------------------");
