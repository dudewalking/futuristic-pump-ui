import React from "react";
import { ProcessButton } from "../../ProcessButton";

export const ProcessButtons = props => (
  <div className="process-buttons">
    <ProcessButton
      label="Start"
      runProcess={() => props.startProcess()}
      isSafe={
        props.pumpState === "safe to run" &&
        props.isStartAllowed &&
        props.pumpHeight !== 10
      }
    />
    <ProcessButton
      label="Stop"
      runProcess={() => props.stopProcess()}
      isSafe={props.pumpState === "safe to run" && !props.isStartAllowed}
    />
    <ProcessButton
      label="Drain"
      runProcess={() => props.startDrain()}
      isSafe={
        props.pumpState === "safe to run" &&
        props.pumpHeight > 0 &&
        props.isStartAllowed
      }
    />
  </div>
);
