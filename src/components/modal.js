function openModal(object) {
  object.classList.add('popup_is-opened');

  document.addEventListener('keydown', closeModalByEscape);
}

function closeModal(object) {
  object.classList.remove('popup_is-opened');

  document.removeEventListener('keydown', closeModalByEscape);
}

function closeModalByEscape(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened')
    closeModal(popup);
  }
}

export { openModal, closeModal }