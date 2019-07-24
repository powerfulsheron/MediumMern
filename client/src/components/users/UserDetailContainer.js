import React from "react";
import { connect } from "react-redux";
import { getOneUser } from "../../redux/actions/users";
import { Typography } from "@material-ui/core";
import UserDetailComponent from "./UserDetailComponent";

class UserDetailContainer extends React.Component {
  componentWillMount() {
    this.props.getOneUser(this.props.userId);
  }

  handleChange = (event, newValue) => {
    this.setState({ ...this.state, activeTab: newValue });
  };

  // render
  render() {
    return (
      <>
        {/* Post */}
        {this.props.user.userLoaded && (
          <UserDetailComponent
            user={this.props.user.user}
          />
        )}

        {/* Loading */}
        {!this.props.user.userLoaded && (
          <Typography
            variant="subtitle1"
            style={{ textAlign: "center", marginTop: 50 }}
          >
            Loading...
          </Typography>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts,
  account: state.account,
  user: state.user
});

const mapActionToProps = dispatch => ({
  getOneUser: postId => dispatch(getOneUser(postId, dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(UserDetailContainer);
