import React from 'react';

function InfoToolTip(props) {
  // const message = props.success
  //   ? 'Success! You have now been registered.'
  //   : 'Oops, something went wrong! Please try again.';

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
          {/* {message} */}
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


// import React from 'react';

// function InfoToolTip(props) {
//   const message = props.mode
//     ? 'Success! You have now been registered.'
//     : 'Oops, something went wrong! Please try again.';

//   return (
//     <section
//       className={`form form__${props.name} ${
//         props.isOpen ? 'form_visible' : ''
//       }`}
//     >
//       <div className='form__container'>
//         <div
//           className={`form__tooltip ${
//             props.mode ? `form__tooltip_success` : `form__tooltip_error`
//           }`}
//         />
//         <p className='form__tooltip-message'>{message}</p>
//         <button
//           className='form__reset-button'
//           type='reset'
//           aria-label='Close button'
//           onClick={props.onClose}
//         ></button>
//       </div>
//     </section>
//   );
// }

// export default InfoToolTip;