import React from 'react';
import './Contact.css'; // Import your CSS file here
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="Contact" className="contact-mf sect-pt4 route">
            <h2 className="title-left">Contact me</h2>
            <h1 className="title-left">Get In Touch</h1>

            <div className="map-container">
                {/* Add your map component here */}
                <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23574.702618647637!2d-73.98103242600668!3d40.730610570077476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xae2e3c61a04f21b1!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1644971365152!5m2!1sen!2suk"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
          

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

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">&copy; Copyright <strong>Asavela</strong>. All Rights Reserved</p>
                                <div className="social-links" key="social-links">
                                    <a href="https://github.com/Asavela2?tab=repositories" className="github" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                    <a href="https://www.linkedin.com/in/asavela-mgidi-154884232/" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                    <a href="https://wa.me/+27793459109" className="whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                                    <a href="https://www.instagram.com/asavelamgidi/" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Contact;

