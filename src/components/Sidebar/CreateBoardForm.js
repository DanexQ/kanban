import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "../../assets/styles/Forms.scss";

const CreateBoardForm = () => {
  const { newBoard } = useContext(DataContext);
  const [newBoardName, setNewBoardName] = useState("");

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNewBoardName("");
          newBoard(newBoardName);
        }}
      >
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

export default CreateBoardForm;
