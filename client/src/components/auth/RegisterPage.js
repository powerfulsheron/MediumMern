import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RegisterFormContainer from "./RegisterFormContainer";

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

export function RegisterPage() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography variant="h6" className={classes.title}>
        REGISTER
      </Typography>
      <RegisterFormContainer />
    </Container>
  );
}
