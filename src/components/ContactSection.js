 import React from 'react';
import '../styles/Contact.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="mobile-container">
        <div className="mobile-top-bar">
          <div className="notch"></div>
        </div>
        <div className="mobile-screen">
          <h2 className="contact-heading">Get in <span>Touch</span></h2>
          <p className="contact-subheading">
            Feel free to reach out with any questions, feedback, or suggestions.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Message" className="form-textarea"></textarea>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
