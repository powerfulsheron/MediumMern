import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { MenuList } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AccountPage from "../account/AccountPage";
import { DashboardPostsPage } from "../dashboard/DashboardPostsPage";

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

export function UserDetailPage({ match }) {
  const classes = useStyles();
  return (
    <Router>
      <Container>
        <Grid
          className={classes.root}
          container
          spacing={2}
          direction="row"
          justify="space-between"
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
          <Grid item lg={7} md={7} xs={11}>
            <span>
              {/* INSERT HERE CORRESPONDING COMPONENT */}
              <Route
                path={`${match.url}`}
                exact
                component={DashboardPostsPage}
              />
              <Route path={`${match.url}/account`} component={AccountPage} />
              <Route path={`${match.url}/follows`} />
            </span>
          </Grid>
          <Grid item lg={2} md={2} xs={11}>
            {/* Item to center */}
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}