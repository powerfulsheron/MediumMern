import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginFormContainer from "./LoginFormContainer";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    padding: theme.spacing(3, 2),
    marginTop: 50
  },
  title: {
    fontWeight: "bold"
  }
}));

export function LoginPage() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography variant="h6" className={classes.title}>
        LOGIN
      </Typography>
      <LoginFormContainer />
    </Container>
  );
}
