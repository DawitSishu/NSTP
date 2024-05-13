import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAiatVIRRJATLbxPrAnXlhXfES_DJNM_no",
  authDomain: "jemawf-c48af.firebaseapp.com",
  projectId: "jemawf-c48af",
  storageBucket: "jemawf-c48af.appspot.com",
  messagingSenderId: "1090327528678",
  appId: "1:1090327528678:web:c68aeeeb24f020fb092727",
  measurementId: "G-M8J0YVL16M",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
