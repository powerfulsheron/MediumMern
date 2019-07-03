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
          <Container maxWidth="md">
            <Toolbar>
              <h2>Medium Mern</h2>

              {/* MENU FOR LOGGED USERS */}
              {!this.props.auth.logged && (
                <>
                  <Link style={this.style.links} to="/login">
                    Login
                  </Link>
                  <Link style={this.style.links} to="/register">
                    Register
                  </Link>
                </>
              )}

              {/* MENU FOR NOT LOGGED USERS */}
              {this.props.auth.logged && (
                <>
                  <Link style={this.style.links} to="/posts">
                    Posts
                  </Link>
                  <Link style={this.style.links} to="/follows">
                    Follows
                  </Link>
                  <Link style={this.style.links} to="/bookmarks">
                    Bookmarks
                  </Link>
                  <Link style={this.style.links} to="/me">
                    Profile
                  </Link>
                  <Link style={this.style.links} to="/logout">
                    Logout
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
