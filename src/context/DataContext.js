import { createContext, useReducer } from "react";
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
