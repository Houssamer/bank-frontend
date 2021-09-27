import React from 'react';
import Header1 from '../../components/Header1/Header1';
import './style.css';
import lock from '../../assets/lock.png';
import fingerprint from '../../assets/fingerprint.png';
import firewall from '../../assets/firewall.png';
import card from '../../assets/card.png';

function Home() {
    return (
        <div className="home_container">
            <Header1 />

            <div className="home_body">
                <div className="home_leftSide">
                    <div className="home_leftSide_top">
                        <h1 className="home_title">
                            Modern Online <br />
                            Bank
                        </h1>
                        <p className="home_paragraph">
                            Your way to a futuristic payment, banking operations
                            <br />
                            and less fees than any other service out there.
                        </p>
                        <h3 className="home_click">Learn more</h3>
                    </div>
                    <div className="home_leftSide_bottom">
                        <h2 className="home_subtitle">Your safety is our priority</h2>
                        <div className="home_icons">
                            <img src={lock} alt="lock" />
                            <img src={fingerprint} alt="fingerprint" />
                            <img src={firewall} alt="firewall" />
                        </div>
                    </div>
                </div>
                <div className="home_rightSide">
                    <img src={card} alt="card" className="card" />
                </div>
            </div>
        </div>
    )
}

export default Home
