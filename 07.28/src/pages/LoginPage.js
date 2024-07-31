import React from "https://esm.sh/react";
import Input from "../components/input/input.js";
import Visible from "./../components/visible/visible.js";
export default function LoginPage() {
    return (React.createElement("div", { className: "loginPage" },
        React.createElement("div", { className: "inputContainer" },
            React.createElement(Input, { type: "text", placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694" }),
            React.createElement(Visible, { status: "open" })),
        React.createElement("div", { className: "inputContainer" },
            React.createElement(Input, { type: "password", placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694" }),
            React.createElement(Visible, { status: "hide" }))));
}
