import React from "react";
import { Controllers } from "../../Controllers";
import { Pump } from "../../Pump";

export const MiddleSide = props => {

    return (
        <div className="main">
            <Controllers
                startProcess={() => props.startProcess()}
                stopProcess={() => props.stopProcess()}
                startDrain={() => props.startDrain()}
            />
            <Pump />
        </div>
    );
}
