import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import auth from '../utils/auth';

function Register({
  registered,
  handleRegisterSubmit,
  history,
  email,
  setEmail,
  password,
  setPassword,
}) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const history = useHistory();

  // const resetForm = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   auth
  //     .register({ email, password })
  //     .then(resetForm)
  //     .then((res) => {
  //       props.handleToolTip('success');
  //       return res;
  //     })
  //     .then((res) => {
  //       history.push('/signin');
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/main');
    }
  }, [history]);

  // useEffect(() => {
  //   if (registered) {
  //     history.push('/signin');
  //   }
  // }, [history, registered]);

  return (
    <>
      <div className='auth__container'>
        <h2 className='auth__title'>Sign up</h2>
        <form
          action='#'
          className='auth'
          title='Sign up'
          onSubmit={handleRegisterSubmit}
        >
          <input
            className='form__input-dark'
            placeholder='Email'
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='form__input-dark'
            placeholder='Password'
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='form__submit-button_dark'
            onSubmit={handleRegisterSubmit}
            to='/main'
          >
            Sign up
          </button>
        </form>
        <Link className='auth__link' to='/signin'>
          Already a member? Log in here!
        </Link>
      </div>
    </>
  );
}
export default Register; 