import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PostDetailContainer from "./PostDetailContainer";

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

export function PostDetailPage({ match }) {
  const classes = useStyles();
  return (
    <Container className={classes.root} fixed>
      <PostDetailContainer postId={match.params.id} />
    </Container>
  );
}
