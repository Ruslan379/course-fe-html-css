console.log(
    '%c 2.Область видимості \n  (variable scope)   ',
    'color: white; background-color: #D33F49',
);

//! 2.Область видимості (variable scope)
//? Область видимості змінних (variable scope)
//? - доступність змінних в певному місці коду.

//? Глобальна область видимості використовується за замовчуванням.
//? Кожен має доступ до змінних, оголошених в ній.
//? Наприклад, змінна value оголошена у глобальній області видимості,
//? тобто поза будь - яким блоком, і доступна в будь - якому місці після оголошення.
const value1 = 11;

if (true) {
    // const value1 = 101; //todo: це локальна(блокова) змінна
    console.log("Block scope: ", value1); //! 11 або 101
}

console.log("Global scope: ", value1); //! 11
console.log("---------------------------");

//? Будь - яка конструкція, яка використовує
//? фігурні дужки { } (умови, цикли, функції тощо),
//? створює нову локальну область видимості, і змінні,
//? оголошені в цій області видимості, з використанням let або const,
//? - недоступні за межами цього блоку.
if (true) {
    const value2 = 22;
    console.log("Block scope: ", value2); //! 22
}

// console.log("Global scope: ", value2); //! Uncaught ReferenceError: value2 is not defined
console.log("---------------------------");

//? Глибина вкладеності областей видимості - необмежена,
//? і всі вони будуть працювати за одним принципом -
//? область видимості має доступ до всіх змінних,
//? оголошених вище по ієрархії вкладеності,
//? але не може отримати доступ до змінних,
//? оголошених у вкладених областях видимості.

//? Створимо декілька областей видимості
//? і дамо їм імена для наочності.
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_05/images/variable-scope.jpg");

const global = "global";

if (true) {
    const blockA = "block-A";

    //todo: Бачимо глобальну + локальну A
    console.log("Block scope A:", global); //! "global"
    console.log("Block scope A:", blockA); //! block-A
    
    //todo: Змінні blockB і blockC не знайдені в доступних областях видимості.
    //todo: Буде помилка звернення до змінної.
    // console.log(blockB); //! ReferenceError: blockB is not defined
    // console.log(blockC); //! ReferenceError: blockC is not defined
    console.log("-----------------------");

    if (true) {
        const blockB = "block-B";

        //todo: Бачимо глобальну + зовнішню A + локальну B
        console.log("Block scope B:", global); //! "global"
        console.log("Block scope B:", blockA); //! "block-A"
        console.log("Block scope B:", blockB); //! "block-B"
        
        //todo: Змінна blockC не знайдена в доступних областях видимості.
        //todo: Буде помилка звернення до змінної.
        // console.log(blockC); //! ReferenceError: blockC is not defined
        console.log("-----------------------");
    }
}

if (true) {
    const blockC = "block-C";

    //todo: Бачимо глобальну + локальну C
    console.log("Block scope C:", global); //! "global"
    console.log("Block scope C:", blockC); //! "block-C"

    //todo: Змінні blockA і blockB не знайдені в доступних областях видимості.
    //todo: Буде помилка звернення до змінної.
    // console.log(blockA); //! ReferenceError: blockA is not defined
    // console.log(blockB); //! ReferenceError: blockB is not defined
    console.log("-----------------------");
}

//todo: Бачимо лише глобальну
console.log("Block scope GLOBAL:", global); //! "global"

//todo: Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
//todo: Буде помилка звернення до змінної.
console.log("Block scope GLOBAL:", blockA); //! ReferenceError: blockA is not defined
console.log("Block scope GLOBAL:", blockB); //! ReferenceError: blockB is not defined
console.log("Block scope GLOBAL:", blockC); //! ReferenceError: blockC is not defined
console.log("-----------------------");
