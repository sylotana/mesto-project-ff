function openModal(object) {
  object.classList.add('popup_is-opened');

  document.addEventListener('keydown', closeModalByEscape);
}

function closeModal(object) {
  const popupForm = object.querySelector('.popup__form');

  if (popupForm) {
    const nameForm = popupForm.getAttribute('name');

    if (nameForm === 'edit-profile') {

      popupForm.name.value = document.querySelector('.profile__title').textContent;
      popupForm.description.value = document.querySelector('.profile__description').textContent;
      
    } else if (nameForm === 'new-place') {
      popupForm.reset();
    }
  }
  object.classList.remove('popup_is-opened');

  document.removeEventListener('keydown', closeModalByEscape);
}

function closeModalByEscape(event) {
  const popup = document.querySelector('.popup_is-opened')

  if (event.key === 'Escape') {
    closeModal(popup);
  }
}

export { openModal, closeModal }