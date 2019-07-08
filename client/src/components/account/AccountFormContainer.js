import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { getLoggedUser } from "../../redux/actions/account";

class AccountFormContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.account.loaded === true && (
          <Formik
            enableReinitialize
            initialValues={this.props.account.user}
            onSubmit={(values, actions) => {
              /* Lancement de l'action via REDUX */
              actions.setSubmitting(false);
            }}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              form
            }) => (
              <Form>
                <TextField
                  id="email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Email"
                  placeholder="Your email"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <br />

                <TextField
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  label="Firstname"
                  placeholder="Your firsname"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <br />

                <TextField
                  id="surname"
                  name="surname"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                  label="Lastname"
                  placeholder="Your lastname"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <br />

                <TextField
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Birthdate"
                  defaultValue={values.birthdate}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <br />

                <TextField
                  id="description"
                  name="description"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  label="Description"
                  placeholder="Your description"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <br />

                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
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
  getLoggedUser: () => dispatch(getLoggedUser(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(AccountFormContainer);
