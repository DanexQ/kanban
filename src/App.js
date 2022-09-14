import Main from "./components/Main/Main";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <DataProvider>
      <div className="app dark">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} path="/" />
            <Route index element={<Main />} path=":boardId" />
          </Route>
        </Routes>
      </div>
    </DataProvider>
  );
};

export default App;
