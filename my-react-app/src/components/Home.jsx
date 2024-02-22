import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import AsaImage from './Asa.jpg'; 
import AsaResume from './Asavela-Mgidi resume.pdf';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home-container' style={{backgroundImage: `url(${AsaImage})`}}>
      <div className="overlay"></div>
      <div className="text-zone">
        <h1>HI, I am Asavela Mgidi</h1>
        <h4>I'm a passionate <u>software developer</u> from Western Cape</h4>
      </div>
      <div className="social-links">
        <a href="https://github.com/Asavela2?tab=repositories" className="github" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/asavela-mgidi-154884232/" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://wa.me/+27793459109" className="whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/asavelamgidi/" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      
      <div className="button" data-tooltip="Size: 20Mb">
        <a href={AsaResume} download className="button-wrapper">
          <div className="text">Download CV</div>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Home;


