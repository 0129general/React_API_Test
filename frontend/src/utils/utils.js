export const defaultConfig = {
  formSelector: '.form__container',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible',
};

export const editButton = document.querySelector('.profile__edit-button'); 
export const addButton = document.querySelector('.profile__add-button'); 
export const profileName = document.querySelector('.profile__title'); 
export const profileJob = document.querySelector('.profile__subtitle'); 

export const profilePicture = document.querySelector('.profile__image');
export const profilePictureContainer = document.querySelector('.profile__image-container');

export const closeButtonSelector = '.form__reset-button';
export const listWrapper = '.cards__grid';
export const openImageFormModal = '.form__add-image';
export const editFormModal = '.form__edit-profile';
export const addFormModal = '.form__add-card';
export const templateCardSelector = '.card-template';
export const deleteFormSelector = '.form--delete-image';
export const pictureFormSelector = '.form--change-image';

export const EscKey = 27;