import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function HeaderComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Container maxWidth="md">
          <Toolbar>
            <h2>Medium Mern</h2>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
