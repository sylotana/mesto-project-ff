function renderCard(imageLink, name, removeFunc, likedFunc) {
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

  return card;
}

function removeCard(event) {
  const card = event.target.closest('.card');
  card.remove();
}

function likedCard(event) {
  event.target.classList.add('card__like-button_is-active');
}

export { renderCard, removeCard, likedCard }