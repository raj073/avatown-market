import React from "react";
import logo from "../../image/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-header bg-no-repeat bg-cover h-[57px]">
      <img className="w-48 h-12" src={logo} alt="logo" />
      <h1 className="text-xl text-white font-bold underline underline-offset-4">
        Go to Marketpage
      </h1>
      <div className="flex items-center">
        {/* Search Input Start*/}
        <div className="relative text-gray-800">
          <input
            type="search"
            name="search"
            className="bg-white w-[411px] h-[29px] rounded-md text-sm focus:outline-none"
          />
          <button className="absolute right-0 top-0 mt-1 mr-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
        {/* Search Input End */}
        <ul className="flex items-center space-x-6 mx-5">
          <li
            className="font-semibold flex items-center justify-center text-white bg-black h-[40px] 
          p-2 mt-[6px] text-center rounded-md"
          >
            <IoMdNotificationsOutline
              className="text-center"
              size={25}
            ></IoMdNotificationsOutline>
            <span className="-mr-[18px] -mt-10">
              <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold leading-4 bg-red-500 text-white font-primary">
                3
              </div>
            </span>
          </li>
          <li
            className="font-semibold flex items-center justify-center text-white bg-black h-[40px] 
          p-2 mt-[6px] text-center rounded-md"
          >
            <BsCart3 className="text-center" size={25}></BsCart3>
            <span className="-mr-[18px] -mt-10">
              <div className="inline-flex items-center px-[7px] py-0.5 rounded-full text-xs font-semibold leading-4 bg-red-500 text-white font-primary">
                1
              </div>
            </span>
          </li>
          <li
            className="font-semibold flex items-center justify-center text-black bg-white h-[40px] 
          p-2 mt-[6px] text-center rounded-md"
          >
            <FaUserTie className="text-center" size={25}></FaUserTie>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
