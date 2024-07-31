import React from "https://esm.sh/react";
export default function Visible(_a) {
    var status = _a.status, _b = _a.size, size = _b === void 0 ? 16 : _b;
    return (React.createElement("span", { className: "icon" },
        React.createElement("img", { width: size, height: size, src: "/svgs/".concat(status, ".svg"), alt: "" })));
}
