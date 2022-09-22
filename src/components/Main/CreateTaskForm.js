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

  const formReady = formData.taskTitle && true;
  const subtaskReady = subtasksData.newSubtask.subtaskName && true;

  const handleChangeFormData = (event) => {
    const { name, value, checked } = event.target;
    console.log(checked);
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "wantSubtasks" ? checked : value,
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

  const SubmitSubtask = () => {
    if (!subtasksData.newSubtask.subtaskName.length) return;
    setSubtasksData((prevData) => ({
      allSubtasks: [...prevData.allSubtasks, prevData.newSubtask],
      newSubtask: { subtaskName: "", subtaskCompleted: false },
    }));
  };

  console.log(subtasksData);

  return (
    <form className="create-task__form">
      <label htmlFor="tableId" style={{ gridColumn: "1/2" }}>
        Select table:{" "}
      </label>
      <select
        name="tableId"
        value={formData.tableId}
        onChange={(e) => handleChangeFormData(e)}
        placeholder="Select Table"
        className="form__input"
      >
        {options}
      </select>
      <label htmlFor="taskTitle" style={{ gridColumn: "1/2", gridRow: "3/4" }}>
        Task title:{" "}
      </label>
      <input
        type="text"
        value={formData.taskTitle}
        name="taskTitle"
        placeholder="Name"
        onChange={(e) => handleChangeFormData(e)}
        className="form__input"
        style={{ gridColumn: "2/3", gridRow: "3/4" }}
        required
        autoComplete="off"
      />
      <label
        htmlFor="wantSubtasks"
        style={{ gridColumn: "1/2", gridRow: "2/3" }}
      >
        Want subtasks?
      </label>
      <input
        type="checkbox"
        name="wantSubtasks"
        checked={formData.wantSubtasks}
        onChange={(e) => handleChangeFormData(e)}
        className="form__input--checkbox"
        style={{ gridColumn: "2/3", gridRow: "2/3" }}
      />

      <p style={{ gridColumn: "1/2", gridRow: "4/5" }}>Your subtasks</p>
      <div className="create-task__subtasks-preview">{subtasksPreview}</div>
      <label
        htmlFor="subtaskName"
        className={`create-task__label ${
          !formData.wantSubtasks ? "create-task__label--disabled" : ""
        }`}
      >
        Subtask name:
      </label>
      <input
        type="text"
        name="subtaskName"
        value={subtasksData.newSubtask.subtaskName}
        onChange={(e) => handleChangeSubtasks(e)}
        className="form__input"
        disabled={!formData.wantSubtasks}
        autoComplete="off"
      />
      <label
        htmlFor="subtaskCompleted"
        className={`create-task__label ${
          !formData.wantSubtasks ? "create-task__label--disabled" : ""
        }`}
      >
        Subtask's completed:
      </label>
      <input
        type="checkbox"
        name="subtaskCompleted"
        checked={subtasksData.newSubtask.subtaskCompleted}
        onChange={(e) => handleChangeSubtasks(e)}
        className="form__input--checkbox"
        disabled={!formData.wantSubtasks}
      />
      <button
        type="button"
        onClick={SubmitSubtask}
        className="form__button--subtask"
        disabled={!subtaskReady || !formData.wantSubtasks}
      >
        Submit subtask
      </button>
      <button className="form__button--task" disabled={!formReady}>
        Create new task
      </button>
    </form>
  );
};

export default CreateTaskForm;
