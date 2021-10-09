import React, { useEffect, useState } from 'react';
import './style.css';
import Deposit from '../../../assets/deposit.png';
import Transfer from '../../../assets/transfer.png';
import Withdraw from '../../../assets/withdraw.png';
import { useParams } from 'react-router';
import axios from '../../../axios/axios';
import ReactLoading from 'react-loading';

function AccountDet() {
  const { id } = useParams();
  const [account, setAccount] = useState({});
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    const body = JSON.stringify({
      number: id,
    });

    axios
      .post('/api/account', body, config)
      .then((res) => {
        setAccount({
          number: res.data.number,
          balance: res.data.balance,
          createdAt: res.data.createdAt,
        });
        setOperations(res.data.operations);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function sqlToJsDate(sqlDate){
  
    const Arr1 = sqlDate.split("-");
    const year = Arr1[0];
    const month = Arr1[1];

    const Arr2 = Arr1[2].split("T");
    const day = Arr2[0];

    const Arr3 = Arr2[1].split(":");
    const hour = Arr3[0];
    const minutes = Arr3[1];

    const Arr4 = Arr3[2].split(".");
    const seconds = Arr4[0];
    
    const date = year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds;
    return date;
}

  return (
    <div className="accountDet_container">
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
      <div className="accountDet_top">
        <h1 className="accountDet_title">Account</h1>
        <p className="accountDet_number">{account.number}</p>
      </div>
      <div className="accountDet_bottom">
        <div className="accountDet_bottom_leftSide">
          <p className="account_number_title">Account Number:</p>
          <div className="account_number_div">
            <p className="account_number">{account.number}</p>
          </div>
          <div className="account_balance_div">
            <p className="account_balance_title">Balance:</p>
            <p className="account_balance">{account.balance}$</p>
          </div>
        </div>
        <div className="accountDet_bottom_rightSide">
          <div className="filter">
            <h3 className="account_operations_title">Operations history</h3>
            <select
              name="operation"
              id="operation"
              className="operation_select"
            >
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
                  src={
                    operation.type === 'Deposit'
                      ? Deposit
                      : operation.type === 'Transfer'
                      ? Transfer
                      : Withdraw
                  }
                  alt={operation.type}
                  className="operation_icon"
                />
                <div className="operation_info">
                  <h4>{operation.type}</h4>
                  <p>{operation.amount}$</p>
                </div>
                <p className="operation_date">{sqlToJsDate(operation.date)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDet;
