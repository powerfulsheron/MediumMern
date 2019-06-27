import React from "react";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./components/main/MainComponent";
import { connect } from "react-redux";
import { appVerifyToken } from "./redux/actions/auth";

class App extends React.Component {
  render() {
    // Verification de la validité du Token avant le rendu
    this.props.verifyToken();

    // Render
    return (
      <div className="App">
        <header>
          <HeaderComponent />
        </header>
        <main>
          <MainComponent />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapActionToProps = dispatch => ({
  verifyToken: () => dispatch(appVerifyToken(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
