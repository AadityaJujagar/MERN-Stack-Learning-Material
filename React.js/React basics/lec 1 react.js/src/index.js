// this file gets executed first
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// importing tailwindCSS
import "./index.css";

// root div imported by using reactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// properties of app() function from app.js rendered
root.render(<App />);
