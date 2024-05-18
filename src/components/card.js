import React from 'react';
import '../styles/styles.css';
import bg_image from "../images/bg_image.jpg"

const HeroSection = () => {
    return (
        <div className="hero-section" style={{backgroundImage: `url(${bg_image})`}}>
            <div className="hero-content">
                <h1>I'm a developer</h1>
                <p>I build things for the web</p>
                <div className="subscription">
                    <input type="email" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
