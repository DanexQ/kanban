import React, { useContext, useRef, useState } from "react";
import BoardsList from "./BoardsList";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { DataContext } from "../../context/DataContext";

const SidebarMenu = () => {
  const { boards } = useContext(DataContext);
  const [showForm, setShowForm] = useState(false);
  const inputEl = useRef(null);

  return (
    <div className="sidebar__menu">
      <p className="sidebar__all">All boards ({boards.length})</p>
      <BoardsList
        showForm={showForm}
        setShowForm={setShowForm}
        inputEl={inputEl}
      />

      <button
        className="sidebar__create"
        onClick={() => {
          setShowForm((prev) => !prev);
          inputEl.current.focus();
        }}
      >
        <DashboardCustomizeIcon className="sidebar__icon" />
        {!showForm ? "Create new board" : "Cancel"}
      </button>
    </div>
  );
};

export default SidebarMenu;
