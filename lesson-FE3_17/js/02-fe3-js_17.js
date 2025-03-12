console.log(
    '%c 2.Навігація по DOM. ',
    'color: white; background-color: #D33F49',
);

//! Навігація по DOM
//? ✳️ DOM надає широкий спектр можливостей
//? для роботи з елементом і його вмістом,
//? але для цього, спочатку потрібно
//? отримати посилання на нього.
//? Доступ до DOM починається з об'єкта ❗️document❗️,
//? з нього можна дістатися до будь-яких елементів.
//? ✴️ ❗️document❗️ - це частина глобального об'єкта window,
//? який доступний у скрипті, коли він виконується в браузері.
//? Так само як alert, console.log, prompt і багато інших.
//? ✴️ Елементи DOM-дерева мають ієрархічне
//? відношення один до іншого.
//? Для опису відносин використовуються терміни:
//? 🔸 предок (ancestor),
//? 🔸 нащадок (descendant),
//? 🔸 батько (parent),
//? 🔸 дитина (child)
//? 🔸 і сусід (sibling).
console.warn(`Навігаця між вузлами DOM: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_17/images/dom-traversal.png"}`);
//? ✴️ Для навігації по цій ієрархії елементи мають наступні властивості:
console.log(
    `%c
    elem.parentNode - вибере батьківський elem.

    elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
    elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.

    elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
    elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.

    elem.previousSibling - вибере елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.previousElementSibling - вибере вузол-елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.nextSibling - вибере елемент «праворуч» (той, що нижче) від elem (його наступного сусіда)
    elem.nextElementSibling - вибере вузол-елемент «праворуч» (той, що нижче) від elem (його наступного сусіда).
    `,
    'color: darkred; font-size: 16px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


//! Приклад навігації по DOM-дереву
console.warn("Приклад навігації по DOM-дереву:");
//? ✳️ Розглянемо такий HTML-код для навігації по DOM-дереву:
console.log(
    `%c
    <ul class="list">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Fifth item</li>
    </ul>
    `,
    'color: blue; font-size: 16px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


//! Навігація або пошуку елементів в DOM-дереві
console.warn("Навігація або пошуку елементів в DOM-дереві:");
// console.log(document);
console.log("document:", document);

const body = document.body;
// console.log(body);
console.log("body = document.body:", body);
console.log("document.body.parentNode:", document.body.parentNode); //! </html>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const list = document.querySelector(".list");
// console.log(list);
console.log('list = document.querySelector(".list"):', list);
console.log("list.parentNode:", list.parentNode); //! <div class="part part_2">...</div>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const listItemsNodes = list.childNodes;
// console.log(listItemsNodes);
console.log('listItemsNodes = list.childNodes:', listItemsNodes); //! [text, li, text, li, text, li, text, li, text, li, text]

const listItems = list.children;
// console.log(listItems);
console.log('listItems = list.children:', listItems); //! HTMLCollection(5) [li, li, li, li, li]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const firstListChild = list.firstChild;
// console.log(firstListChild);
console.log('firstListChild = list.firstChild:', firstListChild); //! #text 

const firstListElementChild = list.firstElementChild;
// console.log(firstListElementChild);
console.log('firstListElementChild = list.firstElementChild:', firstListElementChild); //! <li>First item</li>

const lastListChild = list.lastChild;
// console.log(lastListChild);
console.log('lastListChild = list.lastChild:', lastListChild); //! #text 

const lastListElementChild = list.lastElementChild;
// console.log(lastListElementChild);
console.log('lastListElementChild = list.lastElementChild:', lastListElementChild); //! <li>Fifth item</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const previousListSibling = list.previousSibling;
// console.log(previousListSibling);
console.log('previousListSibling = list.previousSibling:', previousListSibling); //! #text 

const previousListElementSibling = list.previousElementSibling;
// console.log(previousListElementSibling);
console.log('previousListElementSibling = list.previousElementSibling:', previousListElementSibling); //! <h2 class="title-section">...</h2>

const nextListSibling = list.nextSibling;
// console.log(nextListSibling);
console.log('nextListSibling = list.nextSibling:', nextListSibling); //! #text 

const nextListElementSibling = list.nextElementSibling;
// console.log(nextListElementSibling);
console.log('nextListElementSibling = list.nextElementSibling:', nextListElementSibling); //! <button class="button-2" style="background-color: green; color: yellow; box-shadow: rgb(150, 150, 150) 3px 3px 4px;">On</button>

//? ❗️❗️❗️ DOM-колекції, 
//? як-от childNodes і children 
//? - псевдомасиви (NodeList), 
//? у них немає більшості методів масиву.
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");
