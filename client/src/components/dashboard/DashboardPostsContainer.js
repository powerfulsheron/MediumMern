import React from "react";
import { connect } from "react-redux";
import { getLoggedUser } from "../../redux/actions/account";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DashboardPostsTable from "./DashboardPostsTable";

class DashboardPostsContainer extends React.Component {
  componentWillMount() {
    this.props.getLoggedUser();
  }

  render() {
    return (
      <>
        <DashboardPostsTable posts={this.props.account.user.posts} />
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
