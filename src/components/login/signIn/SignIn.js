import React from 'react';
import { useHistory } from 'react-router';
import './style.css';

function SignIn() {
  const history = useHistory();

  return (
    <div className="login_signIn">
      <h2 className="login_title">Login</h2>
      <form action="" method="post" className="form_signIn">
        <label htmlFor="email" className="label">
          Email:{' '}
        </label>
        <input
          type="text"
          id="email"
          name="username"
          placeholder="Email"
          className="login_input"
        />
        <label htmlFor="password" className="label">
          Password:{' '}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="login_input"
        />
        <input type="submit" value="Login" className="login_button" />
      </form>

      <p className="text">
        You don't have an account?
        <span className="subtext" onClick={() => history.push('/login/signup')}>
          {' '}
          Sign Up.
        </span>
      </p>
    </div>
  );
}

export default SignIn;
