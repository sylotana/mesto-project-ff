import { initialCards } from './scripts/cards.js';
import './scripts/popup.js';
import './pages/index.css';
// import userPicture from './images/avatar.jpg';

// const images = [
//   { name: 'userPicture', link: userPicture }
// ]

const PLACES_LIST = document.querySelector(".places__list");

PLACES_LIST.addEventListener('click', event => {
  const imagePopup = document.querySelector('.popup.popup_type_image');
  const image = imagePopup.querySelector('.popup__image');
  const caption = imagePopup.querySelector('.popup__caption');

  if (event.target.classList.contains('card__image')) {
    imagePopup.style.display = 'flex';

    const targetImage = event.target.getAttribute('src'); 
    const targetImageAlt = event.target.getAttribute('alt');

    image.setAttribute('src', targetImage);
    caption.textContent = targetImageAlt;
  }
})

function renderCard(imageLink, name, removeFunc) {
  const cardTemplate = document.querySelector("#card-template").content;

  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardRemoveButton = card.querySelector(".card__delete-button");

  cardImage.src = imageLink;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardRemoveButton.addEventListener("click", removeFunc);

  return card;
}

function removeCard(event) {
  const card = event.target.closest('.card');
  card.remove();
}

function addCard(place) {
  const card = renderCard(place.link, place.name, removeCard);

  PLACES_LIST.append(card);
}

initialCards.forEach(addCard);
