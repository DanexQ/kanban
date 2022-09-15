import BoardBar from "./BoardBar";
import "../../assets/styles/Main.scss";
import Board from "./Board";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { useParams } from "react-router-dom";
import { BOARDS_TYPE } from "../../data/constans";

const Main = () => {
  const { boards, dispatchBoards } = useContext(DataContext);
  const { boardId } = useParams();

  useEffect(() => {
    const currentBoard = boards.filter((board) => board.id === boardId)[0];
    return dispatchBoards({
      type: BOARDS_TYPE.NEW_CURRENT,
      payload: currentBoard,
    }); // eslint-disable-next-line
  }, [boardId]);

  return (
    <main className="main">
      <BoardBar />
      <Board />
    </main>
  );
};

export default Main;
