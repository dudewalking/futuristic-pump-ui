import React from "react";
import { TableRow, TableRowColumn } from "material-ui/Table";

export const ControllersTableRow = props => (
  <TableRow>
    <TableRowColumn>{props.controller.id}</TableRowColumn>
    <TableRowColumn>{props.controller.name}</TableRowColumn>
    <TableRowColumn>{props.controller.switch ? "ON" : "OFF"}</TableRowColumn>
    <TableRowColumn>{props.controller.state}</TableRowColumn>
  </TableRow>
);
