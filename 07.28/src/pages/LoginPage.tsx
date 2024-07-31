//@ts-nocheck
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
import Input from "../components/input/input.js";
import Visible from "./../components/visible/visible.js";

export default function LoginPage(): JSX.Element {
  // JSX
  return (
    <div className="loginPage">
      <div className="inputContainer">
        <Input type="text" placeholder="아이디를 입력해주세요" />
        <Visible status="open" />
      </div>
      <div className="inputContainer">
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <Visible status="hide" />
      </div>
    </div>
  );
}
