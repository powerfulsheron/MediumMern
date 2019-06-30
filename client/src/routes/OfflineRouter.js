import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginPage } from "./../components/auth/LoginPage";
import HeaderComponent from "../components/header/HeaderComponent";

export default function OfflineRouter() {
  return (
    <Router>
      <HeaderComponent />

      <Route path="/login" component={LoginPage} />
    </Router>
  );
}
