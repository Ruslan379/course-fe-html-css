console.log(
    '%c 3.Патерн \«Об\'єкт параметрів\». ',
    'color: white; background-color: #D33F49',
);

//! Патерн «Об'єкт параметрів»
//? ✴️ Якщо функція приймає більше двох-трьох аргументів,
//? дуже просто заплутатись, в якій послідовності і що передавати.
//? В результаті виходить дуже неочевидний код в місці її виклику.
function doStuffWithBook1(title, numberOfPages, downloads, rating, isPublic) {
    //todo: Робимо щось з параметрами:
    console.log("title:", title);
    console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

//? ❓❓❓ Що таке The Last Kingdom? Що таке 736? Що таке 10283? Що таке 8.38? Що таке true?
doStuffWithBook1("The Last Kingdom", 736, 10283, 8.38, true);
console.log(". . . . . . . . . . . . . . . . .");


//? ✳️ Патерн «Об'єкт параметрів» допомагає вирішити цю проблему,
//? замінюючи набір параметрів всього одним об'єктом з іменованими властивостями.
const book = {
    title: "The Last Kingdom",
    numberOfPages: 736,
    downloads: 10283,
    rating: 8.38,
    isPublic: true,
};
console.log("book:", book);
console.log("`  `  `  `  `  `  `  `  `  `  `  `");

function doStuffWithBook2(bookObj) {
    //todo: // Робимо щось з властивостями об'єкта:
    console.log("bookObj.title:", bookObj.title);
    console.log("bookObj.numberOfPages:", bookObj.numberOfPages);
    console.log("bookObj.downloads:", bookObj.downloads);
    console.log("bookObj.rating:", bookObj.rating);
    console.log("bookObj.isPublic:", bookObj.isPublic);
};

doStuffWithBook2(book);
console.log(". . . . . . . . . . . . . . . . .");


//? ✳️ Ще один плюс у тому, 
//? що можна деструктуризувати об'єкт в параметрі book. 
//? Це можна зробити в тілі функції.
function doStuffWithBook3(bookObj) {
    const { title, numberOfPages, downloads, rating, isPublic } = bookObj;
    //todo: Робимо щось вже з значеннями, деструктуризуваними з об'єкта:
    console.log("title:", title);
    console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

doStuffWithBook3(book);
console.log(". . . . . . . . . . . . . . . . .");


//? ✳️ Або відразу деструктуризуємо об'єкт
//? в сигнатурі (підписі) функції - немає різниці.
function doStuffWithBook4({
    title,
    numberOfPages,
    downloads,
    rating,
    isPublic,
}) {
    //todo: Робимо щось вже з значеннями, деструктуризуваними з об'єкта в сигнатурі (підписі) функції:
    console.log("title:", title);
    console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

doStuffWithBook4(book);
console.log("------------------------------");
