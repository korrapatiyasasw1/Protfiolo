import React from 'react'

const Projects = () => {
    const projectList = [
      {
        title: "Portfolio Website",
        description: "A modern portfolio built using React and TailwindCSS.",
        link: "https://github.com/your-repo/portfolio",
      },
      {
        title: "E-commerce Store",
        description: "A responsive e-commerce app with a Node.js backend.",
        link: "https://github.com/your-repo/ecommerce",
      },
    ];
  
    return (
      <section id="projects">
        <h2>Projects</h2>
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </section>
    );
  };
  
  export default Projects;
  