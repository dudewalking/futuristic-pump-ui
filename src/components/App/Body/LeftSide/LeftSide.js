import React from "react";
import { PressureIndicator } from "./PressureIndicator";
import { TemperatureIndicator } from "./TemperatureIndicator";

export const LeftSide = props => {

    const { data } = props;

    return (
        <div className="aside-left">
            <PressureIndicator data={data.pressure} />
            <TemperatureIndicator data={data.temperature} />
        </div>
    );
}
