import React from "react";
import Gauge from "../../Charts/Gauge";

export const Indicator = props => {
  const { data, name, interval, measure } = props;

  return (
    <div>
      <Gauge data={data} text={name} interval={interval} measure={measure} />
    </div>
  );
};
