import React, {Component} from "react";
import "./App.css";
import {
	MAX_WATER_LEVEL,
	MIN_TEMPERATURE_LEVEL,
	MAX_TEMPERATURE_LEVEL,
	MIN_PRESSURE_LEVEL,
	MAX_PRESSURE_LEVEL,
	MIN_VOLUME_LEVEL,
	MAX_VOLUME_LEVEL,
	TEMPERATURE_MEASURE,
	PRESSURE_MEASURE,
	VOLUME_MEASURE,
	START_COMMAND,
	STOP_COMMAND,
	DRAIN_COMMAND,
	WS_SERVER
} from "../helpers/consts";
import Gauge from "../Charts/Gauge";
import SolidGauge from "../Charts/SolidGauge";


class App extends Component {
	constructor() {
		super();
		this.state = {
			socket: "",
			pumpData: {
				temperature: 0,
				pressure: 0,
				volume: 0,
				height: 0
			}
		};
	}

	startProcess() {
		const socket = new WebSocket(WS_SERVER);

		socket.onopen = () => {
			console.log("WebSocket channel is opened");
			const data = this.state.pumpData;
			let message = {
				type: START_COMMAND,
				height: data ? data.height : 0
			};
			this.setState({
				socket: socket
			}, () => socket.send(JSON.stringify(message)));
		};

		socket.onmessage = event => {
			const dataObj = event.data ? JSON.parse(event.data) : {};
			this.setState({
				pumpData: dataObj
			}, () => {
				if (dataObj.height > MAX_WATER_LEVEL) {
					socket.send(JSON.stringify({type: STOP_COMMAND}));
				}

				if (dataObj.height < 0) {
					socket.send(JSON.stringify({type: STOP_COMMAND}));
					socket.close();
				}
			});
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
		if (this.state.socket) {
			this.state.socket.send(message);
		}
	}

	stopProcess() {
		let message = {
			type: STOP_COMMAND
		};
		if (this.state.socket) {
			this.state.socket.send(JSON.stringify(message));
		}
	}


	render() {
		const pumpData = this.state.pumpData;

		return (
			<div className="App">

				<button onClick={() => this.startProcess()}>START</button>
				<button onClick={() => this.stopProcess()}>STOP</button>
				<button onClick={() => this.startDrain()}>DRAIN</button>

				<div>
					<h2>Temperature</h2>
					<span>{parseInt(pumpData.temperature) || 0} </span>

					<h2>Pressure</h2>
					<span>{pumpData.pressure || 0}</span>

					<h2>Volume</h2>
					<span>{pumpData.volume || 0}</span>

					<h2>Water Level (Max level: {MAX_WATER_LEVEL} m)</h2>
					<span>{pumpData.height > MAX_WATER_LEVEL
						? MAX_WATER_LEVEL
						: pumpData.height > 0 ? pumpData.height : 0}</span>
				</div>

				<Gauge
					data={parseInt(pumpData.temperature)}
					text="Temperature"
					interval={{min: MIN_TEMPERATURE_LEVEL, max: MAX_TEMPERATURE_LEVEL}}
					measure={TEMPERATURE_MEASURE}
				/>

				<Gauge
					data={pumpData.pressure}
					text="Pressure"
					interval={{min: MIN_PRESSURE_LEVEL, max: MAX_PRESSURE_LEVEL}}
					measure={PRESSURE_MEASURE}
				/>

				<SolidGauge
					data={pumpData.volume}
					text="Volume"
					interval={{min: MIN_VOLUME_LEVEL, max: MAX_VOLUME_LEVEL}}
					measure={VOLUME_MEASURE}
				/>
			</div>
		);
	}
}

export default App;
