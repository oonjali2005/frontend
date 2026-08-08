import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ItemProvider } from "./context/ItemContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ItemProvider>
          <App />
        </ItemProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);