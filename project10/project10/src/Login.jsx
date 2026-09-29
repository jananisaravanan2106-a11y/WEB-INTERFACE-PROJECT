import React, { useState } from "react";

function Login({ setLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setLogin(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <div className="login-icon">🎓</div>

        <h1>Student Report Card</h1>
        <h1>System</h1>

        <p>Admin Login</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="👤  Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="🔒  Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn">
            Login
          </button>

        </form>

        <small>
          Username: admin | Password: 1234
        </small>

      </div>

    </div>
  );
}

export default Login;