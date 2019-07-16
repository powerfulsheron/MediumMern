import React from "react";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Redirect } from "react-router-dom";
import { getAllPosts } from "../../redux/actions/posts";
import { PostsList } from "./PostsList";

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

        {/* RECENT POSTS */}
        {this.state.activeTab === 0 && (
          <PostsList posts={this.props.posts.posts} per_type={true} />
        )}

        {/* BOOKMARKS POSTS */}
        {this.state.activeTab === 2 && (
          <PostsList
            posts={this.props.account.user.bookmarks}
            bookmark={true}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  posts: state.posts
});

const mapActionToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(PostsContainer);
