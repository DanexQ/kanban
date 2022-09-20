import { nanoid } from "nanoid";
import { TABLES_TYPE } from "../data/constans";

const getLocal = () => {
  const data = JSON.parse(localStorage.getItem("tables"));
  return data;
};

export const initialTables = getLocal() ?? [];

export const TablesReducer = (state, action) => {
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
    case TABLES_TYPE.CHANGE_NAME:
      // payload: {tableId, newTableName}
      const [tableToChange] = state.filter(
        (table) => table.id === action.payload.tableId
      );
      const newState = state.filter(
        (table) => table.id !== action.payload.tableId
      );
      tableToChange.name = action.payload.newTableName;
      return [...newState, tableToChange];
    default:
      throw new Error();
  }
};
