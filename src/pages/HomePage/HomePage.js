import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    const { classes, auth } = this.props;
    const content = !auth.isAuthenticated() ? (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={auth.signIn}
      >
        Login
      </Button>
    ) : null;
    return (
      <div className="v-header container">
        <div className="header-overlay" />
        <div className="header-content text-md-center">
          <h1>Event Scheme</h1>
          <p>
            We help individuals to create events, customized, manage their
            events. All events are reviewed by our system before approval.
          </p>
          {content}
        </div>
      </div>
    );
  }
}
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

export default withStyles(styles)(HomePage);
