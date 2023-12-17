function renderCard(imageLink, name) {
  const cardTemplate = document.querySelector("#card-template").content;

  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardRemoveButton = card.querySelector(".card__delete-button");

  cardImage.src = imageLink;
  cardTitle.textContent = name;

  cardRemoveButton.addEventListener("click", removeCard);

  return card;
}

function removeCard() {
  const card = this.parentElement;
  card.remove();
}

function addCard(place) {
  const placeList = document.querySelector(".places__list");
  const card = renderCard(place.link, place.name);

  placeList.append(card);
}

initialCards.forEach((element) => {
  addCard(element);
});
