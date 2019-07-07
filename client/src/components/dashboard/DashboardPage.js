import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { MenuList } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AccountPage from "../account/AccountPage";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    textAlign: "left"
  },
  itemMenu: {
    fontWeight: "bold"
  },
  links: {
    textDecoration: "none"
  }
}));

export function DashboardPage({ match }) {
  const classes = useStyles();
  return (
    <Router>
      <Grid
        className={classes.root}
        container
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Grid item lg={2} md={2} xs={11}>
          <MenuList>
            <Link className={classes.links} to={`${match.url}`}>
              <MenuItem>
                <Typography
                  className={classes.itemMenu}
                  color="secondary"
                  variant="button"
                  noWrap
                >
                  My Posts
                </Typography>
              </MenuItem>
            </Link>
            <Link className={classes.links} to={`${match.url}/account`}>
              <MenuItem>
                <Typography
                  className={classes.itemMenu}
                  color="secondary"
                  variant="button"
                  noWrap
                >
                  Account
                </Typography>
              </MenuItem>
            </Link>
            <Link className={classes.links} to={`${match.url}/follows`}>
              <MenuItem>
                <Typography
                  className={classes.itemMenu}
                  color="secondary"
                  variant="button"
                  noWrap
                >
                  Follows
                </Typography>
              </MenuItem>
            </Link>
          </MenuList>
        </Grid>
        <Grid item lg={9} md={9} xs={11}>
          <span>
            {/* INSERT HERE CORRESPONDING COMPONENT */}
            <Route path={`${match.url}`} exact />
            <Route path={`${match.url}/account`} component={AccountPage} />
            <Route path={`${match.url}/follows`} />
          </span>
        </Grid>
      </Grid>
    </Router>
  );
}
