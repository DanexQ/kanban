import React from "react";
import "../styles/BoardBar.scss";

const BoardBar = () => {
  return (
    <div className="board-bar">
      <h2 className="board-bar__title">Platform Launch *</h2>
      <button className="board-bar__add">+ Add New Task</button>
      <button className="board-bar__menu">
        <div></div>
      </button>{" "}
      {/* idk how to name this element button or div*/}
    </div>
  );
};

export default BoardBar;
