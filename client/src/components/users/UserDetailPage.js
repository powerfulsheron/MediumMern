import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    textAlign: "left"
  }
}));

export function UserDetailPage({ match }) {
  const classes = useStyles();
  return (
    <p>Hello {match.id}</p>
  );
}