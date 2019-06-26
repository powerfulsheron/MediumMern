import React from "react";
import { LoginForm } from "./LoginForm";
import { connect } from "react-redux";
import { appLogin } from "../../redux/actions/auth";

class LoginFormContainer extends React.Component {
  // State
  state = {
    email: "",
    password: ""
  };

  // Validation de formulaire
  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  // onChange
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  // onSubmit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.email + " " + this.state.password);
    this.props.onLogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <>
        {this.props.auth.token}
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleValidation={this.validateForm()}
        />
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
