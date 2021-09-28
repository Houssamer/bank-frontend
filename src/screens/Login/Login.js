import React, { useState } from 'react';
import Header2 from '../../components/Header2/Header2';
import './style.css';
import lock from '../../assets/lock.png';
import fingerprint from '../../assets/fingerprint.png';
import firewall from '../../assets/firewall.png';
import login from '../../assets/login.png';

function Login() {
    const [signUp, setSignUp] = useState(false);
    return (
        <div className="login_container">
            <Header2 />
            <div className="login_body">
                <div className="login_leftSide">
                    <div>
                        <img src={login} alt="login" />
                    </div>
                    <div className="login_leftSide_bottom">
                        <img src={lock} alt="lock" />
                        <img src={fingerprint} alt="fingerprint" />
                        <img src={firewall} alt="firewall" />
                    </div>
                </div>
                <div className="login_rightSide">
                    {!signUp 
                    ? (
                        <div className="login_signIn">
                            <h2 className="login_title">Login</h2>
                            <form action="" method="post" className="form_signIn">
                                <label htmlFor="email" className="label">Email: </label>
                                <input 
                                    type="text" 
                                    id="email"
                                    name="username" 
                                    placeholder="Email" 
                                    className="login_input"
                                />
                                <label htmlFor="password" className="label">Password: </label>
                                <input 
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password" 
                                    className="login_input"
                                />
                                <input 
                                    type="submit"  
                                    value="Login"
                                    className="login_button"
                                />
                            </form>

                            <p className="text">
                                You don't have an account? 
                                <span 
                                    className="subtext" 
                                    onClick={() => setSignUp(true)}> Sign Up.</span>
                            </p>
                        </div>
                    ) : (
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
                                <span 
                                    className="subtext"
                                    onClick={() => setSignUp(false)}> Login.</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Login
