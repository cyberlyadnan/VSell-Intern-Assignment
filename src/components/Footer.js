import React from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Footer = () => {
  return ( 
  <>
    {/* for desktop screen */}
    

    {/* // For Mobile and Tablet Devices */}
    <div className="flex justify-between md:hidden fixed bottom-0 w-full pt-2 pb-3 px-10 bg-white shadow-lg rounded-t-lg">
      <div className="text-center hover:text-cyan-600 transition-colors">
        <StorefrontIcon  />
        <p className="text-xs">Shop</p>
      </div>
      <div className="text-center hover:text-cyan-600 transition-colors">
        <SearchIcon  />
        <p className="text-xs">Search</p>
      </div>
      <div className="text-center hover:text-cyan-600 transition-colors">
        <ShoppingCartIcon  />
        <p className="text-xs">Cart</p>
      </div>
      <div className="text-center hover:text-cyan-600 transition-colors">
        <FavoriteIcon  />
        <p className="text-xs">Favorite</p>
      </div>
      <div className="text-center hover:text-cyan-600 transition-colors">
        <AccountCircleIcon />
        <p className="text-xs">Account</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
