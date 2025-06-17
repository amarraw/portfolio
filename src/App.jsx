import React from 'react';
import ProfileSidebar from './components/ProfileSidebar';
import ProfileMain from './components/ProfileMain';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="profile-header">
        <ProfileSidebar />
        <ProfileMain />
        
      </div>
    </div>
  );
}

export default App;