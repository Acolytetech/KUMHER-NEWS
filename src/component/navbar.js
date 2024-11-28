import React, { useState } from "react";
import { Link } from "react-router-dom"; // Replace with your preferred routing method
import logoblackbg from '../images/kumher news logo.png';
import logologotransparent from '../images/kumher_news_logo-removebg-preview.png';
import { IoIosArrowDown } from "react-icons/io";
import './navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logologotransparent}
            alt="News Logo"
            className="h-10 w-auto pl-5 scale-150  "
          />
          <span className="text-xl font-bold"></span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="text-white block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6`}
        >
          <li>
            <Link to="/" className="hover:text-gray-300  ">
              Home
            </Link>
          </li>
          <li className="relative categorylink">
            <span className="hover:text-gray-300 ">Categories <IoIosArrowDown className="inline" /></span>
            <ul className="categorysublink  right-[-30px] top-6  bg-red-600 text-white px-4 py-2 w-fit" style={{ boxShadow: '0px 0px 10px white', borderRadius: '10px', }} >
              
              <li>
                <Link to="/latestnews" className="hover:text-gray-300  block">
                  Latest
                </Link>
              </li>
              <li>
                <Link to="/accidentnews" className="hover:text-gray-300  block">
                  Accident
                </Link>
              </li>
              <li>
                <Link to="/technologynews" className="hover:text-gray-300  block">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/healthnews" className="hover:text-gray-300  block">
                  Health
                </Link>
              </li>
              <li>
                <Link to="/sportsnews" className="hover:text-gray-300 block">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/educationnews" className="hover:text-gray-300 block">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/businessnews" className="hover:text-gray-300  block">
                  Business
                </Link>
              </li>
              <li>

                <Link to="/entertainmentnews" className="hover:text-gray-300 block">
                  Entertainment
                </Link>
              </li>

            </ul>


          </li>
          <li>
            <Link to="/latestnews" className="hover:text-gray-300 ">
              Latest News
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-gray-300 ">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-gray-300 ">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
