import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import React from "react";
import NavLinks from "./NavLinks";
import Login from "../pages/Login";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaHospitalSymbol } from "react-icons/fa";

const Navbar = ({ toggle, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const toggleIcon = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full z-50 sticky top-0 transition-all duration-300">
        <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-7xl 
                        bg-white/80 backdrop-blur-md shadow-md dark:bg-[#1f1f1f]/90 
                        dark:text-white text-black rounded-2xl mt-2">
          <div className="text-xl font-bold text-red-500">OrganVital</div>


          <div className="hidden md:flex space-x-6 items-center font-medium text-lg">
            <div className="flex space-x-4">
              <NavLinks />
            </div>
            <div className="flex ml-4 space-x-5">
              <button
                onClick={() => setisLogin(true)}
                className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition"
              >
                Login
              </button>
              <Link to="/center/login">
                <button className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium shadow-sm">
                  <FaHospitalSymbol className="text-lg" />
                  Center
                </button>
              </Link>
              <button
                type="button"
                onClick={toggle}
                className="text-gray-700 dark:text-gray-300 hover:scale-105 transition"
              >
                {darkMode ? (
                  <BsSun className="text-yellow-500 text-2xl" />
                ) : (
                  <MdDarkMode className="text-3xl text-black" />
                )}
              </button>
            </div>
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={toggle}
              className="text-gray-700 dark:text-gray-300 pr-3.5 text-xl"
            >
              {darkMode ? (
                <BsSun className="text-yellow-500 text-2xl" />
              ) : (
                <MdDarkMode className="text-3xl text-black" />
              )}
            </button>
            <button onClick={toggleIcon} className="text-2xl">
              {!isOpen ? <GiHamburgerMenu /> : <IoCloseSharp />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-[#1f1f1f]/95 px-6 py-4 rounded-lg shadow-md mt-1 mx-3 flex flex-col space-y-4 transition-all">
          <NavLinks isMobile={true} />
          <button
            onClick={() => {
              setisLogin(true);
              setIsOpen(false);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Login
          </button>
          <Link to="/center/login">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
            >
              <FaHospitalSymbol className="text-lg" />
              Center
            </button>
          </Link>
        </div>
      )}

      {isLogin && <Login onClose={() => setisLogin(false)} />}
    </>
  );
};

export default Navbar;
