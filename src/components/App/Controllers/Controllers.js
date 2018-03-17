import React, {Component} from "react";
import {Controller} from "../Controller/index";

export class Controllers extends Component {

	_startProcess(){
		this.props.startProcess();
	}

	_stopProcess(){
		this.props.stopProcess();
	}

	_startDrain(){
		this.props.startDrain();
	}

	render() {
		return (
			<div className="controllers">
				<Controller name="1"/>
				<Controller name="2"/>
				<Controller name="3"/>
				<Controller name="4"/>
				<Controller name="5"/>

				<button onClick={() => this._startProcess()}>START</button>
				<button onClick={() => this._stopProcess()}>STOP</button>
				<button onClick={() => this._startDrain()}>DRAIN</button>
			</div>
		);
	}
}
