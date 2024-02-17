import { renderCard, removeCard, likedCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';
import { initialCards } from './components/cards.js';

import './pages/index.css';

const placesList = document.querySelector(".places__list");
const popupList = document.querySelectorAll('.popup');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit');
const editProfileForm = document.forms['edit-profile'];

const addCardButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_type_new-card');
const addCardForm = document.forms['new-place'];

const imagePopup = document.querySelector('.popup_type_image');
const image = imagePopup.querySelector('.popup__image');
const caption = imagePopup.querySelector('.popup__caption');

initialCards.forEach(elem => {
  placesList.append(createCard(elem));
});

editProfileButton.addEventListener('click', () => openEditProfilePopup(editProfilePopup));
addCardButton.addEventListener('click', () => openAddCardPopup(addCardPopup));

popupList.forEach(popup => {
  popup.classList.add('popup_is-animated');
  const closePopupButton = popup.querySelector('.popup__close');
  const contentPopup = popup.querySelector('.popup__content');

  popup.addEventListener('click', () => closeModal(popup));

  closePopupButton.addEventListener('click', () => closeModal(popup));

  contentPopup.addEventListener('click', event => event.stopPropagation());
})


editProfileForm.addEventListener('submit', handleFormEditProfileSubmit);

addCardForm.addEventListener('submit', handleFormAddCardSubmit);


function handleFormEditProfileSubmit(form) {
  form.preventDefault();

  profileName.textContent = form.target.name.value;
  profileDescription.textContent = form.target.description.value;

  closeModal(form.target.closest('.popup'));
}

function handleFormAddCardSubmit(form) {
  form.preventDefault();

  placesList.prepend(createCard({
    name: form.target['place-name'].value,
    link: form.target.link.value
  }));

  closeModal(form.target.closest('.popup'));
}

function createCard(card) {
  const func = { removeCard, likedCard, openPopupCard }
  
  return renderCard({
    name: card.name,
    imageLink: card.link,
    func
  }); 
}

function openPopupCard({ name, imageLink }) {
  image.setAttribute('src', imageLink);
  image.setAttribute('alt', name);
  caption.textContent = name;
  
  openModal(imagePopup);
}

function openEditProfilePopup(popup) {
  editProfileForm.name.value = profileName.textContent;
  editProfileForm.description.value = profileDescription.textContent;

  openModal(popup);
}

function openAddCardPopup(popup) {
  addCardForm.reset();

  openModal(popup);
}
