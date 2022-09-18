import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "../../assets/styles/Forms.scss";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { BOARDS_TYPE } from "../../data/constans";

const CreateBoardForm = ({ setShowForm }) => {
  const { dispatchBoards } = useContext(DataContext);
  const navigate = useNavigate();
  const [newBoardName, setNewBoardName] = useState("New Board");
  const inputEl = useRef(null);

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

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={inputEl}
          type="text"
          name="boardName"
          placeholder="New Board"
          className="form__input"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          autoComplete="off"
          onBlur={() => setShowForm(false)}
        />
      </form>
    </div>
  );
};

export default CreateBoardForm;
