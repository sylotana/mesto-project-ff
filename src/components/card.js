function renderCard(imageLink, name, removeFunc, likedFunc, openPopapFunc) {
  const cardTemplate = document.querySelector('#card-template').content;

  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const cardRemoveButton = card.querySelector('.card__delete-button');
  const cardLikeButton = card.querySelector('.card__like-button');

  cardImage.src = imageLink;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardRemoveButton.addEventListener('click', removeFunc);
  cardLikeButton.addEventListener('click', likedFunc);
  cardImage.addEventListener('click', openPopapFunc);

  return card;
}

function removeCard(event) {
  const card = event.target.closest('.card');
  card.remove();
}

function likedCard(event) {
  event.target.classList.add('card__like-button_is-active');
}

function openPopupCard(event) {
  const imagePopup = document.querySelector('.popup_type_image');
  const image = imagePopup.querySelector('.popup__image');
  const caption = imagePopup.querySelector('.popup__caption');
  
  image.setAttribute('src', event.target.getAttribute('src'));
  caption.textContent = event.target.getAttribute('alt');
  
  imagePopup.classList.add('popup_is-opened');
}


export { renderCard, removeCard, likedCard, openPopupCard }