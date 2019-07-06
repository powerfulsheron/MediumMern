import React from "react";
import { connect } from "react-redux";

class DashboardPostsContainer extends React.Component {
  state = {
    activeTab: 0
  };

  handleChange = (event, newValue) => {
    this.setState({ ...this.state, activeTab: newValue });
  };

  render() {
    return (
      <>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapActionToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapActionToProps
)(DashboardPostsContainer);
