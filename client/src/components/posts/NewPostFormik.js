import React from "react";
import { withFormik } from "formik";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Grid } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { Form } from "formik";
import { connect } from "react-redux";
import { postAPost } from "../../redux/actions/posts";

// Form componant with Formik
const NewPostFormik = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  onChangeWysiwyg
}) => (
  <Form onSubmit={handleSubmit}>
    <Grid
      container
      spacing={1}
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      {/* ----- TITLE ----- */}
      <Grid item lg={12}>
        <TextField
          id="title"
          name="title"
          type="text"
          autoComplete="false"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
          label="Title"
          margin="normal"
          fullWidth
        />
      </Grid>

      {/* ----- DESCRIPTION ----- */}
      <Grid item lg={12}>
        <TextField
          id="description"
          name="description"
          type="text"
          autoComplete="false"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          label="Description"
          margin="normal"
          fullWidth
        />
      </Grid>

      {/* ----- TIMETOREAD ----- */}
      <Grid item lg={3}>
        <TextField
          id="timetoread"
          name="timetoread"
          type="number"
          autoComplete="false"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.timetoread}
          label="Time to read"
          margin="normal"
          fullWidth
        />
      </Grid>

      {/* ----- MAINIMAGE ----- */}
      <Grid item lg={8}>
        <TextField
          id="mainimage"
          name="mainimage"
          type="text"
          autoComplete="false"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mainimage}
          label="Image URL"
          margin="normal"
          fullWidth
        />
      </Grid>

      {/* ----- CONTENT ( En attendant le Wysiwyg ) ----- */}
      <Grid item lg={12}>
        <TextField
          id="content"
          name="content"
          type="text"
          autoComplete="false"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.content}
          label="Content"
          margin="normal"
          fullWidth
          multiline
          rowsMax={10}
        />
      </Grid>
    </Grid>

    {/* ----- WYSIWYG ----- */}
    {/*<Paper style={{ minHeight: 400, marginTop: 20 }}>
        <Editor
          id="content"
          editorStyle={{ paddingLeft: 10, paddingRight: 10 }}
          //editorState={values.editorState}
          onChange={handleChange}
        />
      </Paper>*/}

    {/* ----- BTN ----- */}
    <Button
      variant="outlined"
      color="secondary"
      type="submit"
      size="small"
      disabled={isSubmitting}
      style={{ marginTop: 20 }}
    >
      Submit
    </Button>
  </Form>
);

// Formik Enhancer
const formikEnhancer = withFormik({
  mapPropsToValues: props => ({
    title: "",
    description: "",
    timetoread: 1,
    mainimage: "",
    content: ""
  }),

  // Submit
  handleSubmit: (values, { props, setSubmitting }) => {
    props.savePost({ ...values });
    setSubmitting(false);
  },

  // Wysiwyg
  onChangeWysiwyg: editorState => {
    this.setState({ editorState });
  },

  // Display name
  displayName: "NewPostFormik"
})(NewPostFormik);

// Redux map state to props
const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  posts: state.posts
});

// Redux map actions to props
const mapActionToProps = dispatch => ({
  savePost: post => dispatch(postAPost(post, dispatch))
});

// Redux connect
export default connect(
  mapStateToProps,
  mapActionToProps
)(formikEnhancer);
