import React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar dark ">
      <div className="logo">
        <div className="logo__rectangle"></div>
        <h1 className="logo__title">kanban</h1>
      </div>

      <div className="sidebar__menu">
        <p className="sidebar__all">All boards (2*)</p>
        <div className="sidebar__boards">
          <div className="sidebar__board  active">
            <DashboardIcon className="sidebar__icon" />{" "}
            <p className="sidebar__board-title">Example 1 *</p>
          </div>
          <div className="sidebar__board">
            <DashboardIcon className="sidebar__icon" />{" "}
            <p className="sidebar__board-title">
              Example 2 dsadasddasdassdadssaasdas *
            </p>
          </div>
        </div>
        <div className="sidebar__create">
          <DashboardCustomizeIcon className="sidebar__icon" /> Create new board
        </div>
      </div>
      <div className="sidebar__changer">
        <LightModeIcon className="sidebar__icon" />
        <div className="sidebar__changer-background">
          <div className="sidebar__changer-circle"></div>
        </div>
        <DarkModeIcon className="sidebar__icon" />
      </div>
      <div className="sidebar__container">
        <VisibilityOffIcon className="sidebar__icon" />{" "}
        <p className="sidebar__hide">Hide Sidebar *</p>
      </div>
    </div>
  );
};

export default Sidebar;
