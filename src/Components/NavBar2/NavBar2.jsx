import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar2.css";
import { Link } from "react-router-dom";

export default function NavBar2() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="MR-navbar">
      <div className="MR-Navbar2-logo">
        <img src="/image/logo.svg" alt="Logo" />
      </div>

      <div className={toggle ? "MR-Navbar2-list open" : "MR-Navbar2-list"}>
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
          <li>
            <CiSearch />
          </li>
        </ul>
      </div>

      <button className="MR-quote-button">GET A QUOTE ➔</button>

      <div className="MR-nav-shape">
        <img src="/image/plane.webp" alt="Plane Shape" />
      </div>

      <div className="MR-toggle-icon" onClick={() => setToggle(!toggle)}>
        <CiSearch className="search-icon" />
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
