import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import CreateTaskForm from "./CreateTaskForm";
import "../../assets/styles/CreateTaskForm.scss";

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

  // ALL TABLES FROM CURRENT BOARD NEEDED

  return (
    <>
      <div
        className="modal-background"
        onClick={(e) => setShowTaskCreator((prevVal) => !prevVal)}
      ></div>
      <div className="create-task">
        <h2 className="create-task__title">Task creator</h2>
        <CreateTaskForm options={options} />
      </div>
    </>
  );
};

// do której tablicy, czy subtaski mają być (jak tak do wyświetlić opcję dodawania ich)

export default CreateTask;
