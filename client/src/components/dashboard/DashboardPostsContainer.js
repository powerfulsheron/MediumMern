import React from "react";
import { connect } from "react-redux";
import { getLoggedUser } from "../../redux/actions/account";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class DashboardPostsContainer extends React.Component {
  componentWillMount() {
    this.props.getLoggedUser();
  }

  render() {
    return (
      <>
        <p style={{ marginTop: 40 }}>
          {JSON.stringify(this.props.account.user.posts)}
        </p>
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
