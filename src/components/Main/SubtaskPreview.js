import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "../../assets/styles/SubtaskPreview.scss";

const SubtaskPreview = ({ subtask }) => {
  return (
    <div className="subtask-preview">
      <p>{subtask.subtaskName.slice(0, 3)}...</p>
      <button className="subtask-preview__button">
        <ClearIcon className="subtask-preview__icon" />
      </button>
    </div>
  );
};

export default SubtaskPreview;
