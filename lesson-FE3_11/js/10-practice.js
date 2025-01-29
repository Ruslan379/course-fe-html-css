// console.log('10.Практика:');
console.log(
  "%c 10.Практика: ",
  "color: white; background-color: #D33F49",
);

//! ПРАКТИКА-11 (Урок-11_JS)
//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? Замінити весь код з використанням
//? функцій "Приготування меленої кави"
//? на об'ект {makingCoffee} "Приготування меленої кави" з
//? використанням методів та ключовим словом this.
console.warn("Функція \"Приготування кави\":");
let groundCoffee;
let hotWater;
let coffee;

//! 1 - функція "Приготування меленої кави"
function makesGroundCoffee() {
  groundCoffee = "30 грам";
  console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
  return groundCoffee;
};

//! 2 - функція "Приготування окропу (гарячої води)".
function makesHotWater() {
  hotWater = "250 мілілітрів";
  console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
  return hotWater;
};

//! 3 - функція "Приготування кави"
function makingCoffee() {
  if (!(makesGroundCoffee())) {
    return "Потрібна мелена кава!";
  };

  if (!(makesHotWater())) {
    return "Потрібна гаряча вода!";
  };

  coffee = groundCoffee + hotWater;
  coffee = "✅ Кава готова!"
  return coffee;
};

console.log(makingCoffee());
console.log("--------------------------------------------");

//! Код виконаного завдання
console.warn("Об'ект \"Приготування кави\":");
const makingCoffeeNew = {};
