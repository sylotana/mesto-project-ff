function renderCard({ name, imageLink, func }) {
  const cardTemplate = document.querySelector('#card-template').content;

  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const cardRemoveButton = card.querySelector('.card__delete-button');
  const cardLikeButton = card.querySelector('.card__like-button');

  cardTitle.textContent = name;
  cardImage.src = imageLink;
  cardImage.alt = name;

  cardRemoveButton.addEventListener('click', func.removeCard);
  cardLikeButton.addEventListener('click', func.likedCard);
  cardImage.addEventListener('click', () => func.openPopupCard({ name, imageLink }));

  return card;
}

function removeCard(event) {
  event.target.closest('.card').remove();
}

function likedCard(event) {
  event.target.classList.toggle('card__like-button_is-active');
}

export { renderCard, removeCard, likedCard }