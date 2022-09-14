import BoardBar from "./BoardBar";
import React, { useContext, useEffect } from "react";
import "../../assets/styles/Main.scss";
import Board from "./Board";
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";

const Main = () => {
  const { state, setCurrentBoard } = useContext(DataContext);
  const { boardId } = useParams();

  useEffect(() => {
    console.log("useeffect");
    setCurrentBoard(state.filter((board) => board.id === boardId)[0]);
  }, [state, boardId]);
  return (
    <main className="main">
      <BoardBar />
      <Board />
    </main>
  );
};

export default Main;
