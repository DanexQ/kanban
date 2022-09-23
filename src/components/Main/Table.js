import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Task from "./Task";

const Table = ({ table }) => {
  const { tasks } = useContext(DataContext);

  const tasksElements = tasks
    .filter((task) => task.tableId === table.id)
    .map((task) => <Task task={task} key={task.id} />);

  return (
    <div className="board__container">
      <div className="board__features">
        <div className="board__color"></div>
        <p className="board__title">
          {table.name} ({tasksElements.length})
        </p>
      </div>
      <div className="board__tasks">{tasksElements}</div>
    </div>
  );
};

export default Table;
