const refs = {
  openModal: document.querySelector('.btn'),
  closeModalButton: document.querySelector('.close-btn'),
  closeModalBackGround: document.querySelector('.js-modal-backdrop'),
  modal: document.querySelector('.modal'),
};

refs.openModal.addEventListener('click', showModalWindow);
function showModalWindow(event) {
  refs.modal.classList.remove('modal-hidden');
}
refs.closeModalButton.addEventListener('click', hideModalWindow);
refs.closeModalBackGround.addEventListener('click', hideModalWindow);
function hideModalWindow(event) {
  refs.modal.classList.add('modal-hidden');
}
