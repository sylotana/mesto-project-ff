import { renderCard, removeCard, likedCard, openPopupCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';
import { initialCards } from './scripts/cards.js';

import './pages/index.css';


const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const placesList = document.querySelector(".places__list");

const popupList = document.querySelectorAll('.popup');

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const editProfileForm = document.forms['edit-profile'];
const editProfileName = editProfileForm.name;
const editProfileDescription = editProfileForm.description;
editProfileName.value = profileName.textContent;
editProfileDescription.value = profileDescription.textContent;

const addCardButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_type_new-card');
const addCardForm = document.forms['new-place'];
const addCardName = addCardForm['place-name'];
const addCardImageLink = addCardForm.link;

editProfileButton.addEventListener('click', () => openModal(editProfilePopup));
addCardButton.addEventListener('click', () => openModal(addCardPopup));


popupList.forEach(popup => {
  popup.classList.add('popup_is-animated');
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

editProfileForm.addEventListener('submit', handleFormEditSubmit);
addCardForm.addEventListener('submit', handleFormAddSubmit);

initialCards.forEach(addCard);


function handleFormEditSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = editProfileName.value;
  profileDescription.textContent = editProfileDescription.value;

  closeModal(this.closest('.popup'));
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  
  const card = renderCard(addCardImageLink.value, addCardName.value, removeCard, likedCard, openPopupCard);

  placesList.insertAdjacentElement('afterbegin', card);

  closeModal(this.closest('.popup'));

  this.reset();
}

function addCard(place) {
  const card = renderCard(place.link, place.name, removeCard, likedCard, openPopupCard);

  placesList.append(card);
}


