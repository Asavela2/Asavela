import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <a id="Aboutnavbar" className="close" href="#about">About</a>
                </li>
                <li>
                    <a id="ProjectNav" className="close" href="#project">Project</a>
                </li>
                
                <li>
                    <a id="ContactNav" className="close" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
