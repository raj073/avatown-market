import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/SIdebar/Sidebar";

const Main = () => {
  return (
    <div>
      {/* <Header></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer></Footer> */}

      <div className="flex">
        <div className="flex-1 flex flex-col">
          <header>
            <Header></Header>
          </header>
          <div className="flex">
            <nav className="flex w-64 h-[775px]">
              <div className="w-full flex mx-auto">
                <div className="">
                  <Sidebar></Sidebar>
                </div>
              </div>
            </nav>
            <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
              <div className="flex w-full mx-auto px-6 py-6">
                <div className="flex flex-col w-full h-full text-gray-900">
                  <div className="w-full mx-auto">
                    <Outlet></Outlet>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
