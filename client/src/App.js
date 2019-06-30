import React from "react";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./components/main/MainComponent";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
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

export default connect(
  mapStateToProps
)(App);
