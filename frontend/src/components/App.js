import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory, Redirect } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithImage from './PopupWithImage';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import auth from '../utils/auth';
import ProtectedRoute from './ProtectedRoute';
import InfoToolTip from './InfoToolTip';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [tooltipMode, setTooltipMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const history = useHistory();

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsInfoToolTipOpen(false);
  }

  function handleToolTip(success) {
    setTooltipMode(success);
    setIsInfoToolTipOpen(true);
  }

  function handleUpdateUser({ name, about }) {
    api
      .updateProfile(name, about)
      .then((updateProfile) => {
        setCurrentUser(updateProfile);
        setIsEditProfilePopupOpen(false);
      })
      .then((res) => closeAllPopups())
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .updateAvatar(avatar)
      .then((updateProfile) => {
        setCurrentUser(updateProfile);
        setIsEditAvatarPopupOpen(false);
      })
      .then((res) => closeAllPopups())
      .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Update the state
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    // const isOwn = card.owner._id === currentUser._id;
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== card._id));
      })
      .then((res) => closeAllPopups())
      .catch((err) => console.log(err));
  }

  function handleAddPlace({ title, link }) {
    api
      .addNewCard({ title, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then((res) => closeAllPopups())
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (loggedIn) {
      api.getUserInfo().then((userProfile) => {
        setCurrentUser(userProfile);
      });
      api
        .getInitialCards()
        .then((data) => {
          if (data) {
            setCards((cards) => [...cards, ...data]);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function resetForm() {
    setEmail('');
    setPassword('');
  };

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    // const [email, password] = [e.target.email.value, e.target.password.value];
    auth
      .authorize(email, password)
      .then((data) => {
        if (data && data.token) {
          handleLogin();
        } else {
          resetForm();
          if (!email || !password) {
            throw new Error(
              '400 - one or more of the fields were not provided'
            );
          }
          if (!data) {
            throw new Error(
              '401 - the user with the specified email not found'
            );
          }
        }
      })
      .then(resetForm)
      .then(() => history.push('/main'))
      .catch((err) => console.log(err.message));
  };

  function handleRegisterSubmit (e) {
    e.preventDefault();
    auth
      .register(email, password)
      .then((res) => {
        if (!res.data) {
          handleToolTip('error');
          throw new Error(`400 - ${res.message ? res.message : res.error}`);
        }
      })
      .then((res) => {
        setRegistered(true);
        history.push('/signin');
        return res;
      })
      .then((res) => {
        handleToolTip('success');
        return res;
      })
      .then(resetForm)
      .catch((err) => {
        console.log(err);
      });
  };

  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/signin');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      auth
        .getContent(token)
        .then((res) => {
          setLoggedIn(true);
          setUserEmail(res.data.email);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn, userEmail]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/signin'>
          <Header
            userEmail={userEmail}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            link={{ description: 'Sign up', to: '/signup' }}
          />
          <Login
            loggedIn={loggedIn}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            userEmail={setUserEmail}
            setUserEmail={setUserEmail}
            handleLogin={handleLogin}
            handleLoginSubmit={handleLoginSubmit}
            onLogout={handleLogout}
            isOpen={isInfoToolTipOpen}
            handleToolTip={handleToolTip}
            success={tooltipMode}
          />
          <InfoToolTip
            isOpen={isInfoToolTipOpen}
            success={tooltipMode}
            onClose={closeAllPopups}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/signup'>
          <Header
            userEmail={userEmail}
            loggedIn={loggedIn}
            link={{ description: 'Log in', to: '/signin' }}
          />
          <Register
            registered={registered}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleRegisterSubmit={handleRegisterSubmit}
            setUserEmail={setUserEmail}
            handleLogin={handleLogin}
            handleToolTip={handleToolTip}
          />
          <InfoToolTip
            isOpen={isInfoToolTipOpen}
            success={tooltipMode}
            onClose={closeAllPopups}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/'>
          {loggedIn ? <Redirect to='/main' /> : <Redirect to='/signin' />}
        </Route>
        <Route path='/main'>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
          />
          <PopupWithForm
            name='confirmation'
            title='Are you sure?'
            isOpen={false}
            onClose={closeAllPopups}
          />
          <PopupWithImage onClose={closeAllPopups} card={selectedCard} />

          <Header
            loggedIn={loggedIn}
            userEmail={userEmail}
            link={{ description: 'Log out', to: '/signin' }}
            onLogout={handleLogout}
          />
          <ProtectedRoute
            path='/main'
            loggedIn={loggedIn}
            component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onClose={closeAllPopups}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            selectedCard={selectedCard}
            cards={cards}
          />
          <Footer />
        </Route>
        {/* {loggedIn && <Footer />} */}
        <Redirect from='*' to='/' />
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);