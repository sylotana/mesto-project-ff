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
  .then(res => getResponse(res))
  .then(data => data);
}


function editProfile(profileName, profileAbout) {
  return request('users/me', 'PATCH', {
    body: JSON.stringify({
      name: profileName,
      about: profileAbout
    })
  })
  .catch(err => {
    console.log(err);
  })
}


function createNewCard(cardName, cardLink) {
  return request('cards', 'POST', {
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
  .catch(err => {
    console.log(err);
  })
}


function deleteCard(cardId){
  return request(`cards/${cardId}`, 'DELETE')
  .catch(err => {
    console.log(err);
  })
}


function addLikeCard(cardId) {
  return request(`cards/likes/${cardId}`, 'PUT')
  .catch(err => {
    console.log(err);
  })
}


function removeLikeCard(cardId) {
  return request(`cards/likes/${cardId}`, 'DELETE')
  .catch(err => {
    console.log(err);
  })
}


function updateProfileImage(imageUrl) {
 return request('users/me/avatar', 'PATCH', {
    body: JSON.stringify({
      avatar: imageUrl
    })
  })
  .catch(err => {
    console.log(err);
  })
}

export { request, editProfile, createNewCard, addLikeCard, removeLikeCard, updateProfileImage, deleteCard }