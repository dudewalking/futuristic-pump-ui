import React from "react";
import { VolumeIndicator } from "./VolumeIndicator";

export const RightSide = props => {

    const { data } = props;

    return (
        <div className="aside-right">
            <VolumeIndicator data={data.volume} />
        </div>
    );
}
