import React, { useState } from "react";
import { NavLinks } from "../utils/constants";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header for the desktop */}
      <div className="hidden md:flex justify-between items-center py-5 px-5 lg:px-16 bg-white shadow-md">
        <div>
          <Link to="/"><h1 className="text-2xl font-bold text-gray-800">VSell</h1></Link>
        </div>
        <div>
          <ul className="flex gap-4">
            {NavLinks.map((LinkName, index) => (
              <li key={index} className="cursor-pointer text-xl font-semibold text-gray-700 hover:text-cyan-600 transition duration-300">
                <Link to={`/${LinkName}`} >
                  {LinkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Header for the mobile */}
      <div className="flex justify-between items-center py-4 px-5 sm:px-7 md:hidden bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">VSell</h1>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>
      </div>

      {/* Dropdown Menu for mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-10">
          <ul className="flex flex-col gap-4 py-4 px-6">
            {NavLinks.map((LinkName, index) => (
              <li key={index} className="cursor-pointer text-xl font-semibold text-gray-700 hover:text-cyan-600 transition duration-300 hover:bg-gray-100 p-2 rounded-md">
                <Link to={`/${LinkName}`} onClick={() => setIsMenuOpen(false)}>
                  {LinkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
