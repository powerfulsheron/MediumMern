import React from "react";
import { connect } from "react-redux";
import PostComponent from "./PostComponent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Redirect } from "react-router-dom";

class PostsContainer extends React.Component {
  state = {
    activeTab: 0
  };

  handleChange = (event, newValue) => {
    this.setState({ ...this.state, activeTab: newValue });
  };

  render() {
    return (
      <>
        {!this.props.auth.logged && <Redirect to="/login" />}
        <Tabs
          value={this.state.activeTab}
          indicatorColor="secondary"
          textColor="default"
          onChange={this.handleChange}
        >
          <Tab disableRipple="true" label="Recent posts" />
          <Tab disableRipple="true" label="Posts per tag" />
          <Tab disableRipple="true" label="Posts per type" />
          <Tab disableRipple="true" label="Bookmarked posts" />
        </Tabs>
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
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
)(PostsContainer);
