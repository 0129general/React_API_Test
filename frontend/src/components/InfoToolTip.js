import React from 'react';

function InfoToolTip(props) {

  return (
    <section
      className={`form form__${props.name} ${
        props.isOpen ? 'form_visible' : ''
      }`}
    >
      <div className='form__container'>
        <div
          className={`form__tooltip ${
            props.success === 'success'
              ? `form__tooltip_success`
              : `form__tooltip_error`
          }`}
        />
        <p className='form__tooltip-message'>
          {props.success === 'success'
            ? 'Success! You have now been registered.'
            : 'Oops, something went wrong! Please try again.'}
        </p>
        <button
          className='form__reset-button'
          type='reset'
          aria-label='Close button'
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}

export default InfoToolTip;