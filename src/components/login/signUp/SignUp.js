import React from 'react';
import { useHistory } from 'react-router';
import './style.css';

function SignUp() {
  const history = useHistory();

  return (
    <div className="login_signUp">
      <h2 className="signUp_title">Sign Up</h2>
      <form className="form_signUp">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          className="signUp_input"
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="signUp_input"
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="signUp_input"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="signUp_input"
        />
        <label htmlFor="re-password">Retype Password</label>
        <input
          type="password"
          id="re-password"
          name="re_password"
          placeholder="password"
          className="signUp_input"
        />
        <button className="signUp_button">Sign Up</button>
      </form>
      <p className="text">
        You already have an account?
        <span className="subtext" onClick={() => history.push('/login/')}>
          {' '}
          Login.
        </span>
      </p>
    </div>
  );
}

export default SignUp;
