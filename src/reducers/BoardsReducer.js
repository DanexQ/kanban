import { BOARDS_TYPE } from "../data/constans";

const getLocal = () => {
  const data = JSON.parse(localStorage.getItem("boards"));
  console.log("SET", data);

  return data;
};

export const initialBoards = getLocal() ?? {
  boards: [],
  currentBoard: {},
};

export const BoardsReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case BOARDS_TYPE.CREATE_BOARD:
      newState = {
        boards: [...state.boards, action.payload],
        currentBoard: action.payload,
      };
      localStorage.setItem("boards", JSON.stringify(newState));
      return newState;
    case BOARDS_TYPE.NEW_CURRENT:
      return {
        ...state,
        currentBoard: action.payload,
      };
    case BOARDS_TYPE.CHANGE_NAME:
      const [boardEdited] = state.boards.filter(
        (board) => board.id === action.payload.boardId
      );
      boardEdited.name = action.payload.newName;
      newState = state.boards.filter(
        (board) => board.id !== action.payload.boardId
      );
      return { ...state, boards: [...newState, boardEdited] };
    case BOARDS_TYPE.DELETE_BOARD:
      console.log("delete");
      newState = state.boards.filter(
        (board) => board.id !== action.payload.boardId
      );
      return { boards: [...newState], currentBoard: {} };
    default:
      console.log("DEFALT");
  }
};
