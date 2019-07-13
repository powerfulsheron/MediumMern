import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLoggedUser } from "../../redux/actions/account";

class HeaderContainer extends React.Component {
  style = {
    title: {
      fontWeight: "bold"
    },
    links: {
      marginLeft: 50,
      textDecoration: "none"
    },
    typo: {
      fontWeight: "bold"
    }
  };

  // retrieve user info
  userinfo() {
    this.props.getCurrentUser();
    return "";
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Container fixed>
            <Toolbar>
              <Typography style={this.style.title} variant="h6">
                MERDENIUM
              </Typography>

              {/* MENU FOR LOGGED USERS */}
              {!this.props.auth.logged && (
                <>
                  <Link style={this.style.links} to="/login">
                    <Typography
                      style={this.style.typo}
                      color="textPrimary"
                      variant="button"
                    >
                      LOGIN
                    </Typography>
                  </Link>
                  <Link style={this.style.links} to="/register">
                    <Typography
                      style={this.style.typo}
                      color="textPrimary"
                      variant="button"
                    >
                      REGISTER
                    </Typography>
                  </Link>
                </>
              )}

              {/* MENU FOR NOT LOGGED USERS */}
              {this.props.auth.logged && (
                <>
                  {this.userinfo()}
                  <Link style={this.style.links} to="/posts">
                    <Typography
                      style={this.style.typo}
                      color="textPrimary"
                      variant="button"
                    >
                      POSTS
                    </Typography>
                  </Link>
                  <Link style={this.style.links} to="/dashboard">
                    <Typography
                      style={this.style.typo}
                      color="textPrimary"
                      variant="button"
                    >
                      DASHBOARD
                    </Typography>
                  </Link>
                  <Link style={this.style.links} to="/newpost">
                    <Typography
                      style={this.style.typo}
                      color="textPrimary"
                      variant="button"
                    >
                      WRITE A POST
                    </Typography>
                  </Link>
                  <Link style={this.style.links} to="/logout">
                    <Typography
                      style={this.style.typo}
                      color="textPrimary"
                      variant="button"
                    >
                      LOGOUT
                    </Typography>
                  </Link>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapActionToProps = dispatch => ({
  getCurrentUser: () => dispatch(getLoggedUser(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(HeaderContainer);
