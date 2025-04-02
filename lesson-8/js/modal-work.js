//! Бєк-дроп з модальним вікном
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        backdrop: document.querySelector("[data-backdrop]"),
        modal: document.querySelector("[data-modal]"),
        form: document.querySelector(".modal-form"),
        submitBtn: document.querySelector(".modal-form__button-submit"),
        modalThanks: document.querySelector("[data-modal-thanks]"),
        closeModalThanksBtn: document.querySelector("[data-modal-thanks-close]"),
    };
    

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.form.addEventListener("submit", handleFormSubmit);
    refs.closeModalThanksBtn.addEventListener("click", toggleModal);
    

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
        //! Добавляем класс is-hidden на элемент modalThanks если его нет
        if (!refs.modalThanks.classList.contains('is-hidden')) {
            refs.modalThanks.classList.add('is-hidden');
        }
    }


    //! Логіка кліків в бєкдроп та модальне вікно
    isOnlyBackdrop = true;
    
    //! Клік в бєкдроп
    refs.backdrop.addEventListener("click", logBackdropClick);
    
    function logBackdropClick() {
        if (isOnlyBackdrop) {
            console.log("Це клік в бєкдроп");
            toggleModal();
        };
        isOnlyBackdrop = true;
    }
    
    //! Клік в модальне вікно
    refs.modal.addEventListener("click", logModalClick);
    
    function logModalClick() {
        isOnlyBackdrop = false;
        if (!isOnlyBackdrop) {
        console.log("Це клік в модальне вікно");
        };
    }

    
    //! Додаткові налаштування форми
    function handleFormSubmit(event) {
        //! Запобігаємо перезавантаженню сторінки після надсилання форми
        event.preventDefault();  

        //! Очищення полів форми після надсилання форми
        refs.form.reset();

        //! Додатковий функціонал – закриття модального вікна після відправлення форми
        // toggleModal();

        //! Додатковий функціонал – відкриття модального вікно-подяки після відправлення форми
        refs.modalThanks.classList.toggle("is-hidden");
    }

})();

//! Додатковий функціонал – закриття модального вікна при натисканні клавіші <Escape>
document.addEventListener("keydown", logKeyEscapeClick)

function logKeyEscapeClick(event) {
    if (event.code === "Escape") {
        // console.log("Натиснута клавіша <Escape>");
        toggleModal();
    };
}

// function logBackdropClick() {
//     if (isOnlyBackdrop) {
//         console.log("Це клік в бєкдроп");
//         toggleModal();
//     };
//     isOnlyBackdrop = true;
// }

// console.log("-----------------------------------------------------------------------------------------------------");
// //! Клавіші-модифікатори
// console.warn("Клавіші-модифікатори​:");
// //? ✴️ Для обробки комбінації клавіш,
// //? наприклад Ctrl + s або будь-якої іншої,
// //? на об'єкті події є властивості
// //? ctrlKey, altKey, shiftkey і metaKey,
// //? що зберігають булеве значення,
// //? яке сигналізує про те, чи була затиснута клавіша-модифікатор.
// //? ✴️ Деякі комбінації клавіш 
// //? можуть конфліктувати з поведінкою браузера за замовчуванням. 
// //? Наприклад, Ctrl + d або Command + d робить закладку. 
// //? Потрібно намагатися проектувати систему комбінацій сторінки таким чином,
// //?  щоб вона не перетиналася із вбудованою у браузері. 
// //? Але, у крайньому разі, поведінку за замовчуванням можна скасувати, 
// //? викликавши метод event.preventDefault().
// document.addEventListener("keydown", event => {
//     event.preventDefault();
//     if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//         console.warn("«Ctrl + s» or «Command + s» combo");
//     }
// });
// Escape