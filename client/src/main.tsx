import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.tsx";
import ApplicationProvider from "./providers/ApplicationProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApplicationProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApplicationProvider>
  </React.StrictMode>
);
