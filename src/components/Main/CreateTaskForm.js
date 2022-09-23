import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SubtaskPreview from "./SubtaskPreview";

const CreateTaskForm = ({ options, setShowTaskCreator }) => {
  const { dispatchTasks } = useContext(DataContext);
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
    ? subtasksData.allSubtasks.map((subtask, i) => (
        <SubtaskPreview subtask={subtask} key={i} />
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

  const submitSubtask = () => {
    if (!subtasksData.newSubtask.subtaskName.length) return;
    setSubtasksData((prevData) => ({
      allSubtasks: [...prevData.allSubtasks, prevData.newSubtask],
      newSubtask: { subtaskName: "", subtaskCompleted: false },
    }));
  };

  // todo
  const submitTask = (e) => {
    e.preventDefault();
    const task = { tableId: formData.tableId, taskTitle: formData.taskTitle };
    if (formData.wantSubtasks) task.subtasks = subtasksData.allSubtasks;
    dispatchTasks({ type: "ADD_TASK", payload: task });
    setShowTaskCreator((prevVal) => !prevVal);
  };

  return (
    <form className="create-task__form" onSubmit={(e) => submitTask(e)}>
      <label htmlFor="tableId" style={{ gridColumn: "1/2" }}>
        Select table:{" "}
      </label>
      <select
        name="tableId"
        value={formData.tableId}
        onChange={(e) => handleChangeFormData(e)}
        placeholder="Select Table"
        className="form__input"
        required
      >
        <option value="">SELECT TABLE</option>
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
        onClick={submitSubtask}
        className="form__button--subtask"
        disabled={!subtaskReady || !formData.wantSubtasks}
      >
        Submit subtask
      </button>
      <button
        className="form__button--task"
        disabled={!formReady}
        onClick={(e) => submitTask(e)}
      >
        Create new task
      </button>
    </form>
  );
};

export default CreateTaskForm;
