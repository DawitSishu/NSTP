import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuW5uTHVZFTTgBwkAEnFw5_E8RD3RCJOk",
  authDomain: "jemaw-c6f46.firebaseapp.com",
  projectId: "jemaw-c6f46",
  storageBucket: "jemaw-c6f46.appspot.com",
  messagingSenderId: "641640506424",
  appId: "1:641640506424:web:f8b0d2a8d623f41442b2cd",
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
