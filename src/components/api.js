const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-6',
  headers: {
    authorization: '1fb88d22-b3e4-4983-a58b-4f7fd3e4978b',
    'Content-Type': 'application/json'
  }
}


function getResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};


function request(path, method = 'GET', requestInfo = {}) {
  return fetch(`${config.baseUrl}/${path}`, {
    method: method,
    headers: config.headers,
    ...requestInfo
  })
  .then(res => getResponse(res));
}

function getInitialCards() {
  return request('cards');
}


function getProfileData() {
  return request('users/me');
}


function editProfile(profileName, profileAbout) {
  return request('users/me', 'PATCH', {
    body: JSON.stringify({
      name: profileName,
      about: profileAbout
    })
  })
}


function createNewCard(cardName, cardLink) {
  return request('cards', 'POST', {
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
}


function deleteCard(cardId){
  return request(`cards/${cardId}`, 'DELETE')
}


function addLikeCard(cardId) {
  return request(`cards/likes/${cardId}`, 'PUT')
}


function removeLikeCard(cardId) {
  return request(`cards/likes/${cardId}`, 'DELETE')
}


function updateProfileImage(imageUrl) {
 return request('users/me/avatar', 'PATCH', {
    body: JSON.stringify({
      avatar: imageUrl
    })
  })
}

export { getInitialCards, getProfileData, editProfile, createNewCard, addLikeCard, removeLikeCard, updateProfileImage, deleteCard }