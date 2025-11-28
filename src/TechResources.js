import React from "react";
import techResources from "./data/techResources";
import "./App.css";
import { Link } from "react-router-dom";

function TechResources() {
  return (
    <div className="tech-resources-page">
      <header className="tech-header">
        <h1>🌐 Tech Resources</h1>
        <p>Curated learning & interview resources — explore, learn, and grow.</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </header>

      <section className="tech-cards-grid">
        {techResources.map((tech, idx) => (
          <a
            key={idx}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-card"
          >
            <div className="tech-image-wrapper">
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
            </div>

            <div className="tech-info">
              <h3 className="tech-name">{tech.name}</h3>
              <span className="tech-category">{tech.category}</span>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}

export default TechResources;
