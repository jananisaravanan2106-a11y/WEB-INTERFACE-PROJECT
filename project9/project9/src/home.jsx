import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <section className="home">

      <div className="home-content">

        <p className="small-title">
          ✨ SMART TASK MANAGER
        </p>

        <h1>
          Organize.
          <br />
          <span>Plan. Achieve.</span>
        </h1>

        <p>
          Manage your daily tasks easily
          and improve your productivity.
        </p>

        <Link to="/todo" className="start-btn">
          Get Started →
        </Link>

      </div>

      <div className="home-card">

        <h2>Today's Focus 🔥</h2>

        <div className="mini-task">
          ✅ Complete Project
        </div>

        <div className="mini-task">
          ✅ Study React
        </div>

        <div className="mini-task">
          ⭕ Practice Coding
        </div>

        <h3>Progress: 67%</h3>

      </div>

    </section>
  );
}

export default Home;