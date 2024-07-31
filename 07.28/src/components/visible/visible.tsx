//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

export default function Visible({ status, size = 16 }): JSX.Element {
  // JSX
  return (
    <span className="icon">
      <img width={size} height={size} src={`/svgs/${status}.svg`} alt="" />
    </span>
  );
}
