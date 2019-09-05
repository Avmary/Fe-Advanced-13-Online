const refs = {
  openModal: document.querySelector('.btn'),
  closeModalButton: document.querySelector('.close-btn'),
  closeModalBackGround: document.querySelector('.js-modal-backdrop'),
  modal: document.querySelector('.modal'),
};


function showModalWindow(event) {
  refs.modal.classList.remove('modal-hidden');
}

function hideModalWindow(event) {
  refs.modal.classList.add('modal-hidden');
}

function closeModalBackGround({ target }) {
  if (target.classList.contains('modal')) {
    refs.modal.classList.add('modal-hidden');
  }
  if (target.classList.contains('close-modal')) {
    refs.modal.classList.add('modal-hidden');
  }
}

refs.openModal.addEventListener('click', showModalWindow);
refs.closeModalButton.addEventListener('click', hideModalWindow);
refs.closeModalBackGround.addEventListener('click', closeModalBackGround);
