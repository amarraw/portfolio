import React from 'react';

const ProjectCard = ({ name, description, language, stars, forks }) => (
  <div className="project-card">
    <div className="project-name">{name}</div>
    <div className="project-description">{description}</div>
    <div className="project-stats">
      <div className="project-stat">
        <div className={`language-dot ${language.toLowerCase()}`}></div>
        <span>{language}</span>
      </div>
      <div className="project-stat">⭐ {stars}</div>
      <div className="project-stat">🍴 {forks}</div>
    </div>
  </div>
);

export default ProjectCard;