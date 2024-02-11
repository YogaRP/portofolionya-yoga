import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import I18NextProvider from "./providers/I18NextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18NextProvider>
        <App />
      </I18NextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
