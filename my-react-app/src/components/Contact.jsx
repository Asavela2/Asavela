import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="Contact" className="contact-mf sect-pt4 route">
            <h5 className="title-left">Contact me</h5>
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

        </section>
    );
}

export default Contact;

       