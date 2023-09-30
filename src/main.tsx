import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
