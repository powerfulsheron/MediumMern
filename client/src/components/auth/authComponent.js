import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LoginComponent from "./loginComponent";
import { Container } from "@material-ui/core";
import RegisterComponent from "./registerComponent";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 50
  }
}));

export function AuthComponent() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <LoginComponent />
        <RegisterComponent />
      </Container>
    </>
  );
}
