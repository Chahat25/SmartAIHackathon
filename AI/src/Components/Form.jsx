import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form className="custom-form">
      <div className="custom-form-title">
        Welcome,<br />
        <span>Sign up to continue</span>
      </div>
      <input className="custom-form-input" name="email" placeholder="Email" type="email" />
      <input className="custom-form-input" name="password" placeholder="Password" type="password" />
      <div className="custom-form-login-with">
        <div className="custom-form-button-log">
          <b>t</b>
        </div>
        <div className="custom-form-button-log">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.6934 56.6934"
            className="custom-form-icon"
          >
            <path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017..."></path>
          </svg>
        </div>
        <div className="custom-form-button-log">
          <svg
            className="custom-form-icon"
            height="56.693px"
            viewBox="0 0 56.693 56.693"
            width="56.693px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029..."></path>
          </svg>
        </div>
      </div>
      <button className="custom-form-button-confirm">Let`s go →</button>
    </form>
  );
};

export default Form;
