import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Board.scss";

const Board = () => {
  const { boardId } = useParams();
  console.log(boardId);

  return (
    <div className="board">
      <div className="board__container">
        <div className="board__features">
          <div className="board__color"></div>
          <p className="board__title">TODO (2)*</p>
        </div>
        <div className="board__tasks">
          <div className="board__task">
            <h3 className="board__task-title">Build UI</h3>
            <p className="board__task-subtasks">0 of 3 substasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
