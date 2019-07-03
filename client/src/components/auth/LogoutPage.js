import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LogoutContainer from "./LogoutContainer";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 50
  }
}));

export function LogoutPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.root}>
        <LogoutContainer />
      </Paper>
    </Container>
  );
}
