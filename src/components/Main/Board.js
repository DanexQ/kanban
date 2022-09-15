import React, { useContext, useState } from "react";
import "../../assets/styles/Board.scss";
import { DataContext } from "../../context/DataContext";
import CreateTableForm from "./CreateTableForm";
import Table from "./Table";

const Board = () => {
  const { currentBoard } = useContext(DataContext);
  const { tables } = useContext(DataContext);
  const [showForm, setShowForm] = useState(false);

  const tablesElements = tables
    .filter((table) => table.boardId === currentBoard.id)
    .map((table) => <Table key={table.id} table={table} />);

  return (
    <div className="board">
      {tablesElements}
      {showForm && <CreateTableForm setShowForm={setShowForm} />}
      {!showForm && (
        <button
          className="board__add-table"
          onClick={() => setShowForm((prevValue) => !prevValue)}
        >
          + Add New Table
        </button>
      )}
    </div>
  );
};

export default Board;
