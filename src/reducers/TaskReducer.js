import { nanoid } from "nanoid";

export const initialTasks = [];

export const TasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("ADD_TASK", action.payload);
      return [
        ...state,
        {
          id: nanoid(),
          tableId: action.payload.tableId,
          taskTitle: action.payload.taskTitle,
          subtasks: action.payload.subtasks,
        },
      ];
    default:
      throw new Error("TASKS REDUCER ERROR");
  }
};
