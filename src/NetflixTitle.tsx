import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo_2.png';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isClicked) return;

    setIsClicked(true);

    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio error:", error));

    // ⏱ Navigate exactly after animation ends
    setTimeout(() => {
      navigate('/browse');
    }, 3000); // match zoomOut 3s
  };

  return (
    <div className="netflix-container" onClick={handleClick}>
      <img
        src={logoImage}
        alt="Karan Patil Logo"
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
      />
    </div>
  );
};

export default NetflixTitle;
