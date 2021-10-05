import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';
import axios from '../../../axios/axios';
import { useDispatch } from 'react-redux';
import {Login, Logout} from '../../../features/userSlice';


function SignIn() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  function login(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      email,
      password
    });
    console.log(body)

    axios.post('/login', body, config)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        const body2 = JSON.stringify({
          email
        })
        const config2 = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
        axios.post('/api/client', body2, config2)
          .then((res) => {
            localStorage.setItem("email", res.data.username)
            dispatch(Login({
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              accounts: res.data.accounts,
              email: res.data.username,
            }));
            history.push('/account');
          })
          .catch(() => {
            dispatch(Logout(null));
          });
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <div className="login_signIn">
      <h2 className="login_title">Login</h2>
      <form action="" method="post" className="form_signIn">
        {error && 
        <p 
          style={
            {
              margin:0,
              fontSize:10, 
              color:'red',
            }}
        >
          An error has occured, please try again.
        </p>}
        
        <label htmlFor="email" className="label">
          Email:{' '}
        </label>
        <input
          type="email"
          id="email"
          name="username"
          placeholder="Email"
          className="login_input"
          required
          ref={emailRef}
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
          required
          ref={passwordRef}
        />
        <button className="login_button" onClick={(event) => login(event)}>Login</button>
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
