import Main from "./components/Main/Main";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useContext, useEffect } from "react";
import { DataContext } from "./context/DataContext";
import { BOARDS_TYPE } from "./data/constans";

const App = () => {
  const { stateBoards, dispatchBoards } = useContext(DataContext);

  useEffect(() => {
    stateBoards && localStorage.setItem("boards", JSON.stringify(stateBoards));
  }, [stateBoards]);

  useEffect(() => {
    dispatchBoards({ type: BOARDS_TYPE.GET_BOARDS });
  }, [dispatchBoards]);

  return (
    <div className="app dark">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} path="/" />
          <Route index element={<Main />} path=":boardId" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
