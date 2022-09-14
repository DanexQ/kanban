import React from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const HideSidebar = () => {
  return (
    <div className="sidebar__container">
      <VisibilityOffIcon className="sidebar__icon" />{" "}
      <p className="sidebar__hide">Hide Sidebar *</p>
    </div>
  );
};

export default HideSidebar;
