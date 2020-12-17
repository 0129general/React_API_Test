import React, { useState, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // After loading the current user from the API
  // their data will be used in managed components.
  React.useEffect(() => {
    setName(currentUser && currentUser.name);
    setDescription(currentUser && currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name='edit-profile'
      title='Edit profile'
      buttonText='Save'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className='form__fields'>
        <input
          type='text'
          className='form__input form__title'
          id='name-input'
          name='name'
          placeholder='Name'
          minLength='2'
          maxLength='40'
          required
          value={name || ''}
          onChange={handleNameChange}
        />
        <span className='form__input-error' id='name-input-error'></span>

        <input
          type='text'
          className='form__input form__subtitle'
          id='job-input'
          name='job'
          placeholder='Job'
          minLength='2'
          maxLength='200'
          required
          value={description || ''}
          onChange={handleDescriptionChange}
        />
        <span className='form__input-error' id='job-input-error'></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditProfilePopup;