import React from "react";
import "./StudentCard.css";

function StudentCard() {
  return (
    <div className="card">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Profile"
      />

      <h2>JANANI S</h2>
      <h3>Department: AI & DS</h3>
      <h3>CGPA: 9.5</h3>
      <h3>College: Prince Dr K Engineering College</h3>

      <button>View Profile</button>
    </div>
  );
}

export default StudentCard;