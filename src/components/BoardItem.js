import DashboardIcon from "@mui/icons-material/Dashboard";
import React from "react";
import { useNavigate } from "react-router-dom";

const BoardItem = ({ board }) => {
  const navigate = useNavigate();
  return (
    <div className="sidebar__board" onClick={() => navigate(`/${board.id}`)}>
      <DashboardIcon className="sidebar__icon" />{" "}
      <p className="sidebar__board-title">{board.name}</p>
    </div>
  );
};

export default BoardItem;
