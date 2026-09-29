import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./pro01.css";
import App from "./pro01.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    < App />
  </StrictMode>
);