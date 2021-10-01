import React from 'react';
import { useHistory } from 'react-router';
import './style.css';

function Header2() {
    const history = useHistory();

    return (
        <div className="header2_container">
            <div className="header_leftSide">
                <h3 
                    className="logo" 
                    onClick={() => history.push('/')}
                >
                    Bank
                </h3>
            </div>
        </div>
    )
}

export default Header2
