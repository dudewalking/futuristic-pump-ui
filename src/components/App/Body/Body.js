import React, { Component } from "react";
import "./Body.css";
import { LeftSide } from "./LeftSide";
import { MiddleSide } from "./MiddleSide";
import { RightSide } from "./RightSide";
import { BottomSide } from "./BottomSide";
import { Progress } from "../Progress";
import {
  MAX_WATER_LEVEL,
  START_COMMAND,
  STOP_COMMAND,
  DRAIN_COMMAND,
  WS_SERVER
} from "../../../helpers/constants";

let socket;

export class Body extends Component {
  state = {
    controllersData: [],
    isStartAllowed: true,
    pumpData: { temperature: 0, pressure: 0, volume: 0, height: 0, id: 0 }
  };

  startProcess() {
    if (!this.state.isStartAllowed) {
      return true;
    }
    socket = new WebSocket(WS_SERVER);

    socket.onopen = () => {
      console.log("WebSocket channel is opened");
      const data = this.state.pumpData;
      let message = { type: START_COMMAND, height: data ? data.height : 0 };
      socket.send(JSON.stringify(message));
      this.setState({ isStartAllowed: false });
    };

    socket.onmessage = event => {
      const dataObj = event.data ? JSON.parse(event.data) : {};

      if (dataObj.height >= MAX_WATER_LEVEL) {
        socket.send(JSON.stringify({ type: STOP_COMMAND }));
        this.setState({ isStartAllowed: true });
      }

      if (dataObj.height <= 0) {
        socket.send(JSON.stringify({ type: STOP_COMMAND }));
        socket.close();
        this.setState({ isStartAllowed: true });
      }

      this.setState({ pumpData: dataObj });
    };

    socket.onclose = event => {
      console.log("Connection was closed");
    };

    socket.onerror = event => {
      console.log("Error occurred " + event);
      socket.close();
    };
  }

  startDrain() {
    const data = this.state.pumpData;
    let message = JSON.stringify({
      type: DRAIN_COMMAND,
      height: data.height ? data.height : 0
    });
    socket.send(message);

    this.setState({ isStartAllowed: false });
  }

  stopProcess() {
    if (socket) {
      let message = { type: STOP_COMMAND };
      socket.send(JSON.stringify(message));
    }
    this.setState({ isStartAllowed: true });
  }

  getControllersData(data) {
    this.setState({
      controllersData: data
    });
  }

  render() {
    const { pumpData } = this.state;
    return (
      <div className="app-body">
        <div className="app-body-middle">
          <LeftSide data={pumpData} />
          <MiddleSide
            isStartAllowed={this.state.isStartAllowed}
            pumpHeight={pumpData.height}
            getControllersData={data => this.getControllersData(data)}
            startProcess={() => this.startProcess()}
            stopProcess={() => this.stopProcess()}
            startDrain={() => this.startDrain()}
          />
          <RightSide data={pumpData} />
        </div>
        <Progress completed={pumpData.height} />
        <BottomSide data={this.state.controllersData} />
      </div>
    );
  }
}
