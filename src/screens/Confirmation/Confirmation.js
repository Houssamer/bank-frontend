import React from 'react';
import { useHistory } from 'react-router';
import './style.css';

function Confirmation() {
    const history = useHistory();
    return (
        <div className="confirmation_container">
            <div className="confirmation_card">
                <p className="confirmation_text">
                    an email has been sent to you. Please confirm your email.
                    </p>
            </div>
            <div className="confirmation_buttons">
                <button 
                    className="confirmation_button" 
                    onClick={() => history.push('/login')}>
                    Login
                </button>
            </div>              
        </div>
    )
}

export default Confirmation
