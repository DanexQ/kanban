import { nanoid } from "nanoid";

export const initialBoards = [];

export const BoardsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOARD":
      return [...state, action.payload];
    case "ADD_TABLE":
      return state.map((board) => {
        return board.id === action.payload.boardId
          ? {
              ...board,
              tables: [
                ...board.tables,
                { id: nanoid(), ...action.payload.table },
              ],
            }
          : board;
      });
    default:
      console.log("DEFALT");
  }
};
