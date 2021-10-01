import React from 'react';
import './style.css';

function AddAccount({open}) {
    return (
        <div className="add_container">
            <h1 className="add_h1">Add a new account</h1>
            <input 
                type="email"  
                placeholder="Email"
                className="add_input"
            />
            <div className="buttons">
                <button className="add_button">Submit</button>
                <button className="add_button_close" onClick={() => open(false)}>Close</button>
            </div>
        </div>
    )
}

export default AddAccount
