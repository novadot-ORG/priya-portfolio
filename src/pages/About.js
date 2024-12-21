import React from 'react';
import './About.css';
import profile from '../assets/images/profile.jpg'; 

function About() {
  return (
    <section className="about">
      {/* About Content Section */}
      <div className="about-content">
        <div className="introduction">
          <h1>About Me</h1>
          <p>
            Hi, I'm <span className="highlight"><b>Priya.L</b></span>, a passionate Backend Developer skilled in Java and its frameworks.
            I specialize in Advanced Java and love solving real-world problems through technology.
          </p>
        </div>

        {/* Professional Journey */}
        <div className="professional-journey">
          <h2>Professional Journey</h2>
          <p>
            My coding journey began during my college years, where I developed a deep interest in programming. I earned a degree in Electronics and Communication and am now focused on growing as a backend developer.
            While I am in the early stages of my career, I am eager to contribute to impactful projects and collaborate with talented teams.
          </p>
        </div>

        <div className="skills">
  <div className="skills-heading">Skills and Expertise</div>
  <div className="skills-container">
    <div className="skill">
      <span className="skill-name">HTML</span>
      <div className="skill-bar">
        <div className="skill-progress html"></div>
      </div>
    </div>
    <div className="skill">
      <span className="skill-name">CSS</span>
      <div className="skill-bar">
        <div className="skill-progress css"></div>
      </div>
    </div>
    <div className="skill">
      <span className="skill-name">JavaScript</span>
      <div className="skill-bar">
        <div className="skill-progress javascript"></div>
      </div>
    </div>
    <div className="skill">
      <span className="skill-name">API</span>
      <div className="skill-bar">
        <div className="skill-progress api"></div>
      </div>
    </div>
  </div>
</div>


        {/* Interests Section */}
        <div className="interests">
          <h2>Interests & Hobbies</h2>
          <p>
            When I'm not coding, you'll find me exploring photography, playing chess, or diving into sci-fi novels and indie music.
          </p>
        </div>

        {/* Call to Action */}
        <div className="cta">
          <p>
            Want to know more about my work? Check out my <a href="/projects" className="cta-link">Projects</a> or feel free to <a href="/contact" className="cta-link">Contact Me</a>.
          </p>
        </div>
      </div>

      {/* Profile Photo Section */}
      <div className="profile-photo-section">
        <div className="photo-container">
          <img src={profile} alt="Your Name" className="profile-photo" />
        </div>
      </div>
    </section>
  );
}

export default About;



