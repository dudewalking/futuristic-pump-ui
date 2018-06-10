import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from "material-ui/Table";
import { ControllersTableRow } from "./ControllersTableRow";

export class ControllersTable extends Component {
  render() {
    const controllers = this.props.data.map(controller => (
      <ControllersTableRow key={controller.id} controller={controller} />
    ));

    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>On/Off</TableHeaderColumn>
            <TableHeaderColumn>State</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>{controllers}</TableBody>
      </Table>
    );
  }
}
