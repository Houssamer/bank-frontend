import React from 'react';
import Header2 from '../../components/Header2/Header2';
import './style.css';
import notfound from '../../assets/404.png';

function NotFound() {
    return (
        <div className="container">
            <Header2 />
            <div className="container_body">
                <h1 className="container_title">Page Not Found</h1>
                <img src={notfound} alt="404" />
            </div>
        </div>
    )
}

export default NotFound
