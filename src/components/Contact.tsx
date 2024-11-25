import React from 'react';
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import "../app/styles/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid md:grid-cols-2">
        
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="zoom-in-up">Contact Us</h2>
          <p className="contact-text" data-aos="zoom-in-up">
            Feel free to reach out by dropping me a line, giving me a call, or sending a message through the contact form.
          </p>
          
          <div className="contact-info" data-aos="zoom-in-up">
            <FiMail size={24} /> wahidnida761@gmail.com
          </div>

          <div className="contact-flex" data-aos="zoom-in-up">
            <BsTelephone size={24} /> 0341000000
          </div>
        </div>
        
        <div className="contact-space">
          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" id="name" />
          </div>

          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" className="input-field" id="email" />
          </div>

          <div className="form" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea  className="textarea-field"  id="msg" rows={8}></textarea>
          </div>
          
          <button className="button" data-aos="zoom-in-up">
            Send
          </button>
        </div>  
      </div>
    </div>
  );
};

export default Contact;
