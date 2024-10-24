import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router.tsx";

import "./index.css";
import "./i18n"; // Import i18n configuration
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
