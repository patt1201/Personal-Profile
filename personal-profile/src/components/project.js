import React from 'react';
import ProjectCard from '../components/ProjectCard';

function project() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with user authentication, product catalog, and secure checkout functionality.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      link: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides real-time weather data and forecasts for any location.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
      link: "https://github.com/yourusername/weather-dashboard"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool with features like task assignments, deadlines, and progress tracking.",
      technologies: ["React", "Firebase", "Redux", "Material UI"],
      link: "https://github.com/yourusername/task-manager"
    }
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default project;