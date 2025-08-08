console.log(
    '%c 1.Promise.all(). ',
    'color: white; background-color: #D33F49',
);

//! Статичні методи класу Promise
//? ✳️ У класі Promise існують 6 статичних методів.
//? Давайте розглянемо варіанти їх використання.
//? В одному випадку необхідно дочекатися виконання усіх відразу,
//? і тільки потім обробляти їх результат,
//? а в іншому — достатньо дочекатися виконання будь-якого,
//? проігнорувавши інші тощо.
//? Саме для цих випадків клас Promise має статичні методи
//? для роботи з одним або групою промісів.


//! Promise.all()
//? ✴️ Приймає масив промісів, очікує їх виконання і повертає проміс.
//? Якщо ❗️ВСІ❗️ проміси виконаються успішно, проміс, що повертається,
//? перейде у стан fulfilled, а його значенням
//? буде масив результатів виконання кожного промісу.
//? У разі, коли ❗️ХОЧА Б ОДИН❗️ з промісів буде відхилений,
//? проміс, що повертається, перейде у стан rejected,
//? а його значенням буде помилка.

//? ✳️ Напишемо функцію, яка приймає текст для resolve()
//? і затримку в мілісекундах,
//? а результатом свого виконання повертає проміс.
//? Потім створимо два проміси з різним часом затримки.
//? ✳️ Колбек методу then() буде викликаний через три секунди, 
//? тобто коли виконається проміс promiseB. 
//? Проміс promiseA виконається через одну секунду 
//? і просто чекатиме. 
//? Якщо будь-який з промісів буде відхилений, 
//? то буде викликаний колбек методу catch().
console.log(
    `%c
    Promise.all([promise1, promise2, promise3, ...])
    `,
    'color: blue; font-size: 18px',
);

const delayTime = 3000; //* ✅
// const delayTime = 2500; //! ❌

const makePromise = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay <= delayTime) {
                resolve(text);
            } else {
                reject("❌ Error!");
            };
        }, delay)  
    });
};

// todo: var.1
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// todo: var.2
const promiseA = makePromise("promiseA value", 3000);
const promiseB = makePromise("promiseB value", 1000);

Promise.all([promiseA, promiseB])
    .then(value => console.log("Promise.all([promiseA, promiseB]).then(value):", value)) //! ["promiseA value", "promiseB value"]
    .catch(error => console.log(error));
console.log("------------------------------------------------------------------------------------------");
