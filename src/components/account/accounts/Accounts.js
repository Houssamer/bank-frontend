import React, { useState } from 'react';
import './style.css';

function Accounts() {
    const [accounts, setAccounts] = useState([
        {
            id: '961715552555369759046004'
        },
        {
            id: '761011265779452059593075'
        }
    ])
    return (
        <div className="accounts_container">
            <h1 className="accounts_title">Accounts</h1>
            <button className="accounts_add">Add</button>
            <div className="accounts">
                {accounts.map((account) => (
                    <div className="account_div" key={account.id}>
                        <p className="account_number">account number: {account.id}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accounts
