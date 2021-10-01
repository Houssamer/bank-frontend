import React from 'react';
import { useHistory } from 'react-router';
import './style.css';

function Header1() {
    const history =  useHistory();

    return (
        <div className="header_container">
            <div className="header_leftSide">
                <h3 
                    className="logo"
                    onClick={() => history.push('/')}
                >
                    Bank
                </h3>
            </div>
            <div className="header_rightSide">
                <button 
                    className="button_login" 
                    onClick={() => history.push('/login/')}
                >
                    Login
                </button>
                <button 
                    className="button_signup" 
                    onClick={() => history.push('/login/signup')}
                >
                    Sign Up
                </button>
            </div>  
        </div>
    )
}

export default Header1
