import React from "react";
import SolidGauge from "../../Charts/SolidGauge";

export const IndicatorSolid = props => {
  const { data, name, interval, measure } = props;

  return (
    <div>
      <SolidGauge
        data={data}
        text={name}
        interval={interval}
        measure={measure}
      />
    </div>
  );
};
