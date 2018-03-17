import React from "react";
import { IndicatorSolid } from "../../IndicatorSolid";
import { MIN_VOLUME_LEVEL, MAX_VOLUME_LEVEL, VOLUME_MEASURE } from "../../../../helpers/consts";

export const VolumeIndicator = props => {

    const { data } = props;

    return (
        <div>
            <IndicatorSolid
                data={data}
                name={"Volume"}
                interval={{ min: MIN_VOLUME_LEVEL, max: MAX_VOLUME_LEVEL }}
                measure={VOLUME_MEASURE} />
        </div>
    );
}
