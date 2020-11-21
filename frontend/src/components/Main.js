import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <section className='profile'>
        <div className='profile__container'>
          <div className='profile__image-container'>
            <button
              className='profile__image-edit'
              aria-label='Update profile image'
              onClick={props.onEditAvatar}
            ></button>
            <img
              className='profile__image'
              src={currentUser.avatar}
              alt='profile-picture'
            />
          </div>
          <div className='profile__info'>
            <div className='profile__text'>
              <h1 className='profile__title'>{currentUser.name}</h1>
              <p className='profile__subtitle'>{currentUser.about}</p>
            </div>
            <button
              className='button profile__edit-button'
              aria-label='Edit button'
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          className='button profile__add-button'
          aria-label='Add button'
          onClick={props.onAddPlace}
        ></button>
      </section>

      {/* Template initial cards */}
      <section className='cards'>
        <ul className='cards__grid'>
          {props.cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
export default Main;
