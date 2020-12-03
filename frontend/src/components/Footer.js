import React from 'react';

function Footer(props) {
  // const copyright = "© 2020 | Linda Kovacs - Around The U.S."
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        © 2020 | Linda Kovacs - Around The U.S.
      </p>
      {/* <p className='footer__copyright'>{props.loggedIn ? copyright : ''}</p> */}
    </footer>
  );
}
export default Footer;
