import React from "react";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Redirect } from "react-router-dom";
import { getAllPosts } from "../../redux/actions/posts";
import { PostsList } from "./PostsList";
import empty from "../../img/undraw_empty_xct9.svg";
import bookmarks from "../../img/undraw_bookmarks_r6up.svg";
import dreamer from "../../img/undraw_dreamer_gxxi.svg";

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
        {this.state.activeTab === 0 && this.props.posts.postsLoaded && (
          <PostsList
            posts={this.props.posts.posts}
            img={empty}
            text="No post"
          />
        )}

        {/* RECENT POSTS */}
        {this.state.activeTab === 1 && (
          <PostsList
            posts={[]}
            img={dreamer}
            text="No posts found for this type"
          />
        )}

        {/* BOOKMARKS POSTS */}
        {this.state.activeTab === 2 && (
          <PostsList
            posts={this.props.account.user.bookmarks}
            img={bookmarks}
            text="No bookmarks"
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
