import React from "react";
import { connect } from "react-redux";
import { getLoggedUser } from "../../redux/actions/account";
import { Typography } from "@material-ui/core";

class DashboardPostsContainer extends React.Component {
  componentWillMount() {
    this.props.getLoggedUser();
  }

  render() {
    return (
      <>
        <Typography variant="h6">List of my posts :</Typography>
        <br />
        {JSON.stringify(this.props.account.posts)}
        {JSON.stringify(this.props.account.user)}
        <br /> <br />
        <Typography variant="h6">Write a new post</Typography>
        <br />
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account
});

const mapActionToProps = dispatch => ({
  getLoggedUser: () => dispatch(getLoggedUser(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(DashboardPostsContainer);
