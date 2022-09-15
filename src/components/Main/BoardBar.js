import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "../../assets/styles/BoardBar.scss";

const BoardBar = () => {
  const { currentBoard } = useContext(DataContext);
  return (
    <div className="board-bar">
      <h2 className="board-bar__title">{currentBoard?.name}</h2>
      <button className="board-bar__add">+ Add New Task</button>
      <button className="board-bar__menu">
        <div></div>
      </button>{" "}
      {/* idk how to name this element button or div*/}
    </div>
  );
};

export default BoardBar;
