import React from "react";
import { ControllersTable } from "./ControllersTable";

export const BottomSide = props => {
  const { data } = props;

  return (
    <div className="footer">
      <ControllersTable data={data} />
    </div>
  );
};
