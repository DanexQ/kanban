import { nanoid } from "nanoid";
import { TABLES_TYPE } from "../data/constans";

const getLocal = () => {
  const data = JSON.parse(localStorage.getItem("tables"));
  return data;
};

export const initialTables = getLocal() ?? [];

export const TablesReducer = (state, action) => {
  console.log(initialTables);
  switch (action.type) {
    case TABLES_TYPE.CREATE_TABLE:
      return [
        ...state,
        {
          id: nanoid(),
          boardId: action.payload.boardId,
          name: action.payload.newTableName,
          tasks: [],
        },
      ];
    default:
      throw new Error();
  }
};
