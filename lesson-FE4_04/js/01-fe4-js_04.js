console.log(
    '%c 1.Node.js. Встановлення. ',
    'color: white; background-color: #D33F49',
);

//! Встановлення Node.js
console.warn("Встановлення Node.js: \n https://nodejs.org/en/download/");
//? ✴️ Node.js — це відкрите середовище виконання JavaScript,
//? яке дозволяє виконувати JavaScript на стороні сервера.
//? Це означає, що з Node.js можна створювати серверні додатки,
//? які можуть обробляти запити від клієнтів, доступ до баз даних,
//? роботу з файлами, мережеві операції та багато іншого.

//? ✴️ Node.js був створений на основі двигуна V8,
//? який є основою для браузера Google Chrome.
//? Це дозволяє виконувати JavaScript з високою швидкістю і ефективністю.
//? Node.js також має велику кількість розширень (модулів),
//? які дозволяють легко додавати різноманітні функції до ваших додатків.


//! Перевірка версії Node.js
console.warn("Перевірка версії Node.js:");
console.log(
    `%c
    node -v
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------");



//! Створення нового файла test.js
console.warn("Створення нового файла test.js:");
console.log(
    `%c
    touch test.js
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------");



//! Запуск файлу test.js
console.warn("Запуск файлу test.js:");
console.log(
    `%c
    node test.js
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------");



//! Основні команди
console.warn("Основні команди:");
console.log(
    `%c
    pwd — показує поточну дерикторію, де ви знаходитесь
    ls — показати які файли і папки
    clear — очистити термінал або ctrl+l
    ls -l — показати всі файли
    ls -la — показати разом з прихованими файлами
    cd — навгація по папкам
    cd D: — виходить на диск D
    touch — створює новий файл
    mv — переіменовує/переміщує файл або папку
    mkdir — створює нову папку
    rm — видаляє файл
    rmdir — видаляє папку
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------");


//! JavaScript поза браузером - REPL (read-eval-print loop)
console.warn("JavaScript поза браузером - REPL (read-eval-print loop):");
//? ✳️ Node.js дозволяє виконувати JavaScript-код поза браузером.
//? Відкрийте будь-який термінал і виконайте команду node,
//? запуститься REPL (read-eval-print loop)
//? - інтерактивне середовище виконання JS-коду:
console.log(
    `%c
    $ node
    Welcome to Node.js v20.17.0.
    Type ".help" for more information.
    >
    (To exit, press Ctrl+C again or Ctrl+D or type .exit)
    >const message = "Hello world!"
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------");


//! Приклад використання REPL (read-eval-print loop)
console.warn("Приклад використання REPL (read-eval-print loop):");
console.log(
    `%c
    > const message = "Hello world!"
    undefined
    > console.log(message)
    Hello world!
    undefined
    >
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------");
