//! Бєк-дроп з модальним вікном
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        backdrop: document.querySelector("[data-backdrop]"),
        modal: document.querySelector("[data-modal]"),
    };
    
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    
    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }



    //! Логіка кліків в бєкдроп та модальне вікно
    isOnlyBackdrop = true;
    
    //! клік в бєкдроп
    refs.backdrop.addEventListener("click", logBackdropClick);
    
    function logBackdropClick() {
        if (isOnlyBackdrop) {
            console.log("Це клік в бєкдроп");
            toggleModal();
        };
        isOnlyBackdrop = true;
    }
    
    //! клік в модальне вікно
    refs.modal.addEventListener("click", logModalClick);
    
    function logModalClick() {
        isOnlyBackdrop = false;
        if (!isOnlyBackdrop) {
        console.log("Це клік в модальне вікно");
        };
    }
    
})();