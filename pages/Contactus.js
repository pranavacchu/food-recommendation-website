// ContactUs.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import BannerImage from '../assets/background1.jpg'
import '../styles/Contactus.css';
import Contactus from '../assets/contactus.gif'

const ContactUs = () => {
  return (
    <div> 
    <Navbar/> 
    

    <div className="contact-form" style={{backgroundImage:`url(${BannerImage})`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url("${BannerImage}")`}}>
    
    
      <h1>Help us get better!</h1>
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Contact Us</h2>
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Enter Your Name" />

              <input type="email" name="email" placeholder="Enter Your Email" />
              <textarea name="message" placeholder="Your Message"></textarea>

              <button type="submit" className="btn">
                Send <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
          <div className="form-img">
            <img src={Contactus} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
