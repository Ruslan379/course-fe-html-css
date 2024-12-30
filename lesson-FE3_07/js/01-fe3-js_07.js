console.log(
    '%c 1.Масиви. Доступ до елементів. Перевизначення ',
    'color: white; background-color: #D33F49',
);
    
//! Масиви
//? Масив - структура даних для зберігання
//? і маніпулювання колекцією індексованих значень.
//? Використовується для зберігання впорядкованих
//? колекцій даних, наприклад, списку курортів,
//? товарів, клієнтів в готелі тощо.

//? Створення масива
//? Масив оголошується і береться
//? у квадратні дужки[] - літералом масиву.
//? Всередині дужок кожен елемент масиву розділяється комою.
const clients = ["Mango", "Poly", "Ajax"];
console.log("clients:", clients); //! ["Mango", "Poly", "Ajax"]
console.log("-----------------------------------------");


//! Доступ до елементів
console.warn("Доступ до елементів: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_06/images/while.png");
//? Для доступу до значення елемента масиву 
//? використовується синтаксис квадратних дужок масив[індекс]. 
//? Між іменем змінної, що зберігає масив, 
//? і квадратними дужками не повинно бути пробілу.
const newClients = ["Mango", "Poly", "Ajax"];
console.log("newClients:", newClients); //! ["Mango", "Poly", "Ajax"]

//? Зазначаючи в дужках індекс елемента, ми отримуємо його значення
console.log("newClients[0]:", newClients[0]); //! Mango
console.log("newClients[1]:", newClients[1]); //! Poly
console.log("newClients[2]:", newClients[2]); //! Ajax
console.log("-----------------------------------------");


//! Перевизначення
console.warn("Перевизначення елементів масиву:");
const allClients = ["Mango", "Poly", "Ajax"];
console.log("allClients --> ДО:", allClients); //! ["Mango", "Poly", "Ajax"]
allClients[0] = "Kiwi";
allClients[1] = "Pango";
console.log("allClients --> ПІСЛЯ:", allClients);; //! ["Kiwi", "Pango", "Ajax"]
