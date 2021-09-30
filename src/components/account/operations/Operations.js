import React, { useState } from 'react';
import './style.css';

function Operations() {
    const [account, setAccount] = useState({
        id: '961715552555369759046004 '
    })
    const [transfer, setTransfer] = useState(false);

    return (
        <div className="operation_container">
            <div className="operation_top">
                <h1 className="operation_title">Account</h1>
                <p className="operation_account_number">{account.id}</p>
            </div>
            <div className="operation_bottom">
                <select 
                    name="operations" 
                    id="opreations" 
                    className="operations_select"
                    onChange={
                        (event) => event.target.value === 'transfer' 
                        ? setTransfer(true) : setTransfer(false)
                    }
                >
                    <option value="deposit">Deposit</option>
                    <option value="transfer">Transfer</option>
                    <option value="withdraw">Withdraw</option>
                </select>
                <div className="operations_div">
                    <div className="operations_input_container">
                        <label htmlFor="amount">Amount:</label>
                        <input 
                            type="numeric" 
                            placeholder="Amount"
                            id="amount"
                            className="operation_input"
                        />
                        {
                            transfer && (
                                <>
                                <label htmlFor="account">Account: </label>
                                <input 
                                    type="text" 
                                    placeholder="account"
                                    id="account"
                                    className="operation_input"
                                />
                                </>
                            )
                        }
                    </div>
                    <div className="button_container">
                        <button className="operation_button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Operations
