import React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../styles/Sidebar.scss";
import CreateBoardForm from "./CreateBoardForm";
import BoardItem from "./BoardItem";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Sidebar = () => {
  // CHANGE TO GET LOCALSTORAGE AT THE BEGINING
  const { showForm, setShowForm, boards } = useContext(DataContext);
  const elements = boards.map((board) => (
    <BoardItem key={board.id} board={board} />
  ));
  console.log("sidebar");

  return (
    <div className="sidebar dark ">
      <div className="logo">
        <div className="logo__rectangle"></div>
        <h1 className="logo__title">kanban</h1>
      </div>

      <div className="sidebar__menu">
        <p className="sidebar__all">All boards (2*)</p>
        <div className="sidebar__boards">
          {elements}
          {showForm && <CreateBoardForm />}
        </div>
        <div
          className="sidebar__create"
          onClick={() => setShowForm((prev) => !prev)}
        >
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

/* <div className="sidebar__board  active">
<DashboardIcon className="sidebar__icon" />{" "}
<p className="sidebar__board-title">Example 1 *</p>
</div> */
