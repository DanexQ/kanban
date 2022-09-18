import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { BOARDS_TYPE } from "../../data/constans";

const BoardBarForm = ({ setShowInput, inputEl }) => {
  const { currentBoard, dispatchBoards } = useContext(DataContext);
  const [newName, setNewName] = useState(currentBoard.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchBoards({
      type: BOARDS_TYPE.CHANGE_NAME,
      payload: {
        boardId: currentBoard.id,
        newName,
      },
    });

    setShowInput((prevValue) => !prevValue);
  };

  useEffect(() => {
    inputEl.current.focus();
    // eslint-disable-next-line
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <input
        ref={inputEl}
        className="form__input"
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        onBlur={(e) => handleSubmit(e)}
      />
    </form>
  );
};

export default BoardBarForm;
