import React from 'react';
import './style.css';
import profile from '../../assets/profile.png';
import account from '../../assets/account.png';
import operations from '../../assets/operations.png';


function Account() {
    return (
        <div className="account_container">
            <div className="account_leftSide">
                <div className="account_leftSide_top">
                    <h3 className="account_title">Bank</h3>
                    <img src={profile} alt="profile" className="account_profile" />
                </div>
                <div className="account_leftSide_bottom">
                    <div className="account_services">
                        <h3 className="account_text">Services</h3>
                        <div className="services">
                            <div className="service">
                                <img src={account} alt="account" />
                                <h4>Accounts</h4>
                            </div>
                            <div className="service">
                                <img src={operations} alt="operations" />
                                <h4>Operations</h4>
                            </div>
                        </div>
                    </div>
                    <div className="account_button">
                        <button className="button">Sign Out</button>
                    </div>
                </div>
            </div>
            <div className="account_rightSide">

            </div>
        </div>
    )
}

export default Account
