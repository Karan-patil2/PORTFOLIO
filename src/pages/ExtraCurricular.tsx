import React from 'react';
import './ExtraCurricular.css';
import albumCover1 from '../images/Hotelcalifornia.jpg';
import albumCover2 from '../images/ac-dc.jpg';
import albumCover3 from '../images/guns-n-roses.webp';

const favoriteGenres = ["Rock", "Classic Rock", "Hard Rock", "Blues", "Alternative"];

const favoriteAlbums = [
  { title: "Hotel California", artist: "The Eagles", imgSrc: albumCover1 },
  { title: "Back in Black", artist: "AC/DC", imgSrc: albumCover2 },
  { title: "Appetite for Destruction", artist: "Guns N' Roses", imgSrc: albumCover3 },
];

const activities = [
  {
    title: "🏆 TechFest Winner",
    description: "I won the Arcade Games event at TechFest 2025, proving my quick reflexes and strategic thinking."
  },
  {
    title: "💪 Fitness & Gym",
    description: "Staying fit is part of my daily routine. I hit the gym regularly to stay healthy, focused, and energized."
  },
  {
    title: "🗣 Social & Outgoing",
    description: "I love working with people, collaborating on ideas, and building a positive team culture."
  },
  {
    title: "🎶 Music Lover",
    description: "Music fuels my creativity. I'm into rock, blues, and classic albums that never get old."
  }
];

const ExtraCurricular: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div>

      <div className="activities-section">
        <h3>What I Do Beyond Code</h3>
        <div className="activities">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="genre-section">
        <h3>My Favorite Music Genres</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Top Albums I Love</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricular;
