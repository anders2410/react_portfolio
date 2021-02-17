import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-gray-200">
      <div className="container mx-auto flex justify-between">
        <div className="py-3 px-3 my-6">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 my-4 text-gray-700 hover:text-yellow-200 text-4xl font-bold tracking-widest"
          >
            AndersHolt
          </NavLink>
        </div>
        <nav className="flex">
          <NavLink
            to="/posts"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center px-3 my-10 rounded font-bold text-gray-700 hover:text-yellow-200 hover:bg-gray-300"
          >
            BLOG POSTS
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center px-3 my-10 rounded font-bold text-gray-700 hover:text-yellow-200 hover:bg-gray-300"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center px-3 my-10 rounded font-bold text-gray-700 hover:text-yellow-200 hover:bg-gray-300"
          >
            ABOUT ME!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/anders-holt-knudsen-0924b9175/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/anders2410"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/anders.h.knudsen.3/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
