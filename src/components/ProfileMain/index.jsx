import React from 'react';
import IntroSection from '../IntroSection';
import SkillsSection from '../SkillsSection';
import LanguageStats from '../LanguageStats';
import ProjectsSection from '../ProjectsSection';
import './ProfileMain.css';

const ProfileMain = () => (
  <div className="profile-main">
    <IntroSection />
    <SkillsSection />
    <LanguageStats />
    <ProjectsSection />
  </div>
);

export default ProfileMain;