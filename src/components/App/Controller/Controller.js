import React from "react";
import { Toggle } from "material-ui";

const styles = {
  default: {},
  safe: {
    backgroundColor: "green"
  },
  unsafe: {
    backgroundColor: "red"
  }
};

export const Controller = props => {
  const switchedStyle =
    props.pumpState === "unsafe" ? styles.unsafe : styles.safe;
  const staticStyle =
    props.pumpState === "unsafe" ? styles.unsafe : styles.default;

  return (
    <label>
      <Toggle
        thumbStyle={staticStyle}
        trackStyle={staticStyle}
        trackSwitchedStyle={switchedStyle}
        thumbSwitchedStyle={switchedStyle}
        style={{ width: 0, margin: "15px" }}
        label={props.name}
        disabled={props.disabled}
        onToggle={() => props.toggleController()}
      />
    </label>
  );
};
