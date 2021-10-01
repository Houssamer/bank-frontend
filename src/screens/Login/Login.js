import React, { useState } from 'react';
import Header2 from '../../components/Header2/Header2';
import './style.css';
import lock from '../../assets/lock.png';
import fingerprint from '../../assets/fingerprint.png';
import firewall from '../../assets/firewall.png';
import login from '../../assets/login.png';
import {
    Switch,
    Route
  } from "react-router-dom";
import SignUp from '../../components/login/signUp/SignUp';
import SignIn from '../../components/login/signIn/SignIn';


function Login() {
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
                    <Switch>
                        <Route path="/login/signup">
                            <SignUp />
                        </Route>
                        <Route path="/login/">
                            <SignIn />
                        </Route>
                    </Switch>
                </div>
            </div>

        </div>
    )
}

export default Login
