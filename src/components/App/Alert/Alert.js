import React, { Component } from "react";
import { Dialog, FlatButton } from "material-ui";

export class Alert extends Component {
  render() {
    const errorController = this.props.errorData[0];
    const name = errorController ? errorController.name : "";
    const requiredState = errorController
      ? errorController.switch ? "turned off" : "turned on"
      : "";
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />
    ];
    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.isOpen}
          onRequestClose={this.props.handleClose}
        >
          The controller "{name}" must be {requiredState}!
        </Dialog>
      </div>
    );
  }
}
