import { generateCard, removeCard, likedCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';

import { enableValidation, clearValidation } from './components/validation.js';
import { getInitialCards, getProfileData, editProfile, createNewCard, updateProfileImage } from './components/api.js';
import './pages/index.css';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

enableValidation(validationConfig)

Promise.all([
  getProfileData()
    .catch(err => {
      console.log(err)
    }),
  getInitialCards()
    .catch(err => {
      console.log(err)
    })
])
  .then(([user, cards]) => {
    currentAvatar = user.avatar;
    editProfileImageButton.style.backgroundImage = `url(${user.avatar})`
    profileName.textContent = user.name;
    profileDescription.textContent = user.about;
    
    cards.forEach(card => {
      placesList.append(createCard(card, user._id))
    })
  })
  .catch(err => {
    console.log(err);
  })

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

const editProfileImageButton = document.querySelector('.profile__image');
const editProfileImagePopup = document.querySelector('.popup_type_profile-image');
const editProfileImageForm = document.forms['profile-image'];

const imagePopup = document.querySelector('.popup_type_image');
const image = imagePopup.querySelector('.popup__image');
const caption = imagePopup.querySelector('.popup__caption');

let currentAvatar;

const renderLoading = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};




editProfileButton.addEventListener('click', openEditProfilePopup);
editProfileImageButton.addEventListener('click', openEditProfileImagePopup);
addCardButton.addEventListener('click', openAddCardPopup);

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

editProfileImageForm.addEventListener('submit', handleFormEditProfileImageSubmit);


function handleFormEditProfileSubmit(event) {
  event.preventDefault();

  renderLoading(true, editProfileForm.querySelector('.popup__button'));

  editProfile(editProfileForm.name.value, editProfileForm.description.value)
    .then(data => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(
        false,
        editProfileForm.querySelector('.popup__button')
      );
    });

  closeModal(editProfilePopup);
}

function handleFormEditProfileImageSubmit(event) {
  event.preventDefault();

  renderLoading(true, editProfileImageForm.querySelector('.popup__button'));

  updateProfileImage(editProfileImageForm['profile-link'].value)
    .then(data => {
      editProfileImageButton.style.backgroundImage = `url(${data.avatar})`
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(
        false,
        editProfileImageForm.querySelector('.popup__button')
      );
    });

  closeModal(editProfileImagePopup); 
}


function handleFormAddCardSubmit(event) {
  event.preventDefault();

  renderLoading(true, addCardForm.querySelector('.popup__button'));

  createNewCard(addCardForm['place-name'].value, addCardForm.link.value)
    .then(card => {
      placesList.prepend(createCard(card, card.owner._id));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(
        false,
        addCardForm.querySelector('.popup__button')
      );
    });

  closeModal(addCardPopup);
}

function createCard(card, userId) {
  const functionList = { openPopupCard, removeCard, likedCard }
  
  return generateCard({
    cardObject: card,
    userId: userId,
    functionList
  }); 
}

function openPopupCard(name, imageLink ) {
  image.setAttribute('src', imageLink);
  image.setAttribute('alt', name);
  caption.textContent = name;
  
  openModal(imagePopup);
}

function openEditProfilePopup() {
  editProfileForm.name.value = profileName.textContent;
  editProfileForm.description.value = profileDescription.textContent;
  clearValidation(editProfileForm, validationConfig)

  openModal(editProfilePopup);
}

function openEditProfileImagePopup() {
  editProfileImageForm['profile-link'].value = currentAvatar;
  clearValidation(editProfileImageForm, validationConfig);

  openModal(editProfileImagePopup);
}

function openAddCardPopup() {
  addCardForm.reset();
  clearValidation(addCardForm, validationConfig)

  openModal(addCardPopup);
}
