import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { MAX_WATER_LEVEL } from "../../../helpers/consts";

export class StateTable extends Component {

	temperatureFormatter(cell, row) {
		return parseInt(cell, 10) || 0;
	}

	pressureFormatter(cell, row) {
		return parseInt(cell, 10) || 0;
	}

	volumeFormatter(cell, row) {
		return parseInt(cell, 10) || 0;
	}

	heightFormatter(cell, row) {
		return cell > MAX_WATER_LEVEL ? MAX_WATER_LEVEL : cell > 0 ? cell : 0
	}

	render() {
		let data = this.props.pumpData;


		return (
			<BootstrapTable data={[data]}>
				<TableHeaderColumn
					dataField='id'
					isKey
					hidden>
					ID
				</TableHeaderColumn>

				<TableHeaderColumn
					dataField='temperature'
					dataFormat={this.temperatureFormatter}>
					Temperature
				</TableHeaderColumn>

				<TableHeaderColumn
					dataField='pressure'
					dataFormat={this.pressureFormatter}>
					Pressure
				 </TableHeaderColumn>

				<TableHeaderColumn
					dataField='volume'
					dataFormat={this.volumeFormatter}>
					Volume
				 </TableHeaderColumn>

				<TableHeaderColumn
					dataField='height'
					dataFormat={this.heightFormatter}>
					Height
				 </TableHeaderColumn>
			</BootstrapTable>

		);
	}
}
