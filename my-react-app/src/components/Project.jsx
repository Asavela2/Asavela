import React from 'react';
import './Project.css';
import ProjectImage from '../components/construction-site.jpg'; // Import the image
import BankingImage from '../components/banking_app.jpg';
import MetricImage from '../components/Metric-converter.jpg';
import FinanceImage from '../components/financial calculator.jpg';

const Project = () => {
    return (
        <section className="project" id='project'>
            <h2>Project</h2>
            <div className="card">
                <div className="details-container color-container">
                    <div className="article-container">
                        <div>
                            {/* Assuming projectImage is a variable containing the image */}
                            <img
                                src={ProjectImage}
                                alt="Project2"
                                className="project-img"
                            />
                        </div>
                    </div>
                    <h2 className="experience-sub-title project-title">Construction-website</h2>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href = 'https://github.com/Asavela2/Construction-website'}
                        >
                            Github
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-1">
                <div className="details-container color-container">
                    <div className="article-container">
                        <img
                            src={BankingImage}
                            alt="Project2"
                            className="project-img-3"
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Banking-app</h2>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href = 'https://github.com/Asavela2/Thee-Deciders-Banking-App'}
                        >
                            Github
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-2">
                <div className="details-container color-container">
                    <div className="article-container">
                        <img
                            src={MetricImage}
                            alt="Project2"
                            className="project-img"
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Metric-converter</h2>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href = 'https://github.com/Asavela2/Metric-Converter'}
                        >
                            Github
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-3">
                <div className="details-container color-container">
                    <div className="article-container">
                        <img
                            src={FinanceImage}
                            alt="Project2"
                            className="project-img-2"
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Financial-Calculator</h2>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.href = 'https://github.com/Asavela2/Financial-Calculator' }
                        >
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;


