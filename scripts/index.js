const PLACES_LIST = document.querySelector(".places__list");

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
