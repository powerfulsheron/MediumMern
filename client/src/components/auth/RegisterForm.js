import React from "react";
import { TextField, Button } from "@material-ui/core";

export function RegisterForm({
  registerEmail,
  registerPassword,
  repeatPassword,
  handleChange,
  handleSubmit,
  handleValidation
}) {
  // Style
  const styles = {
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

  return (
    <form onSubmit={handleSubmit} autoComplete="off" style={styles.form}>
      <TextField
        id="registerEmail"
        label="Email"
        style={styles.input}
        value={registerEmail}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="registerPassword"
        label="Password"
        type="password"
        style={styles.input}
        value={registerPassword}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="repeatPassword"
        label="Repeat password"
        type="password"
        style={styles.input}
        value={repeatPassword}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <Button variant="contained" type="submit" disabled={!handleValidation}>
        Submit
      </Button>
    </form>
  );
}

export default RegisterForm;
