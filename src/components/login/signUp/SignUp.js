import axios from '../../../axios/axios';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';

function SignUp() {
  const history = useHistory();
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();

  function signUp(event) {

    event.preventDefault();

    const email = emailRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const password = passwordRef.current.value;
    const rePassword = rePasswordRef.current.value;

    if (password !== rePassword) {
      alert('Your passwords dont match');
    } else {
      const body = JSON.stringify({
        firstName,
        lastName,
        password,
        email
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }

      axios.post("/api/client/add", body, config)
          .then(() => history.push('/email/confirmation'))
          .catch((err) => console.log(err));
    }
  }

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
          ref={emailRef}
          required
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="signUp_input"
          ref={firstNameRef}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="signUp_input"
          ref={lastNameRef}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="signUp_input"
          ref={passwordRef}
          required
        />
        <label htmlFor="re-password">Retype Password</label>
        <input
          type="password"
          id="re-password"
          name="re_password"
          placeholder="password"
          className="signUp_input"
          ref={rePasswordRef}
          required
        />
        <button className="signUp_button" onClick={(event) => signUp(event)}>
          Sign Up
        </button>
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
