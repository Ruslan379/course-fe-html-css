console.log(
    '%c 2.Метод JSON.stringify(). ',
    'color: white; background-color: #D33F49',
);

//! Метод JSON.stringify()
console.log(
    `%c
    JSON.stringify(object)
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------");

//? ✴️ Приймає значення і перетворює його у JSON.
//? Значенням може бути число, буль, null, масив або об'єкт.
//? Рядки - це вже валідний JSON, тому в їх перетворенні немає сенсу.

//? ✳️ Результат виклику JSON.stringify(dog) - це валідний JSON (рядок),
//? який може бути збережений у файл або переданий мережею.
const dog1 = {
    name: "Mango",
    age: 3,
    isHappy: true,
};

const dogJSON1 = JSON.stringify(dog1);
console.log("dogJSON1:", dogJSON1);  //! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");


//? ✴️ Не будь-який JavaScript об'єкт
//? може бути перетворений один до одного у JSON.
//? Наприклад, якщо в об'єкта є методи,
//? то при перетворенні вони будуть проігноровані.
const dog2 = {
    name: "Mango",
    age: 3,
    isHappy: true,
    bark() {
        console.log("Woof!");
    },
};

const dogJSON2 = JSON.stringify(dog2);
console.log("dogJSON2:", dogJSON2); //! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");


//? ✴️ Також, при спробі перетворити функцію в JSON, результатом буде undefined.
const functionJSON = JSON.stringify(() => console.log("Well, this is awkward")); 
console.log("functionJSON:", functionJSON); //! undefined
console.log("--------------------------------------------------");
