import { BOARDS_TYPE } from "../data/constans";

export const initialBoards = { boards: [], currentBoard: {} };

export const BoardsReducer = (state, action) => {
  switch (action.type) {
    case BOARDS_TYPE.CREATE_BOARD:
      const newState = {
        boards: [...state.boards, action.payload],
        currentBoard: action.payload,
      };
      return newState;
    case BOARDS_TYPE.NEW_CURRENT:
      return {
        ...state,
        currentBoard: action.payload,
      };
    case BOARDS_TYPE.SAVE_BOARDS:
      localStorage.setItem("boards", JSON.stringify(state));
      break;
    case BOARDS_TYPE.GET_BOARDS:
      const boards = JSON.parse(localStorage.getItem("boards"));
      return {
        boards: boards.boards,
        currentBoard: {},
      };
    default:
      console.log("DEFALT");
  }
};
