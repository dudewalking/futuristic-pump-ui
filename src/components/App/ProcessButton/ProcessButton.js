import React from "react";
import { RaisedButton } from "material-ui";

const style = {
  width: "100%"
};

export const ProcessButton = props => (
  <div>
    <RaisedButton
      onClick={() => props.runProcess()}
      label={props.label}
      style={style}
      disabled={!props.isSafe}
    />
  </div>
);
