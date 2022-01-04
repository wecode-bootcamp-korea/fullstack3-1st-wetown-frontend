import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./styles/reset.scss";
import "./styles/common.scss";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <Router />
  </CookiesProvider>,
  document.getElementById("root")
);
