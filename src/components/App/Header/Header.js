import React from "react";
import "./Header.css";
import { AppBar, Avatar } from "material-ui";
import userSvg from "./default_user.svg";

export const Header = props => (
  <div className="app-header">
    <AppBar title={props.title} iconElementRight={<Avatar src={userSvg} />} />
  </div>
);
