import React from "react";
import { connect } from "react-redux";
import { Paper, Typography } from "@material-ui/core";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import NewPostFormik from "./NewPostFormik";
import { postAPost } from "../../redux/actions/posts";

class NewPostFormContainer extends React.Component {
  render() {
    return (
      <>
        <Paper style={{ marginTop: 20, minHeight: 400, padding: 30 }}>
          {this.props.posts.status !== "" && (
            <Typography color="secondary" variant="caption">
              POST SAVED :)
            </Typography>
          )}
          <NewPostFormik />
        </Paper>
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
  savePost: post => dispatch(postAPost(post, dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(NewPostFormContainer);
