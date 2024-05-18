// src/components/FeaturedProjects.js
import React from 'react';
import '../styles/styles.css';

const FeaturedProjects = () => {
    return (
        <div className="featured-projects">
            <h2>Featured Projects</h2>
            <div className="project">
                <img src="path_to_image1.jpg" alt="Project 1" />
                <div className="project-info">
                    <h3>Project 1</h3>
                    <p>Description of project 1</p>
                    <button>View project</button>
                </div>
            </div>
            <div className="project">
                <img src="path_to_image2.jpg" alt="Project 2" />
                <div className="project-info">
                    <h3>Project 2</h3>
                    <p>Description of project 2</p>
                    <button>View project</button>
                </div>
            </div>
            <div className="project">
                <img src="path_to_image3.jpg" alt="Project 3" />
                <div className="project-info">
                    <h3>Project 3</h3>
                    <p>Description of project 3</p>
                    <button>View project</button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjects;
