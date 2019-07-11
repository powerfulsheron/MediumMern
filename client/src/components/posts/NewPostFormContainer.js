import React from "react";
import { connect } from "react-redux";
import { Paper, Typography } from "@material-ui/core";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import NewPostFormik from "./NewPostFormik";
import { postAPost, resetStatus } from "../../redux/actions/posts";
import { getAllTypes } from "../../redux/actions/types";

class NewPostFormContainer extends React.Component {
  componentWillMount() {
    this.props.resetStatus();
    this.props.getAllTypes();
  }

  render() {
    return (
      <>
        <Paper style={{ marginTop: 20, minHeight: 400, padding: 30 }}>
          {this.props.posts.status !== "" && (
            <Typography color="secondary" variant="caption">
              POST SAVED :)
            </Typography>
          )}

          {this.props.types.loaded ? (
            <NewPostFormik options={this.props.types} />
          ) : (
            "Loading..."
          )}
        </Paper>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  posts: state.posts,
  types: state.types
});

const mapActionToProps = dispatch => ({
  savePost: post => dispatch(postAPost(post, dispatch)),
  resetStatus: () => dispatch(resetStatus()),
  getAllTypes: () => dispatch(getAllTypes(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(NewPostFormContainer);
