import React from 'react';
import './Project.css';
import ProjectImage from '../components/construction-site.jpg'; // Import the image
import BankingImage from '../components/banking_app.jpg';
import MetricImage from '../components/Metric-converter.jpg';
import FinanceImage from '../components/financial calculator.jpg';


const Project = () => {
    return (
        <div className="project">
            <h2>Project</h2>
            <div className="card">
            <div class="details-container color-container">
            <div class="article-container">
            <div>
            {/* Assuming projectImage is a variable containing the image */}
            <img
                src={ProjectImage}
                alt="Project2"
                className="project-img"
            />
        </div>
            </div>
            <h2 class="experience-sub-title project-title">Construction-website</h2>
            <div class="btn-container">
              
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/Asavela2/Financial-Calculator'"
              >
              Github
              </button>
            </div>
          </div>
            </div>
            <div className="card-1">
            <div class="details-container color-container">
            <div class="article-container">
            <img
                src={BankingImage}
                alt="Project2"
                className="project-img-3"
              />
            </div>
            <h2 class="experience-sub-title project-title">Banking-app</h2>
            <div class="btn-container">
              
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/Asavela2/Financial-Calculator'"
              >
              Github
              </button>
            </div>
          </div>
                
            </div> 
            <div className="card-2">
            <div class="details-container color-container">
            <div class="article-container">
            <img
                src={MetricImage}
                alt="Project2"
                className="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Metric-converter</h2>
            <div class="btn-container">
              
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/Asavela2/Financial-Calculator'"
              >
              Github
              </button>
            </div>
          </div>
            </div> 

            <div className="card-3">
            <div class="details-container color-container">
            <div class="article-container">
              <img
               src={FinanceImage}
               alt="Project2"
               className="project-img-2"
              />
            </div>
            <h2 class="experience-sub-title project-title">Financial-Calculator</h2>
            <div class="btn-container">
              
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/Asavela2/Financial-Calculator'"
              >
              Github
              </button>
            </div>
          </div>
                
            </div> 
        </div>
    );
}

export default Project;

