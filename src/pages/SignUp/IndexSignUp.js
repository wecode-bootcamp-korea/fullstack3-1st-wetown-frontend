import React from "react";
import SignUp from "./SignUp";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "./IndexSignUp.scss";
export default function IndexSignUp() {
  return (
    <div className="IndexSignUp">
      <HeaderNav />
      <SignUp />
    </div>
  );
}
