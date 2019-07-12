import React from "react";
import { connect } from "react-redux";
import { getOnePost } from "../../redux/actions/posts";
import { Typography } from "@material-ui/core";
import PostDetailComponent from "./PostDetailComponent";

class PostDetailContainer extends React.Component {
  componentWillMount() {
    this.props.getOnePost(this.props.postId);
  }

  handleChange = (event, newValue) => {
    this.setState({ ...this.state, activeTab: newValue });
  };

  render() {
    return (
      <>
        {/* Post */}
        {this.props.posts.postLoaded && (
          <PostDetailComponent post={this.props.posts.post} />
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
  posts: state.posts
});

const mapActionToProps = dispatch => ({
  getOnePost: postId => dispatch(getOnePost(postId, dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(PostDetailContainer);
