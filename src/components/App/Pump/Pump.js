import React, {Component} from "react";
import pump from './pump.svg';

export class Pump extends Component {

	render() {

		return (
			<div>
				<img alt="Pump" src={pump} width="500px" height="500px"/>
			</div>
		);
	}
}
