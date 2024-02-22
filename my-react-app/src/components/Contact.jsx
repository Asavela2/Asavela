import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import emailjs from 'emailjs-com';
import './Contact.css';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isVerified, setIsVerified] = useState(false);
    const [messageSent, setMessageSent] = useState(false); // State variable for message sent notice

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("Please verify that you're not a robot.");
      return; // Exit early if not verified
    }

    // Sending email using emailjs
    emailjs.sendForm('service_zjgzzhk', 'template_ow21x2v', e.target, 'HS7hFLjLrctjR6CWV')
      .then((result) => {
        console.log(result.text);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          subject: '',
          message: ''
        });
        toast.success('Message Sent Successfully');
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message');
      });

    // Posting data to your Firebase database
    const user = {
      FullName: formData.firstname + ' ' + formData.lastname,
      Subject: formData.subject,
      Email: formData.email,
      Message: formData.message
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    try {
      const res = await fetch('https://portfolio-5eee0-default-rtdb.firebaseio.com/UserData.json', options);
      if (res.ok) {
        alert('Data Sent Successfully');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data:', error);
      toast.error('Failed to send data');
    }
  };

  const handleRecaptchaChange = (token) => {
    if (token) {
      setIsVerified(true);
    }
  };



    return (
        <section id="contact" className="contact-mf sect-pt4 route">
            <h2 className="title-left">Contact me</h2>
            {/* <h1 className="title-left">Get In Touch</h1> */}
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Get in Touch </p>
                <div className="flex">
                    <label>
                        <input className="input" 
                        type="text" 
                        name="firstname"
                        value={formData.firstname} 
                        onChange={handleChange} placeholder="" 
                        required />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input className="input"
                         type="text" 
                         name="lastname"
                         value={formData.lastname}
                         onChange={handleChange} 
                         placeholder="" 
                         required />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input className="input" 
                    type="email"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="" 
                    required />
                    <span>Email</span>
                </label>

                <label>
                    <input className="input" 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="" 
                    required />
                    <span>Subject</span>
                </label>
                <label>
                    <textarea className="input" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="" 
                    required />
                    <span>Message</span>
                </label>
                <ReCAPTCHA
                    sitekey="6Lf2tnspAAAAAO4UunNwgsDAhwKOpDgegzcjDlyQ"
                    onChange={handleRecaptchaChange}
                />
                <button type="submit" className="submit" disabled={!isVerified}>Submit</button>
            </form>
            {messageSent && <p className="message-sent">Message Sent!</p>} {/* Render message sent notice if messageSent is true */}
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

export default ContactForm;


