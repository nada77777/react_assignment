import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "./pages/MainPage";

const reactApp = document.getElementById("react-app");

createRoot(reactApp).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
