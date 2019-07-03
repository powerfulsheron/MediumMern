import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginPage } from "../components/auth/LoginPage";
import HeaderContainer from "../components/header/HeaderContainer";
import { RegisterPage } from "../components/auth/RegisterPage";
import { LogoutPage } from "./../components/auth/LogoutPage";

export default function MainRouter() {
  return (
    <Router>
      <HeaderContainer />

      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/logout" component={LogoutPage} />
    </Router>
  );
}
