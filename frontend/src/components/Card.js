import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // Checking if you are the owner of the current card
  // const isOwn = props.card.owner._id === currentUser._id;
  const isOwn = currentUser && (props.card.owner === currentUser._id);

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `card__delete-button ${
    !isOwn && 'card__delete-button_hidden'}`;

  // Check if the card was liked by the current user
  // const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const isLiked = currentUser && props.card.likes.some((i) => i._id === currentUser._id);
  //  const isLiked = currentUser && props.card.likes.includes(currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && 'card__like-button_active'}`;

  // const likesNumber = props.card.likes.length;

  return (
    <>
      <li key={props.card.id} className='card'>
        {/* <li className='card'> */}
        <div className='card__container'>
          <button
            type='button'
            // className='card__delete-button'
            aria-label='Delete button'
            className={cardDeleteButtonClassName}
            // onClick={handleCardDelete}
            onClick={() => {
              props.onCardDelete(props.card);
            }}
          ></button>
          <div
            className='card__image'
            style={{ backgroundImage: `url(${props.card.link})` }}
            // onClick={handleCardClick}
            onClick={() => {
              props.onCardClick(props.card);
            }}
          ></div>
          <div className='card__text'>
            <h2 className='card__title'>{props.card.name}</h2>
            <div className='card__like-container'>
              <button
                type='button'
                // className='card__like-button'
                aria-label='Like button'
                className={cardLikeButtonClassName}
                // onClick={handleLikeClick}
                onClick={() => {
                  props.onCardLike(props.card);
                }}
              ></button>
              {/* <p className='card__like-counter'>{likesNumber}</p> */}
              <p className='card__like-counter'>{props.card.likes.length}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
