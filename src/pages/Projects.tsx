import React from 'react';
import './Projects.css';
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaGithub, FaDatabase,
} from 'react-icons/fa';
import { SiCss3, SiHtml5 } from 'react-icons/si';
import { GrDeploy } from 'react-icons/gr';
import { Project } from '../types';

const techIcons: { [key: string]: JSX.Element } = {
  "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "JavaScript": <FaReact />,
  "ReactJS": <FaReact />,
  "Tailwind CSS": <SiCss3 />,
  "Java": <FaJava />,
  "Spring Boot": <FaJava />,
  "MySQL": <FaDatabase />,
  "GitHub": <FaGithub />,
};

const projects: Project[] = [
  {
    title: "Quiz App",
    description: "A simple web-based quiz app with dynamic question rendering, score tracking, and responsive UI.",
    techUsed: "HTML, CSS, JavaScript",
    image: { url: "/quiz-app.png" },
  },
  {
    title: "KAAN - The Music App",
    description: "Full-stack music app for streaming/downloading songs. Includes user auth, playlists, and admin panel.",
    techUsed: "ReactJS, Tailwind CSS, Java, Spring Boot, MySQL",
    image: { url: "/music-app.png" },
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
