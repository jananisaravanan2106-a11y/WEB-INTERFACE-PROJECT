import React, { useState } from "react";
import StudentDetails from "./StudentDetails";

function Dashboard({ setLogin }) {

  const [page, setPage] = useState("home");

  return (
    <div>

      {/* NAVBAR */}
      <nav>

        <div className="logo">
          🎓 Student Report Card System
        </div>

        <div className="nav-links">

          <button
            onClick={() => setPage("home")}
            className={page === "home" ? "active-nav" : ""}
          >
            🏠 Home
          </button>

          <button
            onClick={() => setPage("students")}
            className={page === "students" ? "active-nav" : ""}
          >
            👥 All Students
          </button>

        </div>

        <div className="nav-right">

          <span className="admin-badge">
            👤 Admin Dashboard
          </span>

          <button
            className="logout"
            onClick={() => setLogin(false)}
          >
            Logout
          </button>

        </div>

      </nav>


      {/* HOME PAGE */}

      {page === "home" && (

        <div className="home-page">

          <div className="home-card">

            <div className="big-icon">
              🎓
            </div>

            <h1>
              Student Report Card System
            </h1>

            <p>
              The system helps the admin manage students,
              subject marks, grades and results.
            </p>

            <div className="home-actions">

              <button onClick={() => setPage("students")}>
                👥 View All Students
              </button>

              <span>
                🔐 Logged in as Admin
              </span>

            </div>

          </div>

        </div>

      )}


      {/* STUDENT PAGE */}

      {page === "students" && (
        <StudentDetails />
      )}

    </div>
  );
}

export default Dashboard;