import React, { useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaCog,
  FaEnvelope,
  FaFacebook,
  FaFileAlt,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header themeChange sticky top-0 z-50 flex items-center justify-between p-4 shadow-md">
      {/* Toggle Button for Small and Medium Screens */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex space-x-3 md:hidden">
          <button onClick={toggleSidebar} className="textColor">
            <FaBars size={24} />
          </button>
        </div>

        <div className="logo textColor text-2xl font-bold md:flex">
          Md. Faysal
        </div>
      </div>

      {/* Navigation Menu for Large Screens */}
      <nav className="hidden space-x-6 md:flex">
        <a href="#home" className="textColor">
          Home
        </a>
        <a href="#services" className="textColor">
          Services
        </a>
        <a href="#resume" className="textColor">
          Resume
        </a>
        <a href="#work" className="textColor">
          Work
        </a>
        <a href="#contact" className="textColor">
          Contact
        </a>
      </nav>

      {/* Theme Toggle and Hire Me Button */}
      <div className=" items-center md:flex">
        <ThemeToggle />
        <button className="ml-4 rounded-md bg-green-500 px-4 py-2 text-white">
          Hire me
        </button>
      </div>

      {/* Sidebar for Small and Medium Screens */}
      <div
        className={`fixed inset-y-0 left-0 w-64 transform bg-gradient-to-b from-purple-700 to-indigo-900 text-white shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex h-full flex-col p-6">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="self-end text-gray-400 transition-colors duration-300 hover:text-white"
          >
            <FaTimes size={24} />
          </button>

          {/* Logo */}
          <div className="mb-8 mt-4 text-center">
            <h2 className="text-3xl font-bold text-white">Md. Faysal Ahmed</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 text-lg">
            <a
              href="#home"
              className="flex items-center space-x-3 rounded-md px-4 py-2 transition-all duration-300 hover:bg-indigo-700"
            >
              <FaHome size={20} className="text-yellow-400" />
              <span>Home</span>
            </a>
            <a
              href="#services"
              className="flex items-center space-x-3 rounded-md px-4 py-2 transition-all duration-300 hover:bg-indigo-700"
            >
              <FaCog size={20} className="text-yellow-400" />
              <span>Services</span>
            </a>
            <a
              href="#resume"
              className="flex items-center space-x-3 rounded-md px-4 py-2 transition-all duration-300 hover:bg-indigo-700"
            >
              <FaFileAlt size={20} className="text-yellow-400" />
              <span>Resume</span>
            </a>
            <a
              href="#work"
              className="flex items-center space-x-3 rounded-md px-4 py-2 transition-all duration-300 hover:bg-indigo-700"
            >
              <FaBriefcase size={20} className="text-yellow-400" />
              <span>Work</span>
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-3 rounded-md px-4 py-2 transition-all duration-300 hover:bg-indigo-700"
            >
              <FaEnvelope size={20} className="text-yellow-400" />
              <span>Contact</span>
            </a>
          </nav>

          {/* Social Media Links */}
          <div className="mt-auto flex justify-evenly text-white">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
