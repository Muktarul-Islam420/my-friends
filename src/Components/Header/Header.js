import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1 className="header-text">My Friends</h1>
            <nav>
                <a href="/Home">Home</a>
                <a href="/Find-friends">Find friends</a>
                <a href="/Accept-friends">Accept friends</a>
            </nav>
        </div>
    );
};

export default Header;