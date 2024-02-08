import React from 'react';
import './Home.css';
import AsaImage from './Asa.jpg'; // Import the image
import { GitHub, LinkedIn, WhatsApp, Instagram } from '@mui/icons-material';

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
        <a href="https://github.com/Asavela2?tab=repositories" className="github"><GitHub /></a>
        <a href="https://www.linkedin.com/in/asavela-mgidi-154884232/" className="linkedin"><LinkedIn /></a>
        <a href="https://wa.me/0793459109" className="whatsapp"><WhatsApp /></a>
        <a href="https://www.instagram.com/asavelamgidi/" className="instagram"><Instagram /></a>
      </div>
    </div>
  );
   <div class="button" data-tooltip="Size: 20Mb">
        <div class="button-wrapper">
          <div class="text">Resume Download</div>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
            </span>
        </div>
   </div>


}

export default Home;



