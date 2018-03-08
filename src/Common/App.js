import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Gauge from "../Charts/Gauge";
import SolidGauge from "../Charts/SolidGauge";

class App extends Component {
  constructor() {
    super();
    this.state = {
      socket: {},
      pumpData: ""
    };
  }

  stopProcess() {
    let message = {
      type: "stop"
    };
    this.state.socket.send(JSON.stringify(message));
  }

  startDrain(height) {
    let str = JSON.stringify({
      type: "drain",
      height: height
    });
    this.state.socket.send(str);
  }

  startProcess() {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      const data = this.state.pumpData;
      console.log("WebSocket channel is opened");

      let message = {
        type: "start",
        height: data ? data.height : 0
      };
      socket.send(JSON.stringify(message));
      this.setState({
        socket: socket
      });
    };

    socket.onmessage = event => {
      const dataObj = event.data ? JSON.parse(event.data) : {};
      this.setState({
        pumpData: dataObj
      });

      if (dataObj.height > 10) {
        socket.send(JSON.stringify({ type: "stop" }));
      }

      if (dataObj.height < 0) {
        socket.send(JSON.stringify({ type: "stop" }));
      }
    };

    socket.onclose = event => {
      console.log("Connection was closed");
    };

    socket.onerror = event => {
      console.log("Error occurred " + event);
      socket.close();
    };
  }

  render() {
    const pumpData = this.state.pumpData;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Futuristic Pump</h1>
        </header>

        <button onClick={() => this.startProcess()}>START</button>
        <button onClick={() => this.stopProcess()}>STOP</button>
        <button onClick={() => this.startDrain(pumpData.height)}>DRAIN</button>

        <div>
          <h2>Temperature</h2>
          <span>{pumpData.temperature || 0} </span>
          <h2>Pressure</h2>
          <span>{pumpData.pressure || 0}</span>
          <h2>Volume</h2>
          <span>{pumpData.volume || 0}</span>
          <h2>Water Level (Max level: 10 m)</h2>
          <span>{pumpData.height > 10 ? 10 : pumpData.height || 0}</span>
        </div>

        <Gauge
          data={pumpData.temperature}
          text="Temperature"
          interval={{ min: 0, max: 20 }}
          measure={`${String.fromCharCode(248)}C`}
        />

        <Gauge
          data={pumpData.pressure}
          text="Pressure"
          interval={{ min: 0, max: 120000 }}
          measure="Pa"
        />

        <SolidGauge
          data={pumpData.volume}
          text="Volume"
          interval={{ min: 0, max: 300 }}
          measure="m3"
        />
      </div>
    );
  }
}

export default App;
