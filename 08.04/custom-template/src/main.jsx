// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfilePages from "./pages/ProfilePages";
import "@/styles/index.css";

const reactApp = document.getElementById("react-app");

createRoot(reactApp).render(<ProfilePages />);
