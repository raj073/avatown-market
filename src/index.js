import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AvatarProvider from "./Contexts/AvatarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AvatarProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AvatarProvider>
);
