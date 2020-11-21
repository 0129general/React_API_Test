class Auth {
  constructor(options) {
    this.options = options;
  }

  register(email, password) {
    return this.request('/signup', 'POST', JSON.stringify({ email, password }));
  }

  authorize(userid, password) {
    return this.request(
      '/signin',
      'POST',
      JSON.stringify({ email: userid, password: password })
    );
  }

  getContent(token) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      if (res.ok) {
        return res.json();
      }
      const body = await res.json();
      return Promise.reject(body.error || body.message);
    });
  }

  request(auth, method, body) {
    return fetch(`${this.options.baseUrl}${auth}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.message) {
          localStorage.setItem('token', data.token);
          return data;
        } else {
          return;
        }
      });
  }
}
const auth = new Auth({
  // baseUrl: 'https://register.nomoreparties.co',
  baseUrl: 'https://localhost:3001',
});

export default auth;