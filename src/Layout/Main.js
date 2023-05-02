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

      <div class="flex">
        <div class="flex-1 flex flex-col">
          <header>
            <Header></Header>
          </header>
          <div class="flex">
            <nav class="flex w-64 h-[775px]">
              <div class="w-full flex mx-auto">
                <div class="">
                  <Sidebar></Sidebar>
                </div>
              </div>
            </nav>
            <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
              <div class="flex w-full mx-auto px-6 py-6">
                <div class="flex flex-col w-full h-full text-gray-900">
                  <div class="w-full mx-auto">
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
