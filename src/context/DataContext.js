import { createContext, useEffect, useReducer, useState } from "react";
import { nanoid } from "nanoid";
import { BoardsReducer, initialBoards } from "../reducers/BoardsReducer";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BoardsReducer, initialBoards);
  const [boards, setBoards] = useState(state);
  const [currentBoard, setCurrentBoard] = useState();
  const navigate = useNavigate();

  const newBoard = (boardName) => {
    const board = { id: nanoid(), name: boardName, tables: [] };
    setCurrentBoard(board);
    navigate(`/${board.id}`);
    return dispatch({
      type: "ADD_BOARD",
      payload: board,
    });
  };

  const addTable = (table, boardId) =>
    dispatch({ type: "ADD_TABLE", payload: { table, boardId } });

  return (
    <DataContext.Provider
      value={{
        state,
        newBoard,
        boards,
        setBoards,
        setCurrentBoard,
        currentBoard,
        addTable,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
