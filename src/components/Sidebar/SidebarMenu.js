import React, { useContext, useState } from "react";
import BoardsList from "./BoardsList";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { DataContext } from "../../context/DataContext";

const SidebarMenu = () => {
  const { state } = useContext(DataContext);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="sidebar__menu">
      <p className="sidebar__all">All boards ({state.length})</p>
      <BoardsList showForm={showForm} />
      <button
        className="sidebar__create"
        onClick={() => setShowForm((prev) => !prev)}
      >
        <DashboardCustomizeIcon className="sidebar__icon" /> Create new board
      </button>
    </div>
  );
};

export default SidebarMenu;
