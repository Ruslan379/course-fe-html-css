//! ---------------------------- Пояснення того, як працює скрипт: ----------------------------
//? 1.Кешування:
//* Скрипти можуть кешуватися браузером.
//* Щоб уникнути цього, додаємо унікальний параметр ? t = ${ Date.now() } до URL.

//? 2.Видалення старого скрипта:
//* Перед завантаженням нового скрипта видаляємо старий
//* за допомогою existingScript.remove().

//? 3.Унікальні атрибути:
//* Додаємо атрибут data - src для відстеження вихідного шляху скрипту.
//* Це допомагає керувати скриптами в DOM.

//? 4.Поведінка кнопок:
//* При кожному третьому натисканні(коли кнопка перемикається назад на On) 
//* скрипт завантажується заново з унікальною URL - адресою і виконується.

//todo      Результат:
//* При першому натисканні скрипт завантажується та виконується.
//* При другому натисканні скрипт не завантажується, кнопка перемикається у стан Off.
//* При третьому натисканні скрипт знову завантажується з оновленим URL - адресою і виконується.
//! _______________________________________________________________________________________________

document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelector('.button-1');
    const button2 = document.querySelector('.button-2');
    const button3 = document.querySelector('.button-3');
    const button4 = document.querySelector('.button-4');
    const button5 = document.querySelector('.button-5');

    //! Функція для завантаження та виконання скрипту
    const loadAndExecuteScript = (scriptSrc) => {
        const existingScript = document.querySelector(`script[data-src="${scriptSrc}"]`);
        if (existingScript) {
            // console.log('Видаляємо старий скрипт');
            existingScript.remove(); //! Видаляємо старий скрипт, якщо він є.
        }
        //! Додаємо унікальний параметр uniqueSrc для запобігання кешування.
        const uniqueSrc = `${scriptSrc}?t=${Date.now()}`;
        const newScript = document.createElement('script');
        newScript.src = uniqueSrc;
        newScript.type = 'module'; //! Змінюємо атрибут type для виконання скрипта.
        newScript.setAttribute('data-src', scriptSrc); //! Для зручного пошуку завантаженого скрипту
        document.body.appendChild(newScript);
    };

    //! Оброблювач події для Кнопки-1
    button1.addEventListener('click', () => {
        if (button1.textContent === 'Off') {
            button1.textContent = 'On';
            button1.style.backgroundColor = 'green';
            button1.style.color = 'yellow';
            button1.style.boxShadow = '3px 3px 4px #969696';
            loadAndExecuteScript('./js/test-1.js');
        } else {
            button1.textContent = 'Off';
            button1.style.backgroundColor = '#b70000';
            button1.style.color = 'white';
            button1.style.boxShadow = '6px 6px 8px #636363';
        }
    });

    //! Оброблювач події для Кнопки-2
    button2.addEventListener('click', () => {
        if (button2.textContent === 'Off') {
            button2.textContent = 'On';
            button2.style.backgroundColor = 'green';
            button2.style.color = 'yellow';
            button2.style.boxShadow = '3px 3px 4px #969696';
            loadAndExecuteScript('./js/test-2.js');
        } else {
            button2.textContent = 'Off';
            button2.style.backgroundColor = '#b70000';
            button2.style.color = 'white';
            button2.style.boxShadow = '6px 6px 8px #636363';
        }
    });

    //! Оброблювач події для Кнопки-3
    button3.addEventListener('click', () => {
        if (button3.textContent === 'Off') {
            button3.textContent = 'On';
            button3.style.backgroundColor = 'green';
            button3.style.color = 'yellow';
            button3.style.boxShadow = '3px 3px 4px #969696';
            loadAndExecuteScript('./js/01-vars.js');
        } else {
            button3.textContent = 'Off';
            button3.style.backgroundColor = '#b70000';
            button3.style.color = 'white';
            button3.style.boxShadow = '6px 6px 8px #636363';
        }
    });

    //! Оброблювач події для Кнопки-4
    button4.addEventListener('click', () => {
        if (button4.textContent === 'Off') {
            button4.textContent = 'On';
            button4.style.backgroundColor = 'green';
            button4.style.color = 'yellow';
            button4.style.boxShadow = '3px 3px 4px #969696';
            loadAndExecuteScript('./js/02-types.js');
        } else {
            button4.textContent = 'Off';
            button4.style.backgroundColor = '#b70000';
            button4.style.color = 'white';
            button4.style.boxShadow = '6px 6px 8px #636363';
        }
    });

    //! Оброблювач події для Кнопки-5
    button5.addEventListener('click', () => {
        if (button5.textContent === 'Off') {
            button5.textContent = 'On';
            button5.style.backgroundColor = 'green';
            button5.style.color = 'yellow';
            button5.style.boxShadow = '3px 3px 4px #969696';
            loadAndExecuteScript('./js/03-input.js');
        } else {
            button5.textContent = 'Off';
            button5.style.backgroundColor = '#b70000';
            button5.style.color = 'white';
            button5.style.boxShadow = '6px 6px 8px #636363';
        }
    });


});
