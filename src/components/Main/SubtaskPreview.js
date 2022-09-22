import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "../../assets/styles/SubtaskPreview.scss";

const SubtaskPreview = ({ subtask }) => {
  return (
    <div className="subtask-preview">
      <abbr title={subtask.subtaskName}>
        <p>
          {subtask.subtaskName.length <= 10
            ? subtask.subtaskName
            : `${subtask.subtaskName.slice(0, 10)}...`}
        </p>
      </abbr>
      <button type="button" className="subtask-preview__button">
        <ClearIcon className="subtask-preview__icon" />
      </button>
    </div>
  );
};

export default SubtaskPreview;
