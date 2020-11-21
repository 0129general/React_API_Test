import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleTitleChange(e) {
      setTitle(e.target.value);
    }

    function handleLinkChange(e) {
      setLink(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      props.onAddPlace({ title, link });
    }
return (
  <PopupWithForm
    name='add-card'
    title='New place'
    buttonText='Create'
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  >
    <fieldset className='form__fields'>
      <input
        type='text'
        className='form__input form__card-title'
        id='card-input'
        name='title'
        placeholder='Title'
        minLength='1'
        maxLength='30'
        required
        onChange={handleTitleChange}
      />
      <span className='form__input-error' id='card-input-error'></span>
      <input
        type='url'
        className='form__input form__image-link'
        id='link-input'
        name='link'
        placeholder='Image link'
        required
        onChange={handleLinkChange}
      />
      <span className='form__input-error' id='link-input-error'></span>
    </fieldset>
  </PopupWithForm>
);
}
export default AddPlacePopup;