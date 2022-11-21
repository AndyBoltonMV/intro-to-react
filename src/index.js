// Import React as a library
import React from "react";
// Import ReactDOM to handle browser rendering
import ReactDOM from "react-dom/client";
// Import css
import "./index.css";
// Import App component
import App from "./App";
// Import Web Vital functionality
import reportWebVitals from "./reportWebVitals";

// Grab main container in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
// .render allows React component injection into vanilla HTML
root.render(
  // Flags warnings as errors
  <React.StrictMode>
    {/* Main component */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
