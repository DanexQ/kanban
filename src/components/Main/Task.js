import React from "react";

const Task = () => {
  return (
    <div className="board__task" draggable>
      <h3 className="board__task-title">Build UI</h3>
      <p className="board__task-subtasks">0 of 3 substasks</p>
    </div>
  );
};

export default Task;
