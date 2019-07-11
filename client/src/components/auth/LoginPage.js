import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LoginFormContainer from "./LoginFormContainer";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 50
  },
  title: {
    fontWeight: "bold"
  }
}));

export function LoginPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          LOGIN
        </Typography>
        <LoginFormContainer />
      </Paper>
    </Container>
  );
}
