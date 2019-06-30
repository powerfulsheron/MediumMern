import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  links: {
    marginLeft: 50,
    textDecoration: "none",
    fontWeight: "bold",
    color: "black"
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
            <Link className={classes.links} to="/login">
              Login
            </Link>
            <Link className={classes.links} to="/register">
              Register
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
