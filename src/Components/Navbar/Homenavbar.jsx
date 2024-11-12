import React, { useState } from "react";
import "./../Navbar/Homenavbar.css";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Homenavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <nav className="Homenavbar">
      <div className="logo">
        <img src="/image/logo.svg" alt="logo" />
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link className="Link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="Link" to={"/About"}>
              About
            </Link>
          </li>
          <li>Services</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>
            <Link className="Link" to={"/Contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="Homenavbar-icon">
        <div>
          <CiSearch />
        </div>
        <div className="basket">
          <SlBasket />
        </div>
      </div>

      <div className="button-wrapper">
        <button>
          <div>GET A QUOTE</div>{" "}
          <div>
            <FaArrowRightLong />
          </div>
        </button>
      </div>

      <div className="toggle-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>



  );
}
