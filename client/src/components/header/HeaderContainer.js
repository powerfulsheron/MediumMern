import React from "react";
import { Toolbar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  style = {
    links: {
      marginLeft: 50,
      textDecoration: "none",
      fontWeight: "bold",
      color: "black"
    }
  };

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Container fixed>
            <Toolbar>
              <h2>Medium Mern</h2>

              {/* MENU FOR LOGGED USERS */}
              {!this.props.auth.logged && (
                <>
                  <Link style={this.style.links} to="/login">
                    LOGIN
                  </Link>
                  <Link style={this.style.links} to="/register">
                    REGISTER
                  </Link>
                </>
              )}

              {/* MENU FOR NOT LOGGED USERS */}
              {this.props.auth.logged && (
                <>
                  <Link style={this.style.links} to="/posts">
                    POSTS
                  </Link>
                  <Link style={this.style.links} to="/dashboard">
                    DASHBOARD
                  </Link>
                  <Link style={this.style.links} to="/logout">
                    LOGOUT
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

export default connect(mapStateToProps)(HeaderContainer);
