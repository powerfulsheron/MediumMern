import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserDetailContainer from "./UserDetailContainer";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    textAlign: "left"
  }
}));

export function UserDetailPage({ match }) {
  const classes = useStyles();
  return (
    <Container className={classes.root} fixed>
      <UserDetailContainer userId={match.params.id} />
    </Container>
  );
}