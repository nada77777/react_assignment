import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import LoginPage from "./pages/LoginPage.js";
var app = document.getElementById("react-app");
console.log("app", app);
createRoot(app).render(React.createElement(LoginPage, null));
