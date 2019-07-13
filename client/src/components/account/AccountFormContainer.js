import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { updateLoggedUser } from "../../redux/actions/account";
import moment from "moment";

class AccountFormContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.account.loaded === true && (
          <Formik
            enableReinitialize
            initialValues={{
              email: "",
              name: "",
              surname: "",
              birthdate: moment().format("YYYY-MM-DD"),
              description: "",
              ...this.props.account.user
            }}
            onSubmit={(values, actions) => {
              // Duplication
              var payload = { ...values };

              // Suppression des clefs inutiles
              delete payload.__v;

              this.props.updateLoggedUser(payload);
              actions.setSubmitting(false);
            }}
            render={({ values, handleChange, handleBlur, isSubmitting }) => (
              <Form autoComplete="off">
                <TextField
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="false"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Email"
                  margin="normal"
                  fullWidth
                />
                <br />

                <TextField
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="false"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  label="Firstname"
                  margin="normal"
                  fullWidth
                />
                <br />

                <TextField
                  id="surname"
                  name="surname"
                  type="text"
                  autoComplete="false"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                  label="Lastname"
                  margin="normal"
                  fullWidth
                />
                <br />

                <TextField
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Birthdate"
                  defaultValue={moment(values.birthdate).format("YYYY-MM-DD")}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
                <br />

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
                <br />

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
            )}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account
});

const mapActionToProps = dispatch => ({
  updateLoggedUser: user => dispatch(updateLoggedUser(user, dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(AccountFormContainer);
