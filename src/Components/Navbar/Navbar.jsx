import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    const handleResize = () => {
      document.activeElement?.blur();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar bg-primary shadow-sm text-white flex justify-end px-4">
      {/* Mobile Dropdown */}
      <div className="lg:hidden dropdown dropdown-end">
        <button tabIndex={0} className="btn btn-ghost text-2xl">
          <GiHamburgerMenu />
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow rounded-box bg-primary w-64 text-white font-bold"
        >
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="menu menu-horizontal hidden lg:flex gap-6 font-bold">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:underline underline-offset-4 decoration-2"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:underline underline-offset-4 decoration-2"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:underline underline-offset-4 decoration-2"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
