import React from "react";
import { withFormik } from "formik";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { TextField, Button, Paper } from "@material-ui/core";
import { Form } from "formik";
import { connect } from "react-redux";
import { postAPost } from "../../redux/actions/posts";
import { getAllTypes } from "../../redux/actions/types";
import {
  Grid,
  Select,
  Input,
  MenuItem,
  InputLabel,
  FormControl,
  Typography
} from "@material-ui/core";

// Form componant with Formik
const NewPostFormik = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue
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
      <Grid item lg={8}>
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

      {/* ----- TYPE ----- */}
      <Grid item lg={12}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel htmlFor="type-helper">Type</InputLabel>
          <Select
            id="type"
            name="type"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.type}
            fullWidth
            input={<Input name="type" id="type-helper" />}
          >
            {!values.typeOption.loaded && <MenuItem value="">Empty</MenuItem>}
            {values.typeOption.types &&
              values.typeOption.types.map(option => (
                <MenuItem key={option._id} value={option._id}>
                  {option.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>

    {/* ----- WYSIWYG ----- */}
    <Paper style={{ minHeight: 400, marginTop: 20 }}>
      <Editor
        id="editorState"
        editorStyle={{ paddingLeft: 10, paddingRight: 10 }}
        editorState={values.content}
        onEditorStateChange={editorState => {
          setFieldValue("content", editorState);
        }}
      />
    </Paper>

    {/* ----- PREVIEW ----- */}
    <Typography variant="h5" style={{ fontWeight: "bold", marginTop: 40 }}>
      Preview
    </Typography>
    <Paper style={{ minHeight: 400, marginTop: 20, padding: 20 }}>
      <div
        dangerouslySetInnerHTML={{
          __html: draftToHtml(convertToRaw(values.content.getCurrentContent()))
        }}
      />
    </Paper>

    {/* ----- BTN ----- */}
    <Button
      variant="outlined"
      color="secondary"
      type="submit"
      size="small"
      disabled={isSubmitting}
      style={{ marginTop: 40 }}
    >
      Submit
    </Button>
  </Form>
);

// Formik Enhancer
const formikEnhancer = withFormik({
  mapPropsToValues: props => {
    return {
      title: "",
      description: "",
      timetoread: 1,
      mainimage: "",
      content: EditorState.createEmpty(),
      type: "",
      typeOption: props.options
    };
  },

  // Submit
  handleSubmit: (values, { props, setSubmitting }) => {
    props.savePost({
      ...values,
      content: JSON.stringify(convertToRaw(values.content.getCurrentContent()))
    });
    setSubmitting(false);
  },

  // Display name
  displayName: "NewPostFormik"
})(NewPostFormik);

// Redux map state to props
const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  posts: state.posts,
  types: state.types
});

// Redux map actions to props
const mapActionToProps = dispatch => ({
  savePost: post => dispatch(postAPost(post, dispatch)),
  getAllTypes: () => dispatch(getAllTypes(dispatch))
});

// Redux connect
export default connect(
  mapStateToProps,
  mapActionToProps
)(formikEnhancer);
