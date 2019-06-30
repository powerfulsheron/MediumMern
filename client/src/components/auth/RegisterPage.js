import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import RegisterFormContainer from "./RegisterFormContainer";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 50
  }
}));

export function RegisterPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Register
        </Typography>
        <RegisterFormContainer />
      </Paper>
    </Container>
  );
}
