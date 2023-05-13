import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AvatarProvider from "./Contexts/AvatarContext";
import CartProvider from "./Contexts/CartContext/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <AvatarProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AvatarProvider>
  </CartProvider>
);
