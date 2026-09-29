import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "./App.jsx";

function Header() {

  const { darkMode, setDarkMode } = useContext(TodoContext);

  return (
    <header className="header">

      <div className="logo">
        ✓ TaskFlow
      </div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/todo">Tasks</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>

    </header>
  );
}

export default Header;