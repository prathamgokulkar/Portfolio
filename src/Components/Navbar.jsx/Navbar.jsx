import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-primary shadow-sm text-white">
        <div className="navbar-start">
          <a className="text-secondary font-bold text-xl">DevPortfolio</a>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-2xl">
              <GiHamburgerMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow rounded-box bg-primary w-64 max-w-[90vw] text-white"
            >
              <li className="py-3 px-2">
                <a href="#about">About</a>
              </li>
              <li className="py-3 px-2">
                <a href="#projects">Projects</a>
              </li>
              <li className="py-3 px-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden lg:flex px-1">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
