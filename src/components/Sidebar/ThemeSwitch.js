import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeSwitch = () => {
  return (
    <div className="sidebar__changer">
      <LightModeIcon className="sidebar__icon" />
      <div className="sidebar__changer-background">
        <div className="sidebar__changer-circle"></div>
      </div>
      <DarkModeIcon className="sidebar__icon" />
    </div>
  );
};

export default ThemeSwitch;
