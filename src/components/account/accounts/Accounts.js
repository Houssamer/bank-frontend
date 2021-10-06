import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUser } from '../../../features/userSlice';
import AddAccount from '../add/AddAccount';

import './style.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      height: '50%',
      borderRadius: 30,
      boxShadow:'-2px 2px 5px 2px #C4C4C4',
    },
  };

function Accounts() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [accounts, setAccounts] = useState([]);
  
  useEffect(() => {
    setAccounts(user.accounts)
  }, []);


  return (
    <div className="accounts_container">
      <h1 className="accounts_title">Accounts</h1>
      <button className="accounts_add" onClick={() => setIsOpen(true)}>
        Add
      </button>
      <div className="accounts">
        {accounts.map((account) => (
          <div
            className="account_div"
            key={account.id}
            onClick={() => history.push('/account/info/' + account.number)}
          >
            <p className="account_number">account number: {account.number}</p>
          </div>
        ))}
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <AddAccount open={setIsOpen} />
        </ReactModal>
      </div>
    </div>
  );
}

export default Accounts;
