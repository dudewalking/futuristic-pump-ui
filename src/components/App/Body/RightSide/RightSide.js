import React from "react";
import "./RightSide.css";
import { VolumeIndicator } from "./VolumeIndicator";
import { PumpTable } from "./PumpTable";

export const RightSide = props => {
  const { data } = props;

  return (
    <div className="aside-right">
      <VolumeIndicator data={data.volume} />
      <PumpTable data={data} />
    </div>
  );
};
