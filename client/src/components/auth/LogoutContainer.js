import React from "react";
import { connect } from "react-redux";
import { appLogout } from "../../redux/actions/auth";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

class LogoutContainer extends React.Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return (
      <>
        <Typography component="h3">Vous avez été deconnecté :)</Typography>
        <Link to="/login">Se reconnecter</Link>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapActionToProps = dispatch => ({
  onLogout: () => dispatch(appLogout())
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(LogoutContainer);
