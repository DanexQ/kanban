import DashboardIcon from "@mui/icons-material/Dashboard";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardItem = ({ board }) => {
  const navigate = useNavigate();
  const { boardId } = useParams();

  return (
    <div
      className={`sidebar__board ${boardId === board.id && "active"}`}
      onClick={() => navigate(`/${board.id}`)}
    >
      <DashboardIcon className="sidebar__icon" />{" "}
      <p className="sidebar__board-title" lang="en-GB-x-hixie">
        {board.name}
      </p>
    </div>
  );
};

export default BoardItem;
