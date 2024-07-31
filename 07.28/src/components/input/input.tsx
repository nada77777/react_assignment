//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

export default function Input({ type, placeholder }): JSX.Element {
  // JSX
  return <input className="input" type={type} placeholder={placeholder} />;
}
