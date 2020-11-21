class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  // Load Cards from the Server
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  // Load User Information from the Server
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  // Update Profile Picture
  updateAvatar(imageLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar: imageLink }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  // Edit Profile
  updateProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ name, about }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  // Add New Card
  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  // Delete Card
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  // Add and Remove Likes
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: isLiked ? "DELETE" : "PUT",
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }
}

  // Add and Remove Likes
  // changeLikeCardStatus(isLiked, cardId) {
  //   if (isLiked) {
  //     //unlike heart button
  //     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
  //       method: "DELETE",
  //       headers: this._headers,
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //         return Promise.reject(`Error: ${res.status}`);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     //like heart button
  //     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
  //       method: "PUT",
  //       headers: this._headers,
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //         return Promise.reject(`Error: ${res.status}`);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }
// }

const api = new Api({
  // baseUrl: "https://around.nomoreparties.co/v1/group-2",
  baseUrl: 'https://localhost:3001',
  headers: {
    Authorization: 'd38c3eff-8aa3-43a2-86b1-ec6a6fc8a616',
    'Content-Type': 'application/json',
  },
});

export default api;