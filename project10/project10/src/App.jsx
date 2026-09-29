import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [login, setLogin] = useState(false);

  return login ? (
    <Dashboard setLogin={setLogin} />
  ) : (
    <Login setLogin={setLogin} />
  );
}

export default App;