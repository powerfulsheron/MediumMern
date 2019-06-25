import React from "react";
import { TextField, Button } from "@material-ui/core";

class RegisterForm extends React.Component {
  state = {
    email: "",
    password: "",
    repeatPassword: ""
  };

  // Style
  styles = () => {
    return {
      form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      input: {
        width: "90%"
      }
    };
  };

  validateForm() {
    return (
      (this.state.email.length > 0 && this.state.password.length > 0) ||
      this.state.password !== this.state.repeatPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Action de register
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        style={this.styles().form}
      >
        <TextField
          id="email"
          label="Email"
          style={this.styles().input}
          value={this.state.email}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          style={this.styles().input}
          value={this.state.password}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="repeatPassword"
          label="Repeat password"
          type="password"
          style={this.styles().input}
          value={this.state.repeatPassword}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

        <Button variant="contained" disabled={!this.validateForm()}>
          Submit
        </Button>
      </form>
    );
  }
}

export default RegisterForm;
