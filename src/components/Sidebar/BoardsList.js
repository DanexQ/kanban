import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import BoardItem from "./BoardItem";
import CreateBoardForm from "./CreateBoardForm";
import DashboardIcon from "@mui/icons-material/Dashboard";

const BoardsList = ({ showForm, setShowForm }) => {
  const { boards } = useContext(DataContext);

  const elements = boards.map((board) => (
    <BoardItem key={board.id} board={board} />
  ));

  return (
    <div className="sidebar__boards">
      {elements}
      {showForm && (
        <div className="form__container">
          <DashboardIcon className="sidebar__icon" />
          <CreateBoardForm setShowForm={setShowForm} />
        </div>
      )}
    </div>
  );
};

export default BoardsList;
