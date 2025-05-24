console.log(
    '%c 2.Відкладене завантаження (з бібліотекою LazySizes) ',
    'color: white; background-color: #D33F49',
);

//! Підключення бібліотеки LazySizes
console.warn("Бібліотека LazySizes: \n https://afarkas.github.io/lazysizes/index.html");
console.warn("Підключення бібліотеки LazySizes через CDN: \n https://cdnjs.com/libraries/lazysizes");
//? ✴️ Бібліотека lazysizes самоініціалізується
//? при завантаженні на сторінку.
//? Тобто для базового використання в JavaScript
//? нічого робити непотрібно.
//? Повний список її можливостей наведений в документації.
console.log(
    `%c
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer">
    </script>
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");


//! Використання бібліотеки LazySizes (крок-1)
console.warn("Використання бібліотеки LazySizes (крок-1):");
//? ✴️ Усім зображенням, які необхідно завантажувати відкладено, 
//? задаємо клас lazyload і замінюємо атрибут src на data-src. 
//? Це необхідно бібліотеці lazysizes для правильної роботи.
console.log(
    `%c
    <img
        class="lazyload"
        data-src="path/to/my-image.jpg"
        alt="Generic alt"
    />
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");


//! Використання бібліотеки LazySizes (крок-2)
console.warn("Використання бібліотеки LazySizes (крок-2):");
//? ✴️ Доки зображення завантажується можна 
//? показувати заповнювач низької якості. 
//? Ця техніка називається LQIP 
//? (Low Quality Image Placeholder). 
//? Існує багато варіантів реалізації LQIP, 
//? але для початку достатньо буде показувати 
//? один стандартний заповнювач, замість усіх зображень. 
//? Для цього додаємо атрибут src, 
//? значенням якого буде посилання на це зображення-заповнювач.
console.log(
    `%c
    <img
        class="lazyload"
        src="path/to/lqip-placeholder.jpg"
        data-src="path/to/my-image.jpg"
        alt="Generic alt"
    />
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");


//! Використання бібліотеки LazySizes (крок-3)
console.warn("Використання бібліотеки LazySizes (крок-3):");
//? ✴️ Коли зображення було завантажене, 
//? бібліотека lazysizes додає елементу клас lazyloaded. 
//? Це можна використовувати для застосування 
//? CSS-ефектів в момент завантаження зображення:

console.log(
    `%c
    .blur-up {
        filter: blur(5px);
        transition: filter 400ms;
    }

    .blur-up.lazyloaded {
        filter: blur(0);
    }
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");


//! Використання бібліотеки LazySizes (крок-4)
console.warn("Використання бібліотеки LazySizes (крок-4):");
//? ✴️ Після оголошення стилів, додаємо клас blur-up тегам <img>.
console.log(
    `%c
    <img
        class="lazyload blur-up"
        src="path/to/lqip-placeholder.jpg"
        data-src="path/to/my-image.jpg"
        alt="Generic alt"
    />
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");
