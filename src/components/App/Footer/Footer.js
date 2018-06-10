import React from "react";
import "./Footer.css";
import { Paper, BottomNavigation, BottomNavigationItem } from "material-ui";
import { GITHUB_URL } from "../../../helpers/constants";

const iconStyles = {
  display: "inline-block",
  width: "1"
};

const github = <i className="github-icon" style={iconStyles} />;

export const Footer = props => (
  <div className="app-footer">
    <Paper zDepth={1}>
      <BottomNavigation>
        <BottomNavigationItem
          icon={github}
          onClick={() => window.open(GITHUB_URL)}
        />
      </BottomNavigation>
    </Paper>
  </div>
);
