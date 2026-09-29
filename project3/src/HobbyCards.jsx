import React from "react";
import "./HobbyCards.css";

function HobbyCard({ icon, title, description, accent, tag }) {
  return (
    <div className="hobby-card" style={{ "--accent": accent }}>
      <div className="hobby-card__ring"></div>

      <div className="hobby-card__badge">
        <span className="hobby-icon">{icon}</span>
      </div>

      <div className="hobby-card__tag">{tag}</div>

      <h3 className="hobby-card__title">{title}</h3>

      <p className="hobby-card__description">{description}</p>
    </div>
  );
}

export default function HobbyCards() {
  const hobbies = [
    {
      icon: "🎵",
      title: "Listening to Music",
      description: "Melodies, rhythms, and sounds that fill every moment.",
      accent: "#faf1ed",
      tag: "MELODY",
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Capturing moments, memories, and beauty through a lens.",
      accent: "#0de034",
      tag: "LENS",
    },
    {
      icon: "💻",
      title: "Exploring New Technologies",
      description: "Discovering new ideas, tools, and innovations in technology.",
      accent: "#35b5f1",
      tag: "INNOVATION",
    },
    {
      icon: "🎮",
      title: "Playing Games",
      description: "Challenges, strategy, creativity, and fun in every game.",
      accent: "#d2f667",
      tag: "PLAYGROUND",
    },
  ];

  return (
    <div className="hobbies-page">
      <h2 className="hobbies-heading">My Hobbies</h2>

      <div className="hobbies-grid">
        {hobbies.map((h) => (
          <HobbyCard key={h.title} {...h} />
        ))}
      </div>
    </div>
  );
}