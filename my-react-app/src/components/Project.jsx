import React, { useState } from 'react';
import './Project.css';
import ProjectImage1 from '../components/construction-site.jpg';
import ProjectImage2 from '../components/banking_app.jpg';
import ProjectImage3 from '../components/Metric-converter.jpg';
import ProjectImage4 from '../components/financial calculator.jpg';

const Project = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            title: "Construction-website",
            image: ProjectImage1,
            githubLink: 'https://github.com/Asavela2/Construction-website'
        },
        {
            title: "Banking-app",
            image: ProjectImage2,
            githubLink: 'https://github.com/Asavela2/Thee-Deciders-Banking-App'
        },
        {
            title: "Metric-converter",
            image: ProjectImage3,
            githubLink: 'https://github.com/Asavela2/Metric-Converter'
        },
        {
            title: "Financial-Calculator",
            image: ProjectImage4,
            githubLink: 'https://github.com/Asavela2/Financial-Calculator'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === Math.ceil(projects.length / 2) - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? Math.ceil(projects.length / 2) - 1 : currentSlide - 1);
    };

    return (
        <section className="project" id='project'>
            <h2>Project</h2>
            <div className="slideshow-container">
                {projects.slice(currentSlide * 2, currentSlide * 2 + 2).map((project, index) => (
                    <div className="card" key={index}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-img"
                        />
                        <h2 className="experience-sub-title project-title">{project.title}</h2>
                        <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.open(project.githubLink, "_blank")}
                        >
                            Github
                        </button>

                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </section>
    );
}

export default Project;
