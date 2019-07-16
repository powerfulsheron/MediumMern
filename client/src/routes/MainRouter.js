import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginPage } from "../components/auth/LoginPage";
import HeaderContainer from "../components/header/HeaderContainer";
import { RegisterPage } from "../components/auth/RegisterPage";
import { LogoutPage } from "./../components/auth/LogoutPage";
import { PostsPage } from "../components/posts/PostsPage";
import { DashboardPage } from "../components/dashboard/DashboardPage";
import { NewPostPage } from "../components/posts/NewPostPage";
import { PostDetailPage } from "../components/posts/PostDetailPage";
import { UserDetailPage } from "../components/users/UserDetailPage"

export default function MainRouter() {
  return (
    <Router>
      <HeaderContainer />

      {/* --- AUTH --- */}
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/" exact component={LoginPage} />

      {/* --- POSTS --- */}
      <Route path="/posts" exact component={PostsPage} />
      <Route path="/posts/:id" exact component={PostDetailPage} />

      {/* --- DASHBOARD --- */}
      <Route path="/dashboard" component={DashboardPage} />

      {/* --- USERS --- */}
      <Route path="/user/:id" exact component={UserDetailPage} />

      {/* --- NEW POSTS --- */}
      <Route path="/newpost" component={NewPostPage} />
    </Router>
  );
}
