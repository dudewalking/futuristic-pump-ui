import React from "react";
import { LinearProgress } from "material-ui";
import { MAX_WATER_LEVEL } from "../../../helpers/constants";

export const Progress = props => {
  const { completed } = props;

  const percentage = parseInt(
    (completed / MAX_WATER_LEVEL * 100).toFixed(1),
    10
  );

  return (
    <div>
      <span>
        <h4>{percentage} %</h4>
      </span>
      <LinearProgress mode="determinate" value={percentage} max={100} />
    </div>
  );
};
