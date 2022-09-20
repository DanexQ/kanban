import React, { useState } from "react";

const CreateTaskForm = ({ options }) => {
  const [formData, setFormData] = useState({
    tableId: "",
    taskTitle: "",
    subtasks: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <form className="create-task__form">
      <label htmlFor="tableId">Select table: </label>
      <select
        name="tableId"
        value={formData.tableId}
        onChange={(e) => handleChange(e)}
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
        onChange={(e) => handleChange(e)}
        className="form__input"
      />
    </form>
  );
};

export default CreateTaskForm;
