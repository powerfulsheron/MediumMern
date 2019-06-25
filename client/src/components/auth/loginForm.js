import React from "react";

class TodoForm extends React.Component {
  state = {
    textLogin: "",
    textPassword: ""
  };

  // Login
  handleChangeLogin = event => {
    this.setState({ textLogin: event.target.value });
  };

  // Password
  handleChangePassword = event => {
    this.setState({ textPassword: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Action de connexion
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.textLogin} onChange={this.handleChangeLogin} />
        <input
          value={this.state.textPassword}
          onChange={this.handleChangePassword}
        />
        <button type="submit" value="Log in" />
      </form>
    );
  }
}

export default TodoForm;
