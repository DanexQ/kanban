import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "../../assets/styles/Forms.scss";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { BOARDS_TYPE } from "../../data/constans";

const CreateBoardForm = ({ setShowForm }) => {
  const { dispatchBoards } = useContext(DataContext);
  const navigate = useNavigate();
  const [newBoardName, setNewBoardName] = useState("New Board");

  const handleSubmit = (e) => {
    e.preventDefault();
    const board = { id: nanoid(), name: newBoardName, tables: [] };
    navigate(`/${board.id}`);

    dispatchBoards({
      type: BOARDS_TYPE.CREATE_BOARD,
      payload: board,
    });
    // saveBoards();
    // reset form and hide it
    setNewBoardName("");
    setShowForm(false);
  };

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="boardName"
          placeholder="New Board"
          className="form__input"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default CreateBoardForm;
