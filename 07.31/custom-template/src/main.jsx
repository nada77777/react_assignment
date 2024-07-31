import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainPage from "@/pages/MainPage";

const reactApp = document.getElementById("react-app");
console.log(import.meta.url);
console.log(import.meta);
createRoot(reactApp).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
