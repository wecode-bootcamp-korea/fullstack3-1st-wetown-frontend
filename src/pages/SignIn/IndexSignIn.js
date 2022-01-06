import React from "react";
import SignIn from "./SignIn";
import "./IndexSignIn.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
export default function IndexSignIn() {
  return (
    <div className="IndexSignIn">
      <HeaderNav />
      <SignIn />
    </div>
  );
}
