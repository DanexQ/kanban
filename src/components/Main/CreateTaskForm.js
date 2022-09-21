import React, { useState } from "react";
import SubtaskPreview from "./SubtaskPreview";

const CreateTaskForm = ({ options }) => {
  const [subtasksData, setSubtasksData] = useState({
    allSubtasks: [],
    newSubtask: { subtaskName: "", subtaskCompleted: false },
  });

  const [formData, setFormData] = useState({
    tableId: "",
    taskTitle: "",
    wantSubtasks: false,
  });

  const subtasksPreview = subtasksData.allSubtasks.length
    ? subtasksData.allSubtasks.map((subtask) => (
        <SubtaskPreview subtask={subtask} />
      ))
    : "No subtasks yet";

  const handleChangeFormData = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "isSubtask" ? checked : value,
    }));
  };

  const handleChangeSubtasks = (e) => {
    const { name, value, checked } = e.target;
    setSubtasksData((prevData) => ({
      ...prevData,
      newSubtask: {
        ...prevData.newSubtask,
        [name]: name === "subtaskCompleted" ? checked : value,
      },
    }));
  };

  const addAnotherSubtask = () => {
    setSubtasksData((prevData) => ({
      allSubtasks: [...prevData.allSubtasks, prevData.newSubtask],
      newSubtask: { subtaskName: "", subtaskCompleted: false },
    }));
  };

  console.log(subtasksData);

  return (
    <form className="create-task__form">
      <label htmlFor="tableId">Select table: </label>
      <select
        name="tableId"
        value={formData.tableId}
        onChange={(e) => handleChangeFormData(e)}
        placeholder="Select Table"
        className="form__input"
      >
        {options}
      </select>
      <label htmlFor="taskTitle">Task title: </label>
      <input
        type="text"
        value={formData.taskTitle}
        name="taskTitle"
        placeholder="Name"
        onChange={(e) => handleChangeFormData(e)}
        className="form__input"
      />
      <label htmlFor="isSubtask">Do you want subtasks?</label>
      <input
        type="checkbox"
        name="wantSubtasks"
        checked={formData.wantSubtasks}
        onChange={(e) => handleChangeFormData(e)}
        className="form__input--checkbox"
      />
      {formData.wantSubtasks && (
        <>
          <p>Your subtasks</p>
          <div className="create-task__subtasks-preview">{subtasksPreview}</div>
          <label htmlFor="subtaskName">Subtask name:</label>
          <input
            type="text"
            name="subtaskName"
            value={subtasksData.newSubtask.subtaskName}
            onChange={(e) => handleChangeSubtasks(e)}
            className="form__input"
          />
          <label htmlFor="subtaskCompleted">Subtask's completed:</label>
          <input
            type="checkbox"
            name="subtaskCompleted"
            checked={subtasksData.newSubtask.subtaskCompleted}
            onChange={(e) => handleChangeSubtasks(e)}
            className="form__input--checkbox"
          />
          <button
            type="button"
            className="form__button"
            onClick={addAnotherSubtask}
          >
            Another subtask
          </button>
        </>
      )}
    </form>
  );
};

export default CreateTaskForm;
