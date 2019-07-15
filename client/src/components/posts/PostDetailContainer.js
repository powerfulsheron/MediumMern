import React from "react";
import { connect } from "react-redux";
import { getOnePost } from "../../redux/actions/posts";
import { Typography } from "@material-ui/core";
import PostDetailComponent from "./PostDetailComponent";
import { updateLoggedUser } from "../../redux/actions/account";

class PostDetailContainer extends React.Component {
  componentWillMount() {
    this.props.getOnePost(this.props.postId);
  }

  handleChange = (event, newValue) => {
    this.setState({ ...this.state, activeTab: newValue });
  };

  // Handle btn to bookmark
  handleSaveToBookmarks = () => {
    if (!this.isBookmarked(this.props.posts.post)) {
      this.props.account.user.bookmarks.push(this.props.posts.post);
      var userPayload = { ...this.props.account.user };
      delete userPayload.__v;
      this.props.updateUser(userPayload);
    } else {
      var new_bookmarks = this.props.account.user.bookmarks.filter(element => {
        return this.props.posts.post._id !== element._id;
      });
      this.props.account.user.bookmarks = new_bookmarks;
      var userPayload = { ...this.props.account.user };
      delete userPayload.__v;
      this.props.updateUser(userPayload);
    }
  };

  // Handle btn favorite
  handleFavorite = () => {
    if (!this.isFavorite(this.props.posts.post)) {
      this.props.account.user.favorites.push(this.props.posts.post);
      var userPayload = { ...this.props.account.user };
      delete userPayload.__v;
      this.props.updateUser(userPayload);
    } else {
      var new_favorites = this.props.account.user.favorites.filter(element => {
        return this.props.posts.post._id !== element._id;
      });
      this.props.account.user.favorites = new_favorites;
      var userPayload = { ...this.props.account.user };
      delete userPayload.__v;
      this.props.updateUser(userPayload);
    }
  };

  // Check if already bookmarked
  isBookmarked = post => {
    return (
      this.props.account.user.bookmarks.filter(element => {
        return post._id === element._id;
      }).length > 0
    );
  };

  // Check if already in favorites
  isFavorite = post => {
    return (
      this.props.account.user.favorites.filter(element => {
        return post._id === element._id;
      }).length > 0
    );
  };

  // render
  render() {
    return (
      <>
        {/* Post */}
        {this.props.posts.postLoaded && (
          <PostDetailComponent
            post={this.props.posts.post}
            bookmarked={this.isBookmarked(this.props.posts.post)}
            liked={this.isFavorite(this.props.posts.post)}
            handleSaveToBookmarks={this.handleSaveToBookmarks}
            handleFavorite={this.handleFavorite}
          />
        )}

        {/* Loading */}
        {!this.props.posts.postLoaded && (
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
  account: state.account
});

const mapActionToProps = dispatch => ({
  getOnePost: postId => dispatch(getOnePost(postId, dispatch)),
  updateUser: user => dispatch(updateLoggedUser(user, dispatch)),
  updatePost: post => dispatch()
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(PostDetailContainer);
