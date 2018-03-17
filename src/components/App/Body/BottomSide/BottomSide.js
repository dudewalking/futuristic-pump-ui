import React from "react";
import { StateTable } from "../../Pump/StateTable";

export const BottomSide = props => {

    const { data } = props;

    return (
        <div className="footer">
            <StateTable pumpData={data} />
        </div>
    );
}
