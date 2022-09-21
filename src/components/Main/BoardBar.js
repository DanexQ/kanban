import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "../../assets/styles/BoardBar.scss";
import BoardBarSettings from "./BoardBarSettings";
import BoardBarForm from "./BoardBarForm";
import CreateTask from "./CreateTask";

const BoardBar = () => {
  const { currentBoard } = useContext(DataContext);
  const [showSettings, setShowSettings] = useState(false);
  const [showTaskCreator, setShowTaskCreator] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const inputEl = useRef(null);

  return (
    <div className="board-bar">
      <h2 className="board-bar__title">
        {!showInput ? (
          currentBoard?.name
        ) : (
          <BoardBarForm setShowInput={setShowInput} inputEl={inputEl} />
        )}{" "}
      </h2>
      <button
        className="board-bar__button"
        onClick={() => setShowTaskCreator((prevVal) => !prevVal)}
      >
        + Add New Task
      </button>
      {showTaskCreator && (
        <CreateTask setShowTaskCreator={setShowTaskCreator} />
      )}
      <div
        className="board-bar__menu"
        onClick={() => setShowSettings((prevValue) => !prevValue)}
      >
        <button></button>
        {showSettings && <BoardBarSettings setShowInput={setShowInput} />}
      </div>{" "}
      {/* idk how to name this element button or div*/}
    </div>
  );
};

export default BoardBar;
