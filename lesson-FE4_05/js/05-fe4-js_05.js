console.log(
    '%c 5.Бібліотека BasicLightbox. ',
    'color: white; background-color: #D33F49',
);

//! Бібліотека BasicLightbox 
console.warn("Бібліотека BasicLightbox: \n https://basiclightbox.electerious.com/");
console.warn("Бібліотека BasicLightbox на NPM: \n https://www.npmjs.com/package/basiclightbox");

//! Встановлення бібліотеки BasicLightbox
console.warn("Встановлення бібліотеки BasicLightbox:")
console.log(
    `%c
    npm i basiclightbox
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------------------------------------");


//! Використання бібліотеки BasicLightbox
console.warn("Використання бібліотеки Chart.js: \n https://www.npmjs.com/package/basiclightbox#instance-api");
console.log(
    `%c
        HTML:
    <button id="btn-basic-light-box"">
        Open image by BasicLightBox
    </button>
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------------------------------------");

console.log(
    `%c
            JS (src/main.js):
    import * as basicLightbox from 'basiclightbox';
    import 'basiclightbox/dist/basicLightbox.min.css';

    const image = '<img src="https://images.pexels.com/photos/16330147/pexels-photo-16330147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">';
    const instance1 = basicLightbox.create(image);

    const btnBasicLightBox = document.getElementById('btn-basic-light-box');
    btnBasicLightBox.addEventListener('click', () => {
        instance1.show();
    });
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------------------------------------");
