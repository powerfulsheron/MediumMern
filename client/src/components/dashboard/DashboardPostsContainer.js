import React from "react";
import { connect } from "react-redux";
import { getLoggedUser, updateLoggedUser } from "../../redux/actions/account";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DashboardPostsTable from "./DashboardPostsTable";
import { removeAPost } from "../../redux/actions/posts";

class DashboardPostsContainer extends React.Component {
  componentWillMount() {
    this.props.getLoggedUser();
  }

  onDelete = (event, id) => {
    // Delete du post de tous les posts
    if (this.props.posts.posts.length > 0) {
      this.props.posts.posts = this.props.posts.posts.filter(e => {
        return e._id !== id;
      });
    }
    this.props.removePost(id);

    // Delete du post des posts de l'user
    if (this.props.account.user.posts.length > 0) {
      this.props.account.user.posts = this.props.account.user.posts.filter(
        e => {
          return e._id !== id;
        }
      );
    }

    // Delete du post des bookmarks de l'user
    if (this.props.account.user.bookmarks.length > 0) {
      this.props.account.user.bookmarks = this.props.account.user.bookmarks.filter(
        e => {
          return e._id !== id;
        }
      );
    }

    // Save
    this.props.updateUser(this.props.account.user);
  };

  render() {
    return (
      <>
        <DashboardPostsTable
          posts={this.props.account.user.posts}
          handleDelete={this.onDelete}
        />
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
  getLoggedUser: () => dispatch(getLoggedUser(dispatch)),
  updateUser: user => dispatch(updateLoggedUser(user, dispatch)),
  removePost: id => dispatch(removeAPost(id, dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(DashboardPostsContainer);
