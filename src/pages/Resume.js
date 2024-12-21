import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as faLinkedInBrand, faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';
import './Resume.css';

function Resume() {
  return (
    <section className="resume">
      {/* Header and Summary Section */}
      <div className="header-summary-container">
        {/* Header Section */}
        <header className="resume-header">
          <h1>L.Priya</h1>
          <h2>Backend Developer</h2>
          <div className="contact-info">
            <a href="mailto:digyna.priya@gmail.com" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
            <span>|</span>
            <a href="tel:+916305876408" className="contact-link">
              <FontAwesomeIcon icon={faPhone} /> Phone
            </a>
            <span>|</span>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FontAwesomeIcon icon={faLinkedInBrand} /> LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FontAwesomeIcon icon={faGithubBrand} /> GitHub
            </a>
          </div>
          <button
            className="download-btn"
            onClick={() => window.open('/path-to-your-resume.pdf')}
          >
            Download Resume
          </button>
        </header>

        {/* Summary Section */}
        <section className="resume-section summary">
          <h2>Summary</h2>
          <div className="summary-card">
            <p>
              I am a passionate Backend Developer skilled in building scalable web applications
              and solving complex problems using frameworks like React and Node.js. I thrive in
              collaborative environments and enjoy learning new technologies.
            </p>
          </div>
        </section>
      </div>

      {/* Skills Section */}
      <section className="resume-section skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skills-card">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="skills-card">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>Spring</li>
              <li>SpringBoot</li>
              <li>Hibernate</li>
            </ul>
          </div>
          <div className="skills-card">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="skills-card">
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem-Solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="resume-section education">
        <h2 className="section-title">Education</h2>
        <div className="education-cards">
          <div className="education-card">
            <h3>Bachelors in Electronics</h3>
            <p><strong>Vemu Institute of Technology</strong> | 2023</p>
            <p>Graduated with honors. Studied core subjects, programming languages, databases, and software engineering.</p>
          </div>
          <div className="education-card">
            <h3>Intermediate</h3>
            <p><strong>Sri Chaithanya</strong> | 2020</p>
            <p>Studied MPC.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="resume-footer">
        <p>Looking to collaborate or hire? <a href="mailto:digyna.priya@gmail.com">Contact me!</a></p>
      </footer>
    </section>
  );
}

export default Resume;







