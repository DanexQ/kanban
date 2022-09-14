import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import BoardItem from "./BoardItem";
import CreateBoardForm from "./CreateBoardForm";

const BoardsList = ({ showForm }) => {
  const { state } = useContext(DataContext);

  const elements = state.map((board) => (
    <BoardItem key={board.id} board={board} />
  ));

  return (
    <div className="sidebar__boards">
      {elements}
      {showForm && <CreateBoardForm />}
    </div>
  );
};

export default BoardsList;
