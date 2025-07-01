//! Бєк-дроп з модальним вікном
const openModalBtn = document.querySelector("[data-modal-open]");
const modal = document.querySelector("[data-modal]");
const closeModalBtn = document.querySelector("[data-modal-close]");


openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
};
