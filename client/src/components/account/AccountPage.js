import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AccountContainer } from "./AccountContainer";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    textAlign: "left"
  },
  title: {
    fontWeight: "bold"
  }
}));

export default function AccountPage() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h7">
        ACCOUNT INFORMATION
      </Typography>

      <AccountContainer />
    </>
  );
}
