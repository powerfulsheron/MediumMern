import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import DashboardPostsContainer from "./DashboardPostsContainer";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    textAlign: "left"
  },
  title: {
    fontWeight: "bold"
  }
}));
export function DashboardPostsPage() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h6">
        MY POSTS
      </Typography>
      <Typography variant="subtitle2">
        All your post and their popularity
      </Typography>

      <DashboardPostsContainer />
    </>
  );
}
