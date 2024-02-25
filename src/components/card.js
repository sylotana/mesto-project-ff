import { addLikeCard, removeLikeCard, deleteCard } from './api.js'

function renderCard({ cardObject, userId, func }) {
  const cardTemplate = document.querySelector('#card-template').content;

  const removeButton = document.createElement('button')
  removeButton.setAttribute('type', 'button')
  removeButton.setAttribute('class', 'card__delete-button')

  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const cardLikeButton = card.querySelector('.card__like-button');
  const cardLikeCounter = card.querySelector('.card__like-counter');
  const isOwner = cardObject.owner._id === userId;
  let isLiked = cardObject.likes.some(user => {
    return user._id === userId;
  })
  card.setAttribute('data-id', cardObject._id)

  if (isLiked) {
    cardLikeButton.classList.add('card__like-button_is-active');
    
  }

  if(isOwner) {
    card.append(removeButton)
    removeButton.addEventListener('click', func.removeCard);
  }



  cardTitle.textContent = cardObject.name;
  cardImage.src = cardObject.link;
  cardImage.alt = cardObject.name;
  cardLikeCounter.textContent = cardObject.likes.length;

  cardLikeButton.addEventListener('click', (event) => {
    if (isLiked) {
      removeLikeCard(card.dataset.id)
        .then(data => {
          event.target.classList.remove('card__like-button_is-active')
          cardLikeCounter.textContent = data.likes.length;
          isLiked = false;
        })
        .catch(err => {
          console.log(err);
        })      
    } else {
      addLikeCard(card.dataset.id)
      .then(data => {
        event.target.classList.add('card__like-button_is-active')
        cardLikeCounter.textContent = data.likes.length;
        isLiked = true;
      })
      .catch(err => {
        console.log(err);
      })    
    }
    event.target.classList.toggle('card__like-button_is-active');
  });
  cardImage.addEventListener('click', () => func.openPopupCard(cardObject.name, cardObject.link));

  return card;
}

function removeCard(event) {
  deleteCard(event.target.closest('.card').dataset.id)
  event.target.closest('.card').remove();
}

export { renderCard, removeCard }