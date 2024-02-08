import React from 'react';
import './Home.css';
import AsaImage from './Asa.jpg'; // Import the image
import { GitHub, LinkedIn, WhatsApp, Instagram } from '@mui/icons-material';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";




const Home = () => {
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
        <a href="#" className="github"><i className="material-icons">github</i></a>
        <a href="#" className="linkedin"><i className="material-icons">linkedIn</i></a>
        <FaWhatsapp />
        <FaInstagram />
      </div>
    </div>
  );
}

export default Home;


