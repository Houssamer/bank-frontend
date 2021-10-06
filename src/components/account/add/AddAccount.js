import React, { useState } from 'react';
import './style.css';
import axios from '../../../axios/axios';
import ReactLoading from 'react-loading';

function AddAccount({ open }) {
  const [loading, setLoading] = useState(false);

  function add() {
      setLoading(true);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    const body = JSON.stringify({
      userEmail: localStorage.getItem('email'),
    });

    axios
      .post('/api/account/add', body, config)
      .then((res) => {
        setLoading(false);
        open(false);
        window.location.reload(false);
      })
      .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  }

  return (
    <div className="add_container">
      {loading && (
        <div className={`${loading}` ? 'loading' : 'hiddenLoading'}>
          <ReactLoading
            type="spinningBubbles"
            color="black"
            height="8%"
            width="8%"
          />
        </div>
      )}
      <h1 className="add_h1">Add a new account</h1>
      <input
        type="email"
        placeholder={localStorage.getItem('email')}
        className="add_input"
      />
      <div className="buttons">
        <button className="add_button" onClick={add}>
          Submit
        </button>
        <button className="add_button_close" onClick={() => open(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AddAccount;
