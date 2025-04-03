import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Login-Page</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#login">Click on login</a></li>
                <li><a href="#community">Community</a></li>
            </ul>
            <button className="login-button">Login NOW #LOgin</button>
        </nav>
    );
};

export default Navbar;