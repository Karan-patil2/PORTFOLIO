import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const profile = {
  name: "Karan Patil",
  title: "Java & Full Stack Developer",
  summary: `A devoted developer committed to crafting influential solutions, prioritizing clean and efficient code. 
Collaborative team member dedicated to ongoing enhancement and the delivery of top-tier solutions.`,
  resumeLink: "/resume_karan.pdf",
  linkedinLink: "https://www.linkedin.com/in/karan-patil-73195424a"
};

const ProfileBanner: React.FC = () => {
  const handleResumeClick = () => {
    window.open(profile.resumeLink, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(profile.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner no-background">
      <div className="banner-content">
        <h1 className="banner-title">{profile.name} - {profile.title}</h1>
        <p className="banner-summary">{profile.summary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handleResumeClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
