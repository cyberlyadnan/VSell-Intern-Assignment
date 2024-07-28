import React from "react";
import { FooterLinks } from "../utils/constants";
import {Link} from "react-router-dom"


const Footer = () => {
  return ( 
  <>
    {/* for desktop screen */}
    

    {/* // For Mobile and Tablet Devices */}
    <div className="flex justify-between md:hidden fixed bottom-0 w-full pt-2 pb-3 px-10 bg-white shadow-lg rounded-t-lg">
        {FooterLinks.map((link, index) => (
          <Link to={`/${link.name}`} key={index} className="text-center hover:text-cyan-600 transition-colors">
            {link.icon}
            <p className="text-xs">{link.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Footer;
