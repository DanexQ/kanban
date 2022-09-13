import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "../styles/Forms.scss";

const CreateBoard = () => {
  const { handleSubmit } = useContext(DataContext);
  const [newBoardName, setNewBoardName] = useState("");

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e, newBoardName)}>
        <input
          type="text"
          name="boardName"
          placeholder="Board name..."
          className="form__input"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateBoard;
