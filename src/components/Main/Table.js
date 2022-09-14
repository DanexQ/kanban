import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
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
      <Task />
    </div>
  );
};

export default Table;
