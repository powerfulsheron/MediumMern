import React from "react";
import { connect } from "react-redux";
import { Paper, Typography, Snackbar } from "@material-ui/core";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import NewPostFormik from "./NewPostFormik";
import { postAPost } from "../../redux/actions/posts";
import { getAllTypes } from "../../redux/actions/types";
import { AlertContentComponent } from "../common/AlertContentComponent";

class NewPostFormContainer extends React.Component {
  componentWillMount() {
    this.props.resetStatus();
    this.props.getAllTypes();
  }

  render() {
    return (
      <>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.props.posts.status}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <AlertContentComponent
            onClose={this.handleClose}
            variant="success"
            message={this.props.posts.status}
          />
        </Snackbar>

        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.props.posts.err}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <AlertContentComponent
            onClose={this.handleClose}
            variant="danger"
            message={this.props.posts.status}
          />
        </Snackbar>

        <Paper style={{ marginTop: 20, minHeight: 400, padding: 30 }}>
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
  resetStatus: () =>
    dispatch({
      type: "APP_POST_STATUS_NEW_POST_RESET"
    }),
  getAllTypes: () => dispatch(getAllTypes(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(NewPostFormContainer);
