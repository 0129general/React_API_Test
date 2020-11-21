import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/logo.svg';

function Header(props) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='logo' />
      <p className='header__email'>{props.loggedIn ? props.userEmail : ''}</p>
      <Link
        to={props.link.to}
        className='header__link'
        onClick={props.onLogout ? props.onLogout : null}
      >
        {props.link.description}
      </Link>
    </header>
  );
}
export default Header; 