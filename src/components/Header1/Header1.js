import React from 'react';
import './style.css';

function Header1() {
    return (
        <div className="header_container">
            <div className="header_leftSide">
                <h3 className="logo">Bank</h3>
            </div>
            <div className="header_rightSide">
                <button className="button_login">Login</button>
                <button className="button_signup">Sign Up</button>
            </div>  
        </div>
    )
}

export default Header1
