console.log(
    '%c 1.Використання шаблонізації ',
    'color: white; background-color: #D33F49',
);

//! Шаблонізація (templating) 
console.warn(`Шаблонізація (templating)​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_07/images/templating.webp"}`);

//? ✴️ Шаблонізація (templating) — метод зв'язування Даних і розмітки.
//? Зручний спосіб генерації HTML за Шаблоном і Даними.
//? Використовується на клієнті і сервері.

console.log(
    `%c
    Шаблонізація (templating) — 
    метод зв'язування Даних і розмітки.
    Зручний спосіб генерації HTML за Шаблоном і Даними.
    Використовується на клієнті і сервері.
    `,
    'color: blue; font-size: 18px',
);

//? ✳️ Принцип використання шаблону (шаблонізація)
//? передбачає наявність двох складових – Шаблону та Даних,
//? які підставлятимуться в цей Шаблон.
//? В результаті «злиття» Шаблона та Даних на виході
//? отримуємо необхідний контент.

//?     📌 Такий «інструмент» (шаблонізація) дуже зручний у двох випадках:
//? 🔸 1.Коли використовується один Шаблон та різні Дані.
//?     Прикладом може бути сайт будь-якого продукту
//?     з різними властивостями та характеристиками,
//?     наприклад, онлайн-магазин мобільних телефонів.
//?     У цьому випадку картка продукту - це Шаблон,
//?     в який підставляються різні Дані, такі
//?     як зображення, характеристики, властивості, ціна, знижка, тощо.
//? 🔸 2.Коли використовуються кілька різних Шаблонів і відповідні різні Дані для них.
//?     Прикладом може бути сайт з різноманітними групами товарів
//?     з різними властивостями та характеристиками, наприклад,
//?     онлайн-магазин побутової техніки.
//?     У цьому випадку картки товарів – це різні Шаблони,
//?     що відповідають кожній групі товарів, наприклад,
//?     телевізори, холодильники, пилососи тощо,
//?     в який підставляються, відповідні певній групі, різні Дані,
//?     такі як зображення, характеристики, властивості, ціна, знижка, тощо.

//? ✴️ Суть шаблонізації полягає в тому, щоб відокремити опис HTML від логіки.
//? Розмітка поміщається в окремі файли (Шаблони),
//? а в місцях, де необхідно вивести Дані,
//? розміщуються спеціальні псевдозмінні.
//? JS-код отримує Дані, завантажує потрібний Шаблон
//? і замінює в ньому псевдозмінні на ці відповідні Дані.

console.log(
    `%c
    Суть шаблонізації полягає в тому,
    щоб відокремити опис HTML від логіки.
    Розмітка поміщається в окремі файли (Шаблони),
    а в місцях, де необхідно вивести Дані,
    розміщуються спеціальні псевдозмінні.
    JS-код отримує Дані, завантажує потрібний Шаблон
    і замінює в ньому псевдозмінні на ці відповідні Дані.
    `,
    'color: blue; font-size: 18px',
);
console.log("---------------------------------------------------------------------------------------");
