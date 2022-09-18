import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "../../assets/styles/BoardBar.scss";
import BoardBarSettings from "./BoardBarSettings";
import BoardBarForm from "./BoardBarForm";

const BoardBar = () => {
  const { currentBoard } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
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
      <button className="board-bar__button">+ Add New Task</button>
      <div
        className="board-bar__menu"
        onClick={() => setShowModal((prevValue) => !prevValue)}
      >
        <button></button>
        {showModal && <BoardBarSettings setShowInput={setShowInput} />}
      </div>{" "}
      {/* idk how to name this element button or div*/}
    </div>
  );
};

export default BoardBar;
