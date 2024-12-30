console.log(
    '%c 1.Масиви.                     \n   Доступ до елементів.        \n   Перевизначення.             \n   Довжина масиву.             \n   Індекс останнього елемента. ',
    'color: white; background-color: #D33F49',
);

//! Масиви. Створення масиву
console.warn("Створення масиву:");
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
console.log("clients:", clients); //! ['Mango', 'Poly', 'Ajax']
console.log("-----------------------------------------");


//! Доступ до елементів
console.warn("Доступ до елементів: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_07/images/indexing-array-elements.jpg");
//? Для доступу до значення елемента масиву 
//? використовується синтаксис квадратних дужок масив[індекс]. 
//? Між іменем змінної, що зберігає масив, 
//? і квадратними дужками не повинно бути пробілу.
const newClients = ["Mango", "Poly", "Ajax"];
console.log("newClients:", newClients); //! ['Mango', 'Poly', 'Ajax']

//? Зазначаючи в дужках індекс елемента, ми отримуємо його значення
console.log("newClients[0]:", newClients[0]); //! Mango
console.log("newClients[1]:", newClients[1]); //! Poly
console.log("newClients[2]:", newClients[2]); //! Ajax
console.log("---------------------------------------------------------");


//! Перевизначення
console.warn("Перевизначення елементів масиву:");
const allClients = ["Mango", "Poly", "Ajax"];
console.log("allClients --> ДО:", allClients); //! ['Mango', 'Poly', 'Ajax']
allClients[0] = "Kiwi";
allClients[1] = "Pango";
console.log("allClients --> ПІСЛЯ:", allClients);; //! ['Kiwi', 'Pango', 'Ajax']
console.log("---------------------------------------------------------");


//! Довжина масиву
console.warn("Довжина масиву:");
//? Довжина масиву, тобто кількість його елементів,
//? зберігається у властивості length.
//? Це динамічна величина, яка змінюється автоматично
//? під час додавання або видалення елементів.
const myClients = ["Mango", "Poly", "Ajax"];
console.log("myClients:", myClients); //! ['Mango', 'Poly', 'Ajax']
console.log("myClients.length:", myClients.length); //! 3

//? Властивість length можна змінювати безпосередньо:
//? Якщо встановити для властивості length значення,
//? що перевищує кількість елементів в масиві,
//? нові елементи будуть додані з початковими значеннями undefined.
//? Якщо задати довжину масиву менше ніж поточна
//? кількість елементів в масиві то всі елементи,
//? що "не влізли" в нову довжину просто видаляються.
myClients.length = 5;
console.log("myClients.length:", myClients.length); //! 5
console.log("myClients:", myClients); //! ['Mango', 'Poly', 'Ajax', empty × 2]

myClients.length = 2;
console.log("myClients.length:", myClients.length); //! 2
console.log("myClients:", myClients); //! ['Mango', 'Poly']
console.log("---------------------------------------------------------");


//! Індекс останнього елемента
console.warn("Індекс останнього елемента:");
//? Для того, щоб отримати значення останнього елемента,
//? застосовується наступний підхід - довжина масиву
//? завжди на одиницю більша, ніж індекс останнього елемента.
//? Використовуючи формулу довжина_масиву - 1, можна отримати
//? значення останнього елемента масиву довільної довжини.
const allMyClients = ["Mango", "Poly", "Ajax"];
console.log("allMyClients:", allMyClients); //! ['Mango', 'Poly', 'Ajax']

const lastElementIndex = allMyClients.length - 1;
console.log("Останній індекс:", lastElementIndex); //! 2
console.log("Останній єлемент:", allMyClients[lastElementIndex]); //! "Ajax"
console.log("---------------------------------------------------------");
