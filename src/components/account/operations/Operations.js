import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import axios from '../../../axios/axios';
import { selectUser } from '../../../features/userSlice';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import swal from 'sweetalert';

function Operations() {
  const [transfer, setTransfer] = useState(false);
  const user = useSelector(selectUser);
  const selectRef = useRef();
  const selectAccountRef = useRef();
  const accountRef = useRef();
  const amountRef = useRef();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
  };
  const [loading, setLoading] = useState(false);

  function submit() {
    setLoading(true);
    const operation = selectRef.current.value;
    switch (operation) {
      case 'deposit':
        Deposit();
        break;
      case 'transfer':
        Transfer();
        break;
      case 'withdraw':
        Withdraw();
        break;
      default:
        break;
    }
  }

  function Deposit() {
    const account = selectAccountRef.current.value;
    const amount = amountRef.current.value;

    const body = JSON.stringify({
      accountNumber1: account,
      amount,
    });

    axios.post('/api/operations/deposit', body, config)
    .then(() => {
        setLoading(false);
        swal({
            title: 'Success',
            text: 'Your operation has been done successfully',
            icon: 'success',
            button: 'ok'
        })
    }).catch((err) => {
        setLoading(false);
        swal({
            title: 'Error',
            text: 'Your operations has been cancelled please try again',
            icon: 'error',
            button: 'ok'
        });
    });
  }

  function Transfer() {
    const account = selectAccountRef.current.value;
    const accountT = accountRef.current.value;
    const amount = amountRef.current.value;

    const body = JSON.stringify({
      accountNumber1: account,
      accountNumber2: accountT,
      amount,
    });

    axios.post('/api/operations/transfer', body, config)
    .then(() => {
        setLoading(false);
        swal({
            title: 'Success',
            text: 'Your operation has been done successfully',
            icon: 'success',
            button: 'ok'
        })
    }).catch((err) => {
        setLoading(false);
        swal({
            title: 'Error',
            text: 'Your operations has been cancelled please try again',
            icon: 'error',
            button: 'ok'
        });
    });
  }

  function Withdraw() {
    const account = selectAccountRef.current.value;
    const amount = amountRef.current.value;

    const body = JSON.stringify({
      accountNumber1: account,
      amount,
    });

    axios.post('/api/operations/withdraw', body, config)
    .then(() => {
        setLoading(false);
        swal({
            title: 'Success',
            text: 'Your operation has been done successfully',
            icon: 'success',
            button: 'ok'
        })
    }).catch((err) => {
        setLoading(false);
        swal({
            title: 'Error',
            text: 'Your operations has been cancelled please try again',
            icon: 'error',
            button: 'ok'
        });
    });
  }

  return (
    <div className="operation_container">
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
      <div className="operation_top">
        <h1 className="operation_title">Account</h1>
      </div>
      <div className="operation_bottom">
        <select
          name="operations"
          id="opreations"
          className="operations_select"
          ref={selectRef}
          onChange={(event) =>
            event.target.value === 'transfer'
              ? setTransfer(true)
              : setTransfer(false)
          }
        >
          <option value="deposit">Deposit</option>
          <option value="transfer">Transfer</option>
          <option value="withdraw">Withdraw</option>
        </select>
        <select
          name="accounts"
          id="accounts"
          className="operations_select"
          ref={selectAccountRef}
        >
          {user.accounts.map((account) => (
            <option value={account.number}>{account.number}</option>
          ))}
        </select>
        <div className="operations_div">
          <div className="operations_input_container">
            <label htmlFor="amount">Amount:</label>
            <input
              type="numeric"
              placeholder="Amount"
              id="amount"
              className="operation_input"
              ref={amountRef}
            />
            {transfer && (
              <>
                <label htmlFor="account">Account: </label>
                <input
                  type="text"
                  placeholder="account"
                  id="account"
                  className="operation_input"
                  ref={accountRef}
                />
              </>
            )}
          </div>
          <div className="button_container">
            <button className="operation_button" onClick={submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;
