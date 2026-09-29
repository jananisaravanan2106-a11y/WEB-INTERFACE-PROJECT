import React from "react";

function About() {

  return (
    <section className="about-page">

      <h1>About TaskFlow</h1>

      <p>
        TaskFlow is a modern React-based
        To-Do List application for managing
        daily tasks efficiently.
      </p>

      <div className="feature-grid">

        <div className="feature-card">
          <h2>⚛️</h2>
          <h3>React State</h3>
          <p>useState and useEffect</p>
        </div>

        <div className="feature-card">
          <h2>🔗</h2>
          <h3>Context API</h3>
          <p>Share task data</p>
        </div>

        <div className="feature-card">
          <h2>💾</h2>
          <h3>Local Storage</h3>
          <p>Save tasks permanently</p>
        </div>

        <div className="feature-card">
          <h2>🔎</h2>
          <h3>Search & Filter</h3>
          <p>Find tasks quickly</p>
        </div>

        <div className="feature-card">
          <h2>⭐</h2>
          <h3>Priority</h3>
          <p>Low, Medium and High</p>
        </div>

        <div className="feature-card">
          <h2>📊</h2>
          <h3>Progress</h3>
          <p>Track completed tasks</p>
        </div>

      </div>

    </section>
  );
}

export default About;