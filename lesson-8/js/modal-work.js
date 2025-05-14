//! Бєк-дроп з модальним вікном
// (() => {
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
    let isOnlyBackdrop = true;
    
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


    //! Додатковий функціонал – закриття модального вікна при натисканні клавіші <Escape>
    document.addEventListener("keydown", logKeyEscapeClick)

    function logKeyEscapeClick(event) {
        if (event.code === "Escape") {
            console.log("Натиснута клавіша <Escape>");
            toggleModal();
        };
    }
// })();
