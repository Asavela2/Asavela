import React from 'react';
import './Home.css';
import AsaImage from './Asa.jpg'; // Import the image
import { useEffect } from 'react';




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
        <a href="#" className="github"><i className="material-icons">github</i></a>
        <a href="#" className="linkedin"><i className="material-icons">LinkedIn</i></a>
        <a href="#" className="whatsapp"><i className="material-icons">WhatsApp</i></a>
        <a href="#" className="instagram"><i className="material-icons">Instagram</i></a>
      </div>
    </div>
  );
}

export default Home;


