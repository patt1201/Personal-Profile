import React from 'react';

function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        <strong>Technologies:</strong>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;