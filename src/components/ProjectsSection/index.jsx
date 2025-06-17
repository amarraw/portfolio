import React from 'react';
import './ProjectsSection.css'; // Make sure to create this CSS file

const ProjectsSection = () => {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "Full-featured online store with payment integration, product management, and admin dashboard built with Django and React.",
      language: "Python",
      stars: 25,
      forks: 6,
      demoLink: "#",
      codeLink: "https://github.com/amarraw/ecommerce-django"
    },
    {
      name: "Student Dashboard",
      description: "Multi-feature productivity app for students with note-taking, homework tracking, and integrated learning tools.",
      language: "Python",
      stars: 18,
      forks: 4,
      demoLink: "#",
      codeLink: "https://github.com/amarraw/student-dashboard"
    },
    {
      name: "QR Attendance System",
      description: "Digital attendance system using QR codes with role-based access and CSV reporting functionality.",
      language: "Python",
      stars: 13,
      forks: 3,
      demoLink: "#",
      codeLink: "https://github.com/amarraw/qr-attendance-system"
    },
    {
      name: "Quiz Application",
      description: "Interactive quiz platform with real-time scoring, analytics dashboard, and instructor features.",
      language: "Python",
      stars: 10,
      forks: 2,
      demoLink: "#",
      codeLink: "https://github.com/amarraw/quiz-app"
    }
  ];

  return (
    <section className="projects-section">
      <h3 className="section-title">
        <span className="icon">📁</span>
        Popular Repositories
      </h3>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <header className="project-header">
              <h4 className="project-name">
                <span className="project-icon">📦</span>
                {project.name}
              </h4>
              <div className="project-language">
                <span className="language-dot"></span>
                {project.language}
              </div>
            </header>
            
            <p className="project-description">{project.description}</p>
            
            <footer className="project-footer">
              <div className="project-stats">
                <span className="stat">
                  <span className="stat-icon">⭐</span>
                  {project.stars}
                </span>
                <span className="stat">
                  <span className="stat-icon">🍴</span>
                  {project.forks}
                </span>
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.demoLink} 
                  className="project-link demo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  href={project.codeLink} 
                  className="project-link code-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;