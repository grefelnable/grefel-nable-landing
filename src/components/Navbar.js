import React, { useState } from "react";
import logo from "../assets/grefel-logo-1.png";

const Navbar = () => {
  // Toggle dropdown menu when user clicks.
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar bg-base-100">
      <div className="w-11/12 mx-auto max-w-6xl flex justify-between">
        <div>
          <img src={logo} alt="grefel's dark logo" className="w-[120px]" />
        </div>
        <div>
          <ul className="hidden md:flex gap-8 tracking-widest menu-horizontal p-0 ">
            <li>
              <a href="#" className="btn-custom">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="btn-custom">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="btn-custom">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="btn-custom">
                Contact
              </a>
            </li>
          </ul>
          {/* dropdown menu for small screen */}
          <div className="dropdown dropdown-end md:hidden">
            <label
              tabIndex={0}
              className="btn btn-outline btn-accent m-1"
              onClick={() => setIsOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`${
                isOpen ? "" : "hidden"
              } dropdown-content menu p-2 shadow-2xl bg-base-100 rounded-box w-52 tracking-widest`}
            >
              <li onClick={() => setIsOpen(false)}>
                <a href="#">Home</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#projects">Projects</a>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
