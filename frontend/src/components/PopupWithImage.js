import React from 'react';

function PopupWithImage(props) {
  return (
    <>
      <section className={'form form__add-image' + (props.card ? ' form_visible' : '')}>
        <div className='form__open-image'>
          <button
            className='form__reset-button'
            type='reset'
            aria-label='Close button'
            onClick={props.onClose}
          ></button>
          <img
            className='form__image'
            src={props.card ? props.card.link : '#'}
            alt={props.card ? props.card.name : ''}
          />
          <p className='form__image-title'>
            {props.card ? props.card.name : ''}
          </p>
        </div>
      </section>
    </>
  );
}

export default PopupWithImage;