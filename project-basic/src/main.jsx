import React from "react";
import ReactDom from "react-dom/client"
import App from './App.jsx'
import Hero from "./component/Home.jsx"

ReactDom.createRoot(document.getElementById('harsh')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)