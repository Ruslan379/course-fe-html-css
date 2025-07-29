console.log(
    '%c 7.Приклади вимірювання часу. ',
    'color: white; background-color: #D33F49',
);

//! Вимірювання часу за допомогою new Date()
console.warn("Вимірювання часу за допомогою new Date():");
//? ✴️ Для вимірювання часу можна використовувати
//? екземпляр класу new Date():
const start1 = new Date(); //todo: Початок вимірювання часу
console.log("start1:", start1);
console.log("+start1:", +start1);

//todo: процес виконання циклу
for (let i = 0; i < 10000; i++) {
    let doSomething1 = i * i * i;
    // console.log("doSomething1:", doSomething1); //!
};

const end1 = new Date(); //todo: Кінець вимірювання часу
console.log("end1:", end1);
console.log("+end1:", +end1);

//? ---------------- пригадаємо ----------------
console.log(`"9" - "6" = ${"9" - "6"}`); //! 3
//? --------------------------------------------

//todo: Результат вимірювання часу
// alert(`Цикл-1 зайняв ${end1 - start1} мс`);
console.log(`Цикл-1 зайняв ${end1 - start1} мс`);
console.log("---------------------------------------------------------------------------");


//! Вимірювання часу за допомогою Date.now()
console.warn("Вимірювання часу за допомогою Date.now():");
//? ✴️ Для вимірювання часу краще використовувати
//? спеціальний метод Date.now(),
//? що повертає поточний timestamp:
const start2 = Date.now(); //todo: Початок вимірювання часу
console.log("start2:", start2);


//todo: Процес виконання циклу
for (let i = 0; i < 10000; i++) {
    let doSomething2 = i * i * i;
    // console.log("doSomething2:", doSomething2); //!
};

const end2 = Date.now(); //todo: Кінець вимірювання часу
console.log("end2:", end2);

//todo: Результат вимірювання часу
// alert(`Цикл-2 зайняв ${end1 - end1} мс`);
console.log(`Цикл-2 зайняв ${end2 - start2} мс`);
console.log("---------------------------------------------------------------------------");