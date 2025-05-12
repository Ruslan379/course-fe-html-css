// console.log('10.Практика:');
console.log(
  "%c 10.Практика: ",
  "color: white; background-color: #D33F49",
);

//! ПРАКТИКА-14 (Урок-14_JS)
//todo [Додаткове 14-1]
console.log(
  "%c [Додаткове 14-1] ",
  "color: yellow; background-color: #2274A5",
);
//? Повернути масив користувачів, вік (збережений у властивості age) яких
//? потрапляє у заданий діапазон від minAge до maxAge
const getUsersWithAge = (users, minAge, maxAge) => {
  //! твій код

};

console.log(getUsersWithAge(users, 20, 30)); //! [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); //! [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
console.log("--------------------------------------------------");



//todo [Додаткове 14-2]
console.log(
  "%c [Додаткове 14-2] ",
  "color: yellow; background-color: #2274A5",
);
//? З'ясувати, чи всі користувачі зараз активні (властивість isActive)
//? та повернути true, якщо так або false, якщо ні.
const isEveryUserActive = (users) => {
  //! твій код

};

console.log("Чи всі користувачі зараз активні? -", isEveryUserActive(users)); //! false
console.log("--------------------------------------------------");



//todo [Додаткове 14-3]
console.log(
  "%c [Додаткове 14-3] ",
  "color: yellow; background-color: #2274A5",
);
//? З'ясувати, чи є хоча б однин активний користувач (властивість isActive)
//? та повернути true, якщо так або false, якщо ні.
const isAnyUserActive = (users) => {
  //! твій код

};

console.log("Чи є хоча б однин активний користувач? -", isAnyUserActive(users)); //! true
console.log("--------------------------------------------------");
