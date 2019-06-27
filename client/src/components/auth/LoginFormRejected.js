import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.error.main,
    padding: 10,
    margin: "auto",
    width: "85%",
    marginTop: 10,
    marginBottom: 10
  }
}));

const LoginFormRejected = ({ message }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography component="p">{message}</Typography>
    </Paper>
  );
};

export default LoginFormRejected;
