import React from "react";
import { connect } from "react-redux";
import PostComponent from "./PostComponent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Redirect } from "react-router-dom";
import { getAllPosts } from "../../redux/actions/posts";
import { Typography } from "@material-ui/core";

class PostsContainer extends React.Component {
  state = {
    activeTab: 0
  };

  componentWillMount() {
    this.props.getAllPosts();
  }

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
          onChange={this.handleChange}
        >
          <Tab disableRipple={true} label="Recent posts" />
          <Tab disableRipple={true} label="Posts per type" />
          <Tab disableRipple={true} label="Bookmarked posts" />
        </Tabs>

        {/* ALL POSTS */}
        {this.props.posts.postsLoaded &&
          this.props.posts.posts.map(post => (
            <PostComponent key={post._id} post={post} />
          ))}

        {/* Loading */}
        {!this.props.posts.postsLoaded && (
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
  posts: state.posts
});

const mapActionToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(PostsContainer);
