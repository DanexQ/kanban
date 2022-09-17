import { createContext, useEffect, useReducer } from "react";
import { BOARDS_TYPE } from "../data/constans";
import { BoardsReducer, initialBoards } from "../reducers/BoardsReducer";
import { initialTables, TablesReducer } from "../reducers/TablesReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [stateBoards, dispatchBoards] = useReducer(
    BoardsReducer,
    initialBoards
  );

  const [stateTables, dispatchTables] = useReducer(
    TablesReducer,
    initialTables
  );

  return (
    <DataContext.Provider
      value={{
        stateBoards,
        currentBoard: stateBoards.currentBoard,
        boards: stateBoards.boards,
        dispatchBoards,
        tables: stateTables,
        dispatchTables,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
