import React, { Component } from "react";
import "./MiddleSide.css";
import { includes } from "lodash";
import { Controllers } from "./Controllers";
import { ProcessButtons } from "./ProcessButtons";
import { Pump } from "../../Pump";
import { getWrongStates } from "../../../../helpers/api/checkPumpState";
import { getControllers } from "../../../../helpers/api/getControllers";

export class MiddleSide extends Component {
  state = {
    controllers: [],
    pumpState: "",
    wrongStates: [],
    runState: "11011"
  };

  componentDidMount() {
    getWrongStates().then(data => {
      this.setState({ wrongStates: data });
    });

    getControllers().then(data => {
      this.setState({ controllers: data }, () => {
        this.props.getControllersData(data);
      });
    });
  }

  updateController(id) {
    let updatedControllers = this.state.controllers.map(controller => {
      if (controller.id === id) {
        controller.switch = !controller.switch;
      }
      return controller;
    });

    let currentStateArr = [];
    this.state.controllers.forEach(controller => {
      currentStateArr.splice(controller.id - 1, 0, +controller.switch);
    });
    let updatedCurrentState = currentStateArr.join("");

    let updatedPumpState = includes(this.state.wrongStates, updatedCurrentState)
      ? "unsafe"
      : updatedCurrentState === this.state.runState ? "safe to run" : "safe";

    let isWrongState = includes(this.state.wrongStates, updatedCurrentState);

    updatedControllers = updatedControllers.map(controller => {
      if (controller.id !== id) {
        controller.disabled = isWrongState;
      } else {
        controller.state = isWrongState ? "unsafe" : "safe";
      }
      return controller;
    });

    this.props.getControllersData(updatedControllers);

    this.setState({
      controllers: updatedControllers,
      pumpState: updatedPumpState
    });
  }

  render() {
    return (
      <div className="middle-side">
        <Controllers
          data={this.state.controllers}
          updateController={id => this.updateController(id)}
          pumpState={this.state.pumpState}
          isStartAllowed={this.props.isStartAllowed}
        />
        <Pump />
        <ProcessButtons
          pumpState={this.state.pumpState}
          isStartAllowed={this.props.isStartAllowed}
          pumpHeight={parseFloat(this.props.pumpHeight)}
          startProcess={() => this.props.startProcess()}
          stopProcess={() => this.props.stopProcess()}
          startDrain={() => this.props.startDrain()}
        />
      </div>
    );
  }
}
