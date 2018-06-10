import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

export class PumpTable extends Component {
  render() {
    const { temperature, pressure, volume, height } = this.props.data;

    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Temperature (C)</TableHeaderColumn>
            <TableHeaderColumn>Pressure (Pa)</TableHeaderColumn>
            <TableHeaderColumn>Volume (m3)</TableHeaderColumn>
            <TableHeaderColumn>Height (m)</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>{parseInt(temperature, 10) || 0}</TableRowColumn>
            <TableRowColumn>{pressure}</TableRowColumn>
            <TableRowColumn>{volume}</TableRowColumn>
            <TableRowColumn>{height}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
