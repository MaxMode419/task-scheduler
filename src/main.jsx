import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "material-symbols";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/auth-provider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
);
