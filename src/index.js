import { renderCard, removeCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';


import { initialCards } from './scripts/cards.js';
// import './components/modal.js';
import './scripts/popup.js';
import './pages/index.css';


const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const placesList = document.querySelector(".places__list");

const editProfileButton = document.querySelector('.profile__edit-button');

const editProfilePopup = document.querySelector('.popup_type_edit');

const addCardButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_type_new-card');

const imagePopup = document.querySelector('.popup_type_image');
const image = imagePopup.querySelector('.popup__image');
const caption = imagePopup.querySelector('.popup__caption');

const popupList = document.querySelectorAll('.popup');

const editProfileForm = document.forms['edit-profile'];
const editProfileName = editProfileForm.name;
const editProfileDescription = editProfileForm.description;
editProfileName.value = profileName.textContent 
editProfileDescription.value = profileDescription.textContent



editProfileButton.addEventListener('click', () => openModal(editProfilePopup));
addCardButton.addEventListener('click', () => openModal(addCardPopup));



popupList.forEach(popup => {
  const closePopupButton = popup.querySelector('.popup__close');
  const contentPopup = popup.querySelector('.popup__content');

  popup.addEventListener('click', () => closeModal(popup));

  closePopupButton.addEventListener('click', () => closeModal(popup));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(popup);
    }
  });

  contentPopup.addEventListener('click', (event) => event.stopPropagation());
})


placesList.addEventListener('click', event => {
  if (event.target.classList.contains('card__image')) {

    image.setAttribute('src', event.target.getAttribute('src'));
    caption.textContent = event.target.getAttribute('alt');

    openModal(imagePopup);

  }
})

editProfileForm.addEventListener('submit', handleFormSubmit);

initialCards.forEach(addCard);


function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;

  closeModal(this.closest('.popup'))

}













































function addCard(place) {
  const card = renderCard(place.link, place.name, removeCard);

  placesList.append(card);
}


