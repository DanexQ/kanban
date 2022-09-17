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
  switch (action.type) {
    case BOARDS_TYPE.CREATE_BOARD:
      const newState = {
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
    default:
      console.log("DEFALT");
  }
};
