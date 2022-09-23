import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import CreateTaskForm from "./CreateTaskForm";
import "../../assets/styles/CreateTaskForm.scss";
import ClearIcon from "@mui/icons-material/Clear";
import "../../assets/styles/SubtaskPreview.scss";

const CreateTask = ({ setShowTaskCreator }) => {
  const { currentBoard, tables } = useContext(DataContext);

  const tablesFromCurrent = tables.filter(
    (table) => table.boardId === currentBoard.id
  );

  const options = tablesFromCurrent.map((table) => (
    <option value={table.id} key={table.id}>
      {table.name}
    </option>
  ));

  return (
    <>
      <div
        className="modal-background"
        onClick={() => setShowTaskCreator((prevVal) => !prevVal)}
      ></div>
      <div className="create-task">
        <button
          className="create-task__button"
          onClick={() => setShowTaskCreator((prevVal) => !prevVal)}
        >
          <ClearIcon className="create-task__icon" />
        </button>
        <h2 className="create-task__title">Task creator</h2>
        <CreateTaskForm
          options={options}
          setShowTaskCreator={setShowTaskCreator}
        />
      </div>
    </>
  );
};

export default CreateTask;
