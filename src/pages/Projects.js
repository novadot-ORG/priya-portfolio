import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce App',
    description: 'A platform for online shopping with payment integration and user authentication.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    features: ['User authentication', 'Cart management', 'Stripe payment integration'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my work, built using React.',
    techStack: ['React', 'CSS'],
    features: ['Responsive design', 'Dark mode toggle', 'Interactive navigation'],
  },
  {
    id: 3,
    title: 'Task Manager API',
    description: 'A RESTful API for managing tasks with authentication and CRUD operations.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    features: ['User authentication', 'Task creation and management', 'Secure API endpoints'],
  },
];

function Projects() {
  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-intro">Here are some of the projects I've worked on.<br></br> These demonstrate my skills in web development, backend APIs, and building scalable solutions.</p>
      
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <h3 className="project-techstack-title">Tech Stack:</h3>
            <ul className="project-techstack">
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <h3 className="project-features-title">Key Features:</h3>
            <ul className="project-features">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

