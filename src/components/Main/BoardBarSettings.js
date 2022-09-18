// import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../assets/styles/BoardBar.scss";
import EditIcon from "@mui/icons-material/Edit";
import { BOARDS_TYPE } from "../../data/constans";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const BoardBarSettings = ({ setShowInput }) => {
  const navigate = useNavigate();
  const { dispatchBoards, currentBoard } = useContext(DataContext);
  return (
    <div className="board-bar__settings">
      <button
        className="board-bar__button"
        onClick={() => setShowInput((prevVal) => !prevVal)}
      >
        <EditIcon /> Change name
      </button>

      <button
        className="board-bar__button"
        onClick={() => {
          dispatchBoards({
            type: BOARDS_TYPE.DELETE_BOARD,
            payload: { boardId: currentBoard.id },
          });
          navigate("/");
        }}
      >
        <DeleteIcon /> Delete board
      </button>
    </div>
  );
};

export default BoardBarSettings;
