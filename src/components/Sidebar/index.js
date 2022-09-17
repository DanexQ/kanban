import React from "react";
import "../../assets/styles/Sidebar.scss";
import SidebarMenu from "./SidebarMenu";
import ThemeSwitch from "./ThemeSwitch";
import HideSidebar from "./HideSidebar";

const Sidebar = () => {
  // CHANGE TO GET LOCALSTORAGE AT THE BEGINING

  return (
    <div className="sidebar dark ">
      <div className="logo">
        <div className="logo__rectangle"></div>
        <h1 className="logo__title">
          <a href="/">kanban</a>
        </h1>
      </div>
      <SidebarMenu />
      <ThemeSwitch />
      <HideSidebar />
    </div>
  );
};

export default Sidebar;

/* <div className="sidebar__board  active">
<DashboardIcon className="sidebar__icon" />{" "}
<p className="sidebar__board-title">Example 1 *</p>
</div> */
