import React, {Component} from "react";
import Toggle from "react-toggle";

export class Controller extends Component {

	render() {
		return (
			<label>
				<Toggle icons={false}/>
				<span className="label-text">{this.props.name}</span>
			</label>
		);
	}
}
