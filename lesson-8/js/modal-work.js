//! Бєк-дроп з модальним вікном
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        backdrop: document.querySelector("[data-backdrop]"),
        modal: document.querySelector("[data-modal]"),
        form: document.querySelector(".modal-form"),
        submitBtn: document.querySelector(".modal-form__button-submit"),
        modal: document.querySelector("[data-modal]"),
    };
    
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.form.addEventListener("submit", handleFormSubmit);
    
    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
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

    function handleFormSubmit(event) {
        //! Запобігаємо перезавантаженню сторінки після надсилання форми
        event.preventDefault();  

        //! Очищення полів форми після надсилання форми
        refs.form.reset();

        //! Додатковий функціонал – закриття модального вікна після відправлення форми
        // toggleModal();
    }
})();

