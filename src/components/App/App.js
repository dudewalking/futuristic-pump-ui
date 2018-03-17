import React, { Component } from "react";
import "./App.css";
import {
	MAX_WATER_LEVEL,
	START_COMMAND,
	STOP_COMMAND,
	DRAIN_COMMAND,
	WS_SERVER
} from "../../helpers/consts";

import { Header } from './Header';

//import {LeftSide} from "./Main/LeftSide";
import { LeftSide } from "./Body/LeftSide";

// import { MiddleSide } from "./Main/MiddleSide";
import {MiddleSide} from "./Body/MiddleSide";
 
//import {RightSide} from "./Main/RightSide";
import { RightSide } from "./Body/RightSide";

//import { BottomSide } from "./Main/BottomSide";
import { BottomSide } from "./Body/BottomSide";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			socket: "",
			pumpData: {
				temperature: 0,
				pressure: 0,
				volume: 0,
				height: 0,
				id: 0
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
					socket.send(JSON.stringify({ type: STOP_COMMAND }));
				}

				if (dataObj.height < 0) {
					socket.send(JSON.stringify({ type: STOP_COMMAND }));
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
				<Header name="Pump" />
				<LeftSide data={pumpData} />
				<MiddleSide
					startProcess={() => this.startProcess()}
					stopProcess={() => this.stopProcess()}
					startDrain={() => this.startDrain()}
				/>
				<RightSide data={pumpData} />
				<BottomSide data={pumpData} />
			</div>
		);
	}
}
