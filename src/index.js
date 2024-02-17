import { renderCard, removeCard, likedCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';
import { initialCards } from './components/cards.js';

import './pages/index.css';

// VARIABLES START

const placesList = document.querySelector(".places__list");
const popupList = document.querySelectorAll('.popup');

const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

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


// VARIABLES END //



// EVENTS START //

editProfileButton.addEventListener('click', () => openModal(editProfilePopup));
addCardButton.addEventListener('click', () => openModal(addCardPopup));


popupList.forEach(popup => {
  popup.classList.add('popup_is-animated');
  const closePopupButton = popup.querySelector('.popup__close');
  const contentPopup = popup.querySelector('.popup__content');

  popup.addEventListener('click', () => closeModal(popup));

  closePopupButton.addEventListener('click', () => closeModal(popup));

  contentPopup.addEventListener('click', (event) => event.stopPropagation());
})


editProfileForm.addEventListener('submit', (event) => {
  handleFormSubmit(event, () => {
    profileName.textContent = editProfileName.value;
    profileDescription.textContent = editProfileDescription.value;
  })

});


addCardForm.addEventListener('submit', (event) => {
  handleFormSubmit(event, () => {
    const addCardName = addCardForm['place-name'];
    const addCardImageLink = addCardForm.link;

    const card = createObjectCard(addCardImageLink.value, addCardName.value);
    placesList.insertAdjacentElement('afterbegin', createCard(card))
  })
  
  event.target.reset();
});


// EVENTS END //

initialCards.forEach(elem => {
  placesList.append(createCard(elem));
});


// FUNCTIONS START

function handleFormSubmit(form, collback) {
  form.preventDefault();

  collback();


}


function createCard(object) {
  const cardFunctions = [ removeCard, likedCard, openPopupCard ];
  const card = renderCard(object.link, object.name, ...cardFunctions);

  return card;
}

function createObjectCard(imageLink, name) {
  return {
    name: name,
    link: imageLink
  }
}


function openPopupCard(popup) {
  const imagePopup = document.querySelector('.popup_type_image');
  const image = imagePopup.querySelector('.popup__image');
  const caption = imagePopup.querySelector('.popup__caption');
  image.setAttribute('src', popup.target.getAttribute('src'));
  caption.textContent = popup.target.getAttribute('alt');
  
  openModal(imagePopup);
}


// FUNCTIONS END