import React from "react";
import RegisterForm from "./RegisterForm";
import { connect } from "react-redux";
import { appRegister } from "../../redux/actions/auth";

class RegisterFormContainer extends React.Component {
  state = {
    registerEmail: "",
    registerPassword: "",
    repeatPassword: ""
  };

  // Validation du formulaire
  validateForm() {
    return (
      this.state.registerEmail.length > 0 &&
      this.state.registerPassword.length > 0 &&
      this.state.registerPassword === this.state.repeatPassword
    );
  }

  // Handle chaque changement
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  // A la validation
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(
      this.state.registerEmail,
      this.state.registerPassword
    );
  };

  // Rendu
  render() {
    return (
      <>
        <RegisterForm
          registerEmail={this.state.registerEmail}
          registerPassword={this.state.registerPassword}
          repeatPassword={this.state.repeatPassword}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
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
  onRegister: (email, password) =>
    dispatch(appRegister(email, password, dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(RegisterFormContainer);
