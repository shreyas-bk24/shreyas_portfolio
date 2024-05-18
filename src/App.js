// src/App.js
import React from 'react';
import NavBar from './components/navBar';
import HeroSection from './components/card';
import FeaturedProjects from './components/featuredProjects';

const App = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <HeroSection />
                <FeaturedProjects />
                {/* Add more sections as needed */}
            </div>
        </div>
    );
}

export default App;
