import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/SIdebar/Sidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
