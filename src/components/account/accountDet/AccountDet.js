import React, { useState } from 'react';
import './style.css';
import Deposit from '../../../assets/deposit.png'
import Transfer from '../../../assets/transfer.png'
import Withdraw from '../../../assets/withdraw.png'
import { useParams } from 'react-router';

function AccountDet() {
    const {id} = useParams();
    const [account, setAccount] = useState({
        id: id,
        balance: 50000
    });
    const [operations, setOperations] = useState([
        {
            id: 1,
            name: "Deposit",
            amount: 1000,
            date: '2021-06-28 10:00:00'
        },
        {
            id: 2,
            name: "Transfer",
            amount: 500,
            date: '2021-06-28 10:30:00'
        },
        {
            id: 3,
            name: "Withdraw",
            amount: 500,
            date: '2021-06-28 11:00:00'
        },
    ])
    return (
        <div className="accountDet_container">
            <div className="accountDet_top">
                <h1 className="accountDet_title">Account</h1>
                <p className="accountDet_number">{account.id}</p>
            </div>
            <div className="accountDet_bottom">
                <div className="accountDet_bottom_leftSide">
                    <p className="account_number_title">Account Number:</p>
                    <div className="account_number_div">
                        <p className="account_number">{account.id}</p>
                    </div>
                    <div className="account_balance_div">
                        <p className="account_balance_title">Balance:</p>
                        <p className="account_balance">{account.balance}$</p>
                    </div>
                </div>
                <div className="accountDet_bottom_rightSide">
                    <div className="filter">
                        <h3 className="account_operations_title">Operations history</h3>
                        <select name="operation" id="operation" className="operation_select">
                            <option value="all">All</option>
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdraw</option>
                            <option value="transfer">Transfer</option>
                        </select>
                    </div>
                    <div className="account_operations">
                        {operations.map((operation) => (
                            <div key={operation.id} className="operation">
                                <img 
                                    src={operation.name == 'Deposit'
                                        ? Deposit
                                        : operation.name == 'Transfer'
                                        ? Transfer : Withdraw} 
                                    alt={operation.name} 
                                    className="operation_icon"
                                />
                                <div className="operation_info">
                                    <h4>{operation.name}</h4>
                                    <p>{operation.amount}$</p>
                                </div>
                                <p className="operation_date">{operation.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountDet
