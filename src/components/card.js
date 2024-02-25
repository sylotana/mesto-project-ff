import { addLikeCard, removeLikeCard, deleteCard } from './api.js'

function generateCard({ cardObject, userId, functionList }) {
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

  if (isOwner) {
    card.append(removeButton)
    removeButton.addEventListener('click', functionList.removeCard);
  }

  cardTitle.textContent = cardObject.name;
  cardImage.src = cardObject.link;
  cardImage.alt = cardObject.name;
  cardLikeCounter.textContent = cardObject.likes.length;
  cardLikeButton.addEventListener('click', (event) => {
    functionList.likedCard(event, card, cardLikeCounter, isLiked)
      .then(result => {
        isLiked = result;
      })
      .catch(err => {
        console.log(err);
      });
  });
  cardImage.addEventListener('click', () => functionList.openPopupCard(cardObject.name, cardObject.link));

  return card;
}

function removeCard(event) {
  deleteCard(event.target.closest('.card').dataset.id)
    .then(() => {
      event.target.closest('.card').remove();
    })
    .catch(err => {
      console.log(err);
    });  
}



function likedCard(event, cardElement, likeCounter, likeState) {
  const likeMethod = likeState ? removeLikeCard : addLikeCard;
  
  return likeMethod(cardElement.dataset.id)
    .then(data => {
        event.target.classList.toggle('card__like-button_is-active');
        likeCounter.textContent = data.likes.length;
        return likeState = !likeState;
      })
    .catch(err => {
        console.log(err);
    })  
   
}


export { generateCard, removeCard, likedCard }