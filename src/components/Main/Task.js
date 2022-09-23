import React from "react";

const Task = ({ task }) => {
  const subtasksCount = task.subtasks?.length;

  return (
    <div className="board__task" draggable>
      <h3 className="board__task-title">{task.taskTitle}</h3>

      <p className="board__task-subtasks">
        {subtasksCount ? `0 of ${subtasksCount} substasks` : "No subtasks"}
      </p>
    </div>
  );
};

export default Task;
