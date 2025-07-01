//! Бєк-дроп з модальним вікном
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        modal: document.querySelector("[data-modal]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    };

    //! Додатковий функціонал – закриття модального вікна при натисканні клавіші <Escape>
    document.addEventListener("keydown", logKeyEscapeClick)

    function logKeyEscapeClick(event) {
        if (event.code === "Escape") {
            console.log("Натиснута клавіша <Escape>");
            toggleModal();
        };
    }
})();