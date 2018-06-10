import React from "react";
import { Controller } from "../../Controller";

export const Controllers = props => {
  const buildControllers = () => {
    return props.data.map(controller => (
      <Controller
        toggleController={() => props.updateController(controller.id)}
        key={controller.id}
        name={controller.name}
        disabled={controller.disabled || !props.isStartAllowed}
        pumpState={props.pumpState}
      />
    ));
  };

  return <div className="controllers">{buildControllers()}</div>;
};
