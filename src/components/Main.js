import BoardBar from "./BoardBar";
import React, { useContext, useEffect } from "react";
import "../styles/Main.scss";
import Board from "./Board";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

const Main = () => {
  const { boardId } = useParams();
  const { setCurrentBoard, boards } = useContext(DataContext);

  useEffect(
    () => {
      setCurrentBoard(boards.filter((board) => board.id === boardId)[0]);
    }, // eslint-disable-next-line
    [boardId]
  );

  return (
    <main className="main">
      <BoardBar />
      <Board />
    </main>
  );
};

export default Main;
