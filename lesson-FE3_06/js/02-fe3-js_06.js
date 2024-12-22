console.log(
    '%c 2.Цикл do...while ',
    'color: white; background-color: #D33F49',
);

//! 2.Цикл do...while - цикл з постумовою
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_06/images/do-while.png");
//? - цикл, в якому умова перевіряється ПІСЛЯ виконання тіла циклу.
//? З цього випливає, що тіло завжди виконується хоча б один раз.
let counter = 0;
// counter = 4; //? після перевірки умови(хибна) - цикл виконається ОДИН раз

do {
    console.log("ТІЛО ЦИКЛУ --> counter(ДО):", counter);
    counter += 1;
    console.log("ТІЛО ЦИКЛУ --> counter(ПІСЛЯ):", counter);
} while (counter < 4);

console.log("____ ПОЗА ЦИКЛУ --> counter:", counter);
console.log("-----------------------------------------");


//? ПРИКЛАД:
let password = "";

do {
    password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ви ввели пароль: ", password);
alert(`Ви ввели пароль:  ${password}`);
