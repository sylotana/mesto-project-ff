const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupList = document.querySelectorAll('.popup');

editButton.addEventListener('click', () => {
  const editPopup = document.querySelector('.popup.popup_type_edit');
  editPopup.style.display = 'flex';
})

addButton.addEventListener('click', () => {
  const addPopup = document.querySelector('.popup.popup_type_new-card');
  addPopup.style.display = 'flex';
})



popupList.forEach(popup => {
  console.log(popup);

  const popupContent = popup.querySelector('.popup__content');
  const closeButton = popup.querySelector('.popup__close');

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  })

  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  })

  document.addEventListener('keypress', event => {
    console.log('кнока');
  })

  popupContent.addEventListener('click', event => {
    event.stopPropagation();
  })

})