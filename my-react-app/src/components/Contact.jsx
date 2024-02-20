import React from 'react';
import './Contact.css'; // Import your CSS file here
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="Contact" className="contact-mf sect-pt4 route">
            <h2 className="title-left">Contact me</h2>
            <h1 className="title-left">Get In Touch</h1>
            <form className="form">
                <div className="flex">
                    <label>
                        <input required="" placeholder="" type="text" className="input" />
                        <span>First Name</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" className="input" />
                        <span>Last Name</span>
                    </label>
                </div>

                <label>
                    <input required="" placeholder="" type="email" className="input" />
                    <span>Email</span>
                </label>

                <label>
                    <input required="" type="tel" placeholder="" className="input" />
                    <span>Subject</span>
                </label>

                <label>
                    <textarea required="" rows="3" placeholder="" className="input01"></textarea>
                    <span>Message</span>
                </label>

                <button className="fancy" href="#">
                    <span className="top-key"></span>
                    <span className="text">Submit</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            </form>
            <div className="social-links" key="social-links">
                                    <a href="https://github.com/Asavela2?tab=repositories" className="github" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                    <a href="https://www.linkedin.com/in/asavela-mgidi-154884232/" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                    <a href="https://wa.me/+27793459109" className="whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                                    <a href="https://www.instagram.com/asavelamgidi/" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                </div>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">&copy; Copyright <strong>Asavela</strong>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Contact;

