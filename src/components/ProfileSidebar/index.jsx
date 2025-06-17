import React from 'react';
import './ProfileSidebar.css';

const ProfileSidebar = () => (
  <div className="profile-sidebar">
    <div className="profile-avatar">
      <img className="img" src="amar.jpeg" alt="Amar Raw" />
    </div>
    
    <h1 className="profile-name">Amar Raw</h1>
    <p className="profile-username">amarraw</p>
    
    <p className="profile-bio">Full stack developer | Python | Django | React | Html CSS Bootstrap | Celery</p>
    
    <ul className="profile-details">
      <li className="email">amar.raw011@gmail.com</li>
      <li className="location">Kathmandu, Nepal</li>
      <li className="company">Aspiring Full Stack Engineer</li>
    </ul>
    
    <div className="social-links">
      <a href="https://www.linkedin.com/in/amarraw" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">💼</a>
      <a href="https://github.com/amarraw" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">🐙</a>
      <a href="https://twitter.com/your_handle" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">🐦</a>
      <a href="mailto:amar.raw011@gmail.com" className="social-link" title="Email">📧</a>
    </div>
  </div>
);

export default ProfileSidebar;