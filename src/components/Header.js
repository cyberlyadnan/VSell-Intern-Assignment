import React from "react";
import { NavLinks } from "../utils/constants";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <>
      {/* Header for the desktop */}
      <div className="hidden md:flex justify-between items-center py-5 px-5 lg:px-16">
        <div>
          <h1 className="text-2xl font-bold">VSell</h1>
        </div>
        <div>
          <ul className="flex gap-4">
            {NavLinks.map((LinkName, index) => (
              <li key={index} className="cursor-pointer text-xl font-semibold hover:text-blue-800">
                {/* <Link to={`/${LinkName}`} > */}
                {LinkName}
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Header for the mobile */}
      <div className="flex justify-between items-center py-4 px-5 sm:px-7 md:hidden bg-white shadow-md">
      <h1 className="text-2xl font-bold">VSell</h1>
      <div className="hidden md:flex gap-5">
        {/* <Link to="/shop" className="text-gray-700 hover:text-cyan-600">Shop</Link>
        <Link to="/explore" className="text-gray-700 hover:text-cyan-600">Explore</Link>
        <Link to="/cart" className="text-gray-700 hover:text-cyan-600">Cart</Link>
        <Link to="/favourite" className="text-gray-700 hover:text-cyan-600">Favourite</Link>
        <Link to="/account" className="text-gray-700 hover:text-cyan-600">Account</Link> */}
        {NavLinks.map((link,index)=><div key={index} className="text-gray-700 hover:text-cyan-600">{link}</div>)}
      </div>
      <div className="md:hidden">
        <MenuIcon fontSize="large" />
      </div>
      </div>
    </>
  );
};

export default Header;
