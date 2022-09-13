import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from "react";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
