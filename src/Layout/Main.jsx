import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
