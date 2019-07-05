import React from "react";
import { LoginForm } from "./LoginForm";
import { connect } from "react-redux";
import { appLogin } from "../../redux/actions/auth";
import LoginFormRejected from "./LoginFormRejected";
import { Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";

class LoginFormContainer extends React.Component {
  // State
  state = {
    email: "",
    password: ""
  };

  // Validation de formulaire
  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  // onChange
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  // onSubmit
  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <>
        {/* Error message */}
        {this.props.auth.err !== "" && (
          <LoginFormRejected message={this.props.auth.err} />
        )}

        {/* Form */}
        {this.props.auth.logged === false && (
          <LoginForm
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleValidation={this.validateForm()}
          />
        )}

        {/* if already connected Form */}
        {this.props.auth.logged === true && (
          <>
            <Redirect to="/posts" />
            <Typography component="p">You are already logged in :)</Typography>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapActionToProps = dispatch => ({
  onLogin: (email, password) => dispatch(appLogin(email, password, dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(LoginFormContainer);
