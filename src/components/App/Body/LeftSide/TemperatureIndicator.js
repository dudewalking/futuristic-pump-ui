import React from "react";
import { Indicator } from "../../Indicator";
import { MIN_TEMPERATURE_LEVEL, MAX_TEMPERATURE_LEVEL, TEMPERATURE_MEASURE } from "../../../../helpers/consts";

export const TemperatureIndicator = props => {

    const { data } = props;

    return (
        <div>
            <Indicator
                data={parseInt(data,10)}
                name={"Temperature"}
                interval={{ min: MIN_TEMPERATURE_LEVEL, max: MAX_TEMPERATURE_LEVEL }}
                measure={TEMPERATURE_MEASURE} />
        </div>
    );
}
