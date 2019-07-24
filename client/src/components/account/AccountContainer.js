import React from "react";
import { connect } from "react-redux";
import { getLoggedUser } from "../../redux/actions/account";
import { Typography, Snackbar } from "@material-ui/core";
import AccountFormContainer from "./AccountFormContainer";
import { AlertContentComponent } from "../common/AlertContentComponent";

class AccountContainer extends React.Component {
  componentWillMount() {
    this.props.getLoggedUser();
    this.props.resetUpdated();
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.props.resetUpdated();
  };

  isError = () => {
    console.log(this.props.account);
    return this.props.account.err !== "";
  };

  render() {
    return (
      <>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.props.account.updated}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <AlertContentComponent
            onClose={this.handleClose}
            variant="success"
            message="Modification(s) enregistrée(s)"
          />
        </Snackbar>

        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.isError()}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <AlertContentComponent
            onClose={this.handleClose}
            variant="danger"
            message={this.props.account.err}
          />
        </Snackbar>

        <Typography variant="subtitle2" style={{ marginBottom: 10 }}>
          Please verify your personnal informations
        </Typography>
        <AccountFormContainer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account
});

const mapActionToProps = dispatch => ({
  getLoggedUser: () => dispatch(getLoggedUser(dispatch)),
  resetUpdated: () => dispatch({ type: "APP_ACCOUNT_RESET_UPDATED" })
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(AccountContainer);
