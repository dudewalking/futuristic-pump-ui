import React from "react";
import { Indicator } from "../../Indicator";
import { MIN_PRESSURE_LEVEL, MAX_PRESSURE_LEVEL, PRESSURE_MEASURE } from "../../../../helpers/consts";

export const PressureIndicator = props => {

    const { data } = props;

    return (
        <div>
            <Indicator
                data={data}
                name={"Preassure"}
                interval={{ min: MIN_PRESSURE_LEVEL, max: MAX_PRESSURE_LEVEL }}
                measure={PRESSURE_MEASURE} />
        </div>
    );
}
