import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { TABLES_TYPE } from "../../data/constans";

const CreateTableForm = ({ setShowForm }) => {
  const { boardId } = useParams();
  const { dispatchTables } = useContext(DataContext);
  const [newTableName, setNewTableName] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setNewTableName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTables({
      type: TABLES_TYPE.CREATE_TABLE,
      payload: { newTableName, boardId },
    });
    setNewTableName("");
    setShowForm(false);
  };

  const handleCancel = () => {
    setNewTableName("");
    setShowForm(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <input
        type="text"
        placeholder="Table name"
        value={newTableName}
        onChange={(e) => handleChange(e)}
        autoComplete="off"
        className="form__input form__input--table"
        required
      />
      <button
        type="button"
        className="form__button form__button--cancel"
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button className="form__button form__button--submit">
        Create table
      </button>
    </form>
  );
};

export default CreateTableForm;
