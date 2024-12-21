import React from 'react';
import './Home.css';  // Ensure the path to CSS is correct
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import profile from '../assets/images/profile.jpg'; // Import your photo

function Home() {
  return (
    <div className="home">
      <div className="left-side">
        <h1>Hi, I'm <b>Priya.L</b></h1>
        <p className="profession">Backend Developer</p>
        <p className="about-me">
          I'm a passionate Backend Developer specializing in Java with expertise in Java and Advance Java concepts like SpringBoot,Hibernate and SpringSecurity.
        </p>
        
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Java,SQL</li>
          <li>HTML,CSS,JavaScript</li>
          <li>APIs & RESTful Services</li>
        </ul>

        <div className="contact">
          <h2>Contact Me</h2>
          <p>If you'd like to collaborate or just want to chat, feel free to reach out to me!</p>
          <div className="contact-icons">
            <a href="https://www.instagram.com/priya.digyna/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
          </div>

        </div>
      </div>

      <div className="right-side">
        <div className="photo-container">
          <img src={profile} alt="Your Name" className="profile-photo" />
           {/* <p className="name-bottom">Priya.L</p> */ }
        </div>
      </div>
    </div>
  );
}

export default Home;



