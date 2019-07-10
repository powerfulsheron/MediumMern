import React from "react";
import { connect } from "react-redux";
import { getLoggedUser } from "../../redux/actions/account";
import { Typography } from "@material-ui/core";
import AccountFormContainer from "./AccountFormContainer";

class AccountContainer extends React.Component {
  componentWillMount() {
    this.props.getLoggedUser();
  }

  handleOpen = () => {
    this.setState({ ...this.state, modal: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, modal: false });
  };

  render() {
    return (
      <>
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
  getLoggedUser: () => dispatch(getLoggedUser(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(AccountContainer);
