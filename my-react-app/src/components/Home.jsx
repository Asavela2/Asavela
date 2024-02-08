import React from 'react';
import './Home.css';
import AsaImage from './Asa.jpg'; // Import the image
import { useEffect } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Home = () => {

    useEffect(() => {
      // Add Material Icons stylesheet dynamically
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
  
      // Clean up function to remove the added link when the component unmounts
      return () => {
        document.head.removeChild(link);
      };
    }, []);
  return (
    <div className='home-container' style={{backgroundImage: `url(${AsaImage})`}}>
      <div className="overlay"></div>
      <div className="text-zone">
        <h1>HI, I am Asavela Mgidi</h1>
        <h4>I'm a passionate <u>software developer</u> from Western Cape</h4>
      </div>
      <div id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link active" href="#header">Home</a></li>
          <li><a className="nav-link" href="#About">About</a></li>
          <li><a className="nav-link" href="#Project">Project</a></li>
          <li><a className="nav-link" href="#Contact">Contact</a></li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="social-links">
      <a href="https://github.com/Asavela2?tab=repositories" className="github" target="blank"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/asavela-mgidi-154884232/" className="linkedin" target=" blank"><FaLinkedinIn /></a>
      <a href="https://wa.me/+27793459109" className="whatsapp" target="blank"><FaWhatsapp /></a>
      <a href="https://www.instagram.com/asavelamgidi/" className="instagram" target="blank"><FaInstagram /></a>
      </div>
    </div>
  );
}
export default Home;