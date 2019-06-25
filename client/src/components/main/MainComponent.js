import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { AuthComponent } from "../auth/authComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function MainComponent() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <AuthComponent />
    </Container>
  );
}
