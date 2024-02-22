import React from 'react';
import './Navbar.css';


function Navigation() {
  return (
    <div className="menu">
      <ul>
      <li>
          <a id="homeNav" className="close" href="#Home">Home</a>
     </li>
     <li>
          <a id="aboutNav" className="close" href="#about">About</a>
     </li>
     <li>
          <a id="projectsNav" className="close" href="#project">Project</a>
    </li>
    <li>
          <a id="contactNav" className="close" href="#contact">Contact</a>
    </li>
      </ul>
    </div>
  );
}

export default Navigation;


