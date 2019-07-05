import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { appVerifyToken } from "./redux/actions/auth";
import MainRouter from "./routes/MainRouter";

class App extends React.Component {
  componentDidMount() {
    this.props.verifyToken();
  }

  render() {
    // Render
    return (
      <div className="App">
        <MainRouter />
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
