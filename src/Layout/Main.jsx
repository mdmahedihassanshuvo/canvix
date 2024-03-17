import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import "./Main.css";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
