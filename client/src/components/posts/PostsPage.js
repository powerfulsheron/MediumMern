import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PostsContainer from "./PostsContainer";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    textAlign: "left"
  },
  title: {
    fontWeight: "bold",
    marginBottom: 50
  }
}));

export function PostsPage() {
  const classes = useStyles();
  return (
    <Container className={classes.root} fixed>
      <PostsContainer />
    </Container>
  );
}
