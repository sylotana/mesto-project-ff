function openModal(object) {
  object.classList.add('popup_is-opened');

  // document.addEventListener('keydown', closeModal);
}

function closeModal(object) {
  object.classList.remove('popup_is-opened');
}

export { openModal, closeModal }