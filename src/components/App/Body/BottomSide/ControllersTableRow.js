import React from "react";
import { TableRow, TableRowColumn } from "material-ui/Table";

export const ControllersTableRow = props => (
  <TableRow>
    <TableRowColumn>{props.controller.id}</TableRowColumn>
    <TableRowColumn>{props.controller.name.toUpperCase()}</TableRowColumn>
    <TableRowColumn>{props.controller.switch ? "ON" : "OFF"}</TableRowColumn>
    <TableRowColumn>{props.controller.state.toUpperCase()}</TableRowColumn>
  </TableRow>
);
