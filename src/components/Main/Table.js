import React from "react";
import Task from "./Task";

const Table = ({ table }) => {
  return (
    <div className="board__container">
      <div className="board__features">
        <div className="board__color"></div>
        <p className="board__title">
          {table.name} ({table.tasks.length})
        </p>
      </div>
      <div className="board__tasks">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Table;
