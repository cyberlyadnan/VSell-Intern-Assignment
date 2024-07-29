import React from "react";
import { FooterLinks } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      {/* For Desktop Screen */}
      <footer className="hidden md:block bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-6 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">
                  VSell
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </Link>
                  </li>
                  <li>
                    <Link to="https://tailwindcss.com/" className="hover:underline">
                      Tailwind CSS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      to="https://github.com/cyberlyadnan/VSell-Intern-Assignment.git"
                      className="hover:underline "
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://my-portfolio-7c5de.web.app/"
                      className="hover:underline"
                    >
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="/" className="hover:underline">
                VSell™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link
                to="https://www.linkedin.com/in/adnanahmad9334/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <LinkedIn />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                to="https://github.com/cyberlyadnan"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <GitHubIcon />
                <span className="sr-only">Dribbble account</span>
              </Link>
              <Link
                to="https://www.instagram.com/cyberlyadnan/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <InstagramIcon />
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=100013233873188"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FacebookIcon />
                <span className="sr-only">Discord community</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>



      {/* For Mobile and Tablet Devices */}
      <footer className="flex justify-between md:hidden fixed bottom-0 w-full pt-2 pb-3 px-10 bg-white shadow-lg rounded-t-lg">
      {FooterLinks.map((link, index) => (
        <NavLink
          to={link.name === 'Explore' ? '/' : `/${link.name.toLowerCase()}`}
          key={index}
          className={({ isActive }) =>
            `text-center transition-colors ${isActive ? 'text-cyan-600' : 'hover:text-cyan-600'}`
          }
        >
          {link.icon}
          <p className="text-xs">{link.name}</p>
        </NavLink>
      ))}
    </footer>
    </>
  );
};

export default Footer;
