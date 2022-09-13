import { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentBoard, setCurrentBoard] = useState({});

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setBoards((prevData) => [
      ...prevData,
      {
        id: nanoid(),
        name: value,
        tables: [
          {
            id: nanoid(),
            name: "table 1",
            tasks: [
              {
                id: nanoid(),
                name: "task 1",
                subtasks: [{ name: "subtask 1", completed: false }],
              },
            ],
          },
        ],
      },
    ]);
    setShowForm((prevValue) => !prevValue);
  };

  return (
    <DataContext.Provider
      value={{
        handleSubmit,
        boards,
        setBoards,
        showForm,
        setShowForm,
        setCurrentBoard,
        currentBoard,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
