import { createContext, useReducer } from "react";
import { BoardsReducer, initialBoards } from "../reducers/BoardsReducer";
import { initialTables, TablesReducer } from "../reducers/TablesReducer";
import { initialTasks, TasksReducer } from "../reducers/TaskReducer";

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

  const [stateTasks, dispatchTasks] = useReducer(TasksReducer, initialTasks);

  return (
    <DataContext.Provider
      value={{
        stateBoards,
        currentBoard: stateBoards.currentBoard,
        boards: stateBoards.boards,
        dispatchBoards,
        tables: stateTables,
        dispatchTables,
        tasks: stateTasks,
        dispatchTasks,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
