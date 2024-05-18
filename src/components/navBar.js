// src/components/NavBar.js
import React from 'react';
import '../styles/styles.css';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-logo">CodeCraft</div>
            <div className="tabs">
                <a href="#home">Home</a>
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            <a href="#signup" className="sign-up">Sign up</a>
        </div>
    );
}

export default NavBar;
