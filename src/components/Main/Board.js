import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/styles/Board.scss";
import { DataContext } from "../../context/DataContext";
import Table from "./Table";

const Board = () => {
  const { boardId } = useParams();

  const { addTable, currentBoard } = useContext(DataContext);
  const [newTable, setNewTable] = useState({
    name: "",
    tasks: [],
  });

  const tables = currentBoard?.tables.length
    ? currentBoard?.tables.map((table) => (
        <Table key={table.id} table={table} />
      ))
    : "";

  const handleChange = (e) => {
    const { value } = e.target;
    setNewTable((prevTable) => ({
      ...prevTable,
      name: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTable({
      name: "",
      tasks: [],
    });
    addTable(newTable, boardId);
  };

  return (
    <div className="board">
      {tables}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Table name"
          value={newTable.name}
          onChange={(e) => handleChange(e)}
        />
      </form>
      <button className="board__add-table">+ Add New Table</button>
    </div>
  );
};

export default Board;
