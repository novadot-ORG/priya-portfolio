import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-intro">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out! Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-details">
        <h3>Get In Touch</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/priya-l-7a25911b6/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/priya.digyna/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="mailto:digyna.priya@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;



