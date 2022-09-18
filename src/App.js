import Main from "./components/Main/Main";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useContext, useEffect } from "react";
import { DataContext } from "./context/DataContext";

const App = () => {
  const { stateBoards, dispatchBoards } = useContext(DataContext);

  useEffect(() => {
    const data = JSON.stringify(stateBoards);
    localStorage.setItem("boards", data);
    // eslint-disable-next-line
  }, [stateBoards.boards, stateBoards.currentBoard, dispatchBoards]);

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
