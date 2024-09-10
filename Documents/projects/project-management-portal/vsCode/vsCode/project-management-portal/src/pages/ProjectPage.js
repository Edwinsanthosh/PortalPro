// src/pages/ProjectPage.js
import React, { useState } from 'react';
import './ProjectPage.css'; // Import the CSS file

const ProjectPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha', description: 'Description of Project Alpha', status: 'In Progress' },
    { id: 2, name: 'Project Beta', description: 'Description of Project Beta', status: 'Completed' },
  ]);

  const handleStatusChange = (id, status) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, status } : project
    ));
  };

  return (
    <div className="project-container">
      <h1 className="project-title">My Projects</h1>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h2 className="project-card-title">{project.name}</h2>
            <p className="project-card-description">{project.description}</p>
            <div className="project-card-status">
              <span>Status: {project.status}</span>
              <button
                className="status-button"
                onClick={() => handleStatusChange(project.id, 'In Progress')}
              >
                Mark as In Progress
              </button>
              <button
                className="status-button"
                onClick={() => handleStatusChange(project.id, 'Completed')}
              >
                Mark as Completed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
