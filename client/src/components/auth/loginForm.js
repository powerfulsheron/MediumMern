import React from "react";
import { TextField, Button } from "@material-ui/core";

export function LoginForm({
  email,
  password,
  handleChange,
  handleSubmit,
  handleValidation
}) {
  // Style formulaire
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
        id="email"
        label="Email"
        style={styles.input}
        value={email}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="password"
        label="Password"
        type="password"
        style={styles.input}
        value={password}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <Button type="submit" variant="contained" disabled={!handleValidation}>
        Submit
      </Button>
    </form>
  );
}
