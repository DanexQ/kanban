import BoardBar from "./BoardBar";
import React from "react";
import "../styles/Main.scss";
import Board from "./Board";

const Main = () => {
  return (
    <main className="main">
      <BoardBar />
      <Board />
    </main>
  );
};

export default Main;
